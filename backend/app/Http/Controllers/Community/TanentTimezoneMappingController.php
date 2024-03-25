<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Controllers\SDKController;
use App\Http\Requests\Community\TanentTimezoneMapping\StoreRequest;
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        return $appJsonPayload = $this->prepareAPPJson($request);


        $sdkJsonPayload = $this->prepareSDKJson($request);

        return $this->processSDKTimezoneCommand(env('SDK_URL') . "/Person/AddRange", $sdkJsonPayload);



        foreach ($SDKresponses as $SDKresponse) {


            $company_id = $request->company_id;
            $floor_id = $request->floor_id;
            $room_id = $request->room_id;
            $timezone_id = $request->timezone_id;
            $tanents = $request->tanents;
            $device_ids = $request->device_ids;

            if ($SDKresponse["state"] !== true) {
            }
        }

        return $appJsonPayload;


        try {





            $record = TanentTimezoneMapping::insert($appJsonPayload);

            if ($record) {

                $record['recordResponse'] = $record;

                return $this->response('Tenant has been mapped.', $record, true);
            } else {
                return $this->response('Tenant cannot be mapped .', null, false);
            }
        } catch (\Throwable $th) {
            return $this->response('Tenant cannot be mapped.', $th->getMessage(), false);
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
                    'tanent_id' => $tenant['system_user_id'],
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
