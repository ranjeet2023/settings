<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>CustomerTDP</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" type="text/css"
        media="all" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"></script>

    <style>
        .toggle-buttons-modern-wrap {
            border-radius: 32px;
            display: flex;
            position: relative;
            transition: all .1s ease-in-out;
            width: -moz-fit-content;
            width: fit-content;
        }

        .metal-inner {
            position: unset !important;
        }

        body.desktop .q-focus-helper:after {
            background: #fff;
        }

        .q-btn {
            align-items: stretch;
            background: #0000;
            border: 0;
            color: inherit;
            cursor: default;
            display: inline-flex;
            flex-direction: column;
            font-size: 14px;
            font-weight: 500;
            height: auto;
            line-height: 1.715em;
            min-height: 2.572em;
            outline: 0;
            padding: 4px 16px;
            position: relative;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            vertical-align: middle;
            width: auto;
        }

        body.desktop .q-focus-helper:after,
        body.desktop .q-focus-helper:before {
            border-radius: inherit;
            content: "";
            height: 100%;
            left: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            transition: background-color .3s cubic-bezier(.25, .8, .5, 1), opacity .6s cubic-bezier(.25, .8, .5, 1);
            width: 100%;
        }

        *,
        :after,
        :before {
            -webkit-tap-highlight-color: transparent;
            -moz-tap-highlight-color: #0000;
            box-sizing: inherit;
        }

        .toggle-buttons-modern-wrap.metals .q-btn .metal.white {
            background: linear-gradient(144.34deg, #c1c2c3 10.16%, #fff 50.12%, #d1d3d4 97.89%);
            border: none !important;
            padding: 2px;

            position: relative;
        }

        .no-outline {
            outline: 0 !important;
        }

        .q-mb-sm {
            margin-bottom: 5px;
        }

        .toggle-buttons-modern-wrap.metals .q-btn {
            /* background: #0000; */
            height: 50px;
            padding-left: 8px;
            width: 50px;
        }

        .toggle-buttons-modern-wrap.metals .q-btn .metal.white .metal-inner {
            background: linear-gradient(206.57deg, #c1c2c3 8.81%, #fff 50.17%, #d1d3d4 99.6%);
            border-radius: 100%;
            height: 100%;
            padding: 4px;
            width: 100%;
        }

        .row>* {
            flex-shrink: 0;
            width: 100%;
            max-width: 100%;
            padding-right: 0px;
            padding-left: 0px;
            margin-top: var(--bs-gutter-y);
        }

        .metal-inner {
            position: unset !important;
        }

        .toggle-buttons-modern-wrap.metals .q-btn.active .metal {
            background: #2d85e2 !important;
        }

        .metal-inner {
            position: unset !important;
        }

        .toggle-buttons-modern-wrap.metals .q-btn.active {
            border: 1px solid #0000;
        }

        .toggle-buttons-modern-wrap.metals .q-btn .metal.rose .metal-inner {
            background: linear-gradient(33.43deg, #ffb1b1 -10.28%, #ffe0e0 48.56%, #ff7272 118.07%, #ff9191 118.08%);
            border-radius: 100%;
            height: 100%;
            padding: 4px;
            width: 100%;
        }

        .toggle-buttons-modern-wrap.metals .q-btn .metal.yellow .metal-inner {
            background: linear-gradient(212.45deg, #ffc700 -8.69%, #f2bd00 22.85%, #ffe884 51.92%, #f2bd00 110.05%);
            border-radius: 100%;
            height: 100%;
            padding: 4px;
            width: 100%;
        }

        .toggle-buttons-modern-wrap.metals .q-btn .metal {
            border: 1px solid #c4c4c4;
            border-radius: 32px;
            height: 32px;
            overflow: hidden;
            position: relative;
            width: 32px;
        }

        .toggle-buttons-modern-wrap .q-btn {
            background: linear-gradient(0deg, #e7f1f5, #e7f1f5);
            border: 1.5px solid #0000;
            height: 64px;
            width: 64px;
        }

        .q-btn:before {
            border-radius: inherit;
            bottom: 0;
            box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
            content: "";
            display: block;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
        }

        .q-btn--flat:before,
        .q-btn--outline:before,
        .q-btn--unelevated:before {
            box-shadow: none;
        }

        *,
        :after,
        :before {
            -webkit-tap-highlight-color: transparent;
            -moz-tap-highlight-color: #0000;
            box-sizing: inherit;
        }

        .q-btn--round {
            border-radius: 50%;
            min-height: 3em;
            min-width: 3em;
            padding: 0;
        }

        .flex-center,
        .items-center {
            align-items: center;
        }

        .column,
        .flex,
        .row {
            display: flex;
            flex-wrap: wrap;
        }

        .q-btn__content {
            transition: opacity .3s;
            z-index: 0;
        }

        .row {
            margin-left: 0px;
            text-align: center;
        }

        .toggle-buttons-modern-wrap .button-wrap>span {
            color: #484848;
            font-family: LinetoLight;
            font-size: 13px;
        }

        .toggle-buttons-modern-wrap .button-wrap {
            align-items: center;
            display: flex;
            flex-direction: column;
            margin-right: 66px;
        }
    </style>
    <link rel="stylesheet" href="{{asset('assets/css/main.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/setting.css')}}">

</head>

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        <div class="MuiBox-root css-0">
            <div class="header MuiBox-root css-0">
                <div class="MuiBox-root css-0"><img
                        src="https://thediamondport.com/uploads/white_label_logo/1663851865_5a32b81ccb9a85480a628faf.png"
                        alt="logo">
                </div>
                <div class="MuiBox-root css-0">
                    <div class="MuiBox-root css-0">
                        <button
                            class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium header-btn css-1dhxdyw"
                            tabindex="0" type="button">Natual<span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </button>
                        <button
                            class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium header-btn css-1833uzb css-1vq41m1"
                            tabindex="0" type="button">Lab<span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                    </div>
                </div>
                <div class="MuiBox-root css-1j6zhch">
                    <svg width="634" height="1" viewBox="0 0 634 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="633.5" y1="0.5" x2="0.5" y2="0.5" stroke="url(#paint0_linear_1_1260)"
                            stroke-linecap="round"></line>
                        <defs>
                            <linearGradient id="paint0_linear_1_1260" x1="-102.559" y1="0.000017266" x2="648.918"
                                y2="-0.0000441161" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-opacity="0"></stop>
                                <stop offset="0.489583"></stop>
                                <stop offset="1" stop-opacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="MuiBox-root css-19kzrtu">
                <div class="RingShapes MuiBox-root css-0">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="22.0613" height="22.0613" fill="url(#pattern8)"></rect>
                    </svg>
                    <p>Ring Style</p>
                    <div class="RingShapes-svgs MuiBox-root css-0">
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box" data-val="Round" role="checkbox" aria-checked="false"
                                    tabindex="0">
                                    <svg class="icon shape_diamond" width="42" height="42" viewBox="0 0 42 42"
                                        fill="#101010" xmlns="http://www.w3.org/2000/svg">
                                        <img class="image_off" src="{{asset('assets/img/shape/halo1.png')}}" width="55"
                                            height="55" alt="halo" id="ringimage">
                                    </svg>
                                    <p>Halo</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box " data-val="princess" role="checkbox" aria-checked="false"
                                    tabindex="0">
                                    <svg class="icon" width="42" height="42" viewBox="0 0 42 42" fill="#101010"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <img class="image_off" src="{{asset('assets/img/shape/pave.png')}}" width="55"
                                            height="55" id="ringimage">
                                    </svg>
                                    <p>pave</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box" data-val="asscher" role="checkbox" aria-checked="false"
                                    tabindex="0">
                                    <svg class="icon shape_diamond " width="42" height="42" viewBox="0 0 42 42"
                                        fill="#101010" xmlns="http://www.w3.org/2000/svg">
                                        <img class="image_off" src="{{asset('assets/img/shape/threestone-remove.png')}}"
                                            width="55" height="55" id="ringimage">
                                    </svg>
                                    <p>Threestone</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box " data-val="emerald" role="checkbox" aria-checked="false"
                                    tabindex="0">
                                    <svg class="icon shape_diamond" width="33" height="42">
                                        <img class="image_off" src="{{asset('assets/img/shape/hiddenbg.png')}}"
                                            width="55" height="55" id="ringimage" alt="Hidden halo">
                                    </svg>
                                    <p>Hidden Halo</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box " data-val="heart" role="checkbox" aria-checked="false"
                                    tabindex="0">
                                    <svg class="icon shape_diamond" width="42" height="38" ">
                                        <img class=" image_off" src="{{asset('assets/img/shape/uniques.png')}}"
                                        width="55" height="55" id="ringimage">
                                    </svg>
                                    <p>Unique</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box " role="checkbox" data-val="oval" aria-checked="false"
                                    tabindex="0">
                                    <svg class="icon " width="29" height="42">
                                        <img class="image_off" src="{{asset('assets/img/shape/classics.png')}}"
                                            width="55" height="55" id="ringimage">
                                    </svg>
                                    <p>Classic</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box" data-val="pear" role="checkbox" aria-checked="false"
                                    tabindex="0">
                                    <svg class="icon " width="29" height="42">
                                        <img class="image_off" src="{{asset('assets/img/shape/classic.png')}}"
                                            width="55" height="55" id="ringimage">
                                    </svg>
                                    <p>Diamond Accent</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box " data-val="cushion" role="checkbox" aria-checked="false"
                                    tabindex="0">
                                    <svg class="icon " width="42" height="42">
                                        <img class="image_off" src="{{asset('assets/img/shape/luxes.png')}}" width="55"
                                            height="55" id="ringimage">
                                    </svg>
                                    <p>Luxe</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box " data-val="radiant" role="checkbox" aria-checked="false"
                                    tabindex="0">
                                    <svg class="icon " width="31" height="42">
                                        <img class="image_off" src="{{asset('assets/img/shape/naturalins.png')}}"
                                            width="55" height="55" id="ringimage">
                                    </svg>
                                    <p>Natural Inspired</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box " data-val="trilliant" role="checkbox" aria-checked="false"
                                    tabindex="0">
                                    <svg class="icon " width="44" height="42">
                                        <img class="image_off" src="{{asset('assets/img/shape/florals.png')}}"
                                            width="55" height="55" id="ringimage">
                                    </svg>
                                    <p>Floral</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box " role="checkbox" aria-checked="false" tabindex="0"><svg
                                        width="18" height="32">
                                        <img class="image_off" src="{{asset('assets/img/shape/solitaires.png')}}"
                                            width="55" height="55" id="ringimage">
                                    </svg>
                                    <p>Solitare</p>
                                </div>
                            </div>
                        </div>
                        <div class="RingShape">
                            <div class="color-svg">
                                <div class="shape-box " role="checkbox" aria-checked="false" tabindex="0">
                                    <svg width="32" height="29">
                                        <img class="image_off" src="{{asset('assets/img/shape/venitages.png')}}"
                                            width="55" alt="venitage" height="55" id="ringimage">
                                    </svg>
                                    <p>Venitage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiBox-root css-16ehxjz">
                        <div class="MuiBox-root css-0">
                            <div class="filterEntity MuiBox-root css-0">
                                <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Metal </p>
                                <div class="toggle-buttons-modern-wrap metals component-wrap"
                                    uid="6c303053-b344-4ca8-8a7d-0c338dcbaef5" no-scroll="false" data-v-5587ba50="">
                                    <div class="button-wrap white-gold-wrap"><button
                                            class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-mb-sm white-gold"
                                            tabindex="0" type="button"><span class="q-focus-helper"
                                                tabindex="-1"></span><span
                                                class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                                                <!---->
                                                <!---->
                                                <div class="metal white">
                                                    <div class="metal-inner"></div>
                                                </div>
                                            </span></button><span class="label">White Gold</span></div>
                                    <div class="button-wrap yellow-gold-wrap"><button
                                            class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-mb-sm yellow-gold"
                                            tabindex="0" type="button"><span class="q-focus-helper"></span><span
                                                class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                                                <!---->
                                                <!---->
                                                <div class="metal yellow">
                                                    <div class="metal-inner"></div>
                                                </div>
                                            </span></button><span class="label">Yellow Gold</span></div>
                                    <div class="button-wrap rose-gold-wrap"><button
                                            class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-mb-sm rose-gold"
                                            tabindex="0" type="button"><span class="q-focus-helper"></span><span
                                                class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                                                <!---->
                                                <!---->
                                                <div class="metal rose">
                                                    <div class="metal-inner"></div>
                                                </div>
                                            </span></button><span class="label">Rose Gold</span></div>
                                    <div class="button-wrap platinum-wrap"><button
                                            class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-mb-sm platinum"
                                            tabindex="0" type="button"><span class="q-focus-helper"></span><span
                                                class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                                                <!---->
                                                <!---->
                                                <div class="metal white">
                                                    <div class="metal-inner"></div>
                                                </div>
                                            </span></button><span class="label">Platinum</span></div>
                                    <div class="more-indicator" style="display: none;"><span class="q-icon text-grey-6"
                                            aria-hidden="true" role="presentation" style="font-size: 24px;"><svg
                                                viewBox="0 0 24 24">
                                                <path d="M0 0h24v24H0V0z" style="fill: none;"></path>
                                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                                            </svg></span></div>
                                </div>
                            </div>
                            <svg width="634" height="1" viewBox="0 0 634 1" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <line x1="633.5" y1="0.5" x2="0.5" y2="0.5" stroke="url(#paint0_linear_1_1260)"
                                    stroke-linecap="round"></line>
                                <defs>
                                    <linearGradient id="paint0_linear_1_1260" x1="-102.559" y1="0.000017266"
                                        x2="648.918" y2="-0.0000441161" gradientUnits="userSpaceOnUse">
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
                                    <input type="text" class="js-range-slider_price" name="my_range" data-type="double"
                                        data-min="0" data-max="70000" data-from="0" data-to="70000" data-grid="true" />

                                </div>
                            </div>
                            <svg width="634" height="1" viewBox="0 0 634 1" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <line x1="633.5" y1="0.5" x2="0.5" y2="0.5" stroke="url(#paint0_linear_1_1260)"
                                    stroke-linecap="round"></line>
                                <defs>
                                    <linearGradient id="paint0_linear_1_1260" x1="-102.559" y1="0.000017266"
                                        x2="648.918" y2="-0.0000441161" gradientUnits="userSpaceOnUse">
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
                            <button
                                class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-55fs0g down-button"
                                tabindex="0" type="button">Advance Filters
                                <span class="MuiButton-endIcon MuiButton-iconSizeMedium css-1n4a93h">
                                    <i class="arrow down" id="down-icon"></i>
                                </span>
                            </button>
                            <button
                                class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium Mui-disabled MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-18vedka "
                                tabindex="-1" type="button" disabled="">
                                Results: <p id="results"></p></button>
                        </div>
                        <div class="MuiBox-root css-0">
                            {{-- <button
                                class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1d4ezjn"
                                tabindex="0" type="button">Search<span
                                    class="MuiTouchRipple-root css-w0pj6f"></span></button> --}}
                            <a href="{{ url('/test') }}">
                                <button
                                    class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1d4ezjn"
                                    tabindex="0" type="button">Reset Filter<span class="MuiTouchRipple-root css-w0pj6f">
                                    </span>
                                </button></a>
                        </div>
                        <div class="filter-actions MuiBox-root css-70qvj9">
                            {{-- <p>Media: </p>
                            <button
                                class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1d4ezjn"
                                tabindex="0" type="button">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="16" height="16" fill="url(#pattern12)"></rect>
                                    <defs>
                                        <pattern id="pattern12" patternContentUnits="objectBoundingBox" width="1"
                                            height="1">
                                            <use xlink:href="#image0_1_65x" transform="scale(0.00195312)"></use>
                                        </pattern>
                                        <image id="image0_1_65x" width="512" height="512"
                                            xlink:href="data:image/png;base64,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">
                                        </image>
                                    </defs>
                                </svg><span class="MuiTouchRipple-root css-w0pj6f"></span></button><button
                                class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1d4ezjn"
                                tabindex="0" type="button"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="16" height="16" fill="url(#patternx10)"></rect>
                                    <defs>
                                        <pattern id="patternx10" patternContentUnits="objectBoundingBox" width="1"
                                            height="1">
                                            <use xlink:href="#image0x_1_66" transform="scale(0.00195312)"></use>
                                        </pattern>
                                        <image id="image0x_1_66" width="512" height="512"
                                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAQBwAAEAcBw9mPZQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d153KZj+cfxzzFjzU6UfV9DdonsRMpQtibqh9IvSfpRKaR9VSlFCqlUQtmyR4iEFFkGUco29n2fmeP3x3k9M8888yz3cl3Xcd33+X2/XvfLYJ7zPJ77Wc7jOpfjNHdHRERE8jIuOgARERGpnxIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBER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ZrYgM5KB4f75RnQPgiTTgMmkwf0/w/3T3Z+OC0+kGkoAJEvFRsSlGD45GHjNHRaglOkl0mA+8Bo6yD+gDXiSIyUAIiMws0WZNTlYlHSl8sKDXgui2YS6TQOeJl1fO/B6AniMIYO8KuOJDE8JgEiXiouUFmTmpGC010ACsRCqhzAFeIoZA/iTLb6e1oU2It1RAiASqNjIODRBWJBUPXGOQa/ZR/n30f7fWH8X4NVBr9dG+PNY/z7W332FWZ/Yn9QGOpE4SgBEREQypHVLERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQwpARAREcmQEgAREZEMKQEQERHJkBIAERGRDCkBEBERyZASABERkQz9Pyrxc/iijr5GAAAAAElFTkSuQmCC">
                                        </image>
                                    </defs>
                                </svg><span class="MuiTouchRipple-root css-w0pj6f"></span>]
                            </button> --}}
                            <p>Outlook: </p><button
                                class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall css-1xvjyjn"
                                tabindex="0" type="button">
                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                                    id="list_view" data-val="list_view" aria-hidden="true" viewBox="0 0 24 24"
                                    data-testid="FormatListBulletedIcon">
                                    <path
                                        d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z">
                                    </path>
                                </svg>
                                <span class="MuiTouchRipple-root css-w0pj6f">
                                </span>
                            </button>
                            <button
                                class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1xzydj0 grid_view"
                                tabindex="0" type="button">
                                <a href="{{ url('/test') }}">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                                        aria-hidden="true" viewBox="0 0 24 24" data-testid="AppsIcon">
                                        <path
                                            d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z">
                                        </path>
                                    </svg>
                                </a>
                                <span class="MuiTouchRipple-root css-w0pj6f">
                                </span>
                            </button>
                            <div class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                                <div
                                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl sort-by css-elbsbf">
                                    <div tabindex="0" role="button" aria-expanded="false" aria-haspopup="listbox"
                                        aria-labelledby="demo-simple-select-label demo-simple-select"
                                        id="demo-simple-select"
                                        class="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-qiwgdb">
                                        Sort By | Price - Low to High</div>
                                    <input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput css-1k3x8v3"
                                        value="0"><svg
                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1636szt"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        data-testid="ArrowDropDownIcon">
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
                    {{-- start diamond grid view --}}
                    <div class="MuiBox-root css-0 grid">
                        <div class="main MuiBox-root css-0">
                            <div class="diamond-grid">
                                @foreach ($ring_data as $ring)
                                <div
                                    class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root entityCard css-1okfn8i">
                                    <div class="imageBox MuiBox-root css-0">
                                        <img src="{{$ring['image']}}" alt="diamond">
                                    </div>
                                    <div class="MuiCardContent-root infoBox css-1qw96cp"
                                        style="color: rgb(49, 79, 222);">
                                        <div class="MuiBox-root css-73nay0">
                                            <h3> {{$ring['product_name']}} {{$ring['metaltype']}} {{ $ring['purity'] }}
                                            </h3>
                                        </div>
                                        <div class="MuiBox-root css-69i1ev">
                                            <h2>$ {{ $ring['productcost'] }}</h2>
                                            <a href="">
                                                <button
                                                    class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall css-1s9fsba shape_ring"
                                                    tabindex="0" type="button" product_id="{{ $ring['product_id'] }}"
                                                    metaltype="{{$ring['metaltype']}}" purity="{{ $ring['purity'] }}"
                                                    productcost="{{ $ring['productcost'] }}"
                                                    product_title="{{$ring['product_title']}}"
                                                    product_name="{{$ring['product_name']}}" image="{{$ring['image']}}">
                                                    View<span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                            <div class="auto-load  text-center">
                                <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="60"
                                    viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                                    <path fill="#000"
                                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                        <animateTransform attributeName="transform" attributeType="XML" type="rotate"
                                            dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {{-- end diamond grid view --}}
                </div>
                {{-- start diamond list view --}}
                {{-- <div class="MuiBox-root css-0 list_view" style="display:none">
                    <div class="main MuiBox-root css-0">
                        <div class="MuiBox-root css-0">
                            <div class="diamond-list" style="margin: 10px 0px;">
                                <div class="diamond-list-types">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="18" height="18" fill="#02BEE8"></rect>
                                    </svg>
                                    <p>Natural</p>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="18" height="18" fill="#2CAA00"></rect>
                                    </svg>
                                    <p>Lab</p>
                                </div>
                                <div class="tbody" id="diamond-grid">

                                </div>
                                {{-- <div class="auto-load  text-center">
                                    <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="60"
                                        viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                                        <path fill="#000"
                                            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                            <animateTransform attributeName="transform" attributeType="XML"
                                                type="rotate" dur="1s" from="0 50 50" to="360 50 50"
                                                repeatCount="indefinite" />
                                        </path>
                                    </svg>
                                </div> --}}
                            </div>
                        </div>
                    </div>
                </div> --}}
                {{-- end diamond list view --}}
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function() {
              $(".js-range-slider_price").ionRangeSlider({
                    type: "double",
                    skin: "round",
                    onFinish: function (data) {
                    var minValue = data.from;
                    var maxValue = data.to;
                    values = [minValue, maxValue];
                    console.log(values);
                    }
                    });
                    $(".shape_ring").click(function() {
                    var product_id = $(this).attr('product_id');
                    var settingtype = $(this).attr('settingtype');
                    var ring_image = $(this).attr('image');
                    var metal_type = $(this).attr('metal_type');
                    var ring_purity = $(this).attr('purity');
                    var productcost = $(this).attr('productcost');
                    var product_title = $(this).attr('product_title');
                    var product_name = $(this).attr('product_name');
                    $.ajax({
                            headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                            type: "post",
                            data:{product_id: product_id,setting_type:settingtype,image:ring_image, metal_type:metal_type,ring_purity:ring_purity,productcost:productcost,product_title:product_title,product_name:product_name},
                            url: "{{ url('confirm_ring') }}",
                            success: function(data){
                                console.log(data);
                                if (data) {
                                window.location.href = "/confirm_ring";
                                }
                            }
                        });
                    });
                    });
    </script>
</body>

</html>
