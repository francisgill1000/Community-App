<?php

namespace App\Http\Controllers;

use App\Models\Community\RoomSubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class DigitalOceanController extends Controller
{
    public function getDropletSizes()
    {
        return RoomSubCategory::where("company_id",2)->pluck("name");
        $token = 'dop_v1_e6472297b668f7ca1ebe93f516de4ae69d3e9b8afeda048f147c7cf1d7bc56a8';

        $response = Http::withoutVerifying()->withHeaders([
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . $token,
        ])->get('https://api.digitalocean.com/v2/sizes');

        if ($response->successful()) {
            $sizes = $response->json()['sizes'];
            return response()->json($sizes);
        } else {
            return response()->json(['error' => 'Failed to fetch Droplet sizes'], $response->status());
        }
    }
}
