<?php

namespace App\Http\Requests\Visitor;

use Illuminate\Foundation\Http\FormRequest;

class Register extends FormRequest
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
        $validations = [];

        $validations['visit_from'] = 'required|date';
        $validations['visit_to'] = 'required|date';
        $validations['purpose_id'] = 'required';
        $validations['first_name'] = 'required|string|max:255';
        $validations['last_name'] = 'required|string|max:255';
        $validations['gender'] = 'required|in:Male,Female';
        $validations['phone_number'] = 'required|string|max:255';
        $validations['email'] = 'nullable|email|max:255';
        $validations['visitor_company_name'] = 'required|max:255';
        $validations['id_type'] = 'nullable';
        $validations['id_number'] = 'nullable|string|max:255';
        $validations['host_company_id'] = 'nullable';
        $validations['company_id'] = 'required';
        $validations['status_id'] = 'nullable';

        $validations['logo'] = 'nullable';
        $validations['id_copy'] = 'nullable';
        $validations['date'] = 'required|date';

        $validations["time_in"] = "required";
        $validations["time_out"] = "required";

        $validations["system_user_id"] = "nullable";
        $validations["rfid"] = "required|min:0|max:10";

        $validations["visitor_type"] = "required";

        $validations['tanent_id'] = 'required';
        $validations['note'] = 'nullable';


        return $validations;
    }

    public function messages()
    {
        return [
            'logo.required' => 'The Photo field is required',
            'tanent_id.required' => 'No tanent found',
            'rfid.required' => 'The visitor Card Id field is required.',

        ];
    }
}
