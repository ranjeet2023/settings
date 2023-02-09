<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Session;
use Illuminate\Routing\Route;

class ChooseStoneController extends Controller
{
    public function Select(Request $request ,$id=null){
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
        return view('SelectStone')->with($data1);
    }
}
