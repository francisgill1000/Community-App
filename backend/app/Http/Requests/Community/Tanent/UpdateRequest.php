<?php

namespace App\Http\Requests\Community\Tanent;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
        return [
            "full_name" => "nullable|min:3",
            "first_name" => "required|min:3|max:20",
            "last_name" => "required|min:3|max:20",
            "phone_number" => "required|min:10|max:20",
            "floor_id" => "required",
            "room_id" => "required",
            "start_date" => "required",
            "end_date" => "required",
            "profile_picture" => "nullable",
            "attachment" => "nullable",
            "system_user_id" => "nullable",
            "email" => "nullable",
            "company_id" => "nullable",

            "whatsapp_number" => "nullable",
            "date_of_birth" => "nullable",
            "nationality" => "nullable",
            "car_number" => "nullable",
            "parking_number" => "nullable",
            "rfid" => "required",
            "address" => "required",

            "passport_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",
            "id_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",
            "contract_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",
            "ejari_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",
            "license_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",
            'others_doc' => 'nullable|file|mimes:jpeg,png,gif,pdf|max:2048',

            "gender" => "required",

            "term" => "required",

            "room_category_id" => "required",
            "room_sub_category_id" => "required",

            "isStaying" => "required",
        ];
    }
}
