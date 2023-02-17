<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class ShapeController extends Controller
{
    public function index(Request $request)
    {
        if (session::has('shapes')) {
            return redirect()->route('choose_ring');
        }
        $client = new Client();
        $response = $response = $client->post('https://stage.thediamondport.com/api/get_config', [
            'query' => ['token' => '6913277571670500485'],
        ]);
        $data['config'] = json_decode($response->getBody()->getContents(), true);
        return view('index')->with($data);

    }

    public function fetch_diamond(Request $request)
    {
        $client = new Client();
        if (!empty($request->input('prevShape'))) {
            $shapes = $request->input('prevShape');
            $shape = implode(',', $shapes);
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
        if (!empty($request->input('fancy_color'))) {
            $fancy_colors = $request->input('fancy_color');
            $fancycolor = implode(',', $fancy_colors);
        } else {
            $fancycolor= null;
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
        if (!empty($request->input('carat'))) {
            $carats = $request->input('carat');
            $carat = implode('-', $carats);
        } else {
            $carat =null ;
        }
        if (!empty($request->input('table'))) {
            $tables = $request->input('table');
            $table = implode('-', $tables);
        } else {
            $table =null ;
        }
        if (!empty($request->input('depth'))) {
            $depths = $request->input('depth');
            $depth = implode('-', $depths);
        } else {
            $depth =null ;
        }
        $page = $request->input('page');
        // $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond', [
            $response = $client->post('https://thediamondport.com/api/wh_search_diamond', [
            'form_params' => [
                'page' => $page,
                'shape' => $shape,
                'color' => $color,
                'clarity' => $clarity,
                'carat_size' =>$carat,
                'lab' => $lab,
                'cut' => $cut,
                'polish' => $polish,
                'symmetry' => $symmetry,
                'fluorescence' => $fluorescence,
                'eyeclean' => $eyeclean,
                'table' => $table,
                'depth' => $depth,
                'fancy_color' => $fancycolor,
                'token' => '20992664171672638853',
                'diamond_type' => 'natural',
            ],
        ]);
        $config = json_decode($response->getBody(), true);
        $results = $config['data']['data'];
        $total_diamond = $config['data']['total'];
<<<<<<< HEAD
        print
=======
>>>>>>> 704d97044bf2d7869765b98ca51e12a6321cdb0d
        $artilces = '';
        if ($request->ajax()) {
            if (!empty($request->input('list_view'))) {
                foreach ($results as $result) {
                    if(empty($result['image'])) {
                        $img = url('assets/img/shape/'.ucfirst(strtolower($result['shape'])) . '.png');
                    }else{
                        $img=$result['image'];
                    }
                    $artilces .= '
                    <a href="' . url('diamondDetails') . '/' . $result['certificate_no'] . '" style="text-decoration:none">
                <div class="diamond-list-row" style="border-left: 3px solid rgb(2, 190, 232); width: 100%; color: rgb(49, 79, 222);">
                <img src="'.$img.'" alt="diamond">
                <p class="list-shape">' . $result['shape'] . ' </p>
                <p class="list-size">' . $result['carat'] . ' </p>
                <p class="list-color">' . $result['color'] . '</p>
                <p class="list-clarity">' . $result['clarity'] . '</p>
                <p class="list-cut">' . $result['cut'] . '</p>
                <p class="list-pol">' . $result['polish'] . '</p>
                <p class="list-sym">' . $result['symmetry'] . '</p>
                <p class="list-fluor">' . $result['fluorescence'] . '</p>
                <p class="list-lab">' . $result['lab'] . '</p>
                <p class="list-report-no">' . $result['lab'] . '</p>
                <p class="list-price">$' . $result['rate'] . '</p>
            </div>   </a>' ;
                }
            } else {
                foreach ($results as $result) {
                    if(empty($result['image'])) {
                        $img = url('assets/img/shape/'.ucfirst(strtolower($result['shape'])) . '.png');
                    }else{
                        $img=$result['image'];
                    }
                    $artilces .= '
                <div class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root entityCard css-1okfn8i">
                <div class="imageBox MuiBox-root css-0">
                <img src="'.$img.'" alt="diamond"></div>
                <div class="MuiCardContent-root infoBox css-1qw96cp" style="color: rgb(49, 79, 222);">
                    <div class="MuiBox-root css-73nay0">
                        <h3>  ' . $result['shape'] . ' ' . $result['carat'] . ' '."Carat".' ' . $result['color'] . '  ' . $result['clarity'] . ' ' . $result['polish'] . ' ' . $result['cut'] . ' ' . $result['symmetry'] . ' ' . $result['fluorescence'] . ' </h3>
                    </div>
                    <div class="MuiBox-root css-69i1ev">
                        <h2>' . $result['currency_symbol'] . ' ' . $result['rate'] . '</h2>
                        <a href="' . url('diamondDetails') . '/' . $result['certificate_no'] . '">
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall css-1s9fsba" tabindex="0" type="button">
                        View<span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </button>
                        </a>
                    </div>
                </div>
            </div>';
                }

            }
            if (empty($artilces)) {
<<<<<<< HEAD
                    $response = array(
                        'empty' => true
                    );
                } else {
                    $response_data = array(
                        'articles' => $artilces,
                        'tatol_diamond' => $total_diamond,
                        'empty' => false
                    );
                }
            $json_response = json_encode($response_data);
=======
                $response = array(
                    'empty' => true
                );
            } else {
                $response = array(
                    'articles' => $artilces,
                    'data2' => $total_diamond,
                    'empty' => false
                );
            }
            $json_response = json_encode($response);
>>>>>>> 704d97044bf2d7869765b98ca51e12a6321cdb0d
            return $json_response;
        }
    }

    public function diamondDetails(Request $request, $id = null)
    {
        $client = new Client();
        $response = $client->post('https://thediamondport.com/api/wh_search_diamond', [
            'form_params' => [
                'certificate' => $id,
                'token' => '20992664171672638853',
                'diamond_type' => 'natural',
            ],
        ]);
        $config = json_decode($response->getBody(), true);
        $data['diamond_data'] = $config['data']['data'][0];
        return view('diamonddetails')->with($data);
    }
    public function selectdiamond(request $request)
    {
        $diamond_id = $request->diamond_id;
        $client = new Client();
        $result = $client->post('https://thediamondport.com/api/wh_search_diamond', [
            'form_params' => [
                'certificate' => $diamond_id,
                'token' => '20992664171672638853',
                'diamond_type' => 'natural',
            ],
        ]);
        $config = json_decode($result->getBody(), true);
        $data['diamond_data'] = $config['data']['data'][0];
        Session::put(['certificate' => $data['diamond_data']['certificate_no'], 'rates' => $data['diamond_data']['rate'], 'shapes' => $data['diamond_data']['shape'], 'currency' => $data['diamond_data']['currency_symbol']]);
        $response['message'] = 'success';
        return json_encode($response);
    }

    public function choose_ring(Request $request, $id = null)
    {
        $client = new Client();
        $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTA2NDJiZDkwYjFkZjE0M2MzZTU2YWEzMjg0NmIwMDcxNzMxZTkzNWE4ZjUwY2JhZjI3MGI5NGRjYjZmNmY4ODRmOTMzODY2ZTI0MzU3ZjUiLCJpYXQiOjE2NzU5MzU1MDcuOTk4NTA4OTMwMjA2Mjk4ODI4MTI1LCJuYmYiOjE2NzU5MzU1MDcuOTk4NTExMDc1OTczNTEwNzQyMTg3NSwiZXhwIjoxNzA3NDcxNTA3Ljk5MTI4MTk4NjIzNjU3MjI2NTYyNSwic3ViIjoiOSIsInNjb3BlcyI6W119.WPKkQZ-JOBmifhMvLMJWDp-Wy_Ddu_DAKFxYvVHapH1mCy623VXaORFHp4GHsX80isw35xXmEyYWd2ZwTpzRnd4KoK0Vr0W0j4nK93qW4fInJ10FuKJgJSGUkXHuZYU0-OH2ehq3_BAsch4LiKrSsfF69gU4IoPT-HysSuTrrpChE2BtajJSXDirn3JAXhCrn79NfJAtOes5oQyAHpFRkke0CPUAKEKM5Ie67f-KeQaBoZjGUNpx_UAUjUfCLllq-J9QTnyprZ5xKmScilW8CCoIgmnDTUepQ9-rUCNG_L1RkT5PBgwHttTOrpbLOMecUqxTTr3xJ-h_n2lLBZbrGc68HNz1lvD_KYlf2-VHQ5Dd25INPqTDG1VJRfFOcyaV2n1eVO-XV0eM-pOQNDBagpAK5jjEt96UuNKNx48dj7uchBkLE-9mjqMCKFT4GALQvaXDp1TtwANQgPow3lVa69cFiztat_HvTL52N6YHDSKAsdKGvf_1cKbhkoGPf6cVaGdBcdJ8KDgzZITkvWljwnY129uUUn4tr2kTglFC9i0yaRXcvlhhWykPmt6oHATOzsvkrzxe0HN5iqDCmCdvfjMgOZzc5CdTYkPjDR7fgOeAUDe6XKos-mLWIcbXvq2secQDDLZQR8FT3OQ_BGViJrPUpI8Ioduh9kj47yuWKls';
        $response = $client->request('POST', 'https://thediamondport.com/api/get-semi-product', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
            ],
        ]);
        $Ring_data = json_decode($response->getBody()->getContents(), true);
        $rings['ring_data'] = $Ring_data['data'];
        return view('ring')->with($rings);
    }

    public function select_ring()
    {

        if (session::has('ring_image')) {
            return view('ring_diamond');
        }
        $client = new Client();
        $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTA2NDJiZDkwYjFkZjE0M2MzZTU2YWEzMjg0NmIwMDcxNzMxZTkzNWE4ZjUwY2JhZjI3MGI5NGRjYjZmNmY4ODRmOTMzODY2ZTI0MzU3ZjUiLCJpYXQiOjE2NzU5MzU1MDcuOTk4NTA4OTMwMjA2Mjk4ODI4MTI1LCJuYmYiOjE2NzU5MzU1MDcuOTk4NTExMDc1OTczNTEwNzQyMTg3NSwiZXhwIjoxNzA3NDcxNTA3Ljk5MTI4MTk4NjIzNjU3MjI2NTYyNSwic3ViIjoiOSIsInNjb3BlcyI6W119.WPKkQZ-JOBmifhMvLMJWDp-Wy_Ddu_DAKFxYvVHapH1mCy623VXaORFHp4GHsX80isw35xXmEyYWd2ZwTpzRnd4KoK0Vr0W0j4nK93qW4fInJ10FuKJgJSGUkXHuZYU0-OH2ehq3_BAsch4LiKrSsfF69gU4IoPT-HysSuTrrpChE2BtajJSXDirn3JAXhCrn79NfJAtOes5oQyAHpFRkke0CPUAKEKM5Ie67f-KeQaBoZjGUNpx_UAUjUfCLllq-J9QTnyprZ5xKmScilW8CCoIgmnDTUepQ9-rUCNG_L1RkT5PBgwHttTOrpbLOMecUqxTTr3xJ-h_n2lLBZbrGc68HNz1lvD_KYlf2-VHQ5Dd25INPqTDG1VJRfFOcyaV2n1eVO-XV0eM-pOQNDBagpAK5jjEt96UuNKNx48dj7uchBkLE-9mjqMCKFT4GALQvaXDp1TtwANQgPow3lVa69cFiztat_HvTL52N6YHDSKAsdKGvf_1cKbhkoGPf6cVaGdBcdJ8KDgzZITkvWljwnY129uUUn4tr2kTglFC9i0yaRXcvlhhWykPmt6oHATOzsvkrzxe0HN5iqDCmCdvfjMgOZzc5CdTYkPjDR7fgOeAUDe6XKos-mLWIcbXvq2secQDDLZQR8FT3OQ_BGViJrPUpI8Ioduh9kj47yuWKls';
        $response = $client->request('POST', 'https://thediamondport.com/api/get-semi-product', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
            ],
        ]);
        $Ring_data = json_decode($response->getBody()->getContents(), true);
        $rings['ring_data'] = $Ring_data['data'];
        return view('ring')->with($rings);

    }

    public function confirm_ring(Request $request)
    {

        $setting_type = $request->settingtype;
        $product_id = $request->product_id;
        $ring_image = $request->image;
        $metal_type = $request->metal_type;
        $purity = $request->purity;
        $productcost = $request->productcost;
        $product_title = $request->product_title;
        $product_name = $request->product_name;
        Session::put(['settingtype' => $setting_type, 'ring_image' => $ring_image, 'metal_type' => $metal_type, 'purity' => $purity, 'productcost' => $productcost,
            'product_title' => $product_title, 'product_name' => $product_name, 'product_id' => $product_id]);
        $response['message'] = 'success';
        return json_encode($response);
    }
    public function ring_view()
    {
        return view('select_ring');
    }

    public function ring_diamond()
    {
        return view('ring_diamond');
    }

    public function remove_ring(Request $request)
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
        return redirect()->route('choose_ring');
    }

    public function remove_diamond(Request $request)
    {
        Session::forget('shapes');
        Session::forget('rates');
        return redirect()->route('index');
    }
}
