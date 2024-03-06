<?php

namespace App\Http\Requests\Community\Tanent;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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

            'room_id' => [
                'required',
                Rule::unique('tanents')->where(function ($query) {
                    return $query->where('room_id', $this->room_id)
                        ->where('company_id', $this->company_id);
                }),
            ],


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
            "car_number" => "nullable",
            "parking_number" => "nullable",

            "rfid" => "nullable",
            "pin" => "nullable",

            "nationality" => "required",
            "address" => "nullable",

            "passport_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",
            "id_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",
            "contract_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",
            "ejari_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",
            "license_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",
            "others_doc" => "nullable|file|mimes:jpeg,png,gif,pdf|max:2048",

            "web_access" => "nullable",

            "gender" => "required",

            "term" => "required",

            "room_category_id" => "required",
            "room_sub_category_id" => "required",
        ];
    }
}
