<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ShapeController extends Controller
{
    //
    public function index(Request $request)
    {
        $client = new Client();
        $response = $response = $client->post('https://stage.thediamondport.com/api/get_config', [
            'query' => ['token' => '6913277571670500485']
        ]);
        $configs = json_decode($response->getBody()->getContents());
           $data['config']=$configs;
            $token = "6913277571670500485";
            $client = new Client();
            $searchParams = [
                // 'shape' => 'round',
                // 'weight' => $request->input('weight'),
                'diamond_type' => 'natural',
            ];
            $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond?token='.$token, [
                'form_params' => $searchParams
            ]);
            $config  = json_decode($response->getBody(), true);
            $data['diamond_data'] = $config['data']['data'];

        return view('welcome')->with($data);
    }
    public function search(Request $request)
    {
        $client = new Client();
        $shape = $request->input('shape');
        $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond',[
            'form_params' => [
                'shape' => $shape,
                'token' => '6913277571670500485',
                'diamond_type' => 'natural',
            ]
        ]);
        $config = json_decode($response->getBody(), true);
        $data['diamond_data'] = $config['data']['data'];
        // echo "<pre>";
        // print_R($data);
        // // die;
        return $data;
    }

}
