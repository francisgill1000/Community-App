<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\Parking\AllocateParkingRequest;
use App\Http\Requests\Community\Parking\AllocateUpdateParkingRequest;
use App\Models\Community\Parking;
use App\Models\Community\Vehicle;
use Illuminate\Http\Request;

class ParkingAllocationController extends Controller
{
    public function index()
    {
        // return Parking::get();
        return Vehicle::orderBy('id', 'desc')->with(["parking", "tanent"])->paginate(request("per_page") ?? 10);
    }

    public function store(AllocateParkingRequest $request)
    {
        try {

            $record = Vehicle::create($request->validated());

            if ($record) {
                return $this->response('Parking allocated.', $record, true);
            } else {
                return $this->response('Parking cannot allocate.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function update(AllocateUpdateParkingRequest $request,$id)
    {
        try {

            $record = Vehicle::where("id",$id)->update($request->validated());

            if ($record) {
                return $this->response('Parking allocation has been updated.', $record, true);
            } else {
                return $this->response('Parking allocation cannot update.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function destroy($id)
    {
        try {

            $record = Vehicle::where("id",$id)->delete();

            if ($record) {
                return $this->response('Parking allocation has been deleted.', $record, true);
            } else {
                return $this->response('Parking allocation cannot delete.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
