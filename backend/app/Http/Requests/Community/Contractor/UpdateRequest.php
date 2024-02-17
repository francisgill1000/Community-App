<?php

namespace App\Http\Requests\Community\Contractor;

use App\Traits\failedValidationWithName;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    use failedValidationWithName;

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
            'logo' => ['image', 'mimes:jpeg,png,jpg,svg', 'max:2048', 'sometimes', 'nullable'],
            'user_id' => ['required'],
            'company_id' => 'required',
            'branch_name' => ['required', 'min:3', 'max:20'],
            'manager_name' => ['required', 'min:3', 'max:50'],
            'term' => ['required'],
            'email' => ['required', 'min:3', 'max:100'],
            'phone_number' => ['required', 'min:3', 'max:15'],
            'mobile_number' => ['required', 'min:3', 'max:15'],
            'licence_number' => ['required', 'min:3', 'max:20'],
            'licence_issue_by_department' => ['required', 'min:3', 'max:20'],
            'licence_expiry' => ['required'],
            'car_number' => 'required|min:3|max:100',
            'car_brand' => 'required|min:3|max:100',
            'car_issued_city' => 'required|min:3|max:300',
            'address' => 'required|min:3|max:500',
        ];


    }
}
