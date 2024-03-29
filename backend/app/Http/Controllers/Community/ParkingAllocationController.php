<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\Parking\AllocateParkingRequest;
use App\Http\Requests\Community\Parking\AllocateUpdateParkingRequest;
use App\Models\Community\Parking;
use App\Models\Community\Vehicle;
use App\Models\Company;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class ParkingAllocationController extends Controller
{
    public function index(Request $request)
    {
        return Parking::orderBy('id', 'desc')
            ->when($request->filled("category"), function ($q) use ($request) {
                $q->where("category", $request->input("category"));
            })
            ->when($request->filled("floor_id"), function ($q) use ($request) {
                $q->where("floor_id", $request->input("floor_id"));
            })
            ->when($request->filled("parking_number"), function ($q) use ($request) {
                $q->where("parking_number", $request->input("parking_number"));
            })
            ->when($request->filled("tenant_id"), function ($q) use ($request) {
                $q->whereHas("vehicle", function ($qu) use ($request) {
                    $qu->where("tenant_id", $request->input("tenant_id"));
                });
            })
            ->when($request->filled("car_number"), function ($q) use ($request) {
                $q->whereHas("vehicle", function ($qu) use ($request) {
                    $qu->where("car_number", $request->input("car_number"));
                });
            })
            ->when($request->filled("car_brand"), function ($q) use ($request) {
                $q->whereHas("vehicle", function ($qu) use ($request) {
                    $qu->where("car_brand", $request->input("car_brand"));
                });
            })
            // ->when($request->filled("full_name"), function ($q) use ($request) {
            //     $q->whereHas("vehicle.tenant", function ($qu) use ($request) {
            //         $qu->where("full_name", $request->input("full_name"));
            //     });
            // })

            ->when($request->filled("phone_number"), function ($q) use ($request) {
                $q->whereHas("vehicle.tenant", function ($qu) use ($request) {
                    $qu->where("phone_number", $request->input("phone_number"));
                });
            })

            ->when($request->filled("room_number"), function ($q) use ($request) {
                $q->whereHas("vehicle.tanent.room", function ($qu) use ($request) {
                    $qu->where("room_number", $request->input("room_number"));
                });
            })



            ->when($request->filled("email"), function ($q) use ($request) {
                $q->whereHas("vehicle.tenant", function ($qu) use ($request) {
                    $qu->where("email", $request->input("email"));
                });
            })
            ->with(["vehicle","floor"])
            ->paginate($request->input("per_page") ?? 10);
    }

    public function parkingReportPrint(Request $request)
    {
        $data = Parking::orderBy('id', 'desc')

            ->when(request()->filled("category"), fn ($q) => $q->where("category", request("category")))
            ->when(request()->filled("floor_id"), fn ($q) => $q->where("floor_id", request("floor_id")))
            ->when(request()->filled("parking_number"), fn ($q) => $q->where("parking_number", request("parking_number")))

            ->when(request()->filled("tanent_id"), fn ($q) => $q->whereHas("vehicle", function ($qu) {
                $qu->where("tanent_id", request("tanent_id"));
            }))

            ->when(request()->filled("car_number"), fn ($q) => $q->whereHas("vehicle", function ($qu) {
                $qu->where("car_number", request("car_number"));
            }))

            ->when(request()->filled("phone_number"), fn ($q) => $q->whereHas("vehicle", function ($qu) {
                $qu->whereHas("tanent", function ($quo) {
                    $quo->where("phone_number", request("phone_number"));
                });
            }))

            ->when(request()->filled("email"), fn ($q) => $q->whereHas("vehicle", function ($qu) {
                $qu->whereHas("tanent", function ($quo) {
                    $quo->where("email", request("email"));
                });
            }))->with(["vehicle", "floor"])->get()->toArray();

        if ($request->debug) return $data;

        $chunks = array_chunk($data, 10);

        return Pdf::setPaper('a4', 'landscape')->loadView('pdf.parking.report', [
            "chunks" => $chunks,
            "company" => Company::whereId(request("company_id") ?? 1)->first(),
            "params" => $request->all(),

        ])->stream();
    }

    public function parkingReportDownload(Request $request)
    {
        $data = Parking::orderBy('id', 'desc')

            ->when(request()->filled("category"), fn ($q) => $q->where("category", request("category")))
            ->when(request()->filled("floor_id"), fn ($q) => $q->where("floor_id", request("floor_id")))
            ->when(request()->filled("parking_number"), fn ($q) => $q->where("parking_number", request("parking_number")))

            ->when(request()->filled("tanent_id"), fn ($q) => $q->whereHas("vehicle", function ($qu) {
                $qu->where("tanent_id", request("tanent_id"));
            }))

            ->when(request()->filled("car_number"), fn ($q) => $q->whereHas("vehicle", function ($qu) {
                $qu->where("car_number", request("car_number"));
            }))

            ->when(request()->filled("phone_number"), fn ($q) => $q->whereHas("vehicle", function ($qu) {
                $qu->whereHas("tanent", function ($quo) {
                    $quo->where("phone_number", request("phone_number"));
                });
            }))

            ->when(request()->filled("email"), fn ($q) => $q->whereHas("vehicle", function ($qu) {
                $qu->whereHas("tanent", function ($quo) {
                    $quo->where("email", request("email"));
                });
            }))->with(["vehicle", "floor"])->get()->toArray();

        if ($request->debug) return $data;

        $chunks = array_chunk($data, 10);

        return Pdf::setPaper('a4', 'landscape')->loadView('pdf.parking.report', [
            "chunks" => $chunks,
            "company" => Company::whereId(request("company_id") ?? 1)->first(),
            "params" => $request->all(),

        ])->download();
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

    public function update(AllocateUpdateParkingRequest $request, $id)
    {
        try {

            $record = Vehicle::where("id", $id)->update($request->validated());

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

            $record = Vehicle::where("id", $id)->delete();

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
