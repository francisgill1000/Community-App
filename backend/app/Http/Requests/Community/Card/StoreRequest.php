<?php

namespace App\Http\Requests\Community\Card;

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
            "name" => "required",
            "number" => "required|min:0|max:9|unique:cards",
            "system_number" => "required|numeric|min:4|max:999999999|unique:cards|regex:/^[1-9][0-9]*$/", 
            "issue_date" => "required|date",
            "expire_date" => "required|date",
            "type" => "required",
        ];
    }
}
