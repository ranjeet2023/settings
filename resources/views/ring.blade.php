@include('header')
<link rel="stylesheet" href="{{asset('assets/css/ringfilter.css')}}">
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root">
    <div class="MuiBox-root css-0">
        <div class="MuiBox-root css-19kzrtu">
            <div class="RingShapes MuiBox-root css-0">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="22.0613" height="22.0613" fill="url(#pattern8)"></rect>
                </svg>
                <p>Ring Style</p>
                <div class="RingShapes-svgs MuiBox-root css-0">
                    @foreach ($ring_filter['data']['ring_style'] as $ring_style)
                    <div class="RingShape" >
                        <div class="color-svg">
                            <div class="shape-box"   role="checkbox" aria-checked="false" tabindex="0">
                                <svg class="icon shape_diamond" width="42" height="42" viewBox="0 0 42 42" fill="#101010" xmlns="http://www.w3.org/2000/svg">
                                    <img class="imageoff " src="{{ url('assets/img/shape/'.($ring_style) .'.png')}}" width="55" height="55" alt="halo" data-val="{{ $ring_style }}">
                                </svg>
                                <p>{{ ucwords($ring_style) }}</p>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                <div class="MuiBox-root css-16ehxjz">
                    <div class="MuiBox-root css-0">
                        <div class="filterEntity MuiBox-root css-0">
                            <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Metal </p>
                             <div class="toggle-buttons-modern-wrap metals component-wrap" uid="6c303053-b344-4ca8-8a7d-0c338dcbaef5" no-scroll="false" data-v-5587ba50="">
                                @foreach ($ring_filter['data']['ring_metal'] as $ring_metal)
                                <div class="button-wrap white gold"   data-val="{{ $ring_metal }}" >
                                    <button class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-mb-sm white-gold" tabindex="0" type="button">
                                        <span class="q-focus-helper" tabindex="-1"></span>
                                        <span class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                                            <div class="metal {{$ring_metal}} white" >
                                                <div class="metal-inner"></div>
                                            </div>
                                        </span>
                                    </button>
                                    <span class="label">{{ ucwords($ring_metal) }}</span>
                                </div>
                                @endforeach
                                <div class="more-indicator" style="display: none;">
                                    <span class="q-icon text-grey-6" aria-hidden="true" role="presentation" style="font-size: 24px;">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" style="fill: none;"></path>
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <svg width="634" height="1" viewBox="0 0 634 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="paint0_linear_1_1260" x1="-102.559" y1="0.000017266" x2="648.918" y2="-0.0000441161" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.125" stop-opacity="0"></stop>
                                    <stop offset="0.489583"></stop>
                                    <stop offset="1" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="MuiBox-root css-0">
                        <div class="filterEntity MuiBox-root css-0">
                            <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Price </p>
                            <div class="filter-slider-text-fields MuiBox-root css-0">
                                <input type="text" class="js-range-slider_price" name="my_range" data-type="double" data-min="0" data-max="70000" data-from="0" data-to="70000" data-grid="true" />
                            </div>
                        </div>
                        <svg width="634" height="1" viewBox="0 0 634 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="paint0_linear_1_1260" x1="-102.559" y1="0.000017266" x2="648.918" y2="-0.0000441161" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.125" stop-opacity="0"></stop>
                                    <stop offset="0.489583"></stop>
                                    <stop offset="1" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="controller MuiBox-root css-1qssmnr">
                    <div class="MuiBox-root css-0">
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium Mui-disabled MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-18vedka " tabindex="-1" type="button" disabled="">
                            Results: <p id="results"></p>
                        </button>
                    </div>
                    <div class="MuiBox-root css-0">
                        <a href="{{ url('/') }}">
                            <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1d4ezjn" tabindex="0" type="button">Reset Filter<span class="MuiTouchRipple-root css-w0pj6f">
                                </span>
                            </button>
                        </a>
                    </div>
                    <div class="filter-actions MuiBox-root css-70qvj9">
                        <p>Outlook: </p><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall css-1xvjyjn" tabindex="0" type="button">
                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" id="list_view" data-val="list_view" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatListBulletedIcon">
                                <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z">
                                </path>
                            </svg>
                            <span class="MuiTouchRipple-root css-w0pj6f">
                            </span>
                        </button>
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1xzydj0 grid_view" tabindex="0" type="button">
                            <a href="{{ url('/') }}">
                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AppsIcon">
                                    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z">
                                    </path>
                                </svg>
                            </a>
                            <span class="MuiTouchRipple-root css-w0pj6f">
                            </span>
                        </button>
                        <div class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                            <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl sort-by css-elbsbf">
                                <div tabindex="0" role="button" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="demo-simple-select-label demo-simple-select" id="demo-simple-select" class="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-qiwgdb">
                                    Sort By | Price - Low to High</div>
                                <input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput css-1k3x8v3" value="0"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1636szt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
                                    <path d="M7 10l5 5 5-5z">
                                    </path>
                                </svg>
                                <fieldset aria-hidden="true" class="MuiOutlinedInput-notchedOutline css-igs3ac">
                                    <legend class="css-ihdtdm"><span class="notranslate">&ZeroWidthSpace;</span>
                                    </legend>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                 {{-- start diamond grid view --}}
                 <div class="MuiBox-root css-0 grid">
                    <div class="main MuiBox-root css-0">
                        <div class="diamond-grid" id="diamond-grid">
                        </div>
                        <div class="auto-load  text-center" >
                            <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="60"
                                viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                                <path fill="#000" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                    <animateTransform attributeName="transform" attributeType="XML" type="rotate"
                                        dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {{-- start diamond list view --}}
            <div class="MuiBox-root css-0 list_view" style="display:none">
                <div class="main MuiBox-root css-0">
                    <div class="MuiBox-root css-0">
                        <div class="diamond-list" style="margin: 10px 0px;">
                            <div class="thead" style="width: 100%;">
                                <p>Ring</p>
                                <p>Sub Category</p>
                                <p>Metal Name</p>
                                <p>Design</p>
                                <p>Total Price</p>
                            </div>
                            <div class="tbody" id="diamond-grid">
                            </div>
                            <div class="auto-load  text-center"  >
                                <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="60"
                                    viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                                    <path fill="#000" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <script>
    $(document).ready(function() {
        var minp = "";
        var table = "";
        var  page=1;
        var ringmetal= "";
        var ringstyle= "";
        var minValue="";
        var maxValue="";
        var list_view= "";

        $(".js-range-slider_price").ionRangeSlider({
            type: "double",
             skin: "round",
             onFinish: function(data) {
                 minValue = data.from;
                 maxValue = data.to;
                $("#diamond-grid").empty();
                page=1;
                search(ringmetal,ringstyle,minValue, maxValue,list_view);
            }
        });
        // start metal filter
        $(".button-wrap").click(function() {
            ringmetal = $(this).attr("data-val");
            $("#diamond-grid").empty();
            page=1;
            search(ringmetal,ringstyle,minValue, maxValue,list_view);
        });
        // start setting filter
        $(".imageoff").click(function() {
            $(this).toggleClass("selected ringimage");
            ringstyle = $(".imageoff.selected").map(function() {
            return $(this).attr("data-val");
            }).toArray();
            $("#diamond-grid").empty();
            page=1;
            search(ringmetal,ringstyle,minValue, maxValue,list_view);
        });
        $("#list_view").click(function() {
            $('.grid').remove();
            $(this).addClass("text-white");
            $("#diamond-grid").empty();
            $('.list_view').show();
            list_view= $(this).attr("data-val");
            page=1;
            search(ringmetal,ringstyle,minValue, maxValue,list_view);
        });
        var ENDPOINT = "{{ url('/') }}";
        search(ringmetal,ringstyle,minValue, maxValue,list_view);
        window.onscroll = function() {
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                page++;
                search(ringmetal,ringstyle,minValue, maxValue,list_view);
            }
        };

        function  search(ringmetal,ringstyle,minValue, maxValue,list_view) {
            data = {};
            if (ringmetal) {
                data.ringmetal = ringmetal;
            }
            if (ringstyle) {
                data.ringstyle = ringstyle;
            }
            if (minValue) {
                data.minValue = minValue;
            }
            if(list_view) {
                data.list_view = list_view;
            }
            if (maxValue) {
                data.maxValue =maxValue;
            }
            $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                     url: ENDPOINT + "/choose_ring?page=" + page,
                      datatype: "html",
                      type: "get",
                      data: data,
                      beforeSend: function() {
                        $('.auto-load').show();

                    }
                })
                .done(function(response) {
                    var data = JSON.parse(response);
                    if (data.empty) {
                        $('.auto-load').html("We don't have more data to display ");
                    } else {
                        var articles = data.articles;
                        $('.auto-load').hide();
                        $("#diamond-grid").append(articles);
                    }
                })
                .fail(function(jqXHR, ajaxOptions, thrownError) {
                    console.log('Server error occured');
                });
        }
    });

</script>
</body>

</html>

