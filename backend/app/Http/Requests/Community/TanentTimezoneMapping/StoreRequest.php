<?php

namespace App\Http\Requests\Community\TanentTimezoneMapping;

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
            'company_id' => 'required|integer',
            'floor_id' => 'required|integer',
            'room_id' => 'required|integer',
            'timezone_id' => 'required|integer',
            'tanents' => 'required|array',
            'tanents.*.system_user_id' => 'required|integer',
            'tanents.*.full_name' => 'required|string',
            'device_ids' => 'required|array',
            'device_ids.*' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'tanents.required' => 'The tenants field is required.',
            'tanents.array' => 'The tenants must be an array.',
            'tanents.*.system_user_id.required' => 'Each tanent must have a system user ID.',
            'tanents.*.system_user_id.integer' => 'The system user ID for each tanent must be an integer.',
            'tanents.*.full_name.required' => 'Each tanent must have a full name.',
            'tanents.*.full_name.string' => 'The full name for each tanent must be a string.',
            'device_ids.required' => 'The device IDs field is required.',
            'device_ids.array' => 'The device IDs must be an array.',
            'device_ids.*.required' => 'Each device ID field is required.',
            'device_ids.*.string' => 'Each device ID must be a string.',
        ];
    }
}
