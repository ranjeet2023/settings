<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ChooseStoneController extends Controller
{
    //
    public function Select_stone($id){
        $client = new Client();
        $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond', [
            'form_params' => [
                'certificate'=> $id,
                'token' => '6913277571670500485',
                'diamond_type' => 'natural',
            ],
        ]);
        $config = json_decode($response->getBody(), true);
        $data['diamond_data'] = $config['data']['data'];
        // echo "<pre>";
        // print_r($data);
        // die;
       return view('SelectStone')->with($data);
    }
}
