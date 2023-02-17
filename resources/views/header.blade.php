<html lang="{{ str_replace('_', '-', app()->getLocale()) }} ">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script src="{{asset('assets/js/bat.js')}}" async=""> </script>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" type="text/css" media="all" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" type="text/javascript"> </script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript"></script>

    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
</head>
<body>
    <script id="klarna-osm-script-tag" async="" src="{{ asset('assets/js/lib.js')}}" data-client-id="5e4d5d37-f827-5937-9c36-f181fb846ad3"></script>
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
                        <div class="vdb-rb-steps-wrap " style=" @if (request()->routeIs('index') || request()->routeIs('fetched_diamond') || request()->routeIs('select_diamond')) background-color:grey;border-radius: 100px;padding: 5px 50px 5px 50px;  @else background-color:rgb(219, 190, 190);border-radius: 100px;padding: 5px 50px 5px 50px; @endif">
                            <div class="vdb-rb-steps-name-with-number">
                                <a href="{{ route('index') }}">
                                    <div class="vdb-rb-steps-number">1</div>
                                    <div class="vdb-rb-steps-name vdb-rb-only-desktop">Choose <span>Stone</span>
                                        <div style="float: right;padding-right:5px">
                                            @if (Session::has('shapes'))
                                            <p>
                                                <img src="{{ url('assets/img/shape')}}/{{ ucfirst(strtolower(session('shapes'))) }}.png" width="25px">
                                                <b>{{ session('rates') }}{{ session('currency') }}</b>
                                            </p>
                                            <a href="{{ url('diamondDetails') }}/{{ session('certificate') }}">view</a>|
                                            <a href="{{ url('remove_diamond/') }}">Change</a>
                                            @endif
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="vdb-rb-steps-wrap " style="@if (request()->routeIs('choose_ring')  || request()->routeIs('confirm_ring') || request()->routeIs('select_ring')|| request()->routeIs('ring_view') )  background-color:grey;border-radius: 100px;padding:5px 50px 5px 50px;  @else background-color:rgb(219, 190, 190);border-radius:100px;padding: 5px 50px 5px 50px;@endif ">
                            <div class="vdb-rb-steps-name-with-number">
                                <div class="vdb-rb-steps-number">2</div>
                                <div class="vdb-rb-steps-name vdb-rb-only-desktop">Choose<span>Setting</span>
                                    <div style="float: right;padding-right:5px">
                                        @if (Session::has('ring_image'))
                                        <p><img src="{{session('ring_image') }}" width="25px">
                                            <b>{{ session('productcost') }} $</b>
                                        </p>
                                        <a href="{{ url('confirm_ring') }}">view</a>|
                                        <a href="{{ url('remove_ring/') }}">Change</a>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="vdb-rb-steps-wrap " style="@if (request()->routeIs('ring_diamond')) background-color:grey;border-radius: 100px;padding:5px 50px 5px 50px;  @else background-color:rgb(219, 190, 190);border-radius:100px;padding: 5px 50px 5px 50px;@endif">
                            {{-- <a href="{{ route('Select_setting') }}"> --}}
                            <div class="vdb-rb-steps-name-with-number">
                                <div class="vdb-rb-steps-number">3</div>
                                <div class="vdb-rb-steps-name vdb-rb-only-desktop vdb-rb-step-ring-review"> Review <span>Complete Ring</span></div>
                                <h3 style="float: right;">Total:{{ Session::get('productcost')+Session::get('rates') }} </h3>
                            </div>
                            {{-- </a> --}}
                        </div>
                    </div>
                    {{-- @if (!(request()->routeIs('settings') || request()->routeIs('Ring-settings') || request()->routeIs('Select_setting') || request()->routeIs('confirm-setting')|| request()->routeIs('confirm'))) --}}
                    <div class="vdb-rb-row vdb-rb-justify-center vdb-rb-mobile-full-width">
                        <div class="vdb-rb-col-md-10">
                            <div class="vdb-rb-tab-wrap">
                                <div class="vdb-rb-tabbing vdb-rb-active-tab" id="vdbrb_natural_tab" data-id="natural">
                                    <img src="https://media.giphy.com/media/RFmjTxTo50pkQ/giphy.gif" style="width:40px;border-radius: 50px">
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
                    {{-- @endif --}}
