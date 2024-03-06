<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\StoreRequest;
use App\Http\Requests\Admin\UpdateRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dropDown()
    {
        return User::get();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::with("role")->where("user_type", "user")->where("company_id", request("company_id") ?? 0)->paginate(request("per_page") ?? 2000);
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

            $data = $request->validated();

            $data["password"] = Hash::make($data["password"]);
            $data["user_type"] = "user";

            $record = User::create($data);

            if ($record) {
                return $this->response('User Successfully created.', $record, true);
            } else {
                return $this->response('User cannot create.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        try {
            $data = $request->validated();

            if ($request->password) {
                $data["password"] = Hash::make($data["password"]);
            }

            $record = User::find($id)->update($data);

            return $this->response('User successfully updated.', $record, true);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        return User::find($id);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        try {
            if (User::find($id)->delete()) {
                return $this->response('User successfully deleted.', null, true);
            } else {
                return $this->response('User cannot delete.', null, false);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
