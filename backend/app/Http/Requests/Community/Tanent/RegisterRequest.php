<?php

namespace App\Http\Requests\Community\Tanent;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $room_id_arr = [];

        $room_id_arr[] = 'required';

        if ($this->member_type == 'Primary') {
            $room_id_arr[] = Rule::unique('tanents')->where(function ($query) {
                return $query
                    ->where('room_category_id', $this->room_category_id)
                    ->where('room_sub_category_id', $this->room_sub_category_id)
                    ->where('floor_id', $this->floor_id)
                    ->where('room_id', $this->room_id)
                    ->where('company_id', $this->company_id);
            });
        }

        return [

            'room_id' => $room_id_arr,
            "full_name" => "nullable|min:3|max:20",
            "first_name" => "required|min:3|max:20",
            "last_name" => "required|min:3|max:20",
            "phone_number" => "required|min:10|max:20",
            "floor_id" => "required",
            "start_date" => "required",
            "end_date" => "required",
            "profile_picture" => "nullable",
            "system_user_id" => "nullable",
            "email" => "nullable",
            "company_id" => "required",

            "whatsapp_number" => "nullable",
            "date_of_birth" => "nullable",

            "rfid" => "nullable",
            "pin" => "nullable",

            "nationality" => "required",
            "address" => "nullable",


            "gender" => "required",

            "term" => "required",

            "room_category_id" => "required",
            "room_sub_category_id" => "required",

            "age" => "required",
            "member_type" => "required",
            "parent_id" => "nullable",
        ];
    }
}
