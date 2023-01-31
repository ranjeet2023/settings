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
                'diamond_type' => 'natural',
            ];
            $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond?token='.$token, [
                'form_params' => $searchParams,
            ]);
            $config  = json_decode($response->getBody(), true);
            $data['diamond_data'] = $config['data']['data'];
            $data['pegination']=$config['data'];
        return view('welcome')->with($data);
    }
    public function test(){
        return view('test');
        $client = new Client();
        $token = "6913277571670500485";
        $searchParams = [
            'diamond_type' => 'natural',
            'page'=>3,
        ];
        $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond?token='.$token, [
            'form_params' => $searchParams,
        ]);
        $config  = json_decode($response->getBody(), true);
        print_r($config);
        die;
    }
    public function search(Request $request)
    {
        $client = new Client();

        $shape = $request->input('shape');
        $eyeclean = $request->input('eyeclean');
        if(!empty( $request->input('color'))){
            $colors = $request->input('color');
            $color = implode(',', $colors);
        }else{
            $color=null;
        }
        if(!empty($request->input('clarity'))){
            $claritys = $request->input('clarity');
            $clarity = implode(',', $claritys);
        }else{
            $clarity=null;
        }
        if(!empty($request->input('lab'))){
            $labs = $request->input('lab');
            $lab = implode(',', $labs);
        }else{
            $lab=null;
        }
        if(!empty($request->input('cut'))){
            $cuts = $request->input('cut');
            $cut = implode(',', $cuts);
        }else{
            $cut=null;
        }
        if(!empty($request->input('polish'))){
            $polishs = $request->input('polish');
            $polish = implode(',', $polishs);
        }else{
            $polish=null;
        }
        if(!empty($request->input('symmetry'))){
            $symmetrys = $request->input('symmetry');
            $symmetry = implode(',', $symmetrys);
        }else{
            $symmetry=null;
        }
        if(!empty($request->input('fluorescence'))){
            $fluorescences = $request->input('fluorescence');
            $fluorescence = implode(',', $fluorescences);
        }else{
            $fluorescence=null;
        }
        if(!empty($request->input('min_price')) && !empty($request->input('max_price'))){
            $min = $request->input('min_price');
            $max = $request->input('min_price');
        }else{
            $min=null;
            $max=null;
        }
        $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond',[
            'form_params' => [
                'shape' => $shape,
                'color' => $color,
                'clarity' => $clarity,
                'carat'=> $min-$max,
                'lab' => $lab,
                'cut' => $cut,
                'polish' => $polish,
                'symmetry' => $symmetry,
                'fluorescence' => $fluorescence,
                'eyeclean' => $eyeclean,
                'token' => '6913277571670500485',
                'diamond_type' => 'natural',
            ]
        ]);
        $config = json_decode($response->getBody(), true);
        $data['diamond_data'] = $config['data']['data'];
        return $data;
    }


    // public function search(Request $request)
    // {
    //     $client = new Client();
    //     $shape = $request->input('shape');
    //     $color = $request->input('color');
    //     $clarity = $request->input('clarity');
    //     // echo "<pre>";
    //     // print_r($request->all());
    //     // die;

    //     $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond',[
    //         'form_params' => [
    //             'shape' => $shape,
    //             'color' => $color,
    //             'clarity' => $clarity,
    //             'token' => '6913277571670500485',
    //             'diamond_type' => 'natural',
    //         ]
    //     ]);
    //     $config = json_decode($response->getBody(), true);
    //     $data['diamond_data'] = $config['data']['data'];
    //     // echo "<pre>";
    //     // print_R($data);
    //     // // die;
    //     return $data;
    // }

}
