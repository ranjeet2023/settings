@include('header');

<body>
    <script id="klarna-osm-script-tag" async="" src="{{ asset('assets/js/lib.js')}}" data-client-id="5e4d5d37-f827-5937-9c36-f181fb846ad3"></script>
    <div>

    </div>



    <span class="LoadingBar"></span>
    <div class="PageOverlay"></div>

    <div id="shopify-section-popup" class="shopify-section"></div>

    </div>
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
            <div id="vdbrb_main_page_cover" style="position: fixed; height: 100vh; width: 100%; top: 0px; left: 0px; background: rgb(255, 255, 255); z-index: 9999; display: none;">

            </div>

            <div class="vdb-rb-main">
                <div class="vdb-rb-container">

                    <div class="vdb-rb-steps-container">
                        <div class="vdb-rb-steps-wrap vdb-rb-active-step">
                            <div class="vdb-rb-steps-block vdb-rb-steps-1" onclick="vdbrb_view_selected_stone()">
                                <div class="vdb-rb-steps-name-with-number">
                                    <div class="vdb-rb-steps-number">1</div>
                                    <a target="_top" href="javascript:;">
                                        <div class="vdb-rb-steps-name vdb-rb-only-desktop">Choose <span>Stone</span></div>
                                    </a>
                                    <div class="vdb-rb-steps-name vdb-rb-only-mobile">Stone</div>
                                </div>

                                <div class="vdb-rb-steps-icon vdb-rb-stone-icon"><span class="vdb-rb-icon vdb-rb-icon-mainmenu_switch_diamond"></span></div>
                            </div>


                        </div>
                        <div class="vdb-rb-steps-wrap ">
                            <!--vdb-rb-active-step-->
                            <div class="vdb-rb-steps-block vdb-rb-steps-2" onclick="vdbrb_view_selected_ring()">
                                <div class="vdb-rb-steps-name-with-number">
                                    <div class="vdb-rb-steps-number">2</div>
                                    <a target="_top" href="https://heeradiamonds.com/apps/ring-creator/rb-setting-list">
                                        <div class="vdb-rb-steps-name vdb-rb-only-desktop">Choose<span>Setting</span></div>
                                    </a>
                                    <div class="vdb-rb-steps-name vdb-rb-only-mobile">Setting</div>
                                </div>

                                <div class="vdb-rb-steps-icon"><span class="vdb-rb-icon vdb-rb-icon_engagement"></span></div>
                            </div>

                        </div>
                        <div class="vdb-rb-steps-wrap ">
                            <div class="vdb-rb-steps-block vdb-rb-steps-3">
                                <div class="vdb-rb-steps-name-with-number">
                                    <div class="vdb-rb-steps-number">3</div>
                                    <a href="javascript:;">
                                        <div class="vdb-rb-steps-name vdb-rb-only-desktop vdb-rb-step-ring-review">Review <span>Complete Ring</span></div>
                                    </a>
                                    <div class="vdb-rb-steps-name vdb-rb-only-mobile vdb-rb-step-ring-review">Review</div>
                                </div>
                                <div class="vdb-rb-steps-icon"><span class="vdb-rb-icon vdb-rb-icon-engagement-Rings"></span></div>
                            </div>
                            <div class="vdb-rb-view-order-detail vdb-rb-info-message-wrapper vdb-rb-step-ring-review-popup" id="vdbrb_step_ring_review_popup" style="display: none;">
                                <div class="vdb-rb-order-detail-content">
                                    <p class="vdb-rb-info-message">Please choose a setting and a stone to complete your ring</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="vdb-rb-row vdb-rb-justify-center vdb-rb-mobile-full-width">
                        <div class="vdb-rb-col-md-10">
                            <div class="vdb-rb-tab-wrap">
                                <div class="vdb-rb-tabbing vdb-rb-active-tab" id="vdbrb_natural_tab" data-id="natural">
                                    <span class="vdb-rb-icon vdb-rb-icon-mainmenu_switch_diamond"></span>
                                    Natural Diamonds </div>
                                <div class="vdb-rb-tabbing" id="vdbrb_labgrown_tab" data-id="labgrown">
                                    <span class="vdb-rb-icon vdb-rb-icon-LAB-Icon">
                                        <span class="path1"></span>
                                    </span>
                                    Lab-Grown Diamonds </div>
                                <div class="vdb-rb-tabbing" id="vdbrb_gemstone_tab" data-id="gemstone">
                                    <span class="vdb-rb-icon vdb-rb-icon-mainmenu_switch_gemstone"></span>
                                    Colored Gemstones </div>
                            </div>
                        </div>
                    </div>


                    <div class="vdb-rb-filter-options-wrapper vdb_rb_natural_block">
                        <div class="vdb-rb-row">
                            <!-- WEB VIEW NATURAL HTML RENDER HERE-->
                            {{-- shape  --}}
                            <div class="vdb-rb-col-md-12 ">
                                <div class="vdb-rb-filter-options-block vdb-rb-shape-options">
                                    <h5 class="vdb-rb-filter-options-title">Shape <span class="vdb-rb-filters-count">All</span>
                                    </h5>
                                    <ul id="vdbrb_shape_filter_slider_natural" class="slick-initialized slick-slider" style=""><button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="">Previous</button>
                                        <div class="slick-list draggable">
                                            <div class="slick-track" style="opacity: 1; width: 2465px; transform: translate3d(0px, 0px, 0px);">
                                                <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a  >
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_round" >
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <a  title="Round" data-val="Round" class="shape_diamond" data-val="round" >
                                                                        <img class="image_off" src="{{asset('assets/img/shape/round.png')}}" width="25" alt="Round">
                                                                    </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title" >Round</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a   data-val="princess" class="shape_diamond" >
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_oval">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/princess.png')}}" width="25" alt="Princess">
                                                                </div>
                                                                <p class="vdv-rb-item-title"  class="shape" >Princess</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a    data-val="cushion" class="shape_diamond">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_pear">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/cushion.png')}}" width="25" alt="Cushion">
                                                                </div>
                                                                <p class="vdv-rb-item-title"  class="shape">Cushion</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a     data-val="emerald" class="shape_diamond" >
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_emerald">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/emerald.png')}}" width="25" alt="Emerald">
                                                                </div>
                                                                <p class="vdv-rb-item-title"  class="shape" >Emerald</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="4" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a    data-val="heart" class="shape_diamond">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_princess">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/heart.png')}}" width="25" alt="Heart">
                                                                </div>
                                                                <p class="vdv-rb-item-title" >Heart</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="5" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a   data-short_code="radiant"  data-val="marquise" class="shape_diamond">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_radiant">
                                                                    <img class="image_off" src="{{asset('assets/img/shape/marquise.png')}}" width="25" alt="Marquise">
                                                                </div>
                                                                <p class="vdv-rb-item-title">Marquise</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="6" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a    data-val="oval" class="shape_diamond">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_triangle">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/oval.png')}}" width="25" alt="Oval">
                                                                </div>
                                                                <p class="vdv-rb-item-title">Oval</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="7" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a   data-val="pear" class="shape_diamond">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_cushion">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/pear.png')}}" width="25" alt="Pear">
                                                                </div>
                                                                <p class="vdv-rb-item-title">Pear</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="8" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a   data-val="radient" class="shape_diamond">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_square">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/radiant.png')}}" width="25" alt="Radiant">
                                                                </div>
                                                                <p class="vdv-rb-item-title">Radiant</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="9" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a   data-val="SQ.Radiant" class="shape_diamond">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_marquise">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/lradiant.png')}}" width="25" alt="SQUARE Radiant">
                                                                </div>
                                                                <p class="vdv-rb-item-title">SQ.Radiant</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="10" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a   data-val="trilliant" class="shape_diamond">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_asscher">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/trilliant.png')}}" width="25" alt="Trilliant">
                                                                </div>
                                                                <p class="vdv-rb-item-title">Trilliant</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="11" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a   data-val="Cushion mod" class="shape_diamond">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_sq_emerald">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/cushion.png')}}" width="25" alt="Cushion Modify">
                                                                </div>
                                                                <p class="vdv-rb-item-title">Cushion mod.</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide" data-slick-index="12" aria-hidden="true" tabindex="-1" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a data-val="Triangle" class="shape_diamond" class="btn btn-sm togglebtn ">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_heart">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/triangle.png')}}" width="25" alt="Triangle">
                                                                </div>
                                                                <p class="vdv-rb-item-title">Triangle</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>

                                                <div class="slick-slide" data-slick-index="13" aria-hidden="true" tabindex="-1" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                            <a   data-short_code="trilliant" data-value_for_api="Trilliant" data-module_section="vdbrb_list_item_natural_shap_style_trilliant" data-title="Trilliant" tabindex="-1">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_trilliant">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <img class="image_off" src="{{asset('assets/img/shape/other.png')}}" width="25" alt="Other"><br>
                                                                </div>
                                                                <p class="vdv-rb-item-title">Other</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false">Next</button>
                                    </ul>
                                </div>
                            </div>
                            <div class="vdb-rb-col-md-6 ">
                                <div class="vdb-rb-filter-options-block">
                                    <h5 class="vdb-rb-filter-options-title">
                                        <span class="vdb-rb-info"><img src="{{ asset('assets/img/info-icon.svg')}}" alt=""></span>
                                        Carat <span class="vdb-rb-filters-count">All</span>
                                    </h5>
                                    <div class="vdb-rb-filter-range-slider">
                                        <span class="irs irs--round js-irs-12"><span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min" style="display: none;">0</span><span class="irs-max" style="display: none;">1</span><span class="irs-from" style="display: none; left: 0%;">0</span><span class="irs-to" style="display: none; left: 0%;">0</span><span class="irs-single" style="display: none; left: 0%;">0</span></span><span class="irs-grid"></span><span class="irs-bar" style="left: 2.72503%; width: 71.3104%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-handle from" style="left: 0%;"><i></i><i></i><i></i></span><span class="irs-handle to type_last" style="left: 71.3104%;"><i></i><i></i><i></i></span></span><input type="text" class="js-range-slider vbdrb_carat_natural_web irs-hidden-input" value="" tabindex="-1" readonly="">
                                        <div class="vdb-rb-group-input-between">
                                            <div class="vdb-carat">
                                                <input type="text" inputmode="decimal" pattern="\d*" class="vdbrb_min_carat_natural_web vdbrb_only_digit_with_two_decimal" value="0.30" placeholder="Min">
                                                <span>ct</span>
                                            </div>
                                            <div class="vdb-carat">
                                                <input type="text" inputmode="decimal" pattern="\d*" class="vdbrb_max_carat_natural_web vdbrb_only_digit_with_two_decimal" value="30.00" placeholder="Max">
                                                <span>ct</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {{-- colour  --}}
                            <div class="vdb-rb-col-md-6 ">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b>Colour</b></span>
                                        <br>

                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->color as $color)
                                        <a  data-val="{{ $color }}" class="color_diamond">
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;" >
                                            <p class="btn btn-light"  style="margin-left: 12px">{{ $color }}</p>
                                        </h5>
                                        </a>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- end  colour  --}}
                            {{-- start  clarity  --}}

                            <div class="vdb-rb-col-md-6 ">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b>Clarity</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->clarity as $shape)
                                        <a  data-val="{{ $shape }}" class="clarity_diamond">
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p class="btn btn-light" style="margin-left: 5px">{{ $shape }}</p>
                                        </h5>
                                        </a>
                                        @endforeach
                                    </div>
                                </div>
                            </div>

                            {{-- end  clarity  --}}
                            {{-- start lab   --}}
                            <div class="vdb-rb-col-md-6 ">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Lab</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->lab as $shape)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p class="btn btn-light" style="margin-left: 5px">{{ $shape }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- start cut  --}}
                            <div class="vdb-rb-col-md-6 ">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Cut</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->cut as $shape)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p class="btn btn-light" style="margin-left: 5px">{{ $shape }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- start polish  --}}
                            <div class="vdb-rb-col-md-6 ">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Polish</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->polish as $shape)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p class="btn btn-light" style="margin-left: 5px">{{ $shape }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- [symmetry --}}
                            <div class="vdb-rb-col-md-6 ">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Symmetry</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->symmetry as $shape)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p class="btn btn-light" style="margin-left: 5px">{{ $shape }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- fluorescence --}}
                            <div class="vdb-rb-col-md-6 ">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Fluorescence</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->fluorescence as $shape)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p class="btn btn-light" style="margin-left: 5px">{{ $shape }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- eyeclean --}}
                            <div class="vdb-rb-col-md-6 ">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Eyeclean</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->eyeclean as $shape)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p class="btn btn-light" style="margin-left: 5px">{{ $shape }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            <!-- WEB VIEW ADVANCE FILTER NATURAL HTML RENDER HERE -->

                        </div>
                    </div>
                    <div class="vdb-rb-mobilr-filter-options-wrapper vdb_rb_labgrown_mob_block">
                        <div class="vdb-rb-filter-panel">
                            <!-- MOBILE VIEW HTML RENDER HERE-->
                            <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_shape_modal">
                                <h5 class="vdb-rb-filter-options-title">Shape <span class="vdb-rb-filters-count" id="vdbrb_labgrown_shape_mobile_val">All</span>
                                </h5>
                            </div>



                            <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_carat_modal">
                                <h5 class="vdb-rb-filter-options-title">Carat <span class="vdb-rb-filters-count" id="vdbrb_labgrown_carat_mobile_val">All</span>
                                </h5>
                            </div>



                            <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_color_modal">
                                <h5 class="vdb-rb-filter-options-title">Colour <span class="vdb-rb-filters-count" id="vdbrb_labgrown_color_mobile_val">All</span>
                                </h5>
                            </div>



                            <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_clarity_modal">
                                <h5 class="vdb-rb-filter-options-title">Clarity <span class="vdb-rb-filters-count" id="vdbrb_labgrown_clarity_mobile_val">All</span>
                                </h5>
                            </div>



                            <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_cut_modal">
                                <h5 class="vdb-rb-filter-options-title">Cut <span class="vdb-rb-filters-count" id="vdbrb_labgrown_cut_mobile_val">All</span>
                                </h5>
                            </div>




                            <div id="vdbrb_main_advance_filter_mobile_labgrown" style="display: none;">
                                <!-- MOBILE VIEW ADVANCE FILTER HTML RENDER HERE -->
                                <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_budget_modal">
                                    <h5 class="vdb-rb-filter-options-title">Price <span class="vdb-rb-filters-count" id="vdbrb_labgrown_price_mobile_val">£0.00 - £9999999.00</span>
                                    </h5>
                                </div>



                                <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_polish_modal">
                                    <h5 class="vdb-rb-filter-options-title">Polish <span class="vdb-rb-filters-count" id="vdbrb_labgrown_polish_mobile_val">All</span>
                                    </h5>
                                </div>



                                <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_symmetry_modal">
                                    <h5 class="vdb-rb-filter-options-title">Symmetry <span class="vdb-rb-filters-count" id="vdbrb_labgrown_symmetry_mobile_val">All</span>
                                    </h5>
                                </div>



                                <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_fluorescence_modal">
                                    <h5 class="vdb-rb-filter-options-title">Fluorescence <span class="vdb-rb-filters-count" id="vdbrb_labgrown_fluorescence_mobile_val">All</span>
                                    </h5>
                                </div>



                                <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_lab_modal">
                                    <h5 class="vdb-rb-filter-options-title">Lab <span class="vdb-rb-filters-count" id="vdbrb_labgrown_lab_mobile_val">All</span>
                                    </h5>
                                </div>



                                <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_depth_modal">
                                    <h5 class="vdb-rb-filter-options-title">Depth <span class="vdb-rb-filters-count" id="vdbrb_labgrown_depth_mobile_val">All</span>
                                    </h5>
                                </div>



                                <div class="vdb-rb-filter-options-block vdb-rb-open-modal_labgrown" data-id="vdb_rb_table_modal">
                                    <h5 class="vdb-rb-filter-options-title">Table <span class="vdb-rb-filters-count" id="vdbrb_labgrown_table_mobile_val">All</span>
                                    </h5>
                                </div>



                            </div>
                        </div>
                    </div>

                    <div class="vdb-rb-mobilr-filter-options-wrapper vdb_rb_gemstone_mob_block">
                        <div class="vdb-rb-filter-panel">
                            <!-- MOBILE VIEW HTML RENDER HERE-->
                            <div class="vdb-rb-filter-options-block vdb-rb-open-modal_gemstone" data-id="vdb_rb_type_modal">
                                <h5 class="vdb-rb-filter-options-title">Type <span class="vdb-rb-filters-count" id="vdbrb_gemstone_type_mobile_val">All</span>
                                </h5>
                            </div>
                            <div class="vdb-rb-filter-options-block vdb-rb-open-modal_gemstone" data-id="vdb_rb_gemstone_color_modal" id="vdbrb_main_setion_color_filter_gemstone_mob" style="display:none;">
                                <h5 class="vdb-rb-filter-options-title">Colour
                                    <span class="vdb-rb-filters-count" id="vdbrb_gemstone_color_mobile_val">All</span>
                                </h5>
                            </div>
                            <div id="vdbrb_main_advance_filter_mobile_gemstone" style="display: none;">
                                <!-- MOBILE VIEW ADVANCE FILTER HTML RENDER HERE -->
                            </div>
                        </div>
                    </div>

                    <div class="vdb-rb-mobilr-filter-options-wrapper vdb_rb_radiance_mob_block">
                        <div class="vdb-rb-filter-panel">
                            <!-- MOBILE VIEW HTML RENDER HERE-->
                            <div id="vdbrb_main_advance_filter_mobile_radiance" style="display: none;">
                                <!-- MOBILE VIEW ADVANCE FILTER HTML RENDER HERE -->
                            </div>
                        </div>
                    </div>

                    <div class="vdb-rb-reset-filters">
                        <p class="vdb-rb-advanced-filter" id="show-hide-btn">Advanced Filters <span class="vdb-rb-arrow-down vdb-rb-icon vdb-rb-arrow-right"></span>
                        </p>

                        <p id="vdbrb_stone_reset_filter">Reset Filters <span class="vdb-rb-icon vdb-rb-refresh-icon"></span>
                        </p>
                    </div>
                    {{-- show data  --}}
                    <div class="vdb-rb-product-result-wrapper">
                        <span  data-val="button" class="button_id">
                        <div style="position: relative;">
                            <div class="vdb-rb-row" id="vdbrb_stone_grid_view_row"  >
                                 {{-- show data  --}}
                                @foreach($diamond_data as $labdata)
                                <div class="vdb-rb-col-md-3 vdb-rb-col-sm-6">
                                    <div class="vdb-rb-list-product-item"> <a target="_top">
                                            <div class="vdb-rb-product-img-wrapper">
                                                <img src="{{ asset('assets/img/661004702B.jpg')}}" alt="Emerald 0.78 U SI3" class="vdb-rb-img-fluid">
                                            </div>
                                            <div class="vdb-rb-product-details">
                                                <p class="vdb-rb-product-name">{{ ucfirst(strtolower($labdata['shape'])) }} {{ ($labdata['carat'])}} {{ ($labdata['color'])}}; </p>
                                                <div class="vdb-rb-price-block">
                                                    <h3><b>{{ ($labdata['rate'])}} {{ ($labdata['currency_symbol'])}}</b></h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>
                    </span>
                    </div>
                </div>

                       {{-- show data  --}}

        </main>


    </div>
    <script>
        $('.shape_diamond').click(function(event){
            var diamond_val = $(this).attr("data-val");
            var diamond_color = $(this).attr("data-val");
            console.log(diamond_val);
            console.log(diamond_color);
        $.ajax({
            type:'post',
            url: '{{ url('api/search') }}',
            dataType: 'json',
			headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data:{'shape': diamond_val },
            success: function(data) {
                var output = '';
                if(data.diamond_data.length > 0) {
                    output+=' <div style="position: relative;">'+
                            '<div class="vdb-rb-row" id="vdbrb_stone_grid_view_row" >';
                    for(var count = 0; count < data.diamond_data.length; count++) {
                        output +='<div class="vdb-rb-col-md-3 vdb-rb-col-sm-6">' +
                                        '<div class="vdb-rb-list-product-item">' +
                                           '<a target="_top">' +
                                                '<div class="vdb-rb-product-img-wrapper">' +
                                                 '<img src="{{ asset('assets/img/661004702B.jpg')}}" alt="Emerald 0.78 U SI3" class="vdb-rb-img-fluid">' +
                                                '</div>' +
                                              '<div class="vdb-rb-product-details">' +
                                                  '<p class="vdb-rb-product-name">' + data.diamond_data[count].shape + ' ' + data.diamond_data[count].carat + ' ' + data.diamond_data[count].color + '</p>' +
                                                     '<div class="vdb-rb-price-block">' +
                                                        '<h3><b>  '+data.diamond_data[count].rate+'  '+data.diamond_data[count].currency_symbol+ '</b></h3>' +
                                                     '</div>' +
                                              '</div>' +
                                            '</a>' +
                                        '</div>' +
                                   '</div>';
                       }
                   output+='</div>' +
                                '</div>';
                   }

                    else
                    {
                    output += '<tr>';
                    output += '<td colspan="6">No Data Found</td>';
                    output += '</tr>';
                    }
                $('.button_id').html(output);

                }
            });
        });
    </script>

</body>
</html>
