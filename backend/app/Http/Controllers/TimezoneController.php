<?php

namespace App\Http\Controllers;

use App\Http\Requests\Timezone\StoreRequest;
use App\Http\Requests\Timezone\UpdateRequest;
use App\Models\Timezone;
use App\Models\TimezoneDefaultJson;
use Illuminate\Http\Request;

class TimezoneController extends Controller
{
    public function dropdownList()
    {
        $model = Timezone::query();
        $model->where('company_id', request('company_id'));
        $model->orderBy(request('order_by') ?? "id", request('sort_by_desc') ? "desc" : "asc");
        return $model->get(["id", "timezone_name as name", "timezone_id"]);
    }

    public function timezonesList(Request $request)
    {
        return Timezone::where('company_id', $request->company_id)->get(['id', 'timezone_name', 'timezone_id']);
    }
    public function index(Request $request)
    {
        $model = Timezone::query();
        $model->where('company_id', $request->company_id);
        $model->where("is_default", false);
        $model->with(["employee_device", "branch"]);
        $model->orderBy("timezone_id", "asc");
        return $model->paginate($request->per_page ?? 100);
    }

    public function getNextAvailableIndexForTimezone()
    {
        $model = Timezone::count();

        $count =  $model == 0 ? 1 : $model + 1;

        return $count + 1;
    }

    public function getTimezoneJson(Request $request)
    {
        return Timezone::where('company_id', $request->company_id)->pluck("json");
    }
    public function getNextAvaialbleTimezoneid($request)
    {

        $existingTimezoneIdsArray = Timezone::where("company_id", $request->company_id)->pluck("timezone_id");

        $allTimezoneIds = [];
        $aleadyExist = [];

        $nextAvaialbe_id = '';
        for ($i = 2; $i < 64; $i++) {
            $allTimezoneIds[] = $i;
        }
        foreach ($existingTimezoneIdsArray as  $value) {
            $aleadyExist[] = $value;
        }


        $elements_not_in_array = array_diff($allTimezoneIds, $aleadyExist);



        return $elements_not_in_array;
    }
    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $data["json"] = json_encode($request->json);
        $data["interval"] = json_encode($request->json);
        $data["json_for_sdk"] = $this->getNewJsonIntervaldata($request);

        try {
            $record = Timezone::create($data);
            return $this->response('Timezone Successfully created.', $data["json_for_sdk"], true);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function show(Timezone $timezone)
    {
        return $timezone->find();
    }

    public function getNewJsonIntervaldata(Request $request)
    {
        $index = $request->timezone_id;
        $rowJson = $request->json;
        $datasetList = [];
        $days = [];


        foreach ($rowJson as $dayKey => $rowJsonSingle) {

            $datasetList[] = [
                "dayWeek" => $rowJsonSingle["id"],
                "timeSegmentList" => $this->processTimeSlots($rowJsonSingle["timeSlots"])
            ];

            $days[] = $rowJsonSingle["id"];
        }


        $array = array_merge($datasetList, $this->renderEmptyTimeFrame($days));

        sort($array);

        return ["index" => $index, "dayTimeList" => $array];
    }

    public function renderEmptyTimeFrame($days)
    {
        $arr = [];


        for ($i = 0; $i <= 6; $i++) {

            if (!in_array($i, $days)) {
                $arr[] = [
                    "dayWeek" => $i,
                    "timeSegmentList" => [
                        [
                            "begin" => "00:00",
                            "end" => "00:00",
                        ],
                    ],
                ];
            }
        }
        return $arr;
    }

    public function processTimeSlots($slots)
    {
        $chunks = array_chunk($slots, 2);

        $arr = [];

        foreach ($chunks as $chunk) {
            $arr[] = ["begin" => $chunk[0]["time"], "end" => end($chunk)["time"]];
        }

        return $arr;
    }
    public function update(UpdateRequest $request, Timezone $timezone)
    {

        $data = $request->validated();
        $data["json"] = json_encode($request->json);
        $data["interval"] = json_encode($request->json);
        $data["json_for_sdk"] = $this->getNewJsonIntervaldata($request);

        try {

            $record = $timezone->update($data);

            if ($record) {
                return $this->response('Timezone Successfully updated.', $data["json_for_sdk"], true);
            } else {
                return $this->response('Timezone cannot create.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function destroy(Timezone $timezone)
    {
        try {

            $record = $timezone->delete();

            if ($record) {
                return $this->response('Timezone Successfully deleted.', $record, true);
            } else {
                return $this->response('Timezone cannot delete.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function processIntervals($intervals, $isDefault)
    {
        $arr = [];

        foreach ($intervals as $key => $interval) {
            $arr[] = [
                "dayWeek" => $key,
                "timeSegmentList" => $interval,
            ];
        }
        return $arr;
    }
    public function processTimeFrames($interval, $isDefault = false)
    {
        $arr = [];

        for ($i = 1; $i <= 48; $i++) {
            if (isset($interval['interval' . $i]) && count($interval['interval' . $i]) > 0 && !$isDefault) {
                $arr[] = $interval['interval' . $i];
            } else {
                $arr[] = ["begin" => "00:00", "end" => "00:00"];
            }
        }
        return $arr;
    }
    public function processTimeFrames_old($interval, $isDefault = false)
    {
        $arr = [];

        for ($i = 1; $i <= 8; $i++) {
            if (isset($interval['interval' . $i]) && count($interval['interval' . $i]) > 0 && !$isDefault) {
                $arr[] = $interval['interval' . $i];
            } else {
                $arr[] = ["begin" => "00:00", "end" => "00:00"];
            }
        }
        return $arr;
    }
    public function storeTimezoneDefaultJson()
    {
        TimezoneDefaultJson::truncate();

        foreach (range(1, 64) as $iteration) {
            TimezoneDefaultJson::create([
                "index" => $iteration,
                "dayTimeList" => $this->dayTimeListArr(),
            ]);
        }
        return TimezoneDefaultJson::count();
    }

    public function GetTimezoneDefaultJson()
    {

        return TimezoneDefaultJson::get(['index', 'dayTimeList']);
    }

    public function processSchedule($schedules, $isDefault)
    {
        $arr = [];
        foreach ($schedules as $key => $d) {
            $arr[] = [
                "day" => $d["day"],
                "isScheduled" => $isDefault ? false : $d["isScheduled"],
                "dayWeek" => $key,
            ];
        }
        return $arr;
    }
    public function processJson($timezone_id, $interval, $isDefault)
    {
        return [
            "index" => $timezone_id,
            "dayTimeList" => $this->processIntervals($interval, $isDefault),
        ];
    }
    public function search(Request $request, $key)
    {
        return Timezone::where('company_id', $request->company_id)
            ->where("is_default", false)
            ->when($request->filled('filter_template_id'), function ($q) use ($request, $key) {
                $q->where('timezone_id', 'like', "$key%");
            })
            ->when($request->filled('filter_template_name'), function ($q) use ($request, $key) {
                $q->where('timezone_name', 'like', "$key%");
            })
            ->paginate($request->per_page ?? 100);
    }

    public function dayTimeListArr()
    {
        return [
            [
                "dayWeek" => 0,
                "timeSegmentList" => [
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ]
                ]
            ],
            [
                "dayWeek" => 1,
                "timeSegmentList" => [
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ]
                ]
            ],
            [
                "dayWeek" => 2,
                "timeSegmentList" => [
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ]
                ]
            ],
            [
                "dayWeek" => 3,
                "timeSegmentList" => [
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ]
                ]
            ],
            [
                "dayWeek" => 4,
                "timeSegmentList" => [
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ]
                ]
            ],
            [
                "dayWeek" => 5,
                "timeSegmentList" => [
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ]
                ]
            ],
            [
                "dayWeek" => 6,
                "timeSegmentList" => [
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ],
                    [
                        "begin" => "00:00",
                        "end" => "00:00"
                    ]
                ]
            ]
        ];
    }
}
