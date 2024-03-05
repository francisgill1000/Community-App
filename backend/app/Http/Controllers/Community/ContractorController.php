<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Requests\Community\Contractor\StoreRequest;
use App\Http\Requests\Community\Contractor\UpdateRequest;
use App\Models\Community\Contractor;
use App\Models\Community\ContractorDocuments;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ContractorController extends Controller
{
    public function dropdownList()
    {
        return Contractor::orderBy("branch_name", "asc")->get(["id", "branch_name as name"]);
    }
    public function branchesList(Request $request)
    {
        $model = Contractor::where('company_id', $request->company_id);

        $model =  $model->when($request->filled("branch_id"), function ($q) use ($request) {
            return $q->where("id", $request->branch_id);
        });

        $model =  $model->when($request->filled("filter_branch_id"), function ($q) use ($request) {
            return $q->where("id", $request->filter_branch_id);
        });
        return $model->orderBy('branch_name', 'asc')->get();
    }
    public function store(Contractor $model, StoreRequest $request)
    {
        $data = $request->validated();
        $data["created_date"] = date("Y-m-d");
        $data["branch_code"] = strtoupper(substr($data["branch_name"], 0, 3)) . Contractor::where("company_id", $request->company_id)->orderBy("id", "desc")->value("id") ?? 0;


        if (isset($request->logo)) {
            $file = $request->file('logo');
            $ext = $file->getClientOriginalExtension();
            $fileName = time() . '.' . $ext;
            $request->file('logo')->move(public_path('/upload'), $fileName);
            $data['logo'] = $fileName;
        }

        try {
            $record = $model->create($data);

            if ($record) {
                return $this->response('Branch successfully added.', null, true);
            } else {
                return $this->response('Branch cannot add.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function update(Contractor $model, UpdateRequest $request, $id)
    {
        $data = $request->validated();

        if (isset($request->logo)) {
            $file = $request->file('logo');
            $ext = $file->getClientOriginalExtension();
            $fileName = time() . '.' . $ext;
            $request->file('logo')->move(public_path('/upload'), $fileName);
            $data['logo'] = $fileName;
        }

        try {
            $record = $model->where("id", $id)->update($data);

            if ($record) {
                return $this->response('Branch successfully added.', null, true);
            } else {
                return $this->response('Branch cannot add.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function index(Request $request)
    {


        $model = Contractor::query();

        $model->where('company_id', $request->company_id);

        $model->when($request->filled("branch_id"), function ($q) use ($request) {
            return $q->where("id", $request->branch_id);
        });

        $model->when($request->filled("filter_branch_id"), function ($q) use ($request) {
            return $q->where("id", $request->filter_branch_id);
        });

        // $model->when($request->filled("location_address"), function ($q) use ($request) {
        //     return $q->where("location_address", "ILIKE", $request->location_address);
        // });

        $model->when($request->filled("location_address"), function ($q) use ($request) {

            $q->where(function ($q) use ($request) {
                $q->where("location", "ILIKE", $request->location_address . '%');
                $q->orWhere("address", "ILIKE", $request->location_address . '%');
            });
        });
        $model->when($request->filled("manager_mobile"), function ($q) use ($request) {

            // $q->whereHas('user.employee', fn (Builder $query) => $query->where('first_name', "ILIKE",   $request->manager_mobile));
            // $q->orwhereHas('user.employee', fn (Builder $query) => $query->where('phone_number', "ILIKE",   $request->manager_mobile));
            $q->where(function ($q) use ($request) {
                $q->whereHas('user.employee', fn (Builder $query) => $query->where('first_name', "ILIKE",   $request->manager_mobile . '%'));
                $q->orwhereHas('user.employee', fn (Builder $query) => $query->where('phone_number', "ILIKE",   $request->manager_mobile . '%'));
            });
        });


        $model->with("user.employee")->withCount(["employees", "devices", "departments"]);

        return $model->orderBy("id", "desc")->paginate($request->per_page ?? 100);
    }

    public function destroy($id)
    {
        try {
            $record = Contractor::find($id);

            if (!$record) {
                return response()->json(['message' => 'No such record found.'], 404);
            }

            DB::transaction(function () use ($record) {
                $user_id = $record->user_id;
                $record->delete();
                User::where('id', $user_id)->delete();
            });

            return response()->json(['message' => 'Branch successfully deleted.', 'status' => true], 200);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function getDocumentsList(ContractorDocuments $DocumentInfo, $id)
    {
        return $DocumentInfo->where('contractor_id', $id)->get();
    }
    public function downloadDocuments(Request $request, $employee_id, $file_name)
    {
        // Define the path to the file in the public folder
        $filePath = public_path("contractor_documents/" . $employee_id) .  '/' . $file_name;

        // Check if the file exists
        if (file_exists($filePath)) {
            // Create a response to download the file
            return response()->download($filePath, $file_name);
        } else {
            // Return a 404 Not Found response if the file doesn't exist
            abort(404);
        }
    }
    public function deleteDocument($id, $file_name)
    {




        $record = ContractorDocuments::find($id);

        if ($record->delete()) {
            if (file_exists(public_path('contractor_documents/' . $id . "/") . "" . $file_name)) {
                try {


                    unlink(public_path('contractor_documents/' . $id . "/") . "" . $file_name);
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
    public function contractorDocumentsStore(Request $request)
    {
        // $this->cleanRecord($request->employee_id);
        $arr = [];
        foreach ($request->items as $item) {
            $arr[] = [
                "title" => $item["title"],
                "attachment" => $this->saveFile($item["file"], $request->contractor_id),
                "contractor_id" => $request->contractor_id,
                "company_id" => $request->company_id,
                "date_time" => date('Y-m-d H:i:s'),
                "branch_id" => 0,
            ];
        }

        try {

            return response()->json([
                "status" => true,
                "message" => "Record has been successfully added",
                "record" => ContractorDocuments::insert($arr),
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
        $file->move(public_path('contractor_documents/' . $id . "/"), $filename);
        return $filename;
    }
}
