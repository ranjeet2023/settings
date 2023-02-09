<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class SelectRingController extends Controller
{
    public function All_Setting(Request $request, $id = null)
    {
        $client = new Client();
        $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond', [
            'form_params' => [
                'certificate' => $id,
                'token' => '6913277571670500485',
                'diamond_type' => 'natural',
            ],
        ]);
        $config = json_decode($response->getBody(), true);
        $data1['diamond_data'] = $config['data']['data'][0];
        Session::put(['certificate' => $data1['diamond_data']['certificate_no'], 'rates' => $data1['diamond_data']['rate'], 'shapes' => $data1['diamond_data']['shape'], 'currency' => $data1['diamond_data']['currency_symbol']]);
        $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjk1Y2ZjOGFhZDJkMTk0NWI5YjM4YzY3OTdhOGJhZTU1NGQ2YzE1ZmQ3NmEzYTJiOTI0YWJmOWQ1NDQ2ZTFjNDQ5ZTcyZDIyYjI3ZmVkYzAiLCJpYXQiOjE2NzU4NTA3MDguNDk1OTU5OTk3MTc3MTI0MDIzNDM3NSwibmJmIjoxNjc1ODUwNzA4LjQ5NTk2MzA5NjYxODY1MjM0Mzc1LCJleHAiOjE3MDczODY3MDguNDkwMjAwMDQyNzI0NjA5Mzc1LCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.fvnTlAeYphXnaSTMX2LqzW-4-c308prlO4EJHFhnryeoxM1JnHYzvWN88IK67NX_M2BOEAImTftKRsWHFTxGmEocWae6sLiG2UfU46dnc85azrIFtMZ7s0MkNSiBrs7Hnb-cbxwRj69deeZH4RLJk9tK61qJ8PsgyYIRD12hJ9nS2e4f36QTp43lBuPFpYCI6M7xqWaqbTF4hUkD7at0E8LpCNnlbXV9fePHqMMAR58Y3KN6GJmcBdM93wc-IbfX2HCSgnrishZzIQrCmriOb8P06fJvPP-FDDVGGnCCZlVLj1XqVPv5v_YN29KgN4vMAhxdtYACnVjMMJZm1KcE8dzYpc1TzzUA8q-yZOW5P5D52h57cGQbhd--GiyIHfgLGNeyiDt9svrP28NwOBSl-Zy77WkMq6NucreBE8Aoh-N_8r_0bF_nZMqCw359881PbFAFDv5Cv9YANhsYKm6Rw4LvpeQV0APQw38IakQQbvv7tXVdlQjeDpwdVqu2VOh-oBBFgvgshvEZAnAz79zerf4wDN6rnyJrTWYpAqLHElqH6cjvO0po1uMEnyLf8OclbIPv2rmKynFQJlISTtS-dEHtZH4hO2iDrUdA80dHD2mv5wVwQS0y-UY8vgwsBY7qzonRh6GLAFDtIF7NY-PIBe4m7-OA9ZJoewG__inmEMU';
        $response = $client->request('POST', 'https://thediamondport.com/api/get-semi-product', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
            ],
        ]);
        $Ring_data = json_decode($response->getBody()->getContents(), true);
        $rings['ring_data'] = $Ring_data['data'];
        return view('ring')->with($rings);
    }

    public function Select_setting(Request $request, $product_id = null)
    {
        $settingtype = $request->query('settingtype');
        $product_id = $request->query('product_id');
        $ring_image = $request->query('image');
        $metal_type = $request->query('metal_type');
        $purity = $request->query('purity');
        $productcost = $request->query('productcost');
        $product_title = $request->query('product_title');
        $product_name = $request->query('product_name');
        Session::put(['settingtype' => $settingtype, 'ring_image' => $ring_image, 'metal_type' => $metal_type, 'purity' => $purity, 'productcost' => $productcost,
            'product_title' => $product_title, 'product_name' => $product_name, 'product_id' => $product_id]);
        return view('SelectRing');
    }

    public function ring_view()
    {

        return view('SelectRing');

    }

    public function Settings()
    {
        return view('preview');
    }

    public function destroy_ring(Request $request)
    {
        Session::forget('ring_image');
        Session::forget('ring_style');
        Session::forget('ring_rates');
        Session::forget('settingtype');
        Session::forget('product_id');
        Session::forget('metal_type');
        Session::forget('purity');
        Session::forget('productcost');
        Session::forget('product_title');
        Session::forget('product_name');
        return redirect()->route('settings');
    }
    public function destroy_diamond(Request $request)
    {
        Session::forget('shapes');
        Session::forget('rates');
        return redirect()->route('index');
    }
}
