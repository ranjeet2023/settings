@include('header');
{{-- scroll pegination link  --}}
{{-- <link href="/path/to/css/scrollpagination.css" rel="stylesheet" />
<script src="/path/to/cdn/jquery.min.js"></script>
<script src="/path/to/js/scrollpagination.js"></script> --}}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" type="text/css" media="all" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript"></script>
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
{{-- <link rel="stylesheet" type="text/css" href="./price_range_style.css"/> --}}

{{-- end scroll pegination link  --}}
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
                                        <img src="https://media.giphy.com/media/RFmjTxTo50pkQ/giphy.gif" style="width:40px;border-radius: 50px">
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

                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_oval">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <a   data-val="princess" class="shape_diamond" >
                                                                    <img class="image_off" src="{{asset('assets/img/shape/princess.png')}}" width="25" alt="Princess">
                                                            </a>

                                                                </div>
                                                                <p class="vdv-rb-item-title"  class="shape" >Princess</p>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">

                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_pear">
                                                                     <a    data-val="cushion" class="shape_diamond">
                                                                    <img class="image_off" src="{{asset('assets/img/shape/cushion.png')}}" width="25" alt="Cushion">
                                                                </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title"  class="shape">Cushion</p>

                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">

                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_emerald">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <a     data-val="emerald" class="shape_diamond" >
                                                                    <img class="image_off" src="{{asset('assets/img/shape/emerald.png')}}" width="25" alt="Emerald">
                                                                      </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title"  class="shape" >Emerald</p>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="4" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_princess">
                                                                            <!--vdb-rb-list-item-active-->
                                                                    <a data-val="heart" class="shape_diamond">
                                                                            <img class="image_off" src="{{asset('assets/img/shape/heart.png')}}" width="25" alt="Heart">
                                                                    </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title" >Heart</p>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="5" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_radiant">
                                                                    <a     data-val="marquise" class="shape_diamond">
                                                                            <img class="image_off" src="{{asset('assets/img/shape/marquise.png')}}" width="25" alt="Marquise">
                                                                    </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title">Marquise</p>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="6" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_triangle">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <a     data-val="oval" class="shape_diamond">
                                                                    <img class="image_off" src="{{asset('assets/img/shape/oval.png')}}" width="25" alt="Oval">
                                                                    </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title">Oval</p>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="7" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_cushion">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <a    data-val="pear" class="shape_diamond">
                                                                    <img class="image_off" src="{{asset('assets/img/shape/pear.png')}}" width="25" alt="Pear">
                                                                    </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title">Pear</p>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="8" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">

                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_square">
                                                                    <!--vdb-rb-list-item-active-->
                                                                       <a   data-val="radient" class="shape_diamond">
                                                                    <img class="image_off" src="{{asset('assets/img/shape/radiant.png')}}" width="25" alt="Radiant">
                                                                       </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title">Radiant</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="9" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_marquise">
                                                            <a   data-val="sq.radiant" class="shape_diamond">
                                                                    <img class="image_off" src="{{asset('assets/img/shape/lradiant.png')}}" width="25" alt="SQUARE Radiant">
                                                            </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title">SQ.Radiant</p>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="10" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_asscher">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <a   data-val="trilliant" class="shape_diamond">
                                                                    <img class="image_off" src="{{asset('assets/img/shape/trilliant.png')}}" width="25" alt="Trilliant">
                                                                    </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title">Trilliant</p>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide slick-active" data-slick-index="11" aria-hidden="false" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">
                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_sq_emerald">
                                                                    <!--vdb-rb-list-item-active-->
                                                            <a   data-val="cushion" class="shape_diamond">
                                                                    <img class="image_off" src="{{asset('assets/img/shape/cushion.png')}}" width="25" alt="Cushion Modify">
                                                            </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title">Cushion</p>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="slick-slide" data-slick-index="12" aria-hidden="true" tabindex="-1" style="width: 69px;">
                                                    <div>
                                                        <li style="width: 100%; display: inline-block;">

                                                                <div class="vdb-rb-list-item vdbrb_list_item_natural_shap_style_heart">
                                                                    <!--vdb-rb-list-item-active-->
                                                                    <a data-val="asscher" class="shape_diamond" class="btn btn-sm togglebtn ">
                                                                    <img class="image_off" src="{{asset('assets/img/shape/triangle.png')}}" width="25" alt="Triangle">
                                                                     </a>
                                                                </div>
                                                                <p class="vdv-rb-item-title">Triangle</p>
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
                                    <div id="slider-range" class="price-filter-range" name="rangeInput">
                                        </div>
                                    <div >
                                    <input type="number" min=0.10 max="30" oninput="validity.valid||(value='0 ');" id="min_price"   class="price-range-field" disabled />.Crt
                                    <p  style="float: right">   <input type="number"  min=0.10 max="30" oninput="validity.valid||(value='30');"  id="max_price" class="price-range-field" disabled  />.Crt</p>
                                    </div>
                                    </div>
                            </div>
                            {{-- colour  --}}
                            <div class="vdb-rb-col-md-6 " >
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b>Colour</b></span>
                                        <br>

                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->color as $color)

                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;" >
                                            <p class="filter color_diamond" data-val="{{ $color }}"  style="">{{ $color }}</p>

                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- end  colour  --}}
                            {{-- start  clarity  --}}

                            <div class="vdb-rb-col-md-6 " >
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b>Clarity</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->clarity as $clarity)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p class=" filter clarity_diamond" data-val="{{ $clarity }}"  style="margin-left: 5px">{{ $clarity }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>

                            {{-- end  clarity  --}}
                            {{-- start lab   --}}
                            <div class="vdb-rb-col-md-6 hide-filter" style="display:none">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Lab</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->lab as $lab)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p data-val="{{ $lab }}" class="filter lab_diamond" style="margin-left: 5px">{{ $lab }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- start cut  --}}
                            <div class="vdb-rb-col-md-6 hide-filter" style="display:none">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Cut</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->cut as $cut)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p  data-val="{{ $cut }}" class="filter cut_diamond" style="margin-left: 5px">{{ $cut }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- start polish  --}}
                            <div class="vdb-rb-col-md-6 hide-filter" style="display:none">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Polish</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->polish as $polish)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p data-val="{{ $polish }}" class=" filter polish_diamond" style="margin-left: 5px">{{ $polish }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- [symmetry --}}
                            <div class="vdb-rb-col-md-6 hide-filter" style="display:none">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Symmetry</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->symmetry as $symmetry)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p data-val="{{ $symmetry }}" class=" filter symmetry_diamond" style="margin-left: 5px" >{{ $symmetry }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- fluorescence --}}
                            <div class="vdb-rb-col-md-6 hide-filter" style="display:none">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Fluorescence</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->fluorescence as $fluorescence)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p data-val="{{ $fluorescence }}" class="filter fluorescence_diamond" style="margin-left: 5px">{{ $fluorescence }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{-- eyeclean --}}
                            <div class="vdb-rb-col-md-6 hide-filter" style="display:none">
                                <div class="vdb-rb-filter-options-block">
                                    <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                        </span><b> Eyeclean</b></span>
                                        <br>
                                    </div>
                                    <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color" style="">
                                        <br>
                                        <br>
                                        @foreach($config->data->eyeclean as  $eyeclean)
                                        <h5 class="vdb-rb-filter-options-title" style="display: inline-block;margin:auto;float:right;">
                                            <p data-val="{{ $eyeclean }}" class=" filter eyeclean_diamond" style="margin-left: 5px">{{ $eyeclean }}</p>
                                        </h5>
                                        @endforeach
                                    </div>
                                </div>
                            </div>

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
                        <p class="vdb-rb-advanced-filter" id="show-hide-btn">Advanced Filters
                            <button class="btn btn-light down-button">
                            <i class="arrow down" id="down-icon"></i>                            </button>
                        </p>

                        <div class="hide-reset">
                        <a href="{{ url('/') }}/api" >
                            <p id="vdbrb_stone_reset_filter">Reset Filters
                                <i class="fa fa-refresh " style="font-size:18px"></i>
                            </p>
                        </a>
                        </div>
                    </div>
                    {{-- show data  --}}
                   {{-- <p id="page" data-val="{{$pagination['current_page'] }}"></p> --}}
                    {{-- <div class="vdb-rb-product-result-wrapper" id ="containers" style="overflow: auto;height:900px">
                        <span   class="button_id"  > --}}
                                    <div id="data-wrapper">
                                    </div>
                                    <!-- Data Loader -->
                                    <div class="auto-load text-center">
                                        <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            x="0px" y="0px" height="60" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                                            <path fill="#000"
                                                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                                <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s"
                                                    from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            {{-- </span>
                        </div> --}}
                    </div>
                    </div>
                       {{-- show data  --}}
        </main>
     </div>
    </div>
    <script>
        $(document).ready(function() {
            $(".down-button").click(function(){
                    $(".hide-filter").toggle();
              });
            var prevShape = "";
            var color='';
            var clarity='';
            var lab ='';
            var cut ='';
            var polish= '';
            var symmetry= '';
            var fluorescence ='';
            var eyeclean ='';
// range slider
        $('#price-range-submit').hide();
        $("#min_price,#max_price").on('change', function () {
          $('#price-range-submit').show();
          var min_price_range = parseInt($("#min_price").val());
          var max_price_range = parseInt($("#max_price").val());
          if (min_price_range > max_price_range) {
            $('#max_price').val(min_price_range);
          }
          $("#slider-range").slider({
            values: [min_price_range, max_price_range]
          });

        });
        $("#min_price,#max_price").on("paste keyup", function () {
          $('#price-range-submit').show();
          var min_price_range = parseInt($("#min_price").val());
          var max_price_range = parseInt($("#max_price").val());
          if(min_price_range == max_price_range){
                max_price_range = min_price_range + 100;
                $("#min_price").val(min_price_range);
                $("#max_price").val(max_price_range);
          }
          $("#slider-range").slider({
            values: [min_price_range, max_price_range]
          });
        });
        $(function () {
          $("#slider-range").slider({
            range: true,
            orientation: "horizontal",
            min: 0.10,
            max: 30,
            values: [0.10, 30],
            step: 0.10,
            slide: function (event, ui) {
              if (ui.values[0] == ui.values[1]) {
                  return false;
              }
              $("#min_price").val(ui.values[0]);
              $("#max_price").val(ui.values[1]);
            }
          });
          $("#min_price").val($("#slider-range").slider("values", 0));
          $("#max_price").val($("#slider-range").slider("values", 1));
        });
        $("#slider-range,#price-range-submit").click(function () {
          var min_price = $('#min_price').val();
          var max_price = $('#max_price').val();
          search(prevShape, color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean,min_price,max_price);
        });
    // end range slider
            $(".shape_diamond").click(function() {
                    $(".shape_diamond").removeClass("active");
                    $(".shape_diamond").removeClass("btn btn-success");
                    $(this).addClass("active");
                    $(this).addClass("btn btn-success");
                    prevShape =  $(this).attr("data-val");
                search(prevShape,color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean);
            });
            $(".color_diamond").click(function() {
                 $(this).toggleClass("active btn btn-success");
                    color = $(".color_diamond.active").map(function() {
                    return $(this).attr("data-val");
                }).toArray();
                search(prevShape,color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean);
            });
            $(".clarity_diamond").click(function() {
                $(this).toggleClass("active btn btn-success");
                   clarity = $(".clarity_diamond.active").map(function() {
                    return $(this).attr("data-val");
                }).toArray();
                search(prevShape, color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean);
            });
            $(".lab_diamond").click(function() {
                $(this).toggleClass("active btn btn-success");
                lab = $(".lab_diamond.active").map(function() {
                    return $(this).attr("data-val");
                }).toArray();
                search(prevShape, color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean);
            });
            $(".cut_diamond").click(function() {
                $(this).toggleClass("active btn btn-success");
                 cut = $(".cut_diamond.active").map(function() {
                    return $(this).attr("data-val");
                }).toArray();
                search(prevShape, color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean);
            });
            $(".polish_diamond").click(function() {
                $(this).toggleClass("active btn btn-success");
                polish = $(".polish_diamond.active").map(function() {
                    return $(this).attr("data-val");
                }).toArray();
                search(prevShape, color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean);
            });
            $(".symmetry_diamond").click(function() {
                $(this).toggleClass("active btn btn-success");
                symmetry = $(".symmetry_diamond.active").map(function() {
                    return $(this).attr("data-val");
                }).toArray();
                search(prevShape, color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean);
            });
            $(".fluorescence_diamond").click(function() {
                $(this).toggleClass("active btn btn-success");
                fluorescence = $(".fluorescence_diamond.active").map(function() {
                    return $(this).attr("data-val");
                }).toArray();
                search(prevShape, color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean);
            });
            $(".eyeclean_diamond").click(function() {
                $(".eyeclean_diamond").removeClass("active");
                    $(".eyeclean_diamond").removeClass("btn btn-success");
                    $(this).addClass("active");
                    $(this).addClass("btn btn-success");
                eyeclean = $(this).attr("data-val");
                search(prevShape, color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean);
            });
        function search(shape, color,clarity,lab,cut,polish,symmetry,fluorescence,eyeclean,min_price,max_price) {
            var data = {};
            if(min_price) {
                data.min_price = min_price;
            }
            if(max_price) {
                data.max_price = max_price;
            }
            if(shape) {
                data.shape = shape;
            }
            if(color) {
                data.color = color;
            }
            if(clarity) {
                data.clarity= clarity;
            }
            if(lab) {
                data.lab= lab;
            }
            if(cut) {
                data.cut= cut;
            }
            if(polish) {
                data.polish= polish;
            }
            if(symmetry) {
                data.symmetry = symmetry;
            }
            if(fluorescence){
                data.fluorescence = fluorescence;
            }
            if(eyeclean){
                data.eyeclean = eyeclean;
            }
            function infinteLoadMore(page) {
            $.ajax({
                type: "post",
                dataType: 'json',
			    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                url: '{{ url('api/search') }}',
                data: data,
                success: function(data) {
                    
                // var output = '';
                // if(data.diamond_data.length > 0) {
                //     output+=' <div style="position: relative;">'+
                //             '<div class="vdb-rb-row" id="vdbrb_stone_grid_view_row" >';
                //     for(var count = 0; count < data.diamond_data.length; count++) {
                //         output +='<div class="vdb-rb-col-md-3 vdb-rb-col-sm-6">' +
                //                         '<div class="vdb-rb-list-product-item">' +
                //                            '<a target="_top">' +
                //                                 '<div class="vdb-rb-product-img-wrapper">' +
                //                                  '<img src="{{ url('assets/img/661004702B.jpg')}}" alt="Emerald 0.78 U SI3" class="vdb-rb-img-fluid">' +
                //                                 '</div>' +
                //                               '<div class="vdb-rb-product-details">' +
                //                                   '<p class="vdb-rb-product-name">' + data.diamond_data[count].shape + ' ' + data.diamond_data[count].carat + ' ' + data.diamond_data[count].color + ' '+data.diamond_data[count].clarity+ '</p>' +
                //                                      '<div class="vdb-rb-price-block">' +
                //                                         '<h3><b>  '+data.diamond_data[count].rate+'  '+data.diamond_data[count].currency_symbol+ ' </b></h3>' +
                //                                      '</div>' +
                //                               '</div>' +
                //                             '</a>' +
                //                         '</div>' +
                //                    '</div>';
                //        }
                //    output+='</div>' +
                //                 '</div>';
                //    }

                //     else
                //     {
                //     output += '<tr>';
                //     output += '<td colspan="6">No Data Found</td>';
                //     output += '</tr>';
                //     }
                // $('.button_id').html(output);
                // }
                // });
             }
            }
        });
        // scroll pegination
        var ENDPOINT = "{{ url('/api') }}";
        var page = 1;
        infinteLoadMore(page);
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
                page++;
                infinteLoadMore(page);
            }
        });
        function infinteLoadMore(page) {
            $.ajax({
                    url: ENDPOINT + "/blogs?page=" + page,
                    datatype: "html",
                    type: "get",
                    beforeSend: function () {
                        $('.auto-load').show();
                    }
                })
                .done(function (response) {
                    if (response.length == 0) {
                        $('.auto-load').html("We don't have more data to display :(");
                        return;
                    }
                    $('.auto-load').hide();
                    $("#data-wrapper").append(response);
                })
                .fail(function (jqXHR, ajaxOptions, thrownError) {
                    console.log('Server error occured');
                });
        }
        // scroll pegination
        // search pegination
        // search pegination
    </script>
</body>
</html>
