<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class ShapeController extends Controller
{
    public function index(Request $request)
    {
        // if (session::has('shapes')) {
        //     return redirect()->route('choose_ring');
        // }
        $client = new Client();
        $response = $response = $client->post('https://thediamondport.com/api/get_config', [
            'query' => ['token' => '20992664171672638853'],
        ]);
        $data['config'] = json_decode($response->getBody()->getContents(), true);
        return view('index')->with($data);

    }

    public function fetch_diamond(Request $request)
    {
        $client = new Client();
        if (!empty($request->input('diamond'))) {
            $diamond = $request->input('diamond');
        } else {
            $diamond = 'Natural';
        }

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
            $fancycolor = null;
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
            $carat = null;
        }
        if (!empty($request->input('table'))) {
            $tables = $request->input('table');
            $table = implode('-', $tables);
        } else {
            $table = null;
        }
        if (!empty($request->input('depth'))) {
            $depths = $request->input('depth');
            $depth = implode('-', $depths);
        } else {
            $depth = null;
        }
        $page = $request->input('page');
        // $response = $client->post('https://stage.thediamondport.com/api/wh_search_diamond', [
        $response = $client->post('https://thediamondport.com/api/wh_search_diamond', [
            'form_params' => [
                'page' => $page,
                'shape' => $shape,
                'color' => $color,
                'clarity' => $clarity,
                'carat_size' => $carat,
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
                'diamond_type' => $diamond,
            ],
        ]);
        $config = json_decode($response->getBody(), true);
        $results = $config['data']['data'];
        $total_diamond = $config['data']['total'];

        $artilces = '';
        if ($request->ajax()) {
            if (!empty($request->input('list_view'))) {
                foreach ($results as $result) {
                    if (empty($result['image'])) {
                        $img = url('assets/img/shape/' . ucfirst(strtolower($result['shape'])) . '.png');
                    } else {
                        $img = $result['image'];
                    }
                    $artilces .= '
                    <a href="' . url('diamondDetails') . '/' . $result['certificate_no'] . '" style="text-decoration:none">
                <div class="diamond-list-row" style="border-left: 3px solid rgb(2, 190, 232); width: 100%; color: rgb(49, 79, 222);">
                <img src="' . $img . '" alt="diamond">
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
            </div>   </a>';
                }
            } else {
                foreach ($results as $result) {
                    if (empty($result['image'])) {
                        $img = url('assets/img/shape/' . ucfirst(strtolower($result['shape'])) . '.png');
                    } else {
                        $img = $result['image'];
                    }
                    $artilces .= '
                <div class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root entityCard css-1okfn8i">
                <div class="imageBox MuiBox-root css-0">
                <img src="' . $img . '" alt="diamond"></div>
                <div class="MuiCardContent-root infoBox css-1qw96cp" style="color: rgb(49, 79, 222);">
                    <div class="MuiBox-root css-73nay0">
                        <h3>  ' . $result['shape'] . ' ' . $result['carat'] . ' ' . "Carat" . ' ' . $result['color'] . '  ' . $result['clarity'] . ' ' . $result['polish'] . ' ' . $result['cut'] . ' ' . $result['symmetry'] . ' ' . $result['fluorescence'] . ' </h3>
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
                $response_data = array(
                    'empty' => true,
                );
            } else {
                $response_data = array(
                    'articles' => $artilces,
                    'tatol_diamond' => $total_diamond,
                    'empty' => false,
                );
            }
            $json_response = json_encode($response_data);
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
        Session::put('diamond', $data['diamond_data']);
        $response['message'] = 'success';
        return json_encode($response);
    }

    public function getconfigring()
    {
        if (session::has('ring')) {
            return redirect()->route('ring_diamond');
        }
        $client = new Client();
        $token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjVhN2Y5YjExMjgyYWEzYjkyNTMwNzQ2OWM0OWQ1ZWFlNzA1MWYyZTVmZWEyMmU5MzAxODRjOTE0OWU0YjU5MDNkMjExN2NkZWEwZWUzODUiLCJpYXQiOjE2ODI2ODYzMTUuMjQyLCJuYmYiOjE2ODI2ODYzMTUuMjQyMDA0LCJleHAiOjE3MTQzMDg3MTUuMTIzNzEzLCJzdWIiOiI0NTIiLCJzY29wZXMiOltdfQ.X5LDvhBeBxH-CbgV-DnhDpITptT4SvCZcB6PBVsNfz7Mzgm-lCyzlhQHY8FjcaG6kCsYyR_aM0CXMEdS_89gEf9-WpO5meD_Eq50LulGSDp-2CLWOcEjj9QSKQTlN_r6gIxcVH_1t2M9ERMrzCbDU8Pb8GRgNrMPS7jJ4HQP_X4ovEN-TdLy_-9Wz9n_bLkH9vVFJ7hk097forCqiRIC0btpHQzqFd2DIIOCmx3167XHy0dn2dCT5oFInnqHP8LcATKxb4bCDhUES5wffcEA5dfOOp_6Hr9KaI9p-OrwoIHNAbD8jnDrUtIdU0AlPNfWe-te7htxpTtoqoP6X1y6NhuvRUPPX2s8yTZ_mROYPWngdVxB-7FUgi6FnfSL-KDfq6C2FSNH0cvxBg_gryuzyYCDC4xb3gbKgmRcW6oeYxrdGr0fPmlHuOtF0axTLf_n4Qf6TpcTQQoQBV4MYkbwqiAY7BtWKa9FTAYFhCfjA1EUlmxu3bxdTqMDaT2fDP6L530DRj3B2oOHebIXIMiKc6dqFhkoopS5zcGx86Jwp5c7mlHtYf2YtLeM4_B0ZTzfZpO2CC20LAG_miBwp6dXxwN1HmnulqQqrOGvArj5sWOofQIdVVI1lSbbCWRbw69Vpf5he47udv-nbjIycGB2w-Yqnzz6uhKVknq6mB9Q8GI';

        $response = $client->request('POST', 'http://127.0.0.1:300/api/get_config_ring', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
            ],

        ]);
        $data['ring_filter'] = json_decode($response->getBody()->getContents(), true);
        return view('ring')->with($data);
    }



    public function all_ring(Request $request)
    {

        $client = new Client();
        $page = $request->input('page');
        if(!empty($request->ringmetal)){
            $metal=$request->ringmetal;
        }else{
            $metal=null;
        }
        if (!empty($request->ringstyle)) {
            $settings = $request->ringstyle;
            $setting= implode(',', $settings);
        } else {
            $setting = null;
        }
        if (!empty($request->maxValue)) {
            $pricemin = $request->minValue;
            if($pricemin==null){
                $pricemin=0;
            }else{
                $pricemin = $request->minValue;
            }
            $pricemax = $request->maxValue;
        } else {
            $pricemin= null;
            $pricemax = null;
        }
        $token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDM3YmY3ZDUwZTk1ZTI4YWVlNTVmYTdiMTBiMjgwYzk3NjI4MDgwMTUxMWFhYTAxNmI2ZDNkNDFhMDNiOTRjZDYyYzUwYTNjZDMzYWE1N2UiLCJpYXQiOiIxNjgyNjg2NTY2LjU5NjAyNiIsIm5iZiI6IjE2ODI2ODY1NjYuNTk2MDI4IiwiZXhwIjoiMTcxNDMwODk2Ni41OTQ1OTUiLCJzdWIiOiI0OTEiLCJzY29wZXMiOltdfQ.iHj-DbCp6XkZaPcTgN2paCS-wGCgIEfxCXbaXB8jrf9OgIUMm6cw7bpzt98_CQCcUbj9-HK_lRvQ-a8NHASHDD7EwLWcj3y5Ze8zwxgdaVwFs2z2CMT_WTzy5KbASRdZ7Ph1-YgHfexqzrXKfOauG6cc4H4HuUCo3FWIRIGGL9UTJz7R478MhimZur4Bp4O1HCC7fhwQTQ99S_mWopHhjAKjLa9cmZyTpx10ZzjvSNIjozx2eKvqUsZxv9Msm9l1RNZJDwg4C4xztms7vI3x3n2RtaqdxCn6pj-G_C7zAS17UWIkOpPp6IMJY8yaEaTHeC_1nS1NQP3C6NZxMxi2FSxxMYDQ2N4nKKHCymIxIzPSvYrEY1zQfI2csYc9b9EdbqTmNy0n5I0sBBhaBUmqu4rgFJo8RY3cDrhdcwSRzdiSpZzrnnMtsDFSZKWnMNJeyoi21IjY7ei-HMm73zqkhQ1oRwapmTyBtfiRM4ZECKyLibTAW2Evv1NdGNdjMwDDvVsbxMxOz-xSVMLUWkX_4c51Bngqikyu-6F1faY-B67g7srYI988efcFOjzdPIrilbbzVSqbXRXcs9X8-UIJVkDtP4GUEcNuBxJG_9diNK4-5PZlHOb9J5cl7AT1RqlYsLA7fXo_WBnSnRYPsz4xrGzf2_lUBAmc-OT5UcR_Tpc';
        $response = $client->request('POST', 'https://integrations.thediamondport.com/feed/get-ring-data', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
            ],
            'form_params' => [
                'page' => $page,
                'metal'=>$metal,
                'sub_category'=>$setting,
                'pricemin'=>$pricemin,
                'pricemax'=>$pricemax,
            ],
        ]);
        dd(json_decode($response->getBody(), true));
        $rings = json_decode($response->getBody()->getContents(), true);
        $artilces = '';
        if ($request->ajax()) {
            if (!empty($request->input('list_view'))) {
                foreach ($rings as $result) {
                        $img =  url('assets/img/shape/' . ucfirst(strtolower($result['sub_category'])) . '.png');
                    $artilces .= '
                                <a href=" ' . url('ring_details') . '/' . $result['id'] . '" style="text-decoration:none">
                                    <div class="diamond-list-row" style="border-left: 3px solid rgb(2, 190, 232); width: 100%; color: rgb(49, 79, 222);">
                                            <img src="' . $result['main_image'] . '" alt="diamond">
                                            <p class="list-shape">' . $result['sub_category'] . ' </p>
                                            <p class="list-size">' . $result['metal_name'] . ' </p>
                                            <p class="list-color">' . $result['design_name'] . '</p>
                                            <p class="list-price">$ ' . $result['total_price'] . '</p>
                                    </div>
                                </a>';
                        }
                    } else {
                        foreach ($rings['data'] as $result) {
                            $artilces .= '
                                <div class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root entityCard css-1okfn8i">
                                    <div class="imageBox MuiBox-root css-0">
                                        <img src="' . $result['main_image'] . '" alt="ring">
                                    </div>
                                    <div class="MuiCardContent-root infoBox css-1qw96cp" style="color: rgb(49, 79, 222);">
                                        <div class="MuiBox-root css-73nay0">
                                            <h3>  ' . $result['sub_category'] . ' ' . $result['metal_name'] . '  ' . $result['design_name'] . '</h3>
                                        </div>
                                        <div class="MuiBox-root css-69i1ev">
                                            <h2>$ ' . $result['total_price'] . '</h2>
                                            <a href="' . url('ring_details') . '/' . $result['id'] . ' ">
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
                            $response_data= array(
                                'empty' => true,
                            );
                        } else {
                            $response_data = array(
                                'articles' => $artilces,
                                // 'total_rings'=>$rings['total_rings'],
                                'empty' => false,
                            );
                        }
                        $json_response = json_encode($response_data);
                        return $json_response;
                    }
                 return;

    }
    public function ringdetails(Request $request)
        {
        $client = new Client();
        $id = $request->id;
        $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNGIzNzg5ZGNiYzc4MzNlZTQ1MzdlZjZjMzRkMDNiYWQwODQ5ODU4NGY3NTMxODZkNDg3NzEyNGViZDM2ZWQwODVjYjcyMjVhMmNlMmU0YmMiLCJpYXQiOjE2Nzc2NjAxODYuNjQ3MjAxLCJuYmYiOjE2Nzc2NjAxODYuNjQ3MjA0LCJleHAiOjE3MDkyODI1ODYuNjQwOTczLCJzdWIiOiI0NzIiLCJzY29wZXMiOltdfQ.OfX2MhycmBqoFpZ3Wf1WinaJfsUTDibQ965snlazaFnJHfmuVaVuPwrXe1n5KyTGxl-zc2JHb_mP-P9a8kOnxCvRSp3WMYrfTvTgkAGaq0_DvZwfrM9JaKjy66TFLMZc8xDMhnKXaXkzsvI58-yKk4Bu8VY9oM1FRqKkfnHmlVikMsIvR0FpBRzjzFLB7wEYN5y3kGOXwnx4rPk1rAfXrtvNktdwZrEsrkyPJYlk79RH_qRlsyPrqdiLMOQjEjooxG8AOBHXqLdXZgMP0Ik6ZuF3A02AkgT4Xd-ME_aKrJ6O2jVxhR_nPHXHKIf_uFycxpMM-sGyGuvUgjQ2br5eOeXuIBuBg-_nHtkiNQXtZynd7YsX0IWePBHEB61y-vQ4bjyuS5ko8RGUgk_HLMbqA0pifeFLnuRm-tQ0ppV7-8Fm23rBpVaHRC-tm7YhcV0p4L33BkM7nFrECY1Z-rO-Z4PQaYDSKdh20UyqRNjkQ-8SWqyujMRGSGfU3C-tsr2NiBA5BmdnKyfeHM-ry08uqnNW19eMc9FY_gqz5ECZvKIXNc8y-e0VI2ruJKa2LuoPel3kXUdajWN2W9zHnQQW08IUgssftXmxzWUf5YDtxR9VtIG3sSnFuWLHQhojwoxiknmJvlgvudHjx477PTxvwQ4gc2IHCyHEOdGEExFzbIA';
        $response = $client->request('POST', 'http://127.0.0.1:300/api/add_ring', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
            ],
            'form_params' => [
                'product_id' => $id,
            ],
        ]);
        $Ring_data = json_decode($response->getBody()->getContents(), true);
        $rings['ring_data'] = $Ring_data['data'];
        return view('select_ring')->with($rings);

    }
    public function confirm_ring(Request $request)
    {
        $client = new Client();
        $id = $request->ring_id;
        $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNGIzNzg5ZGNiYzc4MzNlZTQ1MzdlZjZjMzRkMDNiYWQwODQ5ODU4NGY3NTMxODZkNDg3NzEyNGViZDM2ZWQwODVjYjcyMjVhMmNlMmU0YmMiLCJpYXQiOjE2Nzc2NjAxODYuNjQ3MjAxLCJuYmYiOjE2Nzc2NjAxODYuNjQ3MjA0LCJleHAiOjE3MDkyODI1ODYuNjQwOTczLCJzdWIiOiI0NzIiLCJzY29wZXMiOltdfQ.OfX2MhycmBqoFpZ3Wf1WinaJfsUTDibQ965snlazaFnJHfmuVaVuPwrXe1n5KyTGxl-zc2JHb_mP-P9a8kOnxCvRSp3WMYrfTvTgkAGaq0_DvZwfrM9JaKjy66TFLMZc8xDMhnKXaXkzsvI58-yKk4Bu8VY9oM1FRqKkfnHmlVikMsIvR0FpBRzjzFLB7wEYN5y3kGOXwnx4rPk1rAfXrtvNktdwZrEsrkyPJYlk79RH_qRlsyPrqdiLMOQjEjooxG8AOBHXqLdXZgMP0Ik6ZuF3A02AkgT4Xd-ME_aKrJ6O2jVxhR_nPHXHKIf_uFycxpMM-sGyGuvUgjQ2br5eOeXuIBuBg-_nHtkiNQXtZynd7YsX0IWePBHEB61y-vQ4bjyuS5ko8RGUgk_HLMbqA0pifeFLnuRm-tQ0ppV7-8Fm23rBpVaHRC-tm7YhcV0p4L33BkM7nFrECY1Z-rO-Z4PQaYDSKdh20UyqRNjkQ-8SWqyujMRGSGfU3C-tsr2NiBA5BmdnKyfeHM-ry08uqnNW19eMc9FY_gqz5ECZvKIXNc8y-e0VI2ruJKa2LuoPel3kXUdajWN2W9zHnQQW08IUgssftXmxzWUf5YDtxR9VtIG3sSnFuWLHQhojwoxiknmJvlgvudHjx477PTxvwQ4gc2IHCyHEOdGEExFzbIA';
        $response = $client->request('POST', 'http://127.0.0.1:300/api/add_ring', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
            ],
            'form_params' => [
                'product_id' => $id,
            ],
        ]);
        $Ring_data = json_decode($response->getBody()->getContents(), true);
        $rings['ring_data'] = $Ring_data['data'];
        Session::put('ring', $rings['ring_data']);
        // Session::put(['id' => $rings['ring_data']['id'],'category' => $rings['ring_data']['category'], 'sub_category' => $rings['ring_data']['sub_category'], 'sku' => $rings['ring_data']['sku'], 'price' => $rings['ring_data']['total_price'], 'Product_name' => $rings['ring_data']['Product_name'],'Product_description' => $rings['ring_data']['Product_description'],'design_name' => $rings['ring_data']['design_name']]);
        $responses['message'] = 'success';
        return json_encode($responses);
       }


    public function ring_diamond()
    {
        return view('ring_diamond');
    }

    public function remove_ring(Request $request)
    {
        Session::forget('ring');
        return redirect()->route('getconfigring');
    }

    public function remove_diamond(Request $request)
    {
        Session::forget('diamond');
        return redirect()->route('index');
    }
}
