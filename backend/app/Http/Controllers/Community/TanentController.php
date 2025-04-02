<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Controllers\SDKController;
use App\Http\Requests\Community\Tanent\CardRequest;
use App\Http\Requests\Community\Tanent\CardUpdateRequest;
use App\Http\Requests\Community\Tanent\RegisterRequest;
use App\Http\Requests\Community\Tanent\MemberRequest;
use App\Http\Requests\Community\Tanent\MemberUpdateRequest;

use App\Http\Requests\Community\Tanent\StoreRequest;
use App\Http\Requests\Community\Tanent\UpdateRequest;
use App\Http\Requests\Community\Tanent\VehicleRequest;
use App\Jobs\TimezonePhotoUploadJob;
use App\Models\Community\MaidRelationTenant;
use App\Models\Community\Room;
use App\Models\Community\Tanent;
use App\Models\Community\TenantsDocuments;
use App\Models\Community\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class TanentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dropDown()
    {
        return Tanent::where([
            "company_id" => request("company_id"),
            "parent_id" => 0,
        ])
            ->with(["floor", "room","get_last_member"])
            ->withCount(["members", "cards"])

            ->orderBy('full_name', 'asc')
            ->get();
    }

    public function syncTanents()
    {
        // Construct URL with query parameters
        $url = "https://backend.eztime.online/api/get-new-tanents-from-live";
        $queryParams = [
            'readable_count' => request("readable_count"),
            'reset' => request("reset"),
            'insert' => request("insert")
        ];
        $url .= '?' . http_build_query($queryParams);

        // Perform HTTP request
        try {
            $response = Http::withoutVerifying()->get($url);
            $responseData = $response->json();

            // Log successful request
            logger()->info("Sync Tenants request successful.", [
                'url' => $url,
                'response' => $responseData
            ]);

            if (request("insert") === "true") {
                return Tanent::insert($responseData);
            }

            return $responseData;
        } catch (\Exception $e) {
            // Log error if request fails
            logger()->error("Sync Tenants request failed.", [
                'url' => $url,
                'error' => $e->getMessage()
            ]);

            // Optionally, you can re-throw the exception to propagate it further
            throw $e;
        }
    }


    public function getTanentsFromLive()
    {
        if (request("reset") === "true") {
            DB::table("tanent_counts")->update([
                "read_count" => 0
            ]);
        }

        $previousReadCount =  DB::table("tanent_counts")->value("read_count") ?? 0;
        $readableCount =  request("readable_count") ?? 10;

        $upatedReadCount = $previousReadCount + $readableCount;

        // Create or update record in tanent_counts table
        DB::table("tanent_counts")->updateOrInsert(
            ['id' => 1], // Assuming 'id' is the primary key
            ['read_count' => $upatedReadCount] // Data to be inserted or updated
        );

        $fields = [
            "full_name",
            "phone_number",
            "floor_id",
            "room_id",
            "profile_picture",
            "company_id",
            "system_user_id",
            "email",
            "first_name",
            "last_name",
            "whatsapp_number",
            "date_of_birth",
            "nationality",
            "rfid",
            "pin",
            "address",
            "gender",
            "term",
            "room_category_id",
            "room_sub_category_id",
            "age",
            "member_type",
            "parent_id",
        ];

        $records = Tanent::skip($previousReadCount)->take($readableCount)->get($fields)->toArray();

        if (!count($records)) return "No record found";

        return $records;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = Tanent::where([
            "company_id" => request("company_id"),
            // "parent_id" => 0,
        ])

            ->when(request()->filled("system_user_id"), fn ($q) => $q->where("system_user_id", request("system_user_id")))

            ->when(request()->filled("full_name"), fn ($q) => $q->whereRaw('LOWER(full_name) LIKE ?', "%" . strtolower(request("full_name")) . "%"))
            ->when(request()->filled("term"), fn ($q) => $q->whereRaw('LOWER(term) LIKE ?', "%" . strtolower(request("term")) . "%"))
            ->when(request()->filled("member_type"), fn ($q) => $q->where("member_type", request("member_type")))



            ->when($request->filled("floor_number"), function ($q) use ($request) {
                $q->whereHas("floor", function ($qu) use ($request) {
                    $qu->where("floor_number", $request->input("floor_number"));
                });
            })
            ->when($request->filled("room_number"), function ($q) use ($request) {
                $q->whereHas("room", function ($qu) use ($request) {
                    $qu->where("room_number", $request->input("room_number"));
                });
            })

            ->when($request->filled("category"), function ($q) use ($request) {
                $q->whereHas("room.room_category", function ($qu) use ($request) {
                    $qu->where("name", $request->input("category"));
                });
            })

            ->when(request()->filled("start_date") && request()->filled("end_date"), function ($q) {
                $q->whereDate('start_date', '>=', request("start_date"))
                    ->whereDate('end_date', '<=', request("end_date"));
            })

            ->withCount("members")
            ->with(["vehicles", "members", "floor", "room"])
            ->orderBy('id', 'desc')
            ->paginate(request("per_page") ?? 10);

        return $data;
    }


    public function tanentsOnly(Request $request)
    {
        $data = Tanent::where("company_id", request("company_id"),)
            ->whereIn("member_type", ["Primary", "Owner"])
            ->where("isStaying", true)

            ->when(request()->filled("system_user_id"), fn ($q) => $q->where("system_user_id", request("system_user_id")))

            ->when(request()->filled("full_name"), fn ($q) => $q->whereRaw('LOWER(full_name) LIKE ?', "%" . strtolower(request("full_name")) . "%"))
            ->when(request()->filled("term"), fn ($q) => $q->whereRaw('LOWER(term) LIKE ?', "%" . strtolower(request("term")) . "%"))
            ->when(request()->filled("member_type"), fn ($q) => $q->where("member_type", request("member_type")))


            ->when($request->filled("floor_number"), function ($q) use ($request) {
                $q->whereHas("floor", function ($qu) use ($request) {
                    $qu->where("floor_number", $request->input("floor_number"));
                });
            })
            ->when($request->filled("room_number"), function ($q) use ($request) {
                $q->whereHas("room", function ($qu) use ($request) {
                    $qu->where("room_number", $request->input("room_number"));
                });
            })

            ->when($request->filled("category"), function ($q) use ($request) {
                $q->whereHas("room.room_category", function ($qu) use ($request) {
                    $qu->where("name", $request->input("category"));
                });
            })

            ->when(request()->filled("start_date") && request()->filled("end_date"), function ($q) {
                $q->whereDate('start_date', '>=', request("start_date"))
                    ->whereDate('end_date', '<=', request("end_date"));
            })

            ->withCount(["members_only", "cards"])
            ->with(["vehicles", "members", "members_only", "cards", "floor", "room"])
            ->orderBy('id', 'desc')
            ->paginate(request("per_page") ?? 10);

        return $data;
    }

    public function ownersOnly(Request $request)
    {
        $data = Tanent::where([
            "company_id" => request("company_id"),
            "member_type" => "Owner",
        ])

            ->when(request()->filled("system_user_id"), fn ($q) => $q->where("system_user_id", request("system_user_id")))
            ->when(request()->filled("full_name"), fn ($q) => $q->whereRaw('LOWER(full_name) LIKE ?', "%" . strtolower(request("full_name")) . "%"))
            ->when(request()->filled("term"), fn ($q) => $q->whereRaw('LOWER(term) LIKE ?', "%" . strtolower(request("term")) . "%"))
            ->when(request()->filled("member_type"), fn ($q) => $q->where("member_type", request("member_type")))



            ->when($request->filled("floor_number"), function ($q) use ($request) {
                $q->whereHas("floor", function ($qu) use ($request) {
                    $qu->where("floor_number", $request->input("floor_number"));
                });
            })
            ->when($request->filled("room_number"), function ($q) use ($request) {
                $q->whereHas("room", function ($qu) use ($request) {
                    $qu->where("room_number", $request->input("room_number"));
                });
            })

            ->when($request->filled("category"), function ($q) use ($request) {
                $q->whereHas("room.room_category", function ($qu) use ($request) {
                    $qu->where("name", $request->input("category"));
                });
            })

            ->when(request()->filled("start_date") && request()->filled("end_date"), function ($q) {
                $q->whereDate('start_date', '>=', request("start_date"))
                    ->whereDate('end_date', '<=', request("end_date"));
            })

            ->withCount(["members_only", "cards"])
            ->with(["vehicles", "members", "members_only", "cards", "floor", "room"])
            ->orderBy('id', 'desc')
            ->paginate(request("per_page") ?? 10);

        return $data;
    }

    public function recordsCsv()
    {
        $data = Tanent::where([
            "company_id" => request("company_id"),
            // "parent_id" => 0,
        ])
            ->select("full_name", "phone_number", "floor_id", "room_id", "nationality", "gender", "term", "age", "member_type", "parent_id")
            ->when(request()->filled("member_type"), fn ($q) => $q->where("member_type", request("member_type")))
            ->withCount("members")
            ->with(["floor:id,floor_number", "room:id,room_number", "parent_member:id,full_name"])
            ->orderBy('id', 'desc')
            ->get();

        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="records.csv"');

        $output = fopen('php://output', 'w');

        fputcsv($output, [
            "Full Name",
            "Phone Number",
            "Floor Number",
            "Room Number",
            "Nationality",
            "Gender",
            "Term",
            "Age",
            "Member Type",
            "Parent Member"
        ]);

        foreach ($data as $value) {
            fputcsv($output, [
                $value->full_name,
                $value->phone_number,
                $value->floor->floor_number ?? "---",
                $value->room->room_number ?? "---",
                $value->nationality,
                $value->gender,
                $value->term,
                $value->age,
                $value->member_type,
                $value->parent_member->full_name ?? "---",
            ]);
        }

        fclose($output);

        return "done";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function validateTanent(StoreRequest $request)
    {
        try {
            $exists = Tanent::where("company_id", $request->company_id)->where('phone_number', $request->phone_number)->exists();

            // Check if the Tanent number already exists
            if ($exists) {
                return $this->response('Tanent already exists.', null, true);
            }

            return $this->response('Tanent Successfully created.', $request->validated(), true);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function validateVehicle(VehicleRequest $request)
    {
        try {
            return $this->response('Vehicle Successfully created.', $request->validated(), true);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function store(StoreRequest $request)
    {

        try {

            $data = $request->validated();

            $data["full_name"] = "{$data["first_name"]} {$data["last_name"]}";

            $room_number = $request->room_number;

            $first = Tanent::where("room_id", $request->room_id)->first();

            $ParentTanentCountIfExist = 0;

            $countForCardsAndMembers = 1;

            if ($first) {
                $ParentTanentCountIfExist = Tanent::where("id", $first->id)->count();
                $countForCardsAndMembers = Tanent::where("parent_id", $first->id)->count() + 1;
            }

            $totalCount = $ParentTanentCountIfExist + $countForCardsAndMembers;

            $data["system_user_id"] = "{$room_number}{$totalCount}";


            if ($request->filled("profile_picture")) {
                $data['profile_picture'] = $this->processImage("community/profile_picture");
            }

            if ($data["member_type"] == "Primary") {
                $data["isStaying"] = 1;
            }


            $record = Tanent::create($data);

            if ($record->id && $request->room_id) {
                Room::where("id", $request->room_id)->update(["tenant_id" => $record->id]);
            }

            if ($record) {
                return $this->response('Tanent Successfully created.', $record, true);
            } else {
                return $this->response('Tanent cannot create.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function register(RegisterRequest $request)
    {
        try {

            $data = $request->validated();

            $data['profile_picture'] = $this->processImage("community/profile_picture");

            // if (isset($request->profile_picture)) {
            //     $file = $request->file('profile_picture');
            //     $ext = $file->getClientOriginalExtension();
            //     $fileName = time() . '.' . $ext;
            //     $request->file('profile_picture')->move(public_path('/community/profile_picture'), $fileName);
            //     $data['profile_picture'] = $fileName;
            // }

            $data["full_name"] = "{$data["first_name"]} {$data["last_name"]}";

            $tanent = Tanent::where('room_category_id', $request->room_category_id)
                ->where('room_sub_category_id', $request->room_sub_category_id)
                ->where('floor_id', $request->floor_id)
                ->where('room_id', $request->room_id)
                ->where('company_id', $request->company_id);

            if ($request->member_type !== 'Primary') {


                $first = $tanent->first();

                if (!$first) {
                    return $this->response('No Primary Tanent found.', null, false);
                }

                $count = $tanent->where("parent_id", $first->id)->count();
                $data["parent_id"] = $first->id;
                $data["system_user_id"] = $first->system_user_id + $count + 1;
            } else {
                $room_number = $request->room_number;

                $room_category_id = $request->room_category_id;

                $tanentId = $tanent->count() + 1;


                $data["system_user_id"] = "{$room_category_id}{$room_number}{$tanentId}";
            }
            // return $data;
            $record = Tanent::create($data);

            if ($record->id && $request->room_number && $request->room_category_id) {
                Room::where("room_number", $request->room_number)
                    ->where("room_category_id", $request->room_category_id)
                    ->update(["tenant_id" => $record->id]);
            }

            if ($record) {
                return $this->response('Tanent Successfully created.', $record, true);
            } else {
                return $this->response('Tanent cannot create.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function addMember(MemberRequest $request)
    {
        try {

            $data = $request->validated();

            if ($request->filled("profile_picture")) {
                $data['profile_picture'] = $this->processImage("community/profile_picture");
            }

            $data["full_name"] = "{$data["first_name"]} {$data["last_name"]}";
            $data["member_type"] = "Family Member";

            $record = Tanent::create($data);

            if ($record) {
                return $this->response('Tanent Successfully created.', $record, true);
            } else {
                return $this->response('Tanent cannot create.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function addCard(CardRequest $request)
    {
        try {

            $record = Tanent::create($request->validated());

            if ($record) {
                return $this->response('Card Successfully created.', $record, true);
            } else {
                return $this->response('Card cannot create.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function deleteCard(Request $request)
    {
        $preparedJson = [
            "userCodeArray" => [$request->UserID],
        ];

        $url = env('SDK_URL') . "/" . $request->DeviceID . "/DeletePerson";

        $response = Http::timeout(3000)->withoutVerifying()->post($url, $preparedJson);

        $message = $response["status"] == 200 ? "Deleted Successfully" : "Cannot delete";

        return $this->response($message, null, $response["status"]);
    }



    public function updateCard(CardUpdateRequest $request, $id)
    {
        try {

            $record = Tanent::where("id", $id)->update($request->validated());

            if ($record) {
                return $this->response('Card Successfully updated.', $record, true);
            } else {
                return $this->response('Card cannot update.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function assignTanentstoMaid(Request $request, $id)
    {
        $arr = [];

        foreach ($request->parent_ids as $p_id) {
            $arr[] = [
                "maid_id" => $id,
                "tanent_id" => $p_id,

            ];
        }

        try {

            MaidRelationTenant::where("maid_id", $id)->delete();

            $record = MaidRelationTenant::insert($arr);

            if ($record) {
                return $this->response('Maid has been assigned.', $record, true);
            } else {
                return $this->response('Maid not assigned.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getAssociatedTanentIds($id)
    {
        return MaidRelationTenant::where("maid_id", $id)->pluck('tanent_id')->toArray();
    }




    public function updateMember(MemberUpdateRequest $request, $id)
    {
        try {

            $data = $request->validated();

            if ($data["profile_picture"]) {
                $data['profile_picture'] = $this->processImage("community/profile_picture");
            } else {
                unset($data["profile_picture"]);
            }

            $data["full_name"] = "{$data["first_name"]} {$data["last_name"]}";

            $record = Tanent::where("id", $id)->update($data);

            if ($record) {
                return $this->response('Member Successfully updated.', $record, true);
            } else {
                return $this->response('Member cannot update.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }


    public function storeVehicles(Request $request)
    {
        return Vehicle::insert($request->vehicles);
    }


    public function storeMultipleVehicles(Request $request, $id)
    {
        $model = Vehicle::query();
        $model->where("tanent_id", $id);
        $model->delete("tanent");
        return $model->insert($request->vehicles);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tanent  $Tanent
     * @return \Illuminate\Http\Response
     */

    public function validateUpdateTanent(UpdateRequest $request, $id)
    {
        $Tanent = Tanent::where("id", $id)->first();

        $phone_number = $request->phone_number;

        if ($Tanent->phone_number != $phone_number) {
            $exists = Tanent::where("company_id", $request->company_id)->where('phone_number', $phone_number)->exists();

            // Check if the Tanent number already exists
            if ($exists) {
                return $this->response('Tanent already exists.', null, true);
            }
        }

        return $this->response('Tanent successfully updated.', null, true);
    }


    public function tanentUpdate(UpdateRequest $request, $id)
    {
        $Tanent = Tanent::where("id", $id)->first();

        $phone_number = $request->phone_number;

        if ($Tanent->phone_number != $phone_number) {
            $exists = Tanent::where("company_id", $request->company_id)->where('phone_number', $phone_number)->exists();

            // Check if the Tanent number already exists
            if ($exists) {
                return $this->response('Tanent already exists.', null, true);
            }
        }

        try {

            $data = $request->validated();

            $data["full_name"] = "{$data["first_name"]} {$data["last_name"]}";

            if ($request->filled("profile_picture")) {
                $data['profile_picture'] = $this->processImage("community/profile_picture");
            }


            $documents = [
                'passport_doc',
                'id_doc',
                'contract_doc',
                'ejari_doc',
                'license_doc',
                'others_doc'
            ];

            foreach ($documents as $document) {
                if ($request->hasFile($document)) {
                    $data[$document] = Tanent::ProcessDocument($request->file($document), "/community/$document");
                }
            }

            $record = $Tanent->update($data);



            if ($request->room_id) {
                Room::where("id", $request->room_id)
                    ->where("company_id", $request->company_id)
                    ->update(["tenant_id" => $id]);
            }

            return $this->response('Tanent successfully updated.', $record, true);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tanent  $Tanent
     * @return \Illuminate\Http\Response
     */

    public function destroy(Tanent $Tanent)
    {

        try {
            if ($Tanent->delete() && Tanent::where("parent_id", $Tanent->id)->delete()) {

                return $this->response('Tanent successfully deleted.', null, true);
            } else {
                return $this->response('Tanent cannot delete.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function deleteMember($id)
    {
        try {
            if (Tanent::find($id)->delete()) {
                return $this->response('Member successfully deleted.', null, true);
            } else {
                return $this->response('Member cannot delete.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getMaids()
    {
        return Tanent::where("company_id", request("company_id"))->where("member_type", "Maid")->with("tanent_for_maid")->orderBy('id', 'desc')->paginate(request("per_page") ?? 10);
    }

    public function getSingleMaid($id)
    {
        // Retrieve the tenant IDs associated with the maid
        $tenantIds = MaidRelationTenant::where('maid_id', $id)->pluck('tanent_id')->toArray();

        // Retrieve the maid with its associated tenant
        $maid = Tanent::where('id', $id)
            ->where('member_type', 'Maid')
            ->first();

        if (!$maid) {
            return null; // Return null if the maid is not found
        }

        // Retrieve the associated tenants
        $associatedTenants = Tanent::whereIn('id', $tenantIds)->get();

        // Assign associated tenants to the maid object
        $maid->associatedTenants = $associatedTenants;

        return $maid;
    }


    public function getMemberTypes()
    {
        return [
            'Owner',
            'Primary',
            'Family Member',
            'Relative',
            'Maid',
            'Visitor',
        ];
    }

    public function clean()
    {
        Tanent::truncate();
        return 0;
    }

    public function getDocumentsList(TenantsDocuments $DocumentInfo, $id)
    {
        return $DocumentInfo->where('tenant_id', $id)->get();
    }
    public function downloadDocuments(Request $request, $employee_id, $file_name)
    {
        // Define the path to the file in the public folder
        $filePath = public_path("tenant_documents/" . $employee_id) .  '/' . $file_name;

        // Check if the file exists
        if (file_exists($filePath)) {
            // Create a response to download the file
            return response()->download($filePath, $file_name);
        } else {
            // Return a 404 Not Found response if the file doesn't exist
            abort(404);
        }
    }
    public function deleteDocument($id, $tenant_id, $file_name)
    {



        $record = TenantsDocuments::find($id);

        if ($record->delete()) {
            if (file_exists(public_path('tenant_documents/' . $tenant_id . "/") . "" . $file_name)) {
                try {


                    unlink(public_path('tenant_documents/' . $tenant_id . "/") . "" . $file_name);
                } catch (\Exception $e) {
                }
            }
            return response()->json([
                "status" => true,
                "message" => "Record has been successfully deleted",
                "record" => null,
            ]);
        } else {
            return response()->json([
                "status" => false,
                "message" => "Record cannot delete",
                "record" => null,
            ]);
        }
    }
    public function TenantsDocumentsStore(Request $request)
    {
        // $this->cleanRecord($request->employee_id);
        $arr = [];
        foreach ($request->items as $item) {
            $arr[] = [
                "title" => $item["title"],
                "attachment" => $this->saveFile($item["file"], $request->tenant_id),
                "tenant_id" => $request->tenant_id,
                "company_id" => $request->company_id,
                "date_time" => date('Y-m-d H:i:s'),
                "branch_id" => 0,
            ];
        }

        try {

            return response()->json([
                "status" => true,
                "message" => "Record has been successfully added",
                "record" => TenantsDocuments::insert($arr),
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => true,
                "message" => $th,
                "record" => null,
            ]);
        }
    }
    public function saveFile($file, $id)
    {
        $filename = $file->getClientOriginalName();
        $file->move(public_path('tenant_documents/' . $id . "/"), $filename);
        return $filename;
    }
    public function TenantsDocumentsUpdate(Request $request)
    {


        $arr = [];

        $document_id = $request->items[1]["document_id"];
        if ($document_id > 0) {
            if (isset($request->items[0]["file"])) {

                $arr  = [
                    "title" => $request->items[0]["title"],
                    "attachment" => $this->saveFile($request->items[0]["file"], $request->tenant_id),

                    "date_time" => date('Y-m-d H:i:s'),
                    "branch_id" => 0,
                ];
            } else {

                $arr  = [
                    "title" => $request->items[0]["title"],
                    "date_time" => date('Y-m-d H:i:s'),
                    "branch_id" => 0,
                ];
            }


            TenantsDocuments::where("id", $document_id)->update($arr);
        }

        try {

            return response()->json([
                "status" => true,
                "message" => "Record has been successfully added",
                "record" => [],
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => true,
                "message" => $th,
                "record" => null,
            ]);
        }
    }
}
