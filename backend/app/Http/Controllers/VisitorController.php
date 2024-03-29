<?php

namespace App\Http\Controllers;

use App\Http\Requests\Visitor\Register;
use App\Http\Requests\Visitor\Store;
use App\Http\Requests\Visitor\Update;
use App\Http\Requests\Visitor\UploadVisitor;
use App\Http\Requests\Visitor\VisitorUpdate;
use App\Jobs\ProcessSDKCommand;
use App\Models\Company;
use App\Models\Device;
use App\Models\Employee;
use App\Models\HostCompany;
use App\Models\Notification;
use App\Models\Visitor;
use App\Models\Zone;
use App\Models\ZoneDevices;
use Carbon\Carbon;
use DateTime;
use DateTimeZone;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class VisitorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getVisitorStatusList()
    {
        return (new  Visitor)->getVisitorStatusIds();
    }
    public function visitors_with_type(Request $request)
    {
        $model = Visitor::query();

        $model->where("company_id", $request->input("company_id"));

        $model->when($request->filled('branch_id'), function ($q) use ($request) {
            $q->Where('branch_id',   $request->branch_id);
        });

        return $model->get();
    }
    public function timeTOSeconds($str_time)
    {
        // $str_time = "2:50";

        // sscanf($str_time, "%d:%d:%d", $hours, $minutes, $seconds);

        // return  $time_seconds = isset($seconds) ? $hours * 3600 + $minutes * 60 + $seconds : $hours * 60 + $minutes;

        return  $seconds = strtotime($str_time) - strtotime('TODAY');
    }

    public function index(Request $request)
    {
        $model = (new Visitor)->filters($request);

        $model->where("visitor_type", "delivery");

        $model->with(["branch", "zone", "zone.devices",  "host", "timezone:id,timezone_id,timezone_name", "purpose:id,name"]);

        return $model->paginate($request->input("per_page", 100));
    }


    public function visitorList(Request $request)
    {
        return Visitor::orderBy("id", "desc")
            ->where("visitor_type", $request->visitor_type ?? "visitor")
            ->with(["card", "tanent", "branch", "zone", "zone.devices",  "host", "timezone:id,timezone_id,timezone_name", "purpose:id,name"])
            ->paginate($request->input("per_page", 100));
    }


    public function search(Request $request)
    {
        $model = (new Visitor)->filters($request);

        $model->where("phone_number", $request->searchInput);

        $model->with(["branch", "zone", "host", "timezone:id,timezone_id,timezone_name", "purpose:id,name"]);

        return $model->first() ?? null;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $data = $request->validated();

        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $ext = $file->getClientOriginalExtension();
            $fileName = time() . '.' . $ext;
            $request->logo->move(public_path('media/visitor/logo/'), $fileName);
            $data['logo'] = $fileName;
        }

        try {

            $visitor = Visitor::create($data);

            if (!$visitor) {
                return $this->response('Visitor cannot add.', null, false);
            }

            // $preparedJson = $this->prepareJsonForSDK($data);

            // // $this->SDKCommand(env('SDK_URL') . "/Person/AddRange", $preparedJson);
            // ProcessSDKCommand::dispatch(env('SDK_URL') . "/Person/AddRange", $preparedJson);

            return $this->response('Visitor successfully created.', null, true);
        } catch (\Throwable $th) {
            return $this->response($th, null, true);
        }
    }

    public function register(Register $request)
    {
        $data = $request->validated();

        $data['logo'] = $this->processImage("media/visitor/logo");
        $data['date'] = date("Y-m-d");
        $data['visitor_filled_datetime'] = date("Y-m-d H:i:s");
        $data['id_copy'] = 'jpg';
        $data['status_id'] = 1;

        try {
            $data['branch_id'] = HostCompany::where("company_id", $request->company_id)->where("id", $request->host_company_id)->pluck("branch_id")[0];

            // $existingVisitor = Visitor::where('phone_number', $data['phone_number'])->first();

            // if ($existingVisitor) {
            //     $existingVisitor->update($data);
            //     $data['url'] = env("APP_URL") . "/media/visitor/logo/" . $data['logo'];
            //     return $this->response('Form has been submitted successfully.', $data, true);
            // }


            if (!Visitor::create($data)) {
                return $this->response('Form is not submitted.', null, false);
            }

            // $preparedJson = $this->prepareJsonForSDK([
            //     "first_name" => "first_name",
            //     "last_name" => "last_name",
            //     "system_user_id" => "system_user_id",
            //     "timezone_id" => "timezone_id",
            //     "logo" => "logo",
            //     "zone_id" => "zone_id",
            // ]);
            // ProcessSDKCommand::dispatch(env('SDK_URL') . "/Person/AddRange", $preparedJson);


            $message = "👥 *New Visitor Registered* 👥\n\n";
            $message .= "*Dear, User*\n\n";
            $message .= "New visitor has been registered.\n\n";
            $message .= "*Visitor Details*\n\n";
            $message .= "*Name* " . $data['first_name'] . " " .  $data['last_name'] . ".\n";
            $message .= "*Visit Date* " . $data['visit_from'] . " To " .  $data['visit_to'] . ".\n";
            $message .= "*Phone Number* " . $data['phone_number'] . ".\n";
            $message .= "*Visitor Company* " . $data['visitor_company_name'] . ".\n";
            $message .= "*Date:* " . date("d-M-y") . "\n";
            $message .= "*App Link:* " . "https://mobile.mytime2cloud.com/login" . "\n\n";
            $message .= "Best regards\n";
            $message .= "*MyTime2Cloud*";

            $company = Company::where("id", $data['company_id'])->first();
            $found = HostCompany::whereId($data['host_company_id'])->first();

            if ($found) {

                if (env("APP_ENV") !== "local") {
                    (new WhatsappController)->sendWhatsappNotification($company, $message, $found->number ?? 971554501483);
                }

                Notification::create([
                    "data" => "New visitor has been registered",
                    "action" => "Registration",
                    "model" => "Visitor",
                    "user_id" => $request->user_id ?? 21,
                    "company_id" => $data['company_id'],
                    "redirect_url" => "visitor_requests"
                ]);
            }

            $data['url'] = env("APP_URL") . "/media/visitor/logo/" . $data['logo'];

            return $this->response('Form has been submitted successfully.', $data, true);
        } catch (\Throwable $th) {

            return $th;
            // return $this->response('Server Error.', null, true);
        }
    }

    public function self_register(Register $request)
    {
        $data = $request->validated();

        $data['logo'] = $this->processImage("media/visitor/logo");
        $data['id_copy'] = $this->processImage("media/visitor/id_copy");
        $data['date'] = date("Y-m-d");
        $data['visitor_filled_datetime'] = date("Y-m-d H:i:s");
        // $data['id_copy'] = 'jpg';
        $data['status_id'] = 1;
        $data['host_company_id'] = 0;

        unset($data["profile_picture"]);


        try {

            // $existingVisitor = Visitor::where('phone_number', $data['phone_number'])->first();

            // if ($existingVisitor) {
            //     $existingVisitor->update($data);
            //     $data['url'] = env("APP_URL") . "/media/visitor/logo/" . $data['logo'];
            //     return $this->response('Form has been submitted successfully.', $data, true);
            // }


            if (!Visitor::create($data)) {
                return $this->response('Form is not submitted.', null, false);
            }

            $data['url'] = env("APP_URL") . "/media/visitor/logo/" . $data['logo'];

            return $this->response('Form has been submitted successfully.', $data, true);
        } catch (\Throwable $th) {
            return $this->response('Form is not submitted.', $th, false);
        }
    }


    public function visitorUpdate(VisitorUpdate $request, $id)
    {
        $data = $request->validated();

        if ($request->filled("profile_picture")) {
            $data['logo'] = $this->processImage("media/visitor/logo");
            unset($data["profile_picture"]);
        }


        try {

            if (!Visitor::where("id", $id)->update($data)) {
                return $this->response('Form is not updated.', null, false);
            }

            // $data['url'] = env("APP_URL") . "/media/visitor/logo/" . $data['logo'];

            return $this->response('Visitor has been submitted successfully.', $data, true);
        } catch (\Throwable $th) {
            return $this->response('Form is not submitted.', $th, false);
        }
    }

    public function uploadVisitorToDevice(UploadVisitor $request)
    {

        return $request;
        try {

            $ifExist = Visitor::where("id", $request->id)->where("system_user_id", ">", 0)->first();

            if ($ifExist) {
                return $this->response('Visiter got Device Id already.', $ifExist, false);
            }

            $visitor = Visitor::where("id", $request->id)->update([
                "system_user_id" => $request->system_user_id,
                "zone_id" => $request->zone_id,
                "status_id" => 4,
                "guard_changed_status_datetime" => date("Y-m-d H:i:s")

            ]);
            if (!$visitor) {
                return $this->response('Visitor cannot upload.', null, false);
            }

            // $data = $request->all();
            // $preparedJson = $this->prepareJsonForSDK($data);
            // return $this->SDKCommand( "http://139.59.69.241:5000/Person/AddRange", $preparedJson);
            // // env('SDK_URL');
            // $data['url'] = env("APP_URL") . "/media/visitor/logo/" . $data['logo'];

            return $this->response('Visitor uploaded to device.', null, true);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getDevicePersonDetailsZone(Request $request)
    {
        $system_user_id = $request->system_user_id;;

        $zoneDevices = ZoneDevices::with("devices")->where("zone_id", $request->zone_id)->get();

        $returnArray = [];
        foreach ($zoneDevices as $key => $devices) {



            $returnArray[] = (new SDKController())->getPersonDetails($devices['devices']['device_id'], $system_user_id);
        }

        return $returnArray;
    }

    public function getUnknownVisitorsList(Request $request)
    {
        $devicesList = Device::where('company_id', $request->company_id)->where("device_category_name", "CAMERA")->get()->all();

        $date = date('Y-m-d'); //. ' ' . date('H');

        if ($request->filled('from_date'))  $date = $request->from_date;

        $retunFiles = [];
        $directory = '../public/camera-unregsitered-faces-logs/'; // Replace this with your folder path

        $files = scandir($directory);
        $fileTimes = [];
        foreach ($files as $file) {
            $filePath = $directory . '/' . $file;
            $fileTimes[$file] = filemtime($filePath); // Use filectime() for file creation time
        }

        // Sort the files based on their modification times
        arsort($fileTimes);


        foreach ($fileTimes as $file => $key) {
            if ($file !== '.' && $file !== '..') {
                $position = strpos($file, $date);

                if ($position !== false) {

                    $fileArray = explode("_", $file);

                    $deviceName = $this->getDeviceName($devicesList, $fileArray[0]);
                    $retunFiles[] = [
                        "url" => asset("camera-unregsitered-faces-logs/" . $file),
                        "device_id" => $fileArray[0],
                        "device_name" => isset($deviceName[0]) ? $deviceName[0]['name'] : '',
                        "time" => $fileArray[3],
                        "name" => $file,
                    ];;
                } else {
                }
            }
        }

        return $retunFiles;
    }

    public function getDeviceName($data, $device_id)
    {


        $filteredData = array_filter($data, function ($item) use ($device_id) {
            // Define the key-value pairs to filter
            $filterCriteria = array(
                'device_id' => $device_id,

            );

            // Check if all the filter criteria match in the nested array
            foreach ($filterCriteria as $key => $value) {
                if (!isset($item[$key]) || $item[$key] !== $value) {
                    return false;
                }
            }

            return true; // All filter criteria matched
        });

        return $filteredData;
    }
    public function updateVisitorToZone(Request $request)
    {


        try {

            $ifVisitorExist = Visitor::where("id", "!=", $request->visitor_id)
                ->where("system_user_id",    $request->system_user_id)
                ->where("company_id",    $request->company_id)
                ->first();

            $ifEmployeeExist = Employee::where("system_user_id",    $request->system_user_id)
                ->where("company_id",    $request->company_id)
                ->first();

            if ($ifVisitorExist) {
                return $this->response('Visitor  Id already exist in Visitors List.', $ifVisitorExist, false);
            } else if ($ifEmployeeExist) {
                return $this->response('Visitor  Id already exist in Employee List.', $ifEmployeeExist, false);
            }

            $visitor = Visitor::where("id", $request->visitor_id);


            $visitorData = $visitor->clone()->get();; // Visitor::where("id", $request->visitor_id)->get();

            $zoneDevices = Zone::with(["devices"])->find($request->zone_id);
            $counter = 0;
            foreach ($zoneDevices->devices as $key => $device) {
                $preparedJson = '';

                $date  = new DateTime("now", new DateTimeZone($device['utc_time_zone'] != '' ? $device['utc_time_zone'] : 'Asia/Dubai'));
                $currentDateTime = $date->format('Y-m-d H:i:00');
                if (strtotime($currentDateTime) < strtotime($visitorData[0]["visit_to"] . ' ' . $visitorData[0]["time_out"])) {

                    if ($counter == 0) {

                        $visitor->clone()->update([
                            "system_user_id" => $request->system_user_id,
                            "zone_id" => $request->zone_id,
                            "status_id" => 4,
                            "card_rfid_number" => $request->card_rfid_number,
                            "card_rfid_password" => $request->card_rfid_password,
                            "guard_changed_status_datetime" => date("Y-m-d H:i:s")

                        ]);
                        //upload photo 
                        if (!$visitor) {
                            return $this->response('Visitor cannot upload.', null, false);
                        }

                        $counter++;

                        $visitorData = Visitor::where("id", $request->visitor_id)->get();
                    }

                    $isCameraDevice = $device['device_category_name'] == "CAMERA" ? true : false;


                    if ($isCameraDevice) {



                        try {
                            if (env("APP_ENV") == "local") {
                                $visitorData[0]["logo"] = "https://backend.mytime2cloud.com/media/employee/profile_picture/1697544063.jpg";

                                $imageData = file_get_contents("https://backend.mytime2cloud.com/media/employee/profile_picture/1697544063.jpg");
                            } else {
                                $imageData = file_get_contents($visitorData[0]["logo"]);
                            }


                            $md5string = base64_encode($imageData);;


                            $message[] = (new DeviceCameraController($device['camera_sdk_url']))->pushUserToCameraDevice($visitorData[0]["first_name"] . ' ' . $visitorData[0]["last_name"],  $visitorData[0]['system_user_id'], $md5string);
                        } catch (\Throwable $th) {
                        }
                    } else {


                        $preparedJson = $this->prepareJsonForSDK($visitorData[0], $device['device_id'], $device['utc_time_zone']);
                        $sdkResponse = '';


                        try {

                            (new SDKController)->processSDKRequestPersonAddJobJson('', $preparedJson);
                        } catch (\Throwable $th) {
                        }
                    }
                } else {

                    return $this->response('ID is allocated.But, Pending to Push to Device.' . " Visting OutTime  is out of the date ", null, false);
                }
            }






            // $data = $request->all();
            // $preparedJson = $this->prepareJsonForSDK($data);
            // return $this->SDKCommand( "http://139.59.69.241:5000/Person/AddRange", $preparedJson);
            // // env('SDK_URL');
            // $data['url'] = env("APP_URL") . "/media/visitor/logo/" . $data['logo'];

            return $this->response('Visitor uploaded to device.' . $sdkResponse, null, true);
        } catch (\Throwable $th) {
            throw $th;
        }
    }


    public function visitorStatusUpdate(Request $request, $id)
    {
        // $company = Company::where("id", $request->company_id)->first();

        // $message = "👥 *New Visitor Registered* 👥\n\n";
        // $message .= "*Dear, User*\n\n";
        // $message .= "New visitor has been registered.\n\n";
        // $message .= "*Date:* " . date("d-M-y") . "\n\n";
        // $message .= "Best regards\n";
        // $message .= "*MyTime2Cloud*";

        // return (new WhatsappController)->sendWhatsappNotification($company, $message, '971554501483');

        try {
            $visitor = Visitor::whereId($id)->update([
                "status_id" => $request->status_id,
                "host_changed_status_datetime" => date("Y-m-d H:i:s")
            ]);
            if (!$visitor) {
                return $this->response('Visitor cannot update.', null, false);
            }

            $statusText = $request->status_id == 1 ? 'Approved' : 'Rejected';

            return $this->response("Visitor status has been {$statusText}.", null, true);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function prepareJsonForSDK($data, $device_id, $utc_time_zone)
    {


        $date  = new DateTime("now", new DateTimeZone($utc_time_zone != '' ? $utc_time_zone : 'Asia/Dubai'));
        $currentDateTime = $date->format('Y-m-d H:i:00');

        $personList = [];

        $personList["name"] = $data["first_name"] . " " . $data["last_name"];
        $personList["userCode"] = $data["system_user_id"];
        $personList["timeGroup"] = 1;
        $personList["expiry"] =  '2023-01-01 00:00:00';

        if ($data["card_rfid_number"] != '') {
            $personList["cardData"] = $data["card_rfid_number"];
            $personList["cardStatus"] = 0;
            $personList["cardType"] = 0;
            $personList["password"] =  $data["card_rfid_password"];
        }
        if ($data["logo"] != '') {
            if (env("APP_ENV") == "local") {
                $personList["faceImage"] = "https://backend.mytime2cloud.com/media/employee/profile_picture/1697544063.jpg";
            } else {
                $personList["faceImage"] =  $data["logo"];
            }
        }





        $currentDate  = $date->format('Y-m-d');

        if (
            strtotime($currentDate) >= strtotime($data["visit_from"])
            && strtotime($currentDate) <= strtotime($data["visit_to"])
        ) {
            if (
                strtotime($currentDateTime) >= strtotime($currentDate . ' ' . $data["time_in"])
                && strtotime($currentDateTime) <= strtotime($currentDate . ' ' . $data["time_out"])
            ) {
                $personList["expiry"] = $currentDate . ' ' . $data["time_out"];
            }
        }





        Visitor::where("id", $data["id"])->update(["sdk_expiry_datetime" => $personList["expiry"]]);

        return [
            "snList" => [$device_id],
            "personList" => [$personList],
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Visitor  $visitor
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, $id)
    {
        $data = $request->validated();

        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $ext = $file->getClientOriginalExtension();
            $fileName = time() . '.' . $ext;
            $request->logo->move(public_path('media/visitor/logo/'), $fileName);
            $data['logo'] = $fileName;
        }

        try {

            $visitor = Visitor::whereId($id)->update($data);
            if (!$visitor) {
                return $this->response('Visitor cannot update.', null, false);
            }

            return $this->response('Visitor successfully updated.', null, true);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Visitor  $visitor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Visitor $visitor)
    {
        return $visitor->delete();
    }
}
