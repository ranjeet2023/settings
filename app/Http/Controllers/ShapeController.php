<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ShapeController extends Controller
{
    //
    public function index(Request $request)
    {
        $client = new Client();

        $response = $response = $client->post('https://stage.thediamondport.com/api/get_config', [
            'query' => ['token' => '6913277571670500485'],
        ]);
        $configs = json_decode($response->getBody()->getContents());
        $data['config'] = $configs;
        return view('welcome')->with($data);
    }
    public function fetch_diamond(Request $request)
    {


        $client = new Client();

        if (!empty($request->input('prevShape'))) {
            $shape = $request->input('prevShape');
        } else {
            $shape = null;
        }
        if (!empty($request->input('eyeclean'))) {
            $eyeclean = $request->input('eyeclean');
        } else {
            $eyeclean = null;
        }
        if (!empty($request->input('color'))) {
            $colors = $request->input('color');
            $color = implode(',', $colors);
        } else {
            $color = null;
        }
        if (!empty($request->input('clarity'))) {
            $claritys = $request->input('clarity');
            $clarity = implode(',', $claritys);
        } else {
            $clarity = null;
        }
        if (!empty($request->input('lab'))) {
            $labs = $request->input('lab');
            $lab = implode(',', $labs);
        } else {
            $lab = null;
        }
        if (!empty($request->input('cut'))) {
            $cuts = $request->input('cut');
            $cut = implode(',', $cuts);
        } else {
            $cut = null;
        }
        if (!empty($request->input('polish'))) {
            $polishs = $request->input('polish');
            $polish = implode(',', $polishs);
        } else {
            $polish = null;
        }
        if (!empty($request->input('symmetry'))) {
            $symmetrys = $request->input('symmetry');
            $symmetry = implode(',', $symmetrys);
        } else {
            $symmetry = null;
        }
        if (!empty($request->input('fluorescence'))) {
            $fluorescences = $request->input('fluorescence');
            $fluorescence = implode(',', $fluorescences);
        } else {
            $fluorescence = null;
        }
        if (!empty($request->input('minp')) && !empty($request->input('maxp'))) {
            $min = $request->input('minp');
            $max = $request->input('maxp');
        } else {
            $min = null;
            $max = null;
        }
        $page = $request->input('page');
        $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond', [
            'form_params' => [
                'page' => $page,
                'shape' => $shape,
                'color' => $color,
                'clarity' => $clarity,
                'carat' => $min - $max,
                'lab' => $lab,
                'cut' => $cut,
                'polish' => $polish,
                'symmetry' => $symmetry,
                'fluorescence' => $fluorescence,
                'eyeclean' => $eyeclean,
                'token' => '6913277571670500485',
                'diamond_type' => 'natural',
            ],
        ]);
        $config = json_decode($response->getBody(), true);
        $data['diamond_data'] = $config['data']['data'];
        $results = $data['diamond_data'];

        $artilces = '';
        if ($request->ajax()) {
            foreach ($results as $result) {
                $artilces .= '<div class="col-3 col-md-3">
              <a href="'.url('select').'/'. $result['certificate_no'] .'"><img class="card-img-top" src="' . url('assets/img/shape/'.ucfirst(strtolower($result['shape'])).'.png') . '" alt="Card image cap"></a>
                <div class="card-body">
                  <p class="card-text">  ' . $result['shape'] . '
                  ' . $result['color'] . '
                  ' . $result['clarity'] . ' </p>
                </div>
                <div class="card-footer">
                  <h3><b>' . $result['rate'] . '' . $result['currency_symbol'] . '</b></h3>
                </div>
              </div>';
            }
            return $artilces;

        }
        return view('welcome');
    }

}
