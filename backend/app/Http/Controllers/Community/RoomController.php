<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\Room\StoreRequest;
use App\Http\Requests\Community\Room\UpdateRequest;
use App\Models\Community\Room;
use App\Models\Company;
use App\Models\Community\Tanent;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($room_number)
    {
        return Room::where("room_number", $room_number)->with(["tanent", "floor", "room_category", "room_sub_category"])
            ->orderBy("room_number", "asc")
            ->first();
    }

    public function index()
    {
        // Room::truncate();

        return Room::where("company_id", request("company_id"))->with(["tanent", "floor", "room_category", "room_sub_category"])
            ->orderBy("id", "desc")
            ->paginate(request("per_page") ?? 10);
    }

    public function report()
    {
        return Room::where("company_id", request("company_id"))
            ->when(request()->filled("report_type"), function ($q) {
                if (request("report_type") == "Occupied") {
                    return $q->whereHas("tanent");
                }
                if (request("report_type") == "Available") {
                    return $q->whereDoesntHave("tanent");
                }

                if (request("report_type") == "Expire") {
                    return $q->whereHas("tanent", function ($query) {
                        $query->whereDate('end_date', '>=', date("Y-m-d"));
                        $query->whereDate('end_date', '<=', now()->addDays(30));
                    });
                }
            })
            ->with(["tanent", "floor", "room_category"])->paginate(request("per_page") ?? 10);
    }



    public function print(Request $request)
    {
        $model = Room::where("company_id", request("company_id"))
            ->when(request()->filled("report_type"), function ($q) {
                if (request("report_type") == "Occupied") {
                    return $q->whereHas("tanent");
                }
                if (request("report_type") == "Available") {
                    return $q->whereDoesntHave("tanent");
                }

                if (request("report_type") == "Expire") {
                    return $q->whereHas("tanent", function ($query) {
                        $query->whereDate('end_date', '>=', date("Y-m-d"));
                        $query->whereDate('end_date', '<=', now()->addDays(30));
                    });
                }
            })
            ->with(["tanent", "floor", "room_category"]);

        $data = $model->get()->toArray();

        if ($request->debug) return $data;

        $chunks = array_chunk($data, 10);

        return Pdf::setPaper('a4', 'landscape')->loadView('pdf.room_report.report', [
            "chunks" => $chunks,
            "company" => Company::whereId(request("company_id") ?? 0)->first(),
            "params" => $request->all(),

        ])->stream();
    }

    public function download(Request $request)
    {
        $model = Room::where("company_id", request("company_id"))
            ->when(request()->filled("report_type"), function ($q) {
                if (request("report_type") == "Occupied") {
                    return $q->whereHas("tanent");
                }
                if (request("report_type") == "Available") {
                    return $q->whereDoesntHave("tanent");
                }

                if (request("report_type") == "Expire") {
                    return $q->whereHas("tanent", function ($query) {
                        $query->whereDate('end_date', '>=', date("Y-m-d"));
                        $query->whereDate('end_date', '<=', now()->addDays(30));
                    });
                }
            })
            ->with(["tanent", "floor", "room_category"]);

        $data = $model->get()->toArray();

        if ($request->debug) return $data;

        $chunks = array_chunk($data, 10);

        return Pdf::setPaper('a4', 'landscape')->loadView('pdf.room_report.report', [
            "chunks" => $chunks,
            "company" => Company::whereId(request("company_id") ?? 0)->first(),
            "params" => $request->all(),

        ])->download();
    }


    public function floorByCategory($id)
    {
        return Room::where('room_category_id', $id)
            ->distinct()
            ->join('floors', 'rooms.floor_id', '=', 'floors.id')
            ->get(["floors.id", "floors.floor_number"]);
    }

    public function getRoomsByFloorId()
    {
        return Room::where("company_id", request("company_id"))
            ->where("floor_id", request("floor_id"))
            ->where("room_category_id", request("room_category_id"))
            ->get(["id", "room_number"]);
    }

    public function getTanentsAndMembersByRoomsId()
    {
        return Tanent::where("company_id", request("company_id"))->where("room_id", request("room_id"))->with("members")->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        try {


            $start = $request->start_number;

            $end = $request->end_number;

            $data = [];

            // foreach (range($start, $end) as $value) {
            //     $data[] = [
            //         'room_number' => $value,
            //         'floor_id' => $request->floor_id,
            //         'room_category_id' => $request->room_category_id,
            //         "room_sub_category_id" => $request->room_sub_category_id,
            //         'status_id' => $request->status_id,
            //         'company_id' => $request->company_id,
            //     ];
            // }

            // $record = Room::insert($data);

            $record = Room::create([
                'room_number' => $start,
                'floor_id' => $request->floor_id,
                'room_category_id' => $request->room_category_id,
                "room_sub_category_id" => $request->room_sub_category_id,
                'status_id' => $request->status_id,
                'company_id' => $request->company_id,
            ]);

            if ($record) {
                return $this->response('Room Successfully created.', $record, true);
            } else {
                return $this->response('Room cannot create.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, Room $room)
    {
        try {
            // If the room number is the same or it's unique, update the room
            $record = $room->update($request->validated());

            return $this->response('Room successfully updated.', $record, true);
        } catch (\Throwable $th) {
            throw $th;
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */

    public function destroy(Room $room)
    {
        try {
            if ($room->delete()) {
                return $this->response('Room successfully deleted.', null, true);
            } else {
                return $this->response('Room cannot delete.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function storeBulk(Request $request)
    {
        try {


            $start = $request->start_number;

            $end = $request->end_number;

            $data = [];

            foreach (range($start, $end) as $value) {
                $data[] = [
                    'room_number' => $value,
                    'floor_id' => $request->floor_id,
                    'room_category_id' => $request->room_category_id,
                    "room_sub_category_id" => $request->room_sub_category_id,
                    'status_id' => $request->status_id,
                    'company_id' => $request->company_id,
                ];
            }

            $record = Room::insert($data);

            // $record = Room::create($request->validated());

            if ($record) {
                return $this->response('Room Successfully created.', $record, true);
            } else {
                return $this->response('Room cannot create.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
