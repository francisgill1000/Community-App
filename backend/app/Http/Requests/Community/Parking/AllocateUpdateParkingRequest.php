<?php

namespace App\Http\Requests\Community\Parking;

use Illuminate\Foundation\Http\FormRequest;

class AllocateUpdateParkingRequest extends FormRequest
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
            "tanent_id" => "required",
            "parking_id" => "required",
            "car_number" => "required",
            "car_brand" => "nullable",
        ];
    }
}
