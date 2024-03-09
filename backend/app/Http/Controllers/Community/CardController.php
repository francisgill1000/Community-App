<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\Card\StoreRequest;
use App\Http\Requests\Community\Card\UpdateRequest;

use App\Models\Community\Card;

class CardController extends Controller
{
    public function visitorCardDropDown()
    {
        return Card::where("type", request("type") ?? "visitor")->get();
    }

    public function deliveryCardDropDown()
    {
        return Card::where("type", request("type") ?? "delivery")->get();
    }

    public function contractorCardDropDown()
    {
        return Card::where("type", request("type") ?? "contractor")->get();
    }


    public function dropDown()
    {
        return Card::get();
        return Card::where("type", request("type"))->get();
    }

    public function index()
    {
        return Card::where("type", request("type"))->paginate(request("per_page") ?? 10);
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
            $record = Card::create($request->validated());

            if ($record) {
                return $this->response('Card Successfully created.', $record, true);
            } else {
                return $this->response('Card cannot create.', null, false);
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
    public function update(UpdateRequest $request, Card $Card)
    {
        try {
            // If the room number is the same or it's unique, update the room
            $record = $Card->update($request->validated());

            return $this->response('Card successfully updated.', $record, true);
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

    public function destroy(Card $Card)
    {
        try {
            if ($Card->delete()) {
                return $this->response('Card successfully deleted.', null, true);
            } else {
                return $this->response('Card cannot delete.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
