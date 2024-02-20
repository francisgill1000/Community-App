<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\Tanent\RegisterRequest;
use App\Http\Requests\Community\Tanent\MemberRequest;
use App\Http\Requests\Community\Tanent\MemberUpdateRequest;

use App\Http\Requests\Community\Tanent\StoreRequest;
use App\Http\Requests\Community\Tanent\UpdateRequest;
use App\Http\Requests\Community\Tanent\VehicleRequest;

use App\Models\Community\Tanent;
use App\Models\Community\Vehicle;
use Illuminate\Http\Request;

class TanentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dropDown()
    {
        return Tanent::where("company_id", request("company_id"))->orderBy('full_name', 'asc')->get(["id", "full_name"]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tanent::where("company_id", request("company_id"))->where("parent_id", 0)->withCount("members")->with(["vehicles", "members", "floor", "room"])->orderBy('id', 'desc')->paginate(request("per_page") ?? 10);
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
            $exists = Tanent::where("company_id", $request->company_id)->where('phone_number', $request->phone_number)->exists();

            // Check if the Tanent number already exists
            if ($exists) {
                return $this->response('Tanent already exists.', null, true);
            }

            $data = $request->validated();

            $data["full_name"] = "{$data["first_name"]} {$data["last_name"]}";


            $room_number = $request->room_number;
            $room_category_id = $request->room_category_id;
            $tanentId = Tanent::max('id') + 1;
            $data["system_user_id"] = "{$room_category_id}{$room_number}{$tanentId}";

            if (isset($request->profile_picture)) {
                $file = $request->file('profile_picture');
                $ext = $file->getClientOriginalExtension();
                $fileName = time() . '.' . $ext;
                $request->file('profile_picture')->move(public_path('/community/profile_picture'), $fileName);
                $data['profile_picture'] = $fileName;
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
            $model = new Tanent;

            $record = $model->setConnection("pgsql")->create($data);

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

            if (isset($request->profile_picture)) {
                $file = $request->file('profile_picture');
                $ext = $file->getClientOriginalExtension();
                $fileName = time() . '.' . $ext;
                $request->file('profile_picture')->move(public_path('/community/profile_picture'), $fileName);
                $data['profile_picture'] = $fileName;
            }

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

            if (isset($request->profile_picture)) {
                $file = $request->file('profile_picture');
                $ext = $file->getClientOriginalExtension();
                $fileName = time() . '.' . $ext;
                $request->file('profile_picture')->move(public_path('/community/profile_picture'), $fileName);
                $data['profile_picture'] = $fileName;
            }

            $data["full_name"] = "{$data["first_name"]} {$data["last_name"]}";

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

    public function updateMember(MemberUpdateRequest $request, $id)
    {
        try {

            $data = $request->validated();

            if (isset($request->profile_picture)) {
                $file = $request->file('profile_picture');
                $ext = $file->getClientOriginalExtension();
                $fileName = time() . '.' . $ext;
                $request->file('profile_picture')->move(public_path('/community/profile_picture'), $fileName);
                $data['profile_picture'] = $fileName;
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

            if (isset($request->profile_picture)) {
                $file = $request->file('profile_picture');
                $ext = $file->getClientOriginalExtension();
                $fileName = time() . '.' . $ext;
                $request->file('profile_picture')->move(public_path('/community/profile_picture'), $fileName);
                $data['profile_picture'] = $fileName;
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
            if ($Tanent->delete()) {
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
        return Tanent::where("company_id", request("company_id"))->where("member_type", "Maid")->with("tanent")->orderBy('id', 'desc')->paginate(request("per_page") ?? 10);
    }

    public function getMemberTypes()
    {
        return [
            'Primary',
            'Family Member',
            'Relative',
            'Maid',
            'Visitor',
        ];
    }
}
