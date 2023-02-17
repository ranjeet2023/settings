{{-- @include('header') --}}
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
<body style="border:2px solid red;background-color:rgb(255, 250, 249)">
    <script id="klarna-osm-script-tag" async="" src="{{ asset('assets/js/lib.js')}}" data-client-id="5e4d5d37-f827-5937-9c36-f181fb846ad3"></script>
    <div class="PageContainer">
        <main id="main" role="main">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <title>Preview</title>
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
                <div class="vdb-rb-container" style="border:2px solid rgb(219, 200, 200);background-color:rgb(255, 203, 203);margin-top:50px">
                    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                    @if(Session::has('ring_image') && Session::has('shapes'))
                    <div class="super_container">
                        <div class="single_product">
                            <div class="single_product">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4 order-lg-2 order-1">
                                            <div class="image_selected">
                                                <img src="{{url('assets/img/shape/')}}/{{ucfirst(strtolower(session('shapes')))}}.png" style="margin:80px">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 order-3" style="padding: 10px">
                                            Stock # {{ session('certificate') }}
                                            <div class="product_description">
                                                <h1 style="font-size:30px"> {{ Session::get('shapes'); }} {{ Session::get('rates'); }} $</h1>
                                            </div>
                                            <hr class="singleline">
                                            <h2 style="font-size:30px">Product Details </h2>
                                            <hr class="singleline">
                                            <div class="row">
                                                <div class="col-6">
                                                    <p>Shape<b style="padding-left:10px"></b></p>
                                                </div>
                                            </div>
                                            <button class="submit btn btn-outline-info btn-lg">
                                                <a href="{{ url('remove_diamond') }}">
                                                    <i class="fa fa-remove"></i>
                                                </a>
                                            </button>
                                            <a href="{{ url('diamondDetails') }}/{{ session('certificate') }}">
                                                <button class="btn btn-outline-info">View
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="single_product">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 order-lg-2 order-1">
                                        <div class="image_selected">
                                            <img src=" {{ Session::get('ring_image'); }}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 order-3" style="padding: 10px">
                                        Stock #{{ Session::get('product_id'); }}
                                        <div class="product_description">
                                            <h1 style="font-size:30px">
                                                {{ Session::get('settingtype'); }}
                                                {{ Session::get('productcost'); }}$
                                            </h1>
                                        </div>
                                        <hr class="singleline">
                                        <h2 style="font-size:30px">Product Details</h2>
                                        <hr class="singleline">
                                        <div class="row">
                                            <div style="width:100%">
                                                <p>Product title<b style="padding-left:10px"> {{ Session::get('product_title'); }}</b><br>
                                                    Product name<b style="padding-left:10px">{{ Session::get('product_name'); }}</b><br>
                                                    Setting type <b style="padding-left:10px"> {{ Session::get('settingtype'); }}</b>
                                                </p>
                                            </div>
                                        </div>
                                        <button class=" submit btn btn-outline-info btn-lg">
                                            <a href="{{ url('remove_ring') }}">
                                                <i class="fa fa-remove"></i>
                                            </a>
                                        </button>
                                        <a href="{{ url('confirm_ring') }}"> <button class="btn btn-outline-info">View</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 style="float: right;">Total:{{ Session::get('productcost')+Session::get('rates') }} </h1>
                    </div>
                    @else
                    <script>
                        Swal.fire({
                            title: 'Error!'
                            , text: 'Diamond or Ring setting missing'
                            , icon: 'error'
                            , confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.value) {
                                window.location.href = "/";
                            }
                        });

                    </script>
                    @endif
                    @include('footer')

