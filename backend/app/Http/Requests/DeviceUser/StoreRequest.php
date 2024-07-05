<?php

namespace App\Http\Requests\DeviceUser;

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
            'name' => 'nullable|string|max:255',
            'userCode' => 'nullable|string|max:255',
            'code' => 'nullable|string|max:255',
            'cardData' => 'nullable|string|max:255',
            'password' => 'nullable|string|max:255',
            'job' => 'nullable|string|max:255',
            'dept' => 'nullable|string|max:255',
            'identity' => 'integer|in:0,1', // Assuming identity is an enum or boolean
            'cardStatus' => 'integer|in:0,1', // Assuming cardStatus is an enum or boolean
            'cardType' => 'integer|in:0,1', // Assuming cardType is an enum or boolean
            'enterStatus' => 'integer|in:0,1', // Assuming enterStatus is an enum or boolean
            'expiry' => 'nullable|date', // Assuming expiry is a date field
            'openTimes' => 'integer|min:0',
            'timeGroup' => 'integer|min:1',
            'faceImage' => 'nullable|string|max:255', // Assuming faceImage is a URL or base64 string
        ];
    }
}
