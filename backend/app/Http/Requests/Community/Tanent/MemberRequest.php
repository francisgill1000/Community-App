<?php

namespace App\Http\Requests\Community\Tanent;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class MemberRequest extends FormRequest
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
            "company_id" => "required",
            "profile_picture" => "nullable",
            "parent_id" => "required",
            "system_user_id" => "required|unique:tanents",
            "first_name" => "required|min:3|max:20",
            "last_name" => "required|min:3|max:20",
            "age" => "required",
            "member_type" => "required",
            "nationality" => "required",
            "gender" => "required",
            "rfid" => "nullable",
            "pin" => "nullable",
            "full_name" => "nullable|min:3|max:20",
        ];
    }
}
