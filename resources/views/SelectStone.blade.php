@include('header');
<style>
    .breadcrumb-item+.breadcrumb-item::before {
        content: ">"
    }

    .breadcrumb {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: .1rem 0rem !important;
        margin-bottom: 0rem;
        list-style: none;
        background-color: #ffffff;
        border-radius: .25rem
    }

    .single_product {
        padding-top: 66px;
        padding-bottom: 140px;
        background-color: #e5e5e5;
        margin-top: 0px;
        padding: 17px
    }

    .product_name {
        font-size: 20px;
        font-weight: 400;
        margin-top: 0px
    }

    .badge {
        display: inline-block;
        padding: 0.50em .4em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: .25rem
    }

    .product-rating {
        margin-top: 10px
    }

    .rating-review {
        color: #5b5b5b
    }

    .product_price {
        display: inline-block;
        font-size: 30px;
        font-weight: 500;
        margin-top: 9px;
        clear: left
    }

    .product_discount {
        display: inline-block;
        font-size: 17px;
        font-weight: 300;
        margin-top: 9px;
        clear: left;
        margin-left: 10px;
        color: red
    }

    .product_saved {
        display: inline-block;
        font-size: 15px;
        font-weight: 200;
        color: #999999;
        clear: left
    }

    .singleline {
        margin-top: 1rem;
        margin-bottom: .40rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, .1)
    }

    .product_info {
        color: #4d4d4d;
        display: inline-block
    }

    .product_options {
        margin-bottom: 10px
    }

    .product_description {
        padding-left: 0px
    }

    .product_quantity {
        width: 104px;
        height: 47px;
        border: solid 1px #e5e5e5;
        border-radius: 3px;
        overflow: hidden;
        padding-left: 8px;
        padding-top: -4px;
        padding-bottom: 44px;
        float: left;
        margin-right: 22px;
        margin-bottom: 11px
    }

    .order_info {
        margin-top: 18px
    }

    .shop-button {
        height: 47px
    }

    .product_fav i {
        line-height: 44px;
        color: #cccccc
    }

    .product_fav {
        display: inline-block;
        width: 52px;
        height: 46px;
        background: #FFFFFF;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
        border-radius: 11%;
        text-align: center;
        cursor: pointer;
        margin-left: 3px;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease
    }

    .br-dashed {
        border-radius: 5px;
        border: 1px dashed #dddddd;
        margin-top: 6px
    }

    .pr-info {
        margin-top: 2px;
        padding-left: 2px;
        margin-left: -14px;
        padding-left: 0px
    }

    .break-all {
        color: #5e5e5e
    }

    .image_selected {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: calc(100% + 15px);
        height: 525px;
        -webkit-transform: translateX(-15px);
        -moz-transform: translateX(-15px);
        -ms-transform: translateX(-15px);
        -o-transform: translateX(-15px);
        transform: translateX(-15px);
        border: solid 1px #e8e8e8;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        padding: 15px
    }

    .image_list li {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 165px;
        border: solid 1px #e8e8e8;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1) !important;
        margin-bottom: 15px;
        cursor: pointer;
        padding: 15px;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
        overflow: hidden
    }

    @media (max-width: 390px) {
        .product_fav {
            display: none
        }
    }
</style>
<div class="super_container">
    <div class="single_product">
        <div class="container" style=" background-color: #fff; padding: 11px;margin-top:80px">
            <div class="row">
                <div class="col-lg-2 order-lg-1 order-2">
                    <ul class="image_list">
                        <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg"><img
                                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg" alt="">
                        </li>
                        <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg"><img
                                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg" alt="">
                        </li>
                        <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg"><img
                                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg" alt="">
                        </li>
                    </ul>
                </div>
                <div class="col-lg-4 order-lg-2 order-1">
                    <div class="image_selected"><img
                            src="{{ url('assets/img/shape/'.ucfirst(strtolower($diamond_data[0]['shape'])).'.png') }}" alt="">
                    </div>
                </div>
                <div class="col-lg-6 order-3" style="padding: 100px">
                    <div class="product_description">
                        <h1 style="font-size:30px">{{ $diamond_data[0]['shape'] }}   {{ $diamond_data[0]['rate'] }}{{ $diamond_data[0]['currency_symbol'] }}</h1>
                        <hr class="singleline">
                        <div class="row">
                            <div class="col-xs-6"> <button type="button" class="btn btn-primary shop-button">Add to Cart</button>
                                 <button type="button" class="btn btn-success shop-button">Buy Now</button>
                                <div class="product_fav"><i class="fas fa-heart"></i></div>
                            </div>
                        </div>
                    </div>
                    <hr class="singleline">

                    <h2 style="font-size:20px">Product discription</h2>

                </div>
            </div>
        </div>
    </div>
</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
