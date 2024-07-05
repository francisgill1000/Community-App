<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeviceUser\StoreRequest;
use App\Models\DeviceUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DeviceUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DeviceUser::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $device_id, $userCode)
    {
        // return DeviceUser::truncate();

        try {
            $response = Http::timeout(3600)->withoutVerifying()->withHeaders([
                'Content-Type' => 'application/json',
            ])->post(env('SDK_URL') . "/" . "{$device_id}/GetPersonDetail", ["userCode" => $userCode]);

            $res = $response->json();

            $data = $res['data'];

            $base64Image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data['faceImage']));
            $imageName = time() . ".png";
            $publicDirectory = public_path("test");
            if (!file_exists($publicDirectory)) {
                mkdir($publicDirectory, 0777, true);
            }
            file_put_contents($publicDirectory . '/' . $imageName, $base64Image);

            $data['faceImage'] = $imageName;

            unset($data['face']);
            unset($data['fp']);
            unset($data['fpCount']);
            unset($data['isDeleteFace']);

            return DeviceUser::create($data);
        } catch (\Exception $e) {
            return [
                "status" => 102,
                "message" => $e->getMessage(),
            ];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DeviceUser  $deviceUser
     * @return \Illuminate\Http\Response
     */
    public function show(DeviceUser $deviceUser)
    {
        return $deviceUser;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DeviceUser  $deviceUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DeviceUser $deviceUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DeviceUser  $deviceUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeviceUser $deviceUser)
    {
        //
    }
}
