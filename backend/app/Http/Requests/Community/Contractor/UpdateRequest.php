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
            'phone_number' => ['nullable', 'min:3', 'max:15'],
            'mobile_number' => ['nullable', 'min:3', 'max:15'],
            'licence_number' => ['nullable', 'min:3', 'max:20'],
            'licence_issue_by_department' => ['nullable', 'min:3', 'max:20'],
            'licence_expiry' => ['nullable'],
            'car_number' => 'nullable|min:3|max:100',
            'car_brand' => 'nullable|min:3|max:100',
            'car_issued_city' => 'nullable|min:3|max:300',
            'address' => 'nullable|min:3|max:500',
        ];
    }
}
