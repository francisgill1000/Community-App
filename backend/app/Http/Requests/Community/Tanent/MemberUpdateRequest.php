<?php

namespace App\Http\Requests\Community\Tanent;

use Illuminate\Foundation\Http\FormRequest;

class MemberUpdateRequest extends FormRequest
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
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'age' => 'required|string|max:255',
            "phone_number" => "required|min:10|max:20",
            'member_type' => 'required',
            'nationality' => 'required',
            'gender' => 'required',
            'rfid' => 'required',
            'pin' => 'required',
            'profile_picture' => 'nullable',
        ];
    }
}
