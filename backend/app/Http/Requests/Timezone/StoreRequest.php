<?php

namespace App\Http\Requests\Timezone;

use App\Http\Controllers\Controller;
use App\Traits\failedValidationWithName;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRequest extends FormRequest
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
        $contoller = new Controller;

        $companrArr = ["company_id" => $this->company_id];

        return [
            'timezone_name' => ['required', 'min:4', 'max:20',  $contoller->uniqueRecord("timezones", ["timezone_name" => $this->timezone_name] + $companrArr)],
            'timezone_id' => 'required|numeric|max:64',
            'interval' => 'nullable',
            'scheduled_days' => 'nullable',
            'company_id' => 'required',
            "intervals_raw_data" => 'nullable',
            "description" => 'nullable'
        ];
    }
}
