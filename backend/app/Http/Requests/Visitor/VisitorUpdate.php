<?php

namespace App\Http\Requests\Visitor;

use Illuminate\Foundation\Http\FormRequest;

class VisitorUpdate extends FormRequest
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

        if ($this->withOutHost) {
            $validations['host_flat_number'] = 'required';
            $validations['host_company_name'] = 'nullable';
            $validations['host_name'] = 'nullable';
            $validations['host_phone_number'] = 'nullable';
            $validations['host_email'] = 'nullable';
            $validations['note'] = 'nullable';
        }

        $validations['visit_from'] = 'required|date';
        $validations['visit_to'] = 'required|date';
        $validations['purpose_id'] = 'required';
        $validations['first_name'] = 'required|string|max:255';
        $validations['last_name'] = 'required|string|max:255';
        $validations['gender'] = 'required|in:Male,Female';
        $validations['phone_number'] = 'required|string|max:255';
        $validations['email'] = 'nullable|email|max:255';
        $validations['visitor_company_name'] = 'required|string|max:255';
        $validations['id_type'] = 'nullable';
        $validations['id_number'] = 'nullable|string|max:255';
        $validations['host_company_id'] = 'nullable';

        $validations['profile_pictture'] = 'nullable';

        $validations["time_in"] = "required";
        $validations["time_out"] = "required";

        $validations["system_user_id"] = "nullable";
        $validations["rfid"] =   "required|min:0|max:10"; //"required|regex:/^[1-9][0-9]*$/|min:4|max:9";


        return $validations;
    }

    public function messages()
    {
        return [
            'profile_pictture.required' => 'The Photo field is required',
        ];
    }
}
