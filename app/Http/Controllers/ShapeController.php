<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

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
            $data['pagination']=$config['data'];
           return view('welcome')->with($data);
    }
    public function pagination(Request $request){

          $data= user::orderBy('created_at','desc')->paginate(6);
          $data=compact('data');
         return view('test')->with($data);

        // $client = new Client();
        // $page=$request->input('page');
        // $response = $response = $client->post('https://stage.thediamondport.com/api/get_config', [
        //     'query' => ['token' => '6913277571670500485']
        // ]);
        // $configs = json_decode($response->getBody()->getContents());
        //     $data['config']=$configs;
        // $token = "6913277571670500485";
        // $searchParams = [
        //     'diamond_type' => 'natural',
        //     'page'=>$page,
        // ];
        // $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond?token='.$token, [
        //     'form_params' => $searchParams,
        // ]);
        // $config  = json_decode($response->getBody(), true);
        // $data['diamond_data'] = $config['data']['data'];
        // $data['pagination']=$config['data'];
        // return  view('test')->with($data);
        //  return $data;
    }
    public function search(Request $request)
    {

        $client = new Client();

        $response = $client->post('https://stage.thediamondport.com/api/get_config', [
            'query' => ['token' => '6913277571670500485']
        ]);
        $configs = json_decode($response->getBody()->getContents());
        $data['config']=$configs;
        if(!empty($request->input('prevShape'))){
            $shape  = $request->input('prevShape');
        }else{
            $shape =null;
        }
        if(!empty($request->input('eyeclean'))){
            $eyeclean  = $request->input('eyeclean');
        }else{
            $eyeclean =null;
        }
        // $eyeclean = $request->input('eyeclean');
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
        if(!empty($request->input('minp')) && !empty($request->input('maxp'))){
            $min = $request->input('minp');
            $max = $request->input('maxp');
        }else{
            $min=null;
            $max=null;
        }
        $page=$request->input('page');


        $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond',[
            'form_params' => [
                'page'=>$page,
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
        $results=$data['diamond_data'];

        $artilces = '';
        if ($request->ajax()) {
            $count=0;
            $artilces.='<div style="position: relative;">
            <div class="vdb-rb-row" id="vdbrb_stone_grid_view_row" >';
            foreach ($results as $result) {
                $artilces.='<div class="vdb-rb-col-md-3 vdb-rb-col-sm-6">
                    <div class="vdb-rb-list-product-item">
                            <div class="vdb-rb-product-img-wrapper">
                                <img src="'. url('assets/img/661004702B.jpg').'" alt="Emerald 0.78 U SI3" class="vdb-rb-img-fluid">
                            </div>
                            <div class="vdb-rb-product-details">
                                <p class="vdb-rb-product-name">
                                '.$result['shape'].'
                                '.$result['color'].'
                                '.$result['clarity'].'
                                  </p>
                                <div class="vdb-rb-price-block">
                                    <h3><b>'.$result['rate'].''.$result['currency_symbol'].'</b></h3>
                                </div>
                            </div>
                    </div>
                </div>';
            $count++;
            }
            $artilces.='</div> </div>';
            return $artilces;
        }
        return view('welcome')->with($data);
    }
    public function fetch_diamond(Request $request)
    {
        $token = "6913277571670500485";
        $client = new Client();
        $response = $response = $client->post('https://stage.thediamondport.com/api/get_config', [
            'query' => ['token' => '6913277571670500485']
        ]);
        $configs = json_decode($response->getBody()->getContents());
            $data['config']=$configs;

        $searchParams = [
            'diamond_type' => 'natural',
        ];
        $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond?token='.$token, [
            'form_params' => $searchParams,
        ]);
        $config = json_decode($response->getBody(), true);
        $data['diamond_data'] = $config['data']['data'];
        $results=$data['diamond_data'];
        $artilces = '';
        if ($request->ajax()) {
            $count=0;
            $artilces.='<div style="position: relative;">
            <div class="vdb-rb-row" id="vdbrb_stone_grid_view_row" >';
            foreach ($results as $result) {
                $artilces.='<div class="vdb-rb-col-md-3 vdb-rb-col-sm-6">
                    <div class="vdb-rb-list-product-item">
                            <div class="vdb-rb-product-img-wrapper">
                                <img src="'. url('assets/img/661004702B.jpg').'" alt="Emerald 0.78 U SI3" class="vdb-rb-img-fluid">
                            </div>
                            <div class="vdb-rb-product-details">
                                <p class="vdb-rb-product-name">
                                '.$result['shape'].'
                                '.$result['color'].'
                                '.$result['clarity'].'
                                  </p>
                                <div class="vdb-rb-price-block">
                                    <h3><b>'.$result['rate'].''.$result['currency_symbol'].'</b></h3>
                                </div>
                            </div>
                    </div>
                </div>';
            $count++;
            }
            $artilces.='</div> </div>';
            return $artilces;
        }
        return view('welcome')->with($data);
    }


}
