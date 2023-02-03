<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Session;

class ChooseStoneController extends Controller
{
    //
    public function Select_stone(Request $request ,$id){
        $client = new Client();
        $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond', [
            'form_params' => [
                'certificate'=> $id,
                'token' => '6913277571670500485',
                'diamond_type' => 'natural',
            ],
        ]);
        $config = json_decode($response->getBody(), true);
        $data1['diamond_data'] = $config['data']['data'][0];
        if (request()->routeIs('settings')){
            session(['certificate' => $data1['diamond_data']['certificate_no'],'rates' => $data1['diamond_data']['rate'],'shapes' => $data1['diamond_data']['shape'],'currency' => $data1['diamond_data']['currency_symbol']]);
            return view('ring');
            }
         return view('SelectStone')->with($data1);
    }
}
