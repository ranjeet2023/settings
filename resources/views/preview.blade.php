@include('header')
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
@if(Session::has('ring_image') && Session::has('shapes'))
<div class="super_container">
    <div class="single_product">
        <div class="single_product">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 order-lg-2 order-1">
                        <div class="image_selected">
                            <img src="{{url('assets/img/shape/')}}/{{ucfirst(strtolower(session('shapes')))}}.png"
                                style="margin:80px">
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
                            <a href="{{ url('api/diamond/destroy') }}">
                                <i class="fa fa-remove"></i>
                            </a>
                        </button>
                        <a href="{{ url('api/select') }}/{{ session('certificate') }}">
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
                        <div  style="width:100%">
                            <p>Product title<b style="padding-left:10px"> {{ Session::get('product_title'); }}</b><br>
                                Product name<b style="padding-left:10px">{{ Session::get('product_name'); }}</b><br>
                                Setting type <b style="padding-left:10px"> {{ Session::get('settingtype'); }}</b>
                            </p>
                        </div>
                    </div>
                    <button class=" submit btn btn-outline-info btn-lg">
                        <a href="{{ url('api/ring/destroy') }}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </button>
                    <a href="{{ url('api/confirm-setting') }}"> <button class="btn btn-outline-info">View</button></a>
                </div>
            </div>
        </div>
    </div>
    <h1 style="float: right;">Total:{{ Session::get('productcost')+Session::get('rates') }} </h1>
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
        window.location.href = "/api";
    }
    });
</script>
@endif
@include('footer')

