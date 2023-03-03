@include('header')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                @if(Session::has('diamond') && Session::has('ring'))
                <div class="super_container" >
                    <div class="single_product" >
                            <div class="container"  style=" padding:20px" >
                                @if(Session::has('diamond'))
                                @php
                                $data = Session::get('diamond');
                                @endphp
                                <div class="row" >
                                    <div class="col-lg-6 order-lg-2 order-1" >
                                        <div class="image_selected" style="padding:auto" >
                                            <img src="{{url('assets/img/shape/')}}/{{ucfirst(strtolower($data['shape']))}}.png"style="display: block;margin-left: auto;margin-right: auto; width: 40%;" >
                                        </div>
                                    </div>
                                    <div class="col-lg-6 order-3" style="padding: 10px">
                                        Stock # {{ $data['certificate_no'] }}
                                        <div class="product_description">
                                            <h1 style="font-size:30px"> ${{ $data['rate'] }} </h1>
                                        </div>
                                        <hr class="singleline">
                                        <h2 style="font-size:30px">Product Details </h2>
                                        <hr class="singleline">
                                        <div class="row">
                                            <div class="col-6">
                                                <p>Shape:<b style="padding-left:10px">{{ $data['shape'] }}</b></p>
                                                <p>Color:<b style="padding-left:10px">{{ $data['color'] }}</b></p>
                                            </div>
                                        </div>
                                        <button class="submit btn btn-outline-info btn-lg">
                                            <a href="{{ url('remove_diamond') }}">
                                                <i class="fa fa-remove"></i>
                                            </a>
                                        </button>
                                        <a href="{{ url('diamondDetails') }}/{{ $data['certificate_no'] }}">
                                            <button class="btn btn-outline-info">View
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                @endif
                            <hr>
                            @if(Session::has('ring'))
                            @php
                            $dataring = Session::get('ring');
                            @endphp
                            <div class="row">
                                <div class="col-lg-6 order-lg-2 order-1">
                                    <div class="image_selected">
                                        <img src=" {{ asset('assets/img/shape/halo.png') }}" style= "display: block;margin-left: auto;margin-right: auto; width: 40%;">
                                    </div>
                                </div>
                                <div class="col-lg-6 order-3" style="padding: 10px">
                                    Stock #{{ Session::get('sku'); }}
                                    <div class="product_description">
                                        <h1 style="font-size:30px">
                                            {{ $dataring['sub_category'] }}
                                            ${{ $dataring['total_price'] }}
                                        </h1>
                                    </div>
                                    <h4 style="font-size:30px">Product Details</h4>
                                    <div class="row">
                                        <div style="width:100%">
                                            <p>
                                                Product title<b style="padding-left:10px">{{ $dataring['Product_name'] }}</b><br>
                                                Setting type <b style="padding-left:10px"> {{ $dataring['sub_category'] }}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <button class=" submit btn btn-outline-info btn-lg">
                                        <a href="{{ url('remove_ring') }}">
                                            <i class="fa fa-remove"></i>
                                        </a>
                                    </button>
                                    <a href="{{ url('ring_details') }}/{{ $dataring ['id'] }}"> <button class="btn btn-outline-info">View</button></a>
                                    @endif
                        <h1 style="float: right;">

                            Total:${{$data['rate']+$dataring['total_price']}} </h1>
                        </div>
                    </div>
                </div>
            @else
    <script>
    Swal.fire({
        title: 'Error!',
        text: 'Diamond or Ring setting missing',
        icon: 'error',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.value) {
            window.location.href = "/";
        }
    });
    </script>
    @endif
                @include('footer')

