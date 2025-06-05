<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Controllers\SDKController;
use App\Http\Requests\Community\TanentTimezoneMapping\StoreRequest;
use App\Models\Community\Tanent;
use App\Models\Community\TanentTimezoneMapping;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TanentTimezoneMappingController extends Controller
{
    public function index()
    {
        return Tanent::with(["devices", "floor", "room", "timezone", "mappings"])
            // ->whereIn("id", ["413"])
            ->whereHas('mappings')
            ->orderBy('id', 'desc')
            ->paginate(request("per_page") ?? 10);
    }

    public function store(StoreRequest $request)
    {

        if (!count($request->tanents)) {
            return $this->response('No Tenant found.', null, false);
        } else if (!count($request->device_ids)) {
            return $this->response('No Device found.', null, false);
        }

        $appJsonPayload = $this->prepareAPPJson($request);

        if (!count($appJsonPayload)) {
            return $this->response('No record found.', null, false);
        }

        $tanent_ids = array_column($appJsonPayload, "tanent_id");

        try {
            $model = TanentTimezoneMapping::query();
            $model->whereIn("tanent_id", $tanent_ids);
            $model->whereIn("device_id", $request->device_ids);
            $model->delete();
            $model->insert($appJsonPayload);
            return $this->response('Tenant(s) has been mapped.', $appJsonPayload, true);
        } catch (\Throwable $th) {
            return $this->response('Tenant(s) cannot be mapped.', $th->getMessage(), false);
        }
    }

    public function prepareAPPJson($request)
    {
        $appJsonPayload = [];

        foreach ($request->tanents as $tenant) {

            foreach ($request->device_ids as $device_id) {
                $appJsonPayload[] = [
                    'company_id' => $request->company_id,
                    'floor_id' => $request->floor_id,
                    'room_id' => $request->room_id,
                    'timezone_id' => $request->timezone_id,
                    'tanent_id' => $tenant['id'],
                    'device_id' => $device_id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        return $appJsonPayload;
    }

    public function show($id)
    {
        return TanentTimezoneMapping::where("id", $id)
            ->with(["floor", "tanent", "device"])
            ->first();
    }

    public function destroy($id)
    {
        try {
            TanentTimezoneMapping::where("id", $id)->delete();
            return $this->response('Mapping has been deleted.', null, true);
        } catch (\Throwable $th) {
            return $this->response('Tenant cannot be mapped.', $th->getMessage(), false);
        }
    }
}
