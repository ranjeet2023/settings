<link rel="stylesheet" href="{{asset('assets/css/ringsetting.css')}}">
@include('header')
<div class="super_container">
<a href="{{ url('api/') }}"><i class="arrow left "></i>  Change Stone</a>
    <div class="single_product">
        <div class="container" >
            <div class="row">
                <div class="col-lg-4 order-lg-2 order-1">
                    <div class="image_selected"><img  src="{{ url('assets/img/shape/'.ucfirst(strtolower($diamond_data['shape'])).'.png') }}">
                    </div>
                </div>
                <div class="col-lg-6 order-3" style="padding: 100px">
                    Stock #
                    {{ $diamond_data['certificate_no'] }}
                    <div class="product_description">
                        <h1 style="font-size:30px">{{ $diamond_data['shape'] }} {{ $diamond_data['rate'] }}{{
                            $diamond_data['currency_symbol'] }}</h1>
                        <hr class="singleline">
                        <a href="{{ url('api/choose-ring')  }}/{{ $diamond_data['certificate_no'] }}">
                             <button type="submit" class="btn btn-dark shop-button rounded-pill">
                                Select
                                @if ($diamond_data['diamond_type']=='W')
                                <i>Natural</i>
                                @else
                                <i>labGrown diamond</i>
                                @endif
                                diamond
                            </button>
                        </a>
                    </div>
                    <hr class="singleline">
                    <h2 style="font-size:30px">Product Details
                        <hr class="singleline">
                    </h2>
                    <div class="row">
                        <div class="col-6">
                            <p>Shape<b style="padding-left:10px">     {{ $diamond_data['shape'] }}</b></p>
                            <p>Color<b style="padding-left:30px">     {{ $diamond_data['color'] }}</b></p>
                            <p>Carat <b style="padding-left:30px">     {{ $diamond_data['carat'] }}</b></p>

                        </div>
                        <div class="col-6">
                            <p>Cut <b style="padding-left:30px">     {{ $diamond_data['cut'] }}</b></p>
                            <p>Polish <b style="padding-left:30px">     {{ $diamond_data['polish'] }}</b></p>
                            <p>Lab <b style="padding-left:30px">     {{ $diamond_data['lab'] }}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


@include('footer')
