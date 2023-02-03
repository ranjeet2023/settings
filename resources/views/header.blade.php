<!-- saved from url=(0213)https://heeradiamonds.com/apps/ring-creator/rb-stone-list?diamond_type=natural&min_price=0.00&max_price=9999999.00&min_carat=0.30&max_carat=22.70&clarity_to=SI3&clarity_from=SI3&white_color_to=D&white_color_from=Z -->
<html lang="{{ str_replace('_', '-', app()->getLocale()) }} ">
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Google Tag Manager -->
    <script src="{{asset('assets/js/bat.js')}}" async="">
    </script>
 <link href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet">
 <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
 <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
 <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="theme-color" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="google-site-verification" content="w4_lx9HRr2J6UQ-KCYQ0hFzeogBS2nNLhVHS3pB3NA8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('assets/css/theme.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/customTheme.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/setting.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/settings2.css')}}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" type="text/css"
        media="all" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
</head>
<body>
    <script id="klarna-osm-script-tag" async="" src="{{ asset('assets/js/lib.js')}}"
    data-client-id="5e4d5d37-f827-5937-9c36-f181fb846ad3"></script>
<div class="PageContainer">
    <main id="main" role="main">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Ring Builder</title>
        <link rel="stylesheet" href="{{asset('assets/css/slick.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/slick-theme.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/ion.rangeSlider.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/custom-modal.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/ringbuilder.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/ringbuilder-stone.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/ringbuilder-gemstone.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/ringbuilder-radiance.css')}}">
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
        <div class="vdb-rb-main">
            <div class="vdb-rb-container">
                <div class="vdb-rb-steps-container">
                    <div class="vdb-rb-steps-wrap " style=" @if (request()->routeIs('select') || request()->routeIs('index') || request()->routeIs('fetched_data')) background-color:grey;border-radius: 100px;padding: 5px 50px 5px 50px;  @else background-color:rgb(219, 190, 190);border-radius: 100px;padding: 5px 50px 5px 50px; @endif">
                            <div class="vdb-rb-steps-name-with-number"  >
                                <div class="vdb-rb-steps-number">1</div>
                                    <div class="vdb-rb-steps-name vdb-rb-only-desktop">Choose <span>Stone</span>
                                        <div style="float: right;padding-right:5px">
                                            {{-- @if (request()->routeIs('settings')) --}}
                                               @if (session()->has('shapes'))
                                                <p>
                                                <img  src="{{ url('assets/img/shape')}}/{{ ucfirst(strtolower(session('shapes'))) }}.png" width="25px">
                                                <b>{{ session('rates') }}{{ session('currency') }}</b></p>
                                                <a href="{{ url('/select') }}/{{ session('certificate') }}">view</a>|
                                                <a href="{{ url('api/') }}">Change</a>
                                                @endif
                                            {{-- @endif --}}
                                        </div>

                                    </div>

                            </div>
                    </div>
                    <div class="vdb-rb-steps-wrap "style="@if (request()->routeIs('settings')) background-color:grey;border-radius: 100px;padding:5px 50px 5px 50px;  @else background-color:rgb(219, 190, 190);border-radius:100px;padding: 5px 50px 5px 50px;@endif ">
                        <!--vdb-rb-active-step-->
                            <div class="vdb-rb-steps-name-with-number">
                                <div class="vdb-rb-steps-number">2</div>

                                    <div class="vdb-rb-steps-name vdb-rb-only-desktop">Choose<span>Setting</span>
                                    </div>
                                <div class="vdb-rb-steps-name vdb-rb-only-mobile">Setting</div>
                            </div>


                    </div>
                    <div class="vdb-rb-steps-wrap " style="background-color:rgb(219, 190, 190);border-radius: 100px;padding: 5px 50px 5px 50px;" >
                            <div class="vdb-rb-steps-name-with-number">
                                <div class="vdb-rb-steps-number">3</div>
                                    <div class="vdb-rb-steps-name vdb-rb-only-desktop vdb-rb-step-ring-review">
                                        Review <span>Complete Ring</span></div>
                                <div class="vdb-rb-steps-name vdb-rb-only-mobile vdb-rb-step-ring-review">Review
                                </div>
                            </div>
                        <div class="vdb-rb-view-order-detail vdb-rb-info-message-wrapper vdb-rb-step-ring-review-popup"
                            id="vdbrb_step_ring_review_popup" style="display: none;">
                            <div class="vdb-rb-order-detail-content">
                                <p class="vdb-rb-info-message">Please choose a setting and a stone to complete your
                                    ring</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="vdb-rb-row vdb-rb-justify-center vdb-rb-mobile-full-width">
                    <div class="vdb-rb-col-md-10">
                        <div class="vdb-rb-tab-wrap">
                            <div class="vdb-rb-tabbing vdb-rb-active-tab" id="vdbrb_natural_tab" data-id="natural">
                                <img src="https://media.giphy.com/media/RFmjTxTo50pkQ/giphy.gif"
                                    style="width:40px;border-radius: 50px">
                                Natural Diamonds
                            </div>
                            <div class="vdb-rb-tabbing" id="vdbrb_labgrown_tab" data-id="labgrown">
                                <span class="vdb-rb-icon vdb-rb-icon-LAB-Icon">
                                    <span class="path1"></span>
                                </span>
                                Lab-Grown Diamonds
                            </div>
                            <div class="vdb-rb-tabbing" id="vdbrb_gemstone_tab" data-id="gemstone">
                                <span class="vdb-rb-icon vdb-rb-icon-mainmenu_switch_gemstone"></span>
                                Colored Gemstones
                            </div>
                        </div>
                    </div>
                </div>
