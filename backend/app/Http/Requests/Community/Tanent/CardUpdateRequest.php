<?php

namespace App\Http\Requests\Community\Tanent;

use Illuminate\Foundation\Http\FormRequest;

class CardUpdateRequest extends FormRequest
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
            "parent_id" => "required",
            "system_user_id" => "required",
            "full_name" => "required|min:3|max:20",
            'rfid' => 'nullable|numeric',
            "member_type" => "required",
            "company_id" => "required",
        ];
    }
}
