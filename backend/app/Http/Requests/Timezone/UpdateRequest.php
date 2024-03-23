<?php

namespace App\Http\Requests\Timezone;

use App\Traits\failedValidationWithName;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    use failedValidationWithName;
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
            'timezone_name' => ['required', 'min:4', 'max:20'],
            'interval' => 'nullable',
            'scheduled_days' => 'nullable',
            "intervals_raw_data" => 'nullable',
            "description" => 'nullable'
        ];
    }
}
