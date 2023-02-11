<link rel="stylesheet" href="{{asset('assets/css/ringsetting.css')}}">
@include('header')
<div class="super_container">
    <div class="single_product">
        <div class="container" >
            <div class="row">
                <div class="col-lg-4 order-lg-2 order-1">
                    <div class="image_selected">
                        <img  src="{{session('ring_image')}}">
                    </div>
                </div>
                <div class="col-lg-6 order-3" style="padding: 100px">
                    Stock #{{ session('product_id')}}
                    <div class="product_description">
                        <h1 style="font-size:30px">${{ session('productcost')}} {{ session('metal_type')}}
                            </h1>
                        <hr class="singleline">
                        <a href="{{ url('ring_diamond') }}">
                             <button type="submit" class="btn btn-dark shop-button rounded-pill">
                                    Confirm
                            </button>
                        </a>
                    </div>
                    <hr class="singleline">
                    <h2 style="font-size:30px">Product Details
                    </h2>
                    <hr class="singleline">
                    <div class="row">
                        <div class="col-12">
                            <p>Product title<b style="padding-left:10px"> {{ Session::get('product_title'); }}</b><br>
                                Product name<b style="padding-left:10px">{{ Session::get('product_name'); }}</b><br>
                                Setting type <b style="padding-left:10px"> {{ Session::get('settingtype'); }}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@include('footer')
