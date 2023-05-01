<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>CustomerTDP</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" type="text/css" media="all" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"></script>
    <link rel="stylesheet" href="{{asset('assets/css/main.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/setting.css')}}">
   
    <style>
        .steps {
            list-style: none;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 12px;
            line-height: 1;
            margin: 30px auto;
            border-radius: 3px;
        }

        .steps strong {
            font-size: 14px;
            display: block;
            line-height: 1.4;
        }

        .steps>li {
            position: relative;
            display: block;
            /* border: 1px solid #ddd; */
            padding: 7px 5px 8px 5px;
            width: 33.33%;
            height: 60px;
        }

        @media (min-width: 768px) {
            .steps>li {
                float: left;
            }
           /* change color backgroud class  */
            .steps .past {
                color: #150505;
                background:  #efcece;
                box-shadow: 9px 5px 8px 0px;

            }

            .steps .present {
                color: #000;
                background: #efcece;
                box-shadow: 9px 5px 8px 0px;
            }
             /* change color backgroud class  */
            .steps .future {
                color: #100101;
                background: #efcece;

            }
            .steps li.future+li>span:before {
                border-left-color: #efefef;
            }

            .steps li>span:after,
            .steps li>span:before {
                content: "";
                display: block;
                width: 0px;
                height: 0px;
                position: absolute;
                top: 0;
                left: 0;
                border: solid transparent;
                border-left-color: #f0f0f0;
                border-width: 30px;
            }

            .steps li>span:after {
                top: -5px;
                z-index: 1;
                border-left-color: white;
                border-width: 34px;
            }

            .steps li>span:before {
                z-index: 2;
            }
          /* arrow background color change class  */
            .steps li.past+li>span:before {
                border-left-color: #efcece;

            }

            .steps li.present+li>span:before {
                border-left-color: #efcece;
            }


            .steps li:first-child>span:after,
            .steps li:first-child>span:before {
                display: none;
            }

            /* Arrows at start and end */
            .steps li:first-child i,
            .steps li:last-child i {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                border: solid transparent;
                border-left-color: white;
                border-width: 30px;
            }

            .steps li:last-child i {
                left: auto;
                right: -30px;
                border-left-color: transparent;
                border-top-color: white;
                border-bottom-color: white;
            }
        }

    </style>
</head>
<body>
    <div class="header MuiBox-root css-0">
        <div class="diamondShapes MuiBox-root css-0">
            <ul class="steps" style="width: 75%;">
                <li @if(Route::is('index','fetched_diamond','diamondDetails','selectdiamond'))  class="past"  @endif>
                    <span>
                        <div class="row">
                            <div class="col" style="float:left"> <strong style="font-size:20px"><a href="{{ url('/') }}" style= text-decoration:none>Diamond</a></strong>
                            </div>
                            @if(Session::has('diamond'))
                            @php
                            $data = Session::get('diamond');
                            @endphp
                            <div class="col">
                                <div class="row">
                                    <div class="col" style="margin:0px">
                                        <img src="{{url('assets/img/shape/')}}/{{ucfirst(strtolower($data['shape']))}}.png" style="width:30px">
                                    </div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col">
                                                <strong>${{ $data['rate'] }}</strong>
                                            </div>
                                            <div class="col">
                                                <a target="_top" href="{{url('remove_diamond') }}" style="text-decoration:none">Change</a>|
                                                <a target="_top" href="{{ url('diamondDetails') }}/{{ $data['certificate_no'] }}" style="text-decoration:none">View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endif
                        </div>
                    </span><i></i>
                </li>
                <li @if(Route::is('getconfigring','all_ring','ringdetails','confirm_ring')) class="present"  @endif>
                    <span>
                        <div class="row">
                            <div class="col" style="float:left"> <strong style="font-size:20px"><a href="{{ url('/get_config_ring') }}" style= text-decoration:none>Ring</a></strong></div>
                            @if(Session::has('ring'))
                            @php
                            $data = Session::get('ring');
                            @endphp
                            <div class="col">
                                <div class="row">
                                    <div class="col" style="margin:0px">
                                        <img src=" {{ asset('assets/img/shape/halo.png') }}" style="width:30px">
                                    </div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col">
                                                <strong>${{ $data['total_price'] }}</strong>
                                            </div>
                                            <div class="col">
                                                <a target="_top" href="{{  url('remove_ring') }}" style="text-decoration:none">Change</a>|
                                                <a target="_top" href="{{ url('diamondDetails') }}/{{ $data['id'] }}"     style="text-decoration:none">View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endif
                        </div>
                    </span><i></i>
                </li>
                <li @if(Route::is('ring_diamond')) class="future" @endif>
                    <span>
                        <div class="row">
                            <div class="col" style="float:left"> <strong style="font-size:20px">Review Complete Ring</strong></div>
                        </div>
                    </span><i></i>
                </li>
            </ul>
        </div>
    </div>
