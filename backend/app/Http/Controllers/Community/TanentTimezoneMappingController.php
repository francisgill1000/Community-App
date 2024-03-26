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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tanent::with(["devices", "floor", "room", "timezone"])
            // ->whereIn("id", ["413"])
            ->whereHas('mappings')
            ->orderBy('id', 'desc')
            ->paginate(request("per_page") ?? 10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {

        if (!count($request->tanents)) {
            return $this->response('No Tenant found.', null, false);
        } else if (!count($request->device_ids)) {
            return $this->response('No Device found.', null, false);
        }

        $appJsonPayload = $this->prepareAPPJson($request);

        $sdkJsonPayload = $this->prepareSDKJson($request);

        $SDKresponses = $this->processSDKTimezoneCommand(env('SDK_URL') . "/Person/AddRange", $sdkJsonPayload);

        $payload = [];

        if ($SDKresponses["status"] == 200) {
            foreach ($SDKresponses["data"] as $SDKresponse) {

                if ($SDKresponse["state"] == true) {
                    $filteredArray = array_filter($appJsonPayload, fn ($item) => $item["device_id"] == $SDKresponse["sn"]);
                    $array_values = array_values($filteredArray);
                    $payload = array_merge($payload, $array_values);
                }
            }
        }


        if (!count($payload)) {
            return $this->response('No record found.', null, false);
        }

        $tanent_ids = array_column($payload, "tanent_id");
        $device_ids = array_column($payload, "device_id");

        try {
            $model = TanentTimezoneMapping::query();
            $model->whereIn("tanent_id", $tanent_ids);
            $model->whereIn("device_id", $device_ids);
            $model->delete();
            $model->insert($payload);
            return $this->response('Tenant(s) has been mapped.', $payload, true);
        } catch (\Throwable $th) {
            return $this->response('Tenant(s) cannot be mapped.', $th->getMessage(), false);
        }
    }

    public function processSDKTimezoneCommand($url, $data)
    {
        try {
            return Http::timeout(3600)->withoutVerifying()->withHeaders([
                'Content-Type' => 'application/json',
            ])->post($url, $data)->json();
        } catch (\Exception $e) {
            return [
                "status" => 102,
                "message" => $e->getMessage(),
            ];
            // You can log the error or perform any other necessary actions here
        }
    }

    public function prepareSDKJson($request)
    {
        $sdkJsonPayload = [
            'snList' => $request->device_ids,
            'personList' => []
        ];

        foreach ($request->tanents as $tenant) {

            $sdkJson = [
                'name' => $tenant['full_name'],
                'userCode' => $tenant['system_user_id'],
                'timeGroup' => $request->timezone_id,
            ];

            $sdkJsonPayload['personList'][] = $sdkJson;
        }

        return $sdkJsonPayload;
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return TanentTimezoneMapping::where("id", $id)
            ->with(["floor", "tanent", "device"])
            ->first();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            return TanentTimezoneMapping::where("id", $id)->delete();
            return $this->response('Tenant has been mapped.', null, true);
        } catch (\Throwable $th) {
            return $this->response('Tenant cannot be mapped.', $th->getMessage(), false);
        }
    }
}
