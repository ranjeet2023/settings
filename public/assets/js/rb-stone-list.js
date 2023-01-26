setTimeout(function(){
    $("#vdbrb_main_page_cover").fadeOut(200);
},5000);
$(window).on('load', function(){
    //this is loader to hide page, until all css/html will not set in dom/page
    $("#vdbrb_main_page_cover").fadeOut(200);
});

var caratSymbol = ' ct';
var priceCurrency = shop_currency_symbol;

$(document).ready(function () {
    $xhr = '';
    $ajax_call_stone_list_running = 'No';

    let params = new URLSearchParams(window.location.search);

    if(supported_shapes != '' && (!params.has('shape'))){
        if($(`.vdbrb_list_item_a_shape_style_natural`).length>0){
            $(`.vdbrb_list_item_a_shape_style_natural`).each(function () {
                var value_for_api = $(this).data('value_for_api');
                var _this = $(this);
                if(value_for_api == supported_shapes){
                    document.cookie = `vdbrb_natural_shape_style=${supported_shapes}`;
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                }
            });
        }
        if($(`.vdbrb_list_item_a_shape_style_labgrown`).length>0){
            $(`.vdbrb_list_item_a_shape_style_labgrown`).each(function () {
                var value_for_api = $(this).data('value_for_api');
                var _this = $(this);
                if(value_for_api == supported_shapes){
                    document.cookie = `vdbrb_labgrown_shape_style=${supported_shapes}`;
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                }
            });
        }
        if($(`.vdbrb_list_item_a_shape_gemstone`).length>0){
            $(`.vdbrb_list_item_a_shape_gemstone`).each(function () {
                var value_for_api = $(this).data('value_for_api');
                var _this = $(this);
                if(value_for_api == supported_shapes){
                    document.cookie = `vdbrb_gemstone_shape=${supported_shapes}`;
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                }
            });
        }
        if($(`.vdbrb_list_item_a_shape_radiance`).length>0){
            $(`.vdbrb_list_item_a_shape_radiance`).each(function () {
                var value_for_api = $(this).data('value_for_api');
                var _this = $(this);
                if(value_for_api == supported_shapes){
                    document.cookie = `vdbrb_radiance_shape=${supported_shapes}`;
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                }
            });
        }
    }
    
    deepLinkStone();

    var vdbRbStoneTab = getCookie('vdb_rb_stone_tab');
    var windowSize = window.screen.width;
    if (vdbRbStoneTab !== null && vdbRbStoneTab!='') {
        //continue
    }
    else{
        if(search_diamond_allow == '1'){
            vdbRbStoneTab = 'natural';
            document.cookie = "vdb_rb_stone_tab=natural"
        }else if(search_lab_grown_allow == '1'){
            vdbRbStoneTab = 'labgrown';
            document.cookie = "vdb_rb_stone_tab=labgrown";
        }else if(search_gemstone_allow == '1'){
            vdbRbStoneTab = 'gemstone';
            document.cookie = "vdb_rb_stone_tab=gemstone";
        }else if(search_radiance_allow == '1'){
            vdbRbStoneTab = 'radiance';
            document.cookie = "vdb_rb_stone_tab=radiance";
        }else{
            vdbRbStoneTab = 'natural';
            document.cookie = "vdb_rb_stone_tab=natural";
        }
    }
    $("#vdbrb_active_tab").val(vdbRbStoneTab);

    set_default_module_by_cookie_natural();
    set_default_module_by_cookie_labgrown();
    set_default_module_by_cookie_gemstone();
    set_default_module_by_cookie_radiance();

    if(vdbRbStoneTab == 'natural'){
        $(".vdb-rb-tabbing").removeClass("vdb-rb-active-tab");
        $("#vdbrb_natural_tab").addClass("vdb-rb-active-tab");

        $('.vdb-rb-steps-icon.vdb-rb-stone-icon').html('<span class="vdb-rb-icon vdb-rb-icon-mainmenu_switch_diamond"></span>');
        if(windowSize < 640){
            $(".vdb_rb_natural_mob_block").show();
            $(".vdb_rb_labgrown_mob_block").hide();
            $(".vdb_rb_gemstone_mob_block").hide();
            $(".vdb_rb_radiance_mob_block").hide();

            $(".vdb_rb_natural_mob_block_content").show();
            $(".vdb_rb_labgrown_mob_block_content").hide();
            $(".vdb_rb_gemstone_mob_block_content").hide();
            $(".vdb_rb_radiance_mob_block_content").hide();

            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }else{
            $(".vdb_rb_natural_block").show();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }

        var vdbrb_natural_page_number = getCookie("vdbrb_natural_page_number");
        if (vdbrb_natural_page_number !== null && vdbrb_natural_page_number!='') {
            $("#vdbrb_natural_page_number").val(vdbrb_natural_page_number);
        }
        call_natural_list();
    }
    else if(vdbRbStoneTab == 'labgrown'){
        $(".vdb-rb-tabbing").removeClass("vdb-rb-active-tab");
        $("#vdbrb_labgrown_tab").addClass("vdb-rb-active-tab");

        $('.vdb-rb-steps-icon.vdb-rb-stone-icon').html('<span class="vdb-rb-icon vdb-rb-icon-LAB-Icon"><span class="path1"></span></span>');
        
        if(windowSize < 640){
            $(".vdb_rb_natural_mob_block").hide();
            $(".vdb_rb_labgrown_mob_block").show();
            $(".vdb_rb_gemstone_mob_block").hide();
            $(".vdb_rb_radiance_mob_block").hide();

            $(".vdb_rb_natural_mob_block_content").hide();
            $(".vdb_rb_labgrown_mob_block_content").show();
            $(".vdb_rb_gemstone_mob_block_content").hide();
            $(".vdb_rb_radiance_mob_block_content").hide();

            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }else{
            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").show();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }
        var vdbrb_labgrown_page_number = getCookie("vdbrb_labgrown_page_number");
        if (vdbrb_labgrown_page_number !== null && vdbrb_labgrown_page_number!='') {
            $("#vdbrb_labgrown_page_number").val(vdbrb_labgrown_page_number);
        }
        call_labgrown_list();
    }
    else if(vdbRbStoneTab == 'gemstone'){
        $(".vdb-rb-tabbing").removeClass("vdb-rb-active-tab");
        $("#vdbrb_gemstone_tab").addClass("vdb-rb-active-tab");

        $('.vdb-rb-steps-icon.vdb-rb-stone-icon').html('<span class="vdb-rb-icon vdb-rb-icon-mainmenu_switch_gemstone"><span class="path1"></span></span>');

        if(windowSize < 640){
            $(".vdb_rb_natural_mob_block").hide();
            $(".vdb_rb_labgrown_mob_block").hide();
            $(".vdb_rb_gemstone_mob_block").show();
            $(".vdb_rb_radiance_mob_block").hide();

            $(".vdb_rb_natural_mob_block_content").hide();
            $(".vdb_rb_labgrown_mob_block_content").hide();
            $(".vdb_rb_gemstone_mob_block_content").show();
            $(".vdb_rb_radiance_mob_block_content").hide();

            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }else{
            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").show();
            $(".vdb_rb_radiance_block").hide();
        }
        var vdbrb_gemstone_page_number = getCookie("vdbrb_gemstone_page_number");
        if (vdbrb_gemstone_page_number !== null && vdbrb_gemstone_page_number!='') {
            $("#vdbrb_gemstone_page_number").val(vdbrb_gemstone_page_number);
        }
        call_gemstone_list();
    }
    else if(vdbRbStoneTab == 'radiance'){
        $(".vdb-rb-tabbing").removeClass("vdb-rb-active-tab");
        $("#vdbrb_radiance_tab").addClass("vdb-rb-active-tab");

        $('.vdb-rb-steps-icon.vdb-rb-stone-icon').html('<span class="vdb-rb-icon vdb-rb-icon-mainmenu_switch_gemstone"><span class="path1"></span></span>');

        if(windowSize < 640){
            $(".vdb_rb_natural_mob_block").hide();
            $(".vdb_rb_labgrown_mob_block").hide();
            $(".vdb_rb_gemstone_mob_block").hide();
            $(".vdb_rb_radiance_mob_block").show();

            $(".vdb_rb_natural_mob_block_content").hide();
            $(".vdb_rb_labgrown_mob_block_content").hide();
            $(".vdb_rb_gemstone_mob_block_content").hide();
            $(".vdb_rb_radiance_mob_block_content").show();

            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }else{
            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").show();
        }
        var vdbrb_radiance_page_number = getCookie("vdbrb_radiance_page_number");
        if (vdbrb_radiance_page_number !== null && vdbrb_radiance_page_number!='') {
            $("#vdbrb_radiance_page_number").val(vdbrb_radiance_page_number);
        }
        call_radiance_list();
    }

    // #region - Slick filter options slider
    if($('#vdbrb_shape_filter_slider_natural').length>0){
        $('#vdbrb_shape_filter_slider_natural').slick({
            slidesToShow: shape_value_natural_arr.length > 11 ? 12 : shape_value_natural_arr.length,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: shape_value_natural_arr.length > 11 ? 12 : shape_value_natural_arr.length
                },
            }, {
                breakpoint: 1025,
                settings: {
                    slidesToShow: shape_value_natural_arr.length > 8 ? 9 : shape_value_natural_arr.length
                },
            }, {
                breakpoint: 840,
                settings: {
                    slidesToShow: shape_value_natural_arr.length > 5 ? 6 : shape_value_natural_arr.length
                }
            }, ]
        });
    }
    if($('#vdbrb_lab_filter_slider_natural').length>0){
        $('#vdbrb_lab_filter_slider_natural').slick({
            slidesToShow: lab_value_natural_arr.length > 5 ? 6 : lab_value_natural_arr.length,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: lab_value_natural_arr.length > 4 ? 5 : lab_value_natural_arr.length,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: lab_value_natural_arr.length > 3 ? 4 : lab_value_natural_arr.length,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: lab_value_natural_arr.length > 5 ? 6 : lab_value_natural_arr.length,
                }
            }]
        });
    }
    if($('#vdbrb_fancy_color_filter_slider_natural').length>0){
        $('#vdbrb_fancy_color_filter_slider_natural').slick({
            slidesToShow: fancy_color_value_natural_arr.length > 5 ? 6 : fancy_color_value_natural_arr.length,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: fancy_color_value_natural_arr.length > 4 ? 5 : fancy_color_value_natural_arr.length,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: fancy_color_value_natural_arr.length > 3 ? 4 : fancy_color_value_natural_arr.length,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: fancy_color_value_natural_arr.length > 5 ? 6 : fancy_color_value_natural_arr.length,
                }
            }]
        });
    }

    if($('#vdbrb_shape_filter_slider_labgrown').length>0){
        $('#vdbrb_shape_filter_slider_labgrown').slick({
            slidesToShow: shape_value_labgrown_arr.length > 11 ? 12 : shape_value_labgrown_arr.length,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: shape_value_labgrown_arr.length > 11 ? 12 : shape_value_labgrown_arr.length
                },
            }, {
                breakpoint: 1025,
                settings: {
                    slidesToShow: shape_value_labgrown_arr.length > 8 ? 9 : shape_value_labgrown_arr.length
                },
            }, {
                breakpoint: 840,
                settings: {
                    slidesToShow: shape_value_labgrown_arr.length > 5 ? 6 : shape_value_labgrown_arr.length
                }
            }, ]
        });
    }
    if($('#vdbrb_lab_filter_slider_labgrown').length>0){
        $('#vdbrb_lab_filter_slider_labgrown').slick({
            slidesToShow: lab_value_labgrown_arr.length > 5 ? 6 : lab_value_labgrown_arr.length,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: lab_value_labgrown_arr.length > 4 ? 5 : lab_value_labgrown_arr.length,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: lab_value_labgrown_arr.length > 3 ? 4 : lab_value_labgrown_arr.length,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: lab_value_labgrown_arr.length > 5 ? 6 : lab_value_labgrown_arr.length,
                }
            }]
        });
    }
    if($('#vdbrb_fancy_color_filter_slider_labgrown').length>0){
        $('#vdbrb_fancy_color_filter_slider_labgrown').slick({
            slidesToShow: fancy_color_value_labgrown_arr.length > 5 ? 6 : fancy_color_value_labgrown_arr.length,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: fancy_color_value_labgrown_arr.length > 4 ? 5 : fancy_color_value_labgrown_arr.length,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: fancy_color_value_labgrown_arr.length > 3 ? 4 : fancy_color_value_labgrown_arr.length,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: fancy_color_value_labgrown_arr.length > 5 ? 6 : fancy_color_value_labgrown_arr.length,
                }
            }]
        });
    }

    if($('#vdbrb_shape_filter_slider_gemstone').length>0){
        $('#vdbrb_shape_filter_slider_gemstone').slick({
            slidesToShow: shape_value_gemstone_arr.length > 11 ? 12 : shape_value_gemstone_arr.length,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: shape_value_gemstone_arr.length > 11 ? 12 : shape_value_gemstone_arr.length
                },
            }, {
                breakpoint: 1025,
                settings: {
                    slidesToShow: shape_value_gemstone_arr.length > 8 ? 9 : shape_value_gemstone_arr.length
                },
            }, {
                breakpoint: 840,
                settings: {
                    slidesToShow: shape_value_gemstone_arr.length > 5 ? 6 : shape_value_gemstone_arr.length
                }
            }, ]
        });
    }
    if($('#vdbrb_type_filter_slider_gemstone').length>0){
        $('#vdbrb_type_filter_slider_gemstone').slick({
            slidesToShow: type_value_gemstone_arr.length > 11 ? 12 : type_value_gemstone_arr.length,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: type_value_gemstone_arr.length > 11 ? 12 : type_value_gemstone_arr.length
                },
            }, {
                breakpoint: 1025,
                settings: {
                    slidesToShow: type_value_gemstone_arr.length > 8 ? 9 : type_value_gemstone_arr.length
                },
            }, {
                breakpoint: 840,
                settings: {
                    slidesToShow: type_value_gemstone_arr.length > 5 ? 6 : type_value_gemstone_arr.length
                }
            }, ]
        });
    }

    if($('#vdbrb_type_filter_slider_radiance').length>0){
        $('#vdbrb_type_filter_slider_radiance').slick({
            slidesToShow: Object.keys(type_value_radiance_arr).length > 11 ? 12 : Object.keys(type_value_radiance_arr).length,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: Object.keys(type_value_radiance_arr).length > 11 ? 12 : Object.keys(type_value_radiance_arr).length,
                },
            }, {
                breakpoint: 1025,
                settings: {
                    slidesToShow: Object.keys(type_value_radiance_arr).length > 8 ? 9 : Object.keys(type_value_radiance_arr).length,
                },
            }, {
                breakpoint: 840,
                settings: {
                    slidesToShow: Object.keys(type_value_radiance_arr).length > 5 ? 6 : Object.keys(type_value_radiance_arr).length,
                }
            }, ]
        });
    }
    //#endregion

    // #region - ion-slider filter options slider
    if($('.vbdrb_cut_natural_web').length>0){
        $(".vbdrb_cut_natural_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: cut_value_natural_arr,
            onFinish: function (data) {
                var from_value = data.from_value;
                var to_value = data.to_value;
                var full_value = from_value+','+to_value;

                $('.vbdrb_cut_natural_web').val(full_value);
                document.cookie = "vdbrb_natural_cut="+full_value;

                vdbrbNaturalCutRange = full_value.split(',').join(' - ');
                $('#vdbrb_natural_cut_mobile_val').html(vdbrbNaturalCutRange.length>30?vdbrbNaturalCutRange.substr(0,30)+'...':vdbrbNaturalCutRange);
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_symmetry_natural_web').length>0){
        $(".vbdrb_symmetry_natural_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: symmetry_value_natural_arr,
            onFinish: function (data) {
                var from_value = data.from_value;
                var to_value = data.to_value;
                var full_value = from_value+','+to_value;

                $('.vbdrb_symmetry_natural_web').val(full_value);
                document.cookie = "vdbrb_natural_symmetry="+full_value;

                vdbrbNaturalSymmetryRange = full_value.split(',').join(' - ');

                $('#vdbrb_natural_symmetry_mobile_val').html(full_value.length>30?vdbrbNaturalSymmetryRange.substr(0,30)+'...':vdbrbNaturalSymmetryRange);
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_polish_natural_web').length>0){
        $(".vbdrb_polish_natural_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: polish_value_natural_arr,
            onFinish: function (data) {
                var from_value = data.from_value;
                var to_value = data.to_value;
                var full_value = from_value+','+to_value;

                $('.vbdrb_polish_natural_web').val(full_value);
                document.cookie = "vdbrb_natural_polish="+full_value;

                vdbrbNaturalPolishRange = full_value.split(',').join(' - ');
                $('#vdbrb_natural_polish_mobile_val').html(full_value.length>30?vdbrbNaturalPolishRange.substr(0,30)+'...':vdbrbNaturalPolishRange);
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_clarity_natural_web').length>0){
        $(".vbdrb_clarity_natural_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: clarity_value_natural_arr,
            onFinish: function (data) {
                var from_value = data.from_value;
                var to_value = data.to_value;
                var full_value = from_value+','+to_value;

                $('.vbdrb_clarity_natural_web').val(full_value);
                document.cookie = "vdbrb_natural_clarity="+full_value;

                vdbrbNaturalClarityRange = full_value.split(',').join(' - ');
                $('#vdbrb_natural_clarity_mobile_val').html(full_value.length>30?vdbrbNaturalClarityRange.substr(0,30)+'...':vdbrbNaturalClarityRange);
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_white_color_natural_web').length>0){
        $(".vbdrb_white_color_natural_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: white_color_value_natural_arr,
            onFinish: function (data) {
                var from_value = data.from_value;
                var to_value = data.to_value;
                var full_value = from_value+','+to_value;

                $('.vbdrb_white_color_natural_web').val(full_value);
                document.cookie = "vdbrb_natural_color_white="+full_value;
                document.cookie = "vdbrb_natural_color=White";

                vdbrbNaturalColorRange = full_value.split(',').join(' - ');
                $('#vdbrb_natural_color_mobile_val').html(full_value.length>30?vdbrbNaturalColorRange.substr(0,30)+'...':vdbrbNaturalColorRange);
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_fluorescence_natural_web').length>0){
        $(".vbdrb_fluorescence_natural_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: flour_value_natural_arr,
            onFinish: function (data) {
                $('.vbdrb_fluorescence_natural_web').val($('.vbdrb_fluorescence_natural_web').val());

                var lower_flour = data.from;
                var upper_flour = data.to;

                var arr = [];
                if (flour_value_natural_arr != undefined && flour_value_natural_arr.length > 0) {
                    for (var i = lower_flour; i <= upper_flour; i++) {
                        arr.push(flour_value_natural_arr[i]);
                    }
                }
                arr = array_unique(arr);

                document.cookie = "vdbrb_natural_fluorescence_intensities="+arr.join(',');
                if(arr.length > 0){
                    $('#vdbrb_natural_fluorescence_mobile_val').html(arr.join(',').length>30?arr.join(',').substr(0,30)+'...':arr.join(','));
                }else{
                    $('#vdbrb_natural_fluorescence_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
                }
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_carat_natural_web').length>0){
        $(".vbdrb_carat_natural_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: default_carat_stepper_natural,
            input_values_separator:',',
            min: default_min_carat_natural,
            max: default_max_carat_natural,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(2);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(2);
                var full_value = from_value+','+to_value;

                $('.vbdrb_carat_natural_web').val(full_value);

                $('.vdbrb_min_carat_natural_web').val(from_value);
                $('.vdbrb_max_carat_natural_web').val(to_value);
                document.cookie = "vdbrb_natural_min_carat="+from_value;
                document.cookie = "vdbrb_natural_max_carat="+to_value;
                set_min_max_mobile_carat_natural();
            }
        });
    }
    if($('.vbdrb_price_natural_web').length>0){
        $(".vbdrb_price_natural_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: default_budget_stepper_natural,
            input_values_separator:',',
            min: default_min_price_natural,
            max: default_max_price_natural,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(2);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(2);
                var full_value = from_value+','+to_value;

                $('.vbdrb_price_natural_web').val(full_value);

                $('.vdbrb_min_price_natural_web').val(from_value);
                $('.vdbrb_max_price_natural_web').val(to_value);
                document.cookie = "vdbrb_natural_min_price="+from_value;
                document.cookie = "vdbrb_natural_max_price="+to_value;
                set_min_max_mobile_price_natural();
            }
        });
    }
    if($('.vbdrb_depth_natural_web').length>0){
        $(".vbdrb_depth_natural_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: 0.1,
            input_values_separator:',',
            min: default_min_depth_natural,
            max: default_max_depth_natural,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(1);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(1);
                var full_value = from_value+','+to_value;

                $('.vbdrb_depth_natural_web').val(full_value);

                $('.vdbrb_min_depth_natural_web').val(from_value);
                $('.vdbrb_max_depth_natural_web').val(to_value);
                document.cookie = "vdbrb_natural_min_depth="+from_value;
                document.cookie = "vdbrb_natural_max_depth="+to_value;
                set_min_max_mobile_depth_natural();
            }
        });
    }
    if($('.vbdrb_table_natural_web').length>0){
        $(".vbdrb_table_natural_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: 0.1,
            input_values_separator:',',
            min: default_min_table_natural,
            max: default_max_table_natural,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(1);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(1);
                var full_value = from_value+','+to_value;

                $('.vbdrb_table_natural_web').val(full_value);

                $('.vdbrb_min_table_natural_web').val(from_value);
                $('.vdbrb_max_table_natural_web').val(to_value);
                document.cookie = "vdbrb_natural_min_table="+from_value;
                document.cookie = "vdbrb_natural_max_table="+to_value;
                set_min_max_mobile_table_natural();
            }
        });
    }

    if($('.vbdrb_cut_labgrown_web').length>0){
        $(".vbdrb_cut_labgrown_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: cut_value_labgrown_arr,
            onFinish: function (data) {
                var from_value = data.from_value;
                var to_value = data.to_value;
                var full_value = from_value+','+to_value;

                $('.vbdrb_cut_labgrown_web').val(full_value);
                document.cookie = "vdbrb_labgrown_cut="+full_value;

                vdbrbLabgrownCutRange = full_value.split(',').join(' - ');
                $('#vdbrb_labgrown_cut_mobile_val').html(vdbrbLabgrownCutRange.length>30?vdbrbLabgrownCutRange.substr(0,30)+'...':vdbrbLabgrownCutRange);
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_symmetry_labgrown_web').length>0){
        $(".vbdrb_symmetry_labgrown_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: symmetry_value_labgrown_arr,
            onFinish: function (data) {
                var from_value = data.from_value;
                var to_value = data.to_value;
                var full_value = from_value+','+to_value;

                $('.vbdrb_symmetry_labgrown_web').val(full_value);
                document.cookie = "vdbrb_labgrown_symmetry="+full_value;

                vdbrbLabgrownSymmetryRange = full_value.split(',').join(' - ');
                $('#vdbrb_labgrown_symmetry_mobile_val').html(full_value.length>30?vdbrbLabgrownSymmetryRange.substr(0,30)+'...':vdbrbLabgrownSymmetryRange);
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_polish_labgrown_web').length>0){
        $(".vbdrb_polish_labgrown_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: polish_value_labgrown_arr,
            onFinish: function (data) {
                var from_value = data.from_value;
                var to_value = data.to_value;
                var full_value = from_value+','+to_value;

                $('.vbdrb_polish_labgrown_web').val(full_value);
                document.cookie = "vdbrb_labgrown_polish="+full_value;

                vdbrbLabgrownPolishRange = full_value.split(',').join(' - ');
                $('#vdbrb_labgrown_polish_mobile_val').html(full_value.length>30?vdbrbLabgrownPolishRange.substr(0,30)+'...':vdbrbLabgrownPolishRange);
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_clarity_labgrown_web').length>0){
        $(".vbdrb_clarity_labgrown_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: clarity_value_labgrown_arr,
            onFinish: function (data) {
                var from_value = data.from_value;
                var to_value = data.to_value;
                var full_value = from_value+','+to_value;

                $('.vbdrb_clarity_labgrown_web').val(full_value);
                document.cookie = "vdbrb_labgrown_clarity="+full_value;

                vdbrbLabrownClarityRange = full_value.split(',').join(' - ');

                $('#vdbrb_labgrown_clarity_mobile_val').html(full_value.length>30?vdbrbLabrownClarityRange.substr(0,30)+'...':vdbrbLabrownClarityRange);
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_white_color_labgrown_web').length>0){
        $(".vbdrb_white_color_labgrown_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: white_color_value_labgrown_arr,
            onFinish: function (data) {
                var from_value = data.from_value;
                var to_value = data.to_value;
                var full_value = from_value+','+to_value;

                $('.vbdrb_white_color_labgrown_web').val(full_value);
                document.cookie = "vdbrb_labgrown_color_white="+full_value;
                document.cookie = "vdbrb_labgrown_color=White";

                vdbrbLabgrownColorRange = full_value.split(',').join(' - ');

                $('#vdbrb_labgrown_color_mobile_val').html(full_value.length>30?vdbrbLabgrownColorRange.substr(0,30)+'...':vdbrbLabgrownColorRange);
                call_stone_again();
            }
        });
    }
    if($('.vbdrb_carat_labgrown_web').length>0){
        $(".vbdrb_carat_labgrown_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: default_carat_stepper_labgrown,
            input_values_separator:',',
            min: default_min_carat_labgrown,
            max: default_max_carat_labgrown,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(2);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(2);
                var full_value = from_value+','+to_value;

                $('.vbdrb_carat_labgrown_web').val(full_value);

                $('.vdbrb_min_carat_labgrown_web').val(from_value);
                $('.vdbrb_max_carat_labgrown_web').val(to_value);
                document.cookie = "vdbrb_labgrown_min_carat="+from_value;
                document.cookie = "vdbrb_labgrown_max_carat="+to_value;
                set_min_max_mobile_carat_labgrown();
            }
        });
    }
    if($('.vbdrb_price_labgrown_web').length>0){
        $(".vbdrb_price_labgrown_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: default_budget_stepper_labgrown,
            input_values_separator:',',
            min: default_min_price_labgrown,
            max: default_max_price_labgrown,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(2);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(2);
                var full_value = from_value+','+to_value;

                $('.vbdrb_price_labgrown_web').val(full_value);

                $('.vdbrb_min_price_labgrown_web').val(from_value);
                $('.vdbrb_max_price_labgrown_web').val(to_value);
                document.cookie = "vdbrb_labgrown_min_price="+from_value;
                document.cookie = "vdbrb_labgrown_max_price="+to_value;
                set_min_max_mobile_price_labgrown();
            }
        });
    }
    if($('.vbdrb_depth_labgrown_web').length>0){
        $(".vbdrb_depth_labgrown_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: 0.1,
            input_values_separator:',',
            min: default_min_depth_labgrown,
            max: default_max_depth_labgrown,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(1);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(1);
                var full_value = from_value+','+to_value;

                $('.vbdrb_depth_labgrown_web').val(full_value);

                $('.vdbrb_min_depth_labgrown_web').val(from_value);
                $('.vdbrb_max_depth_labgrown_web').val(to_value);
                document.cookie = "vdbrb_labgrown_min_depth="+from_value;
                document.cookie = "vdbrb_labgrown_max_depth="+to_value;
                set_min_max_mobile_depth_labgrown();
            }
        });
    }
    if($('.vbdrb_table_labgrown_web').length>0){
        $(".vbdrb_table_labgrown_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: 0.1,
            input_values_separator:',',
            min: default_min_table_labgrown,
            max: default_max_table_labgrown,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(1);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(1);
                var full_value = from_value+','+to_value;

                $('.vbdrb_table_labgrown_web').val(full_value);

                $('.vdbrb_min_table_labgrown_web').val(from_value);
                $('.vdbrb_max_table_labgrown_web').val(to_value);
                document.cookie = "vdbrb_labgrown_min_table="+from_value;
                document.cookie = "vdbrb_labgrown_max_table="+to_value;
                set_min_max_mobile_table_labgrown();
            }
        });
    }
    if($('.vbdrb_fluorescence_labgrown_web').length>0){
        $(".vbdrb_fluorescence_labgrown_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: true,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: false,
            input_values_separator:',',
            values: flour_value_labgrown_arr,
            onFinish: function (data) {
                $('.vbdrb_fluorescence_labgrown_web').val($('.vbdrb_fluorescence_labgrown_web').val());

                var lower_flour = data.from;
                var upper_flour = data.to;

                var arr = [];
                if (flour_value_labgrown_arr != undefined && flour_value_labgrown_arr.length > 0) {
                    for (var i = lower_flour; i <= upper_flour; i++) {
                        arr.push(flour_value_labgrown_arr[i]);
                    }
                }
                arr = array_unique(arr);

                document.cookie = "vdbrb_labgrown_fluorescence_intensities="+arr.join(',');
                if(arr.length > 0){
                    $('#vdbrb_labgrown_fluorescence_mobile_val').html(arr.join(',').length>30?arr.join(',').substr(0,30)+'...':arr.join(','));
                }else{
                    $('#vdbrb_labgrown_fluorescence_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
                }
                call_stone_again();
            }
        });
    }

    if($('.vbdrb_carat_gemstone_web').length>0){
        $(".vbdrb_carat_gemstone_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: default_carat_stepper_gemstone,
            input_values_separator:',',
            min: default_min_carat_gemstone,
            max: default_max_carat_gemstone,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(2);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(2);
                var full_value = from_value+','+to_value;

                $('.vbdrb_carat_gemstone_web').val(full_value);

                $('.vdbrb_min_carat_gemstone_web').val(from_value);
                $('.vdbrb_max_carat_gemstone_web').val(to_value);
                document.cookie = "vdbrb_gemstone_min_carat="+from_value;
                document.cookie = "vdbrb_gemstone_max_carat="+to_value;
                set_min_max_mobile_carat_gemstone();
            }
        });
    }
    if($('.vbdrb_price_gemstone_web').length>0){
        $(".vbdrb_price_gemstone_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: default_budget_stepper_gemstone,
            input_values_separator:',',
            min: default_min_price_gemstone,
            max: default_max_price_gemstone,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(2);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(2);
                var full_value = from_value+','+to_value;

                $('.vbdrb_price_gemstone_web').val(full_value);

                $('.vdbrb_min_price_gemstone_web').val(from_value);
                $('.vdbrb_max_price_gemstone_web').val(to_value);
                document.cookie = "vdbrb_gemstone_min_price="+from_value;
                document.cookie = "vdbrb_gemstone_max_price="+to_value;
                set_min_max_mobile_price_gemstone();
            }
        });
    }

    if($('.vbdrb_price_radiance_web').length>0){
        $(".vbdrb_price_radiance_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: default_budget_stepper_radiance,
            input_values_separator:',',
            min: default_min_price_radiance,
            max: default_max_price_radiance,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(2);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(2);
                var full_value = from_value+','+to_value;

                $('.vbdrb_price_radiance_web').val(full_value);

                $('.vdbrb_min_price_radiance_web').val(from_value);
                $('.vdbrb_max_price_radiance_web').val(to_value);
                document.cookie = "vdbrb_radiance_min_price="+from_value;
                document.cookie = "vdbrb_radiance_max_price="+to_value;
                set_min_max_mobile_price_radiance();
            }
        });
    }
    if($('.vbdrb_carat_radiance_web').length>0){
        $(".vbdrb_carat_radiance_web").ionRangeSlider({
            type: 'double',
            skin: "round",
            grid: false,
            grid_snap: true,
            force_edges: true,
            hide_min_max: true,
            hide_from_to: true,
            step: default_carat_stepper_radiance,
            input_values_separator:',',
            min: default_min_carat_radiance,
            max: default_max_carat_radiance,
            onFinish: function (data) {
                var from_value = parseFloat(data.from_pretty.split(' ').join('')).toFixed(2);
                var to_value = parseFloat(data.to_pretty.split(' ').join('')).toFixed(2);
                var full_value = from_value+','+to_value;

                $('.vbdrb_carat_radiance_web').val(full_value);

                $('.vdbrb_min_carat_radiance_web').val(from_value);
                $('.vdbrb_max_carat_radiance_web').val(to_value);
                document.cookie = "vdbrb_radiance_min_carat="+from_value;
                document.cookie = "vdbrb_radiance_max_carat="+to_value;
                set_min_max_mobile_carat_radiance();
            }
        });
    }
    //#endregion

    $('.vdbrb_main_advance_filter_web_natural').hide();
    $('#vdbrb_main_advance_filter_mobile_natural').hide();

    $('.vdbrb_main_advance_filter_web_labgrown').hide();
    $('#vdbrb_main_advance_filter_mobile_labgrown').hide();

    $('.vdbrb_main_advance_filter_web_gemstone').hide();
    $('#vdbrb_main_advance_filter_mobile_gemstone').hide();

    $('.vdbrb_main_advance_filter_web_radiance').hide();
    $('#vdbrb_main_advance_filter_mobile_radiance').hide();

    var selected_stone = '';
    $(".vdb-rb-tabbing").each(function () {
        var _this = $(this);
        if($(_this).hasClass('vdb-rb-active-tab')){
            selected_stone = _this.data('id');
        }

        if(selected_stone == 'natural' || selected_stone == 'labgrown'){
            $('#vdb_rb_quiz_shape_modal_open').show();
        }else{
            $('#vdb_rb_quiz_shape_modal_open').hide();
        }
    });

    var vdbrb_is_quiz = getCookie("vdbrb_is_quiz");
    if (vdbrb_is_quiz == 'true') {
        setTimeout(function(){
            $('html,body').animate({
                scrollTop: $('.vdb-rb-product-result-wrapper').offset().top
            },'slow');
        }, 1000);    
    }

    if($('.vdb-rb-tabbing').length > 3){
        if(windowSize < 640){
            $(".vdb-rb-row .vdb-rb-tab-wrap").addClass("vdb-rb-four-tab");
        }
    }

    if($(".vdbrb_list_item_a_shape_radiance").length == 0){
        $('.vdb_rb_radiance_block .vdb-rb-shape-options').hide();
    }
    if($(".vdbrb_list_item_a_type_radiance").length == 0){
        $('.vdb_rb_radiance_block .vdb-rb-gem-typ-list-wrapper').hide();
    }
    
    if(params.has('quiz_start') && params.get('quiz_start') == 'true'){
        $('#vdb_rb_quiz_shape_modal_open').trigger('click');
    }
});

function call_stone_again(){
    $ajax_call_stone_list_running = 'No';

    document.cookie = "vdbrb_is_quiz=false";
    document.cookie = "vdbrb_is_quiz_matters=";

    $(".vdbrb_stone_search_diamond_count").html('-');
    $("#vdbrb_stone_grid_view_row").html('');

    var vdbRbStoneTab = getCookie('vdb_rb_stone_tab');
    if(vdbRbStoneTab=='natural'){
        $("#vdbrb_natural_page_number").val('1');
        call_natural_list();
    }else if(vdbRbStoneTab=='labgrown'){
        $("#vdbrb_labgrown_page_number").val('1');
        call_labgrown_list();
    }else if(vdbRbStoneTab=='gemstone'){
        $("#vdbrb_gemstone_page_number").val('1');
        call_gemstone_list();
    }else if(vdbRbStoneTab=='radiance'){
        $("#vdbrb_radiance_page_number").val('1');
        call_radiance_list();
    }
}

function set_default_module_by_cookie_natural(){
    //check if previous page is stone-details, then only apply page_number from cookie, otherwise start from 1
    if(document.referrer!=undefined && document.referrer.includes('rb-stone-details')){
        var vdbrb_natural_page_number = getCookie("vdbrb_natural_page_number");
        if (vdbrb_natural_page_number !== null && vdbrb_natural_page_number!='') {
            $("#vdbrb_natural_page_number").val(vdbrb_natural_page_number);
        }
    }else{
        $("#vdbrb_natural_page_number").val('1');
        document.cookie = "vdbrb_natural_page_number="+'1';
    }

    //Shape
    var vdbrb_natural_shape_style = getCookie("vdbrb_natural_shape_style");
    if (vdbrb_natural_shape_style !== null && vdbrb_natural_shape_style!='') {
        var shape_arr = vdbrb_natural_shape_style.split(',');   //['Round','Pear','Princess']

        var title_arr = [];
        if($(".vdbrb_list_item_a_shape_style_natural").length>0){
            $(".vdbrb_list_item_a_shape_style_natural").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), shape_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_natural_shape_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));

        //$('#vdbrb_natural_shape_mobile_val').html(vdbrb_natural_shape_style.length>30?vdbrb_natural_shape_style.substr(0,30)+'...':vdbrb_natural_shape_style);
    }

    //Lab
    var vdbrb_natural_lab_style = getCookie("vdbrb_natural_lab_style");
    if (vdbrb_natural_lab_style !== null && vdbrb_natural_lab_style!='') {
        var lab_arr = vdbrb_natural_lab_style.split(',');   //['IGI','GIA','GSI']

        var title_arr = [];
        if($(".vdbrb_list_item_a_lab_style_natural").length>0){
            $(".vdbrb_list_item_a_lab_style_natural").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), lab_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_natural_lab_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));

        //$('#vdbrb_natural_lab_mobile_val').html(vdbrb_natural_lab_style.length>30?vdbrb_natural_lab_style.substr(0,30)+'...':vdbrb_natural_lab_style);
    }

    //Flour
    var vdbrb_natural_fluorescence_intensities = getCookie("vdbrb_natural_fluorescence_intensities");
    if (vdbrb_natural_fluorescence_intensities !== null && vdbrb_natural_fluorescence_intensities!='') {
        var flour_arr = vdbrb_natural_fluorescence_intensities.split(',');   //['Faint','Medium','Strong']

        var first_flour = flour_arr[0]; //Faint
        var last_flour = flour_arr[flour_arr.length-1];    //Strong
        if(flour_value_natural_arr!=undefined && flour_value_natural_arr.length>0){
            $(".vbdrb_fluorescence_natural_web").val(first_flour+','+last_flour);
        }
        $('#vdbrb_natural_fluorescence_mobile_val').html(vdbrb_natural_fluorescence_intensities.length>30?vdbrb_natural_fluorescence_intensities.substr(0,30)+'...':vdbrb_natural_fluorescence_intensities);
    }

    //Min Price
    var vdbrb_natural_min_price = getCookie("vdbrb_natural_min_price");
    if (vdbrb_natural_min_price !== null && vdbrb_natural_min_price!='') {
        if($(".vdbrb_min_price_natural_web").length>0){
            $(".vdbrb_min_price_natural_web").val(vdbrb_natural_min_price);
        }
    }else{
        if($(".vdbrb_min_price_natural_web").length>0){
            document.cookie = "vdbrb_natural_min_price="+$(".vdbrb_min_price_natural_web").val();
        }
    }

    //Max Price
    var vdbrb_natural_max_price = getCookie("vdbrb_natural_max_price");
    if (vdbrb_natural_max_price !== null && vdbrb_natural_max_price!='') {
        if($(".vdbrb_max_price_natural_web").length>0){
            $(".vdbrb_max_price_natural_web").val(vdbrb_natural_max_price);
        }
    }else{
        if($(".vdbrb_max_price_natural_web").length>0){
            document.cookie = "vdbrb_natural_max_price="+$(".vdbrb_max_price_natural_web").val();
        }
    }

    if(vdbrb_natural_min_price !== null && vdbrb_natural_min_price!='' && vdbrb_natural_max_price !== null && vdbrb_natural_max_price!=''){
        $(".vbdrb_price_natural_web").val(vdbrb_natural_min_price+','+vdbrb_natural_max_price);
    }

    if(vdbrb_natural_min_price !== null && vdbrb_natural_min_price!='' && vdbrb_natural_max_price !== null && vdbrb_natural_max_price!=''){
        $('#vdbrb_natural_price_mobile_val').html(priceCurrency+vdbrb_natural_min_price+' - '+priceCurrency+vdbrb_natural_max_price);
    }else if(vdbrb_natural_min_price !== null && vdbrb_natural_min_price!=''){
        $('#vdbrb_natural_price_mobile_val').html(priceCurrency+vdbrb_natural_min_price);
    }else if(vdbrb_natural_max_price !== null && vdbrb_natural_max_price!=''){
        $('#vdbrb_natural_price_mobile_val').html(priceCurrency+vdbrb_natural_max_price);
    }

    //Min Depth
    var vdbrb_natural_min_depth = getCookie("vdbrb_natural_min_depth");
    if (vdbrb_natural_min_depth !== null && vdbrb_natural_min_depth!='') {
        if($(".vdbrb_min_depth_natural_web").length>0){
            $(".vdbrb_min_depth_natural_web").val(vdbrb_natural_min_depth);
            //$(".vdbrb_min_depth_slider_natural").val(vdbrb_natural_min_depth);
            //$(".vbdrb_depth_natural_web").val(vdbrb_natural_min_depth);
        }
    }

    //Max Depth
    var vdbrb_natural_max_depth = getCookie("vdbrb_natural_max_depth");
    if (vdbrb_natural_max_depth !== null && vdbrb_natural_max_depth!='') {
        if($(".vdbrb_max_depth_natural_web").length>0){
            $(".vdbrb_max_depth_natural_web").val(vdbrb_natural_max_depth);
            //$(".vdbrb_max_depth_slider_natural").val(vdbrb_natural_max_depth);
            //$(".vbdrb_depth_natural_web").val(vdbrb_natural_max_depth);
        }
    }

    if(vdbrb_natural_min_depth !== null && vdbrb_natural_min_depth!='' && vdbrb_natural_max_depth !== null && vdbrb_natural_max_depth!=''){
        $(".vbdrb_depth_natural_web").val(vdbrb_natural_min_depth+','+vdbrb_natural_max_depth);
    }

    if(vdbrb_natural_min_depth !== null && vdbrb_natural_min_depth!='' && vdbrb_natural_max_depth !== null && vdbrb_natural_max_depth!=''){
        $('#vdbrb_natural_depth_mobile_val').html(vdbrb_natural_min_depth+' - '+vdbrb_natural_max_depth);
    }else if(vdbrb_natural_min_depth !== null && vdbrb_natural_min_depth!=''){
        $('#vdbrb_natural_depth_mobile_val').html(vdbrb_natural_min_depth);
    }else if(vdbrb_natural_max_depth !== null && vdbrb_natural_max_depth!=''){
        $('#vdbrb_natural_depth_mobile_val').html(vdbrb_natural_max_depth);
    }

    //Min Table
    var vdbrb_natural_min_table = getCookie("vdbrb_natural_min_table");
    if (vdbrb_natural_min_table !== null && vdbrb_natural_min_table!='') {
        if($(".vdbrb_min_table_natural_web").length>0){
            $(".vdbrb_min_table_natural_web").val(vdbrb_natural_min_table);
            //$(".vdbrb_min_table_slider_natural").val(vdbrb_natural_min_table);
            //$(".vbdrb_table_natural_web").val(vdbrb_natural_min_table);
        }
    }

    //Max Table
    var vdbrb_natural_max_table = getCookie("vdbrb_natural_max_table");
    if (vdbrb_natural_max_table !== null && vdbrb_natural_max_table!='') {
        if($(".vdbrb_max_table_natural_web").length>0){
            $(".vdbrb_max_table_natural_web").val(vdbrb_natural_max_table);
            //$(".vdbrb_max_table_slider_natural").val(vdbrb_natural_max_table);
            //$(".vbdrb_table_natural_web").val(vdbrb_natural_max_table);
        }
    }

    if(vdbrb_natural_min_table !== null && vdbrb_natural_min_table!='' && vdbrb_natural_max_table !== null && vdbrb_natural_max_table!=''){
        $(".vbdrb_table_natural_web").val(vdbrb_natural_min_table+','+vdbrb_natural_max_table);
    }

    if(vdbrb_natural_min_table !== null && vdbrb_natural_min_table!='' && vdbrb_natural_max_table !== null && vdbrb_natural_max_table!=''){
        $('#vdbrb_natural_table_mobile_val').html(vdbrb_natural_min_table+' - '+vdbrb_natural_max_table);
    }else if(vdbrb_natural_min_table !== null && vdbrb_natural_min_table!=''){
        $('#vdbrb_natural_table_mobile_val').html(vdbrb_natural_min_table);
    }else if(vdbrb_natural_max_table !== null && vdbrb_natural_max_table!=''){
        $('#vdbrb_natural_table_mobile_val').html(vdbrb_natural_max_table);
    }

    //Min Carat
    var vdbrb_natural_min_carat = getCookie("vdbrb_natural_min_carat");
    if (vdbrb_natural_min_carat !== null && vdbrb_natural_min_carat!='') {
        if($(".vdbrb_min_carat_natural_web").length>0){
            $(".vdbrb_min_carat_natural_web").val(vdbrb_natural_min_carat);
        }
    }

    //Max Carat
    var vdbrb_natural_max_carat = getCookie("vdbrb_natural_max_carat");
    if (vdbrb_natural_max_carat !== null && vdbrb_natural_max_carat!='') {
        if($(".vdbrb_max_carat_natural_web").length>0){
            $(".vdbrb_max_carat_natural_web").val(vdbrb_natural_max_carat);
        }
    }
    if(vdbrb_natural_min_carat !== null && vdbrb_natural_min_carat!='' && vdbrb_natural_max_carat !== null && vdbrb_natural_max_carat!=''){
        $(".vbdrb_carat_natural_web").val(vdbrb_natural_min_carat+','+vdbrb_natural_max_carat);
    }

    if(vdbrb_natural_min_carat !== null && vdbrb_natural_min_carat!='' && vdbrb_natural_max_carat !== null && vdbrb_natural_max_carat!=''){
        $('#vdbrb_natural_carat_mobile_val').html(vdbrb_natural_min_carat+caratSymbol+' - '+vdbrb_natural_max_carat+caratSymbol);
    }else if(vdbrb_natural_min_carat !== null && vdbrb_natural_min_carat!=''){
        $('#vdbrb_natural_carat_mobile_val').html(vdbrb_natural_min_carat+caratSymbol);
    }else if(vdbrb_natural_max_carat !== null && vdbrb_natural_max_carat!=''){
        $('#vdbrb_natural_carat_mobile_val').html(vdbrb_natural_max_carat+caratSymbol);
    }

    //Clarity
    var vdbrb_natural_clarity = getCookie("vdbrb_natural_clarity");
    if (vdbrb_natural_clarity !== null && vdbrb_natural_clarity!='') {
        //var clarity_arr = vdbrb_natural_clarity.split(',');   //['FL','IF','VVS1']

        //var first_clarity = clarity_arr[0]; //FL
        //var last_clarity = clarity_arr[clarity_arr.length-1];    //VVS1
        if(clarity_value_natural_arr!=undefined && clarity_value_natural_arr.length>0){
            $(".vbdrb_clarity_natural_web").val(vdbrb_natural_clarity);
        }
        vdbrbNaturalClarityRange = vdbrb_natural_clarity.split(',').join(' - ');

        $('#vdbrb_natural_clarity_mobile_val').html(vdbrb_natural_clarity.length>30?vdbrbNaturalClarityRange.substr(0,30)+'...':vdbrbNaturalClarityRange);
    }

    //Cut
    var vdbrb_natural_cut = getCookie("vdbrb_natural_cut"); //Good,Poor
    if (vdbrb_natural_cut !== null && vdbrb_natural_cut!='') {
        //var cut_arr = vdbrb_natural_cut.split(',');//['Good','Poor']

        //var first_cut = cut_arr[0];
        //var last_cut = cut_arr[cut_arr.length-1];
        if(cut_value_natural_arr!=undefined && cut_value_natural_arr.length>0){
            /*var first_cut = getKeyByValue(cut_value_natural_arr, first_cut);
             var last_cut = getKeyByValue(cut_value_natural_arr, last_cut);

             $(".vbdrb_cut_from_natural_web").val(first_cut);
             $(".vbdrb_cut_to_natural_web").val(last_cut);*/
            $(".vbdrb_cut_natural_web").val(vdbrb_natural_cut);
        }
        vdbrbNaturalCutRange = vdbrb_natural_cut.split(',').join(' - ');
        $('#vdbrb_natural_cut_mobile_val').html(vdbrbNaturalCutRange.length>30?vdbrbNaturalCutRange.substr(0,30)+'...':vdbrbNaturalCutRange);
    }

    //Symmetry
    var vdbrb_natural_symmetry = getCookie("vdbrb_natural_symmetry");
    if (vdbrb_natural_symmetry !== null && vdbrb_natural_symmetry!='') {
        //var symmetry_arr = vdbrb_natural_symmetry.split(',');

        //var first_symmetry = symmetry_arr[0];
        //var last_symmetry = symmetry_arr[symmetry_arr.length-1];
        if(symmetry_value_natural_arr!=undefined && symmetry_value_natural_arr.length>0){
            /*var first_symmetry = getKeyByValue(symmetry_value_natural_arr, first_symmetry);
             var last_symmetry = getKeyByValue(symmetry_value_natural_arr, last_symmetry);

             $(".vbdrb_symmetry_from_natural_web").val(first_symmetry);
             $(".vbdrb_symmetry_to_natural_web").val(last_symmetry);*/
            $(".vbdrb_symmetry_natural_web").val(vdbrb_natural_symmetry);
        }
        
        vdbrbNaturalSymmetryRange = vdbrb_natural_symmetry.split(',').join(' - ');
        $('#vdbrb_natural_symmetry_mobile_val').html(vdbrb_natural_symmetry.length>30?vdbrbNaturalSymmetryRange.substr(0,30)+'...':vdbrbNaturalSymmetryRange);
    }

    //Polish
    var vdbrb_natural_polish = getCookie("vdbrb_natural_polish");
    if (vdbrb_natural_polish !== null && vdbrb_natural_polish!='') {
        //var polish_arr = vdbrb_natural_polish.split(',');

        //var first_polish = polish_arr[0];
        //var last_polish = polish_arr[polish_arr.length-1];
        if(polish_value_natural_arr!=undefined && polish_value_natural_arr.length>0){
            $(".vbdrb_polish_natural_web").val(vdbrb_natural_polish);
        }

        vdbrbNaturalPolishRange = vdbrb_natural_polish.split(',').join(' - ');
        $('#vdbrb_natural_polish_mobile_val').html(vdbrb_natural_polish.length>30?vdbrbNaturalPolishRange.substr(0,30)+'...':vdbrbNaturalPolishRange);
    }

    //Color
    var vdbrb_natural_color = getCookie("vdbrb_natural_color");
    if (vdbrb_natural_color !== null && vdbrb_natural_color!='') {
        if(vdbrb_natural_color=='White'){
            var vdbrb_natural_color_white = getCookie("vdbrb_natural_color_white");
            if (vdbrb_natural_color_white !== null && vdbrb_natural_color_white!='') {
                //var color_white_arr = vdbrb_natural_color_white.split(',');

                //var first_color_white = color_white_arr[0];
                //var last_color_white = color_white_arr[color_white_arr.length-1];
                if(white_color_value_natural_arr!=undefined && white_color_value_natural_arr.length>0){
                    $(".vbdrb_white_color_natural_web").val(vdbrb_natural_color_white);
                }

                vdbrbNaturalColorRange = vdbrb_natural_color_white.split(',').join(' - ');
                $('#vdbrb_natural_color_mobile_val').html(vdbrb_natural_color_white.length>30?vdbrbNaturalColorRange.substr(0,30)+'...':vdbrbNaturalColorRange);
            }
            $(".vdbrb_natural_color").hide();
            $(".vdbrb_natural_white_color").show();
            $(".vdbrb_color_module_switch").each(function () {
                if($(this).data('stone_type') == 'natural'){
                    $(this).removeClass("vdb-rb-switch-active");
                    if($(this).data('color-module') == vdbrb_natural_color){
                        $(this).addClass("vdb-rb-switch-active");
                    }
                }
            });
        }
        else if(vdbrb_natural_color=='Fancy'){
            var vdbrb_natural_color_fancy = getCookie("vdbrb_natural_color_fancy");
            if (vdbrb_natural_color_fancy !== null && vdbrb_natural_color_fancy!='') {
                var color_fancy = vdbrb_natural_color_fancy.split(',');
                var title_arr = [];
                if($(".vdbrb_list_item_a_fancy_color_style_natural").length>0){
                    $(".vdbrb_list_item_a_fancy_color_style_natural").each(function () {
                        var _this = $(this);
                        if ($.inArray(_this.data('value_for_api'), color_fancy) != -1) {
                            $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                            title_arr.push(_this.data('title'));
                        }
                    });
                    title_arr = array_unique(title_arr);
                }

                $('#vdbrb_natural_color_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));

                //$('#vdbrb_natural_color_mobile_val').html(vdbrb_natural_color_fancy.length>30?vdbrb_natural_color_fancy.substr(0,30)+'...':vdbrb_natural_color_fancy);
            }
            $(".vdbrb_natural_color").hide();
            $(".vdbrb_natural_fancy_color").show();
            $(".vdbrb_color_module_switch").each(function () {
                if($(this).data('stone_type') == 'natural'){
                    $(this).removeClass("vdb-rb-switch-active");
                    if($(this).data('color-module') == vdbrb_natural_color){
                        $(this).addClass("vdb-rb-switch-active");
                    }
                }
            });
        }
    }

    //sorting
    var vdbRbStoneTab = $("#vdbrb_active_tab").val();
    if(vdbRbStoneTab=='natural'){
        var vdbrb_natural_sorting = getCookie("vdbrb_natural_sorting");
        if (vdbrb_natural_sorting !== null && vdbrb_natural_sorting!='') {
            $('#vdbrb_sorting_item_text').html(vdbrb_natural_sorting);
            if($(".vdbrb_sort_option").length>0){
                $(".vdbrb_sort_option").each(function () {
                    if($(this).data('value')==vdbrb_natural_sorting){
                        $(this).addClass('vdb-rb-selected');
                    }
                });
            }
        }
    }
}
function set_default_module_by_cookie_labgrown(){
    //check if previous page is stone-details, then only apply page_number from cookie, otherwise start from 1
    if(document.referrer!=undefined && document.referrer.includes('rb-stone-details')){
        var vdbrb_labgrown_page_number = getCookie("vdbrb_labgrown_page_number");
        if (vdbrb_labgrown_page_number !== null && vdbrb_labgrown_page_number!='') {
            $("#vdbrb_labgrown_page_number").val(vdbrb_labgrown_page_number);
        }
    }else{
        $("#vdbrb_labgrown_page_number").val('1');
        document.cookie = "vdbrb_labgrown_page_number="+'1';
    }

    //Shape
    var vdbrb_labgrown_shape_style = getCookie("vdbrb_labgrown_shape_style");
    if (vdbrb_labgrown_shape_style !== null && vdbrb_labgrown_shape_style!='') {
        var shape_arr = vdbrb_labgrown_shape_style.split(',');   //['Round','Pear','Princess']

        var title_arr = [];
        if($(".vdbrb_list_item_a_shape_style_labgrown").length>0){
            $(".vdbrb_list_item_a_shape_style_labgrown").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), shape_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_labgrown_shape_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
        
        //$('#vdbrb_labgrown_shape_mobile_val').html(vdbrb_labgrown_shape_style.length>30?vdbrb_labgrown_shape_style.substr(0,30)+'...':vdbrb_labgrown_shape_style);
    }

    //Lab
    var vdbrb_labgrown_lab_style = getCookie("vdbrb_labgrown_lab_style");
    if (vdbrb_labgrown_lab_style !== null && vdbrb_labgrown_lab_style!='') {
        var lab_arr = vdbrb_labgrown_lab_style.split(',');   //['IGI','GIA','GSI']

        var title_arr = [];
        if($(".vdbrb_list_item_a_lab_style_labgrown").length>0){
            $(".vdbrb_list_item_a_lab_style_labgrown").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), lab_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_labgrown_lab_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
        //$('#vdbrb_labgrown_lab_mobile_val').html(vdbrb_labgrown_lab_style.length>30?vdbrb_labgrown_lab_style.substr(0,30)+'...':vdbrb_labgrown_lab_style);
    }

    //Flour
    var vdbrb_labgrown_fluorescence_intensities = getCookie("vdbrb_labgrown_fluorescence_intensities");
    if (vdbrb_labgrown_fluorescence_intensities !== null && vdbrb_labgrown_fluorescence_intensities!='') {
        var flour_arr = vdbrb_labgrown_fluorescence_intensities.split(',');   //['Faint','Medium','Strong']

        var first_flour = flour_arr[0]; //Faint
        var last_flour = flour_arr[flour_arr.length-1];    //Strong
        if(flour_value_labgrown_arr!=undefined && flour_value_labgrown_arr.length>0){
            $(".vbdrb_fluorescence_labgrown_web").val(first_flour+','+last_flour);
        }
        $('#vdbrb_labgrown_fluorescence_mobile_val').html(vdbrb_labgrown_fluorescence_intensities.length>30?vdbrb_labgrown_fluorescence_intensities.substr(0,30)+'...':vdbrb_labgrown_fluorescence_intensities);
    }

    //Min Price
    var vdbrb_labgrown_min_price = getCookie("vdbrb_labgrown_min_price");
    if (vdbrb_labgrown_min_price !== null && vdbrb_labgrown_min_price!='') {
        if($(".vdbrb_min_price_labgrown_web").length>0){
            $(".vdbrb_min_price_labgrown_web").val(vdbrb_labgrown_min_price);
        }
    }else{
        if($(".vdbrb_min_price_labgrown_web").length>0){
            document.cookie = "vdbrb_labgrown_min_price="+$(".vdbrb_min_price_labgrown_web").val();
        }
    }

    //Max Price
    var vdbrb_labgrown_max_price = getCookie("vdbrb_labgrown_max_price");
    if (vdbrb_labgrown_max_price !== null && vdbrb_labgrown_max_price!='') {
        if($(".vdbrb_max_price_labgrown_web").length>0){
            $(".vdbrb_max_price_labgrown_web").val(vdbrb_labgrown_max_price);
        }
    }else{
        if($(".vdbrb_max_price_labgrown_web").length>0){
            document.cookie = "vdbrb_labgrown_max_price="+$(".vdbrb_max_price_labgrown_web").val();
        }
    }

    if(vdbrb_labgrown_min_price !== null && vdbrb_labgrown_min_price!='' && vdbrb_labgrown_max_price !== null && vdbrb_labgrown_max_price!=''){
        $(".vbdrb_price_labgrown_web").val(vdbrb_labgrown_min_price+','+vdbrb_labgrown_max_price);
    }

    if(vdbrb_labgrown_min_price !== null && vdbrb_labgrown_min_price!='' && vdbrb_labgrown_max_price !== null && vdbrb_labgrown_max_price!=''){
        $('#vdbrb_labgrown_price_mobile_val').html(priceCurrency+vdbrb_labgrown_min_price+' - '+priceCurrency+vdbrb_labgrown_max_price);
    }else if(vdbrb_labgrown_min_price !== null && vdbrb_labgrown_min_price!=''){
        $('#vdbrb_labgrown_price_mobile_val').html(priceCurrency+vdbrb_labgrown_min_price);
    }else if(vdbrb_labgrown_max_price !== null && vdbrb_labgrown_max_price!=''){
        $('#vdbrb_labgrown_price_mobile_val').html(priceCurrency+vdbrb_labgrown_max_price);
    }

    //Min Depth
    var vdbrb_labgrown_min_depth = getCookie("vdbrb_labgrown_min_depth");
    if (vdbrb_labgrown_min_depth !== null && vdbrb_labgrown_min_depth!='') {
        if($(".vdbrb_min_depth_labgrown_web").length>0){
            $(".vdbrb_min_depth_labgrown_web").val(vdbrb_labgrown_min_depth);
            //$(".vdbrb_min_depth_slider_labgrown").val(vdbrb_labgrown_min_depth);
            //$(".vbdrb_depth_labgrown_web").val(vdbrb_labgrown_min_depth);
        }
    }

    //Max Depth
    var vdbrb_labgrown_max_depth = getCookie("vdbrb_labgrown_max_depth");
    if (vdbrb_labgrown_max_depth !== null && vdbrb_labgrown_max_depth!='') {
        if($(".vdbrb_max_depth_labgrown_web").length>0){
            $(".vdbrb_max_depth_labgrown_web").val(vdbrb_labgrown_max_depth);
            //$(".vdbrb_max_depth_slider_labgrown").val(vdbrb_labgrown_max_depth);
            //$(".vbdrb_depth_labgrown_web").val(vdbrb_labgrown_max_depth);
        }
    }

    if(vdbrb_labgrown_min_depth !== null && vdbrb_labgrown_min_depth!='' && vdbrb_labgrown_max_depth !== null && vdbrb_labgrown_max_depth!=''){
        $(".vbdrb_depth_labgrown_web").val(vdbrb_labgrown_min_depth+','+vdbrb_labgrown_max_depth);
    }

    if(vdbrb_labgrown_min_depth !== null && vdbrb_labgrown_min_depth!='' && vdbrb_labgrown_max_depth !== null && vdbrb_labgrown_max_depth!=''){
        $('#vdbrb_labgrown_depth_mobile_val').html(vdbrb_labgrown_min_depth+' - '+vdbrb_labgrown_max_depth);
    }else if(vdbrb_labgrown_min_depth !== null && vdbrb_labgrown_min_depth!=''){
        $('#vdbrb_labgrown_depth_mobile_val').html(vdbrb_labgrown_min_depth);
    }else if(vdbrb_labgrown_max_depth !== null && vdbrb_labgrown_max_depth!=''){
        $('#vdbrb_labgrown_depth_mobile_val').html(vdbrb_labgrown_max_depth);
    }

    //Min Table
    var vdbrb_labgrown_min_table = getCookie("vdbrb_labgrown_min_table");
    if (vdbrb_labgrown_min_table !== null && vdbrb_labgrown_min_table!='') {
        if($(".vdbrb_min_table_labgrown_web").length>0){
            $(".vdbrb_min_table_labgrown_web").val(vdbrb_labgrown_min_table);
            //$(".vdbrb_min_table_slider_labgrown").val(vdbrb_labgrown_min_table);
            //$(".vbdrb_table_labgrown_web").val(vdbrb_labgrown_min_table);
        }
    }

    //Max Table
    var vdbrb_labgrown_max_table = getCookie("vdbrb_labgrown_max_table");
    if (vdbrb_labgrown_max_table !== null && vdbrb_labgrown_max_table!='') {
        if($(".vdbrb_max_table_labgrown_web").length>0){
            $(".vdbrb_max_table_labgrown_web").val(vdbrb_labgrown_max_table);
            //$(".vdbrb_max_table_slider_labgrown").val(vdbrb_labgrown_max_table);
            //$(".vbdrb_table_labgrown_web").val(vdbrb_labgrown_max_table);
        }
    }

    if(vdbrb_labgrown_min_table !== null && vdbrb_labgrown_min_table!='' && vdbrb_labgrown_max_table !== null && vdbrb_labgrown_max_table!=''){
        $(".vbdrb_table_labgrown_web").val(vdbrb_labgrown_min_table+','+vdbrb_labgrown_max_table);
    }

    if(vdbrb_labgrown_min_table !== null && vdbrb_labgrown_min_table!='' && vdbrb_labgrown_max_table !== null && vdbrb_labgrown_max_table!=''){
        $('#vdbrb_labgrown_table_mobile_val').html(vdbrb_labgrown_min_table+' - '+vdbrb_labgrown_max_table);
    }else if(vdbrb_labgrown_min_table !== null && vdbrb_labgrown_min_table!=''){
        $('#vdbrb_labgrown_table_mobile_val').html(vdbrb_labgrown_min_table);
    }else if(vdbrb_labgrown_max_table !== null && vdbrb_labgrown_max_table!=''){
        $('#vdbrb_labgrown_table_mobile_val').html(vdbrb_labgrown_max_table);
    }

    //Min Carat
    var vdbrb_labgrown_min_carat = getCookie("vdbrb_labgrown_min_carat");
    if (vdbrb_labgrown_min_carat !== null && vdbrb_labgrown_min_carat!='') {
        if($(".vdbrb_min_carat_labgrown_web").length>0){
            $(".vdbrb_min_carat_labgrown_web").val(vdbrb_labgrown_min_carat);
        }
    }

    //Max Carat
    var vdbrb_labgrown_max_carat = getCookie("vdbrb_labgrown_max_carat");
    if (vdbrb_labgrown_max_carat !== null && vdbrb_labgrown_max_carat!='') {
        if($(".vdbrb_max_carat_labgrown_web").length>0){
            $(".vdbrb_max_carat_labgrown_web").val(vdbrb_labgrown_max_carat);
        }
    }
    if(vdbrb_labgrown_min_carat !== null && vdbrb_labgrown_min_carat!='' && vdbrb_labgrown_max_carat !== null && vdbrb_labgrown_max_carat!=''){
        $(".vbdrb_carat_labgrown_web").val(vdbrb_labgrown_min_carat+','+vdbrb_labgrown_max_carat);
    }

    if(vdbrb_labgrown_min_carat !== null && vdbrb_labgrown_min_carat!='' && vdbrb_labgrown_max_carat !== null && vdbrb_labgrown_max_carat!=''){
        $('#vdbrb_labgrown_carat_mobile_val').html(vdbrb_labgrown_min_carat+caratSymbol+' - '+vdbrb_labgrown_max_carat+caratSymbol);
    }else if(vdbrb_labgrown_min_carat !== null && vdbrb_labgrown_min_carat!=''){
        $('#vdbrb_labgrown_carat_mobile_val').html(vdbrb_labgrown_min_carat+caratSymbol);
    }else if(vdbrb_labgrown_max_carat !== null && vdbrb_labgrown_max_carat!=''){
        $('#vdbrb_labgrown_carat_mobile_val').html(vdbrb_labgrown_max_carat+caratSymbol);
    }

    //Clarity
    var vdbrb_labgrown_clarity = getCookie("vdbrb_labgrown_clarity");
    if (vdbrb_labgrown_clarity !== null && vdbrb_labgrown_clarity!='') {
        //var clarity_arr = vdbrb_labgrown_clarity.split(',');   //['FL','IF','VVS1']

        //var first_clarity = clarity_arr[0]; //FL
        //var last_clarity = clarity_arr[clarity_arr.length-1];    //VVS1
        if(clarity_value_labgrown_arr!=undefined && clarity_value_labgrown_arr.length>0){
            /*var first_clarity = getKeyByValue(clarity_value_labgrown_arr, first_clarity);  //1
             var last_clarity = getKeyByValue(clarity_value_labgrown_arr, last_clarity);   //3

             $(".vbdrb_clarity_from_labgrown_web").val(first_clarity);
             $(".vbdrb_clarity_to_labgrown_web").val(last_clarity);*/
            $(".vbdrb_clarity_labgrown_web").val(vdbrb_labgrown_clarity);
        }
        vdbrbLabrownClarityRange = vdbrb_labgrown_clarity.split(',').join(' - ');
        $('#vdbrb_labgrown_clarity_mobile_val').html(vdbrb_labgrown_clarity.length>30?vdbrbLabrownClarityRange.substr(0,30)+'...':vdbrbLabrownClarityRange);
    }

    //Cut
    var vdbrb_labgrown_cut = getCookie("vdbrb_labgrown_cut"); //Good,Poor
    if (vdbrb_labgrown_cut !== null && vdbrb_labgrown_cut!='') {
        //var cut_arr = vdbrb_labgrown_cut.split(',');//['Good','Poor']

        //var first_cut = cut_arr[0];
        //var last_cut = cut_arr[cut_arr.length-1];
        if(cut_value_labgrown_arr!=undefined && cut_value_labgrown_arr.length>0){
            $(".vbdrb_cut_labgrown_web").val(vdbrb_labgrown_cut);
        }
        vdbrbLabgrownCutRange = vdbrb_labgrown_cut.split(',').join(' - ');
        $('#vdbrb_labgrown_cut_mobile_val').html(vdbrbLabgrownCutRange.length>30?vdbrbLabgrownCutRange.substr(0,30)+'...':vdbrbLabgrownCutRange);
    }

    //Symmetry
    var vdbrb_labgrown_symmetry = getCookie("vdbrb_labgrown_symmetry");
    if (vdbrb_labgrown_symmetry !== null && vdbrb_labgrown_symmetry!='') {
        //var symmetry_arr = vdbrb_labgrown_symmetry.split(',');

        //var first_symmetry = symmetry_arr[0];
        //var last_symmetry = symmetry_arr[symmetry_arr.length-1];
        if(symmetry_value_labgrown_arr!=undefined && symmetry_value_labgrown_arr.length>0){
            $(".vbdrb_symmetry_labgrown_web").val(vdbrb_labgrown_symmetry);
        }
        vdbrbLabgrownSymmetryRange = vdbrb_labgrown_symmetry.split(',').join(' - ');
        $('#vdbrb_labgrown_symmetry_mobile_val').html(vdbrb_labgrown_symmetry.length>30?vdbrbLabgrownSymmetryRange.substr(0,30)+'...':vdbrbLabgrownSymmetryRange);
    }

    //Polish
    var vdbrb_labgrown_polish = getCookie("vdbrb_labgrown_polish");
    if (vdbrb_labgrown_polish !== null && vdbrb_labgrown_polish!='') {
        //var polish_arr = vdbrb_labgrown_polish.split(',');

        //var first_polish = polish_arr[0];
        //var last_polish = polish_arr[polish_arr.length-1];
        if(polish_value_labgrown_arr!=undefined && polish_value_labgrown_arr.length>0){
            $(".vbdrb_polish_labgrown_web").val(vdbrb_labgrown_polish);
        }
        
        vdbrbLabgrownPolishRange = vdbrb_labgrown_polish.split(',').join(' - ');
        $('#vdbrb_labgrown_polish_mobile_val').html(vdbrb_labgrown_polish.length>30?vdbrbLabgrownPolishRange.substr(0,30)+'...':vdbrbLabgrownPolishRange);
    }

    //Color
    var vdbrb_labgrown_color = getCookie("vdbrb_labgrown_color");
    if (vdbrb_labgrown_color !== null && vdbrb_labgrown_color!='') {
        if(vdbrb_labgrown_color=='White'){
            var vdbrb_labgrown_color_white = getCookie("vdbrb_labgrown_color_white");
            if (vdbrb_labgrown_color_white !== null && vdbrb_labgrown_color_white!='') {
                //var color_white_arr = vdbrb_labgrown_color_white.split(',');

                //var first_color_white = color_white_arr[0];
                //var last_color_white = color_white_arr[color_white_arr.length-1];
                if(white_color_value_labgrown_arr!=undefined && white_color_value_labgrown_arr.length>0){
                    $(".vbdrb_white_color_labgrown_web").val(vdbrb_labgrown_color_white);
                }

                vdbrbLabgrownColorRange = vdbrb_labgrown_color_white.split(',').join(' - ');

                $('#vdbrb_labgrown_color_mobile_val').html(vdbrb_labgrown_color_white.length>30?vdbrbLabgrownColorRange.substr(0,30)+'...':vdbrbLabgrownColorRange);
            }
            $(".vdbrb_labgrown_color").hide();
            $(".vdbrb_labgrown_white_color").show();
            $(".vdbrb_color_module_switch").each(function () {
                if($(this).data('stone_type') == 'labgrown'){
                    $(this).removeClass("vdb-rb-switch-active");
                    if($(this).data('color-module') == vdbrb_labgrown_color){
                        $(this).addClass("vdb-rb-switch-active");
                    }
                }
            });
        }
        else if(vdbrb_labgrown_color=='Fancy'){
            var vdbrb_labgrown_color_fancy = getCookie("vdbrb_labgrown_color_fancy");
            if (vdbrb_labgrown_color_fancy !== null && vdbrb_labgrown_color_fancy!='') {
                var color_fancy = vdbrb_labgrown_color_fancy.split(',');
                var title_arr = [];
                if($(".vdbrb_list_item_a_fancy_color_style_labgrown").length>0){
                    $(".vdbrb_list_item_a_fancy_color_style_labgrown").each(function () {
                        var _this = $(this);
                        if ($.inArray(_this.data('value_for_api'), color_fancy) != -1) {
                            $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                            title_arr.push(_this.data('title'));
                        }
                    });
                    title_arr = array_unique(title_arr);
                }

                $('#vdbrb_labgrown_color_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));

                //$('#vdbrb_labgrown_color_mobile_val').html(vdbrb_labgrown_color_fancy.length>30?vdbrb_labgrown_color_fancy.substr(0,30)+'...':vdbrb_labgrown_color_fancy);
            }
            $(".vdbrb_labgrown_color").hide();
            $(".vdbrb_labgrown_fancy_color").show();
            $(".vdbrb_color_module_switch").each(function () {
                if($(this).data('stone_type') == 'labgrown'){
                    $(this).removeClass("vdb-rb-switch-active");
                    if($(this).data('color-module') == vdbrb_labgrown_color){
                        $(this).addClass("vdb-rb-switch-active");
                    }
                }
            });
        }
    }

    //sorting
    var vdbRbStoneTab = $("#vdbrb_active_tab").val();
    if(vdbRbStoneTab=='labgrown'){
        var vdbrb_labgrown_sorting = getCookie("vdbrb_labgrown_sorting");
        if (vdbrb_labgrown_sorting !== null && vdbrb_labgrown_sorting!='') {
            $('#vdbrb_sorting_item_text').html(vdbrb_labgrown_sorting);
            if($(".vdbrb_sort_option").length>0){
                $(".vdbrb_sort_option").each(function () {
                    if($(this).data('value')==vdbrb_labgrown_sorting){
                        $(this).addClass('vdb-rb-selected');
                    }
                });
            }
        }
    }
}
function set_default_module_by_cookie_gemstone(){
    //check if previous page is stone-details, then only apply page_number from cookie, otherwise start from 1
    if(document.referrer!=undefined && document.referrer.includes('rb-stone-details')){
        var vdbrb_gemstone_page_number = getCookie("vdbrb_gemstone_page_number");
        if (vdbrb_gemstone_page_number !== null && vdbrb_gemstone_page_number!='') {
            $("#vdbrb_gemstone_page_number").val(vdbrb_gemstone_page_number);
        }
    }else{
        $("#vdbrb_gemstone_page_number").val('1');
        document.cookie = "vdbrb_gemstone_page_number="+'1';
    }

    //Shape
    var vdbrb_gemstone_shape = getCookie("vdbrb_gemstone_shape");
    if (vdbrb_gemstone_shape !== null && vdbrb_gemstone_shape!='') {
        var shape_arr = vdbrb_gemstone_shape.split(',');   //['Round','Pear','Princess']

        var title_arr = [];
        if($(".vdbrb_list_item_a_shape_gemstone").length>0){
            $(".vdbrb_list_item_a_shape_gemstone").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), shape_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_gemstone_shape_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }

    //type
    var vdbrb_gemstone_type = getCookie("vdbrb_gemstone_type");
    if (vdbrb_gemstone_type !== null && vdbrb_gemstone_type!='') {
        var type_arr = vdbrb_gemstone_type.split(',');

        var title_arr = [];
        if($(".vdbrb_list_item_a_type_gemstone").length>0){
            $(".vdbrb_list_item_a_type_gemstone").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), type_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));

                    generate_gemstone_color_html(_this.data('module_section'),_this.data('child_modules'),_this.data('value_for_api'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_gemstone_type_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));

        //$('#vdbrb_gemstone_type_mobile_val').html(vdbrb_gemstone_type.length>30?vdbrb_gemstone_type.substr(0,30)+'...':vdbrb_gemstone_type);
    }

    //color
    var vdbrb_gemstone_color = getCookie("vdbrb_gemstone_color");
    if (vdbrb_gemstone_color !== null && vdbrb_gemstone_color!='') {
        var color_arr = vdbrb_gemstone_color.split(',');

        var title_arr = [];
        if($(".vdbrb_list_item_a_color_gemstone").length>0){
            $(".vdbrb_list_item_a_color_gemstone").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), color_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_gemstone_color_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));

        //$('#vdbrb_gemstone_color_mobile_val').html(vdbrb_gemstone_color.length>30?vdbrb_gemstone_color.substr(0,30)+'...':vdbrb_gemstone_color);
    }

    //Min Price
    var vdbrb_gemstone_min_price = getCookie("vdbrb_gemstone_min_price");
    if (vdbrb_gemstone_min_price !== null && vdbrb_gemstone_min_price!='') {
        if($(".vdbrb_min_price_gemstone_web").length>0){
            $(".vdbrb_min_price_gemstone_web").val(vdbrb_gemstone_min_price);
        }
    }else{
        if($(".vdbrb_min_price_gemstone_web").length>0){
            document.cookie = "vdbrb_gemstone_min_price="+$(".vdbrb_min_price_gemstone_web").val();
        }
    }

    //Max Price
    var vdbrb_gemstone_max_price = getCookie("vdbrb_gemstone_max_price");
    if (vdbrb_gemstone_max_price !== null && vdbrb_gemstone_max_price!='') {
        if($(".vdbrb_max_price_gemstone_web").length>0){
            $(".vdbrb_max_price_gemstone_web").val(vdbrb_gemstone_max_price);
        }
    }else{
        if($(".vdbrb_max_price_gemstone_web").length>0){
            document.cookie = "vdbrb_gemstone_max_price="+$(".vdbrb_max_price_gemstone_web").val();
        }
    }

    if(vdbrb_gemstone_min_price !== null && vdbrb_gemstone_min_price!='' && vdbrb_gemstone_max_price !== null && vdbrb_gemstone_max_price!=''){
        $(".vbdrb_price_gemstone_web").val(vdbrb_gemstone_min_price+','+vdbrb_gemstone_max_price);
    }

    if(vdbrb_gemstone_min_price !== null && vdbrb_gemstone_min_price!='' && vdbrb_gemstone_max_price !== null && vdbrb_gemstone_max_price!=''){
        $('#vdbrb_gemstone_price_mobile_val').html(priceCurrency+vdbrb_gemstone_min_price+' - '+priceCurrency+vdbrb_gemstone_max_price);
    }else if(vdbrb_gemstone_min_price !== null && vdbrb_gemstone_min_price!=''){
        $('#vdbrb_gemstone_price_mobile_val').html(priceCurrency+vdbrb_gemstone_min_price);
    }else if(vdbrb_gemstone_max_price !== null && vdbrb_gemstone_max_price!=''){
        $('#vdbrb_gemstone_price_mobile_val').html(priceCurrency+vdbrb_gemstone_max_price);
    }

    //Min Carat
    var vdbrb_gemstone_min_carat = getCookie("vdbrb_gemstone_min_carat");
    if (vdbrb_gemstone_min_carat !== null && vdbrb_gemstone_min_carat!='') {
        if($(".vdbrb_min_carat_gemstone_web").length>0){
            $(".vdbrb_min_carat_gemstone_web").val(vdbrb_gemstone_min_carat);
        }
    }

    //Max Carat
    var vdbrb_gemstone_max_carat = getCookie("vdbrb_gemstone_max_carat");
    if (vdbrb_gemstone_max_carat !== null && vdbrb_gemstone_max_carat!='') {
        if($(".vdbrb_max_carat_gemstone_web").length>0){
            $(".vdbrb_max_carat_gemstone_web").val(vdbrb_gemstone_max_carat);
        }
    }
    if(vdbrb_gemstone_min_carat !== null && vdbrb_gemstone_min_carat!='' && vdbrb_gemstone_max_carat !== null && vdbrb_gemstone_max_carat!=''){
        $(".vbdrb_carat_gemstone_web").val(vdbrb_gemstone_min_carat+','+vdbrb_gemstone_max_carat);
    }

    if(vdbrb_gemstone_min_carat !== null && vdbrb_gemstone_min_carat!='' && vdbrb_gemstone_max_carat !== null && vdbrb_gemstone_max_carat!=''){
        $('#vdbrb_gemstone_carat_mobile_val').html(vdbrb_gemstone_min_carat+caratSymbol+' - '+vdbrb_gemstone_max_carat+caratSymbol);
    }else if(vdbrb_gemstone_min_carat !== null && vdbrb_gemstone_min_carat!=''){
        $('#vdbrb_gemstone_carat_mobile_val').html(vdbrb_gemstone_min_carat+caratSymbol);
    }else if(vdbrb_gemstone_max_carat !== null && vdbrb_gemstone_max_carat!=''){
        $('#vdbrb_gemstone_carat_mobile_val').html(vdbrb_gemstone_max_carat+caratSymbol);
    }

    //sorting
    var vdbRbStoneTab = $("#vdbrb_active_tab").val();
    if(vdbRbStoneTab=='gemstone'){
        var vdbrb_gemstone_sorting = getCookie("vdbrb_gemstone_sorting");
        if (vdbrb_gemstone_sorting !== null && vdbrb_gemstone_sorting!='') {
            $('#vdbrb_sorting_item_text').html(vdbrb_gemstone_sorting);
            if($(".vdbrb_sort_option").length>0){
                $(".vdbrb_sort_option").each(function () {
                    if($(this).data('value')==vdbrb_gemstone_sorting){
                        $(this).addClass('vdb-rb-selected');
                    }
                });
            }
        }

        $(".vdbrb_sort_dropdown_cut").hide();
        $(".vdbrb_sort_dropdown_color").hide();
        $(".vdbrb_sort_dropdown_clarity").hide();
    }
}
function set_default_module_by_cookie_radiance(){
    //check if previous page is stone-details, then only apply page_number from cookie, otherwise start from 1
    if(document.referrer!=undefined && document.referrer.includes('rb-stone-details')){
        var vdbrb_radiance_page_number = getCookie("vdbrb_radiance_page_number");
        if (vdbrb_radiance_page_number !== null && vdbrb_radiance_page_number!='') {
            $("#vdbrb_radiance_page_number").val(vdbrb_radiance_page_number);
        }
    }else{
        $("#vdbrb_radiance_page_number").val('1');
        document.cookie = "vdbrb_radiance_page_number="+'1';
    }
    
    //type
    var vdbrb_radiance_type = getCookie("vdbrb_radiance_type");
    if (vdbrb_radiance_type !== null && vdbrb_radiance_type!='') {
        var type_arr = vdbrb_radiance_type.split(',');

        var title_arr = [];
        if($(".vdbrb_list_item_a_type_radiance").length>0){
            $(".vdbrb_list_item_a_type_radiance").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), type_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));

                    var color_child_modules = [];
                    if(type_value_radiance_arr[_this.data('short_code')]?.color != undefined){
                        color_child_modules = type_value_radiance_arr[_this.data('short_code')]?.color;
                    }

                    var shape_child_modules = [];
                    if(type_value_radiance_arr[_this.data('short_code')]?.shape != undefined){
                        shape_child_modules = Object.keys(type_value_radiance_arr[_this.data('short_code')]?.shape).map((key) => type_value_radiance_arr[_this.data('short_code')]?.shape[key]);
                    }
                    
                    generate_radiance_color_html(_this.data('module_section'),color_child_modules);
                    generate_radiance_shape_html(_this.data('module_section'),shape_child_modules,_this.data('short_code'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_radiance_type_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }
    
    //color
    var vdbrb_radiance_color = getCookie("vdbrb_radiance_color");
    if (vdbrb_radiance_color !== null && vdbrb_radiance_color!='') {
        var color_arr = vdbrb_radiance_color.split(',');

        var title_arr = [];
        if($(".vdbrb_list_item_a_color_radiance").length>0){
            $(".vdbrb_list_item_a_color_radiance").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), color_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_radiance_color_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }

    //Shape
    var vdbrb_radiance_shape = getCookie("vdbrb_radiance_shape");
    if (vdbrb_radiance_shape !== null && vdbrb_radiance_shape!='') {
        var shape_arr = vdbrb_radiance_shape.split(',');   //['Round','Pear','Princess']

        var title_arr = [];
        if($(".vdbrb_list_item_a_shape_radiance").length>0){
            $(".vdbrb_list_item_a_shape_radiance").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), shape_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));
                    
                    var type_short_code = _this.data('type_short_code');
                    var short_code = _this.data('short_code');

                    var child_modules = [];
                    if(type_value_radiance_arr?.[type_short_code]?.shape[short_code]?.subshape != undefined){
                        child_modules = type_value_radiance_arr?.[type_short_code]?.shape[short_code]?.subshape;
                    }
    
                    generate_radiance_subshape_html(_this.data('module_section'),child_modules,_this.data('value_for_api'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_radiance_shape_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }

    //subshape
    var vdbrb_radiance_subshape = getCookie("vdbrb_radiance_subshape");
    if (vdbrb_radiance_subshape !== null && vdbrb_radiance_subshape!='') {
        var subshape_arr = vdbrb_radiance_subshape.split(',');

        var title_arr = [];
        if($(".vdbrb_list_item_a_subshape_radiance").length>0){
            $(".vdbrb_list_item_a_subshape_radiance").each(function () {
                var _this = $(this);
                if ($.inArray(_this.data('value_for_api'), subshape_arr) != -1) {
                    $("."+_this.data('module_section')).addClass('vdb-rb-list-item-active');
                    title_arr.push(_this.data('title'));
                }
            });
            title_arr = array_unique(title_arr);
        }
        $('#vdbrb_radiance_subshape_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }

    //Min Price
    var vdbrb_radiance_min_price = getCookie("vdbrb_radiance_min_price");
    if (vdbrb_radiance_min_price !== null && vdbrb_radiance_min_price!='') {
        if($(".vdbrb_min_price_radiance_web").length>0){
            $(".vdbrb_min_price_radiance_web").val(vdbrb_radiance_min_price);
        }
    }else{
        if($(".vdbrb_min_price_radiance_web").length>0){
            document.cookie = "vdbrb_radiance_min_price="+$(".vdbrb_min_price_radiance_web").val();
        }
    }

    //Max Price
    var vdbrb_radiance_max_price = getCookie("vdbrb_radiance_max_price");
    if (vdbrb_radiance_max_price !== null && vdbrb_radiance_max_price!='') {
        if($(".vdbrb_max_price_radiance_web").length>0){
            $(".vdbrb_max_price_radiance_web").val(vdbrb_radiance_max_price);
        }
    }else{
        if($(".vdbrb_max_price_radiance_web").length>0){
            document.cookie = "vdbrb_radiance_max_price="+$(".vdbrb_max_price_radiance_web").val();
        }
    }

    if(vdbrb_radiance_min_price !== null && vdbrb_radiance_min_price!='' && vdbrb_radiance_max_price !== null && vdbrb_radiance_max_price!=''){
        $(".vbdrb_price_radiance_web").val(vdbrb_radiance_min_price+','+vdbrb_radiance_max_price);
    }

    if(vdbrb_radiance_min_price !== null && vdbrb_radiance_min_price!='' && vdbrb_radiance_max_price !== null && vdbrb_radiance_max_price!=''){
        $('#vdbrb_radiance_price_mobile_val').html(priceCurrency+vdbrb_radiance_min_price+' - '+priceCurrency+vdbrb_radiance_max_price);
    }else if(vdbrb_radiance_min_price !== null && vdbrb_radiance_min_price!=''){
        $('#vdbrb_radiance_price_mobile_val').html(priceCurrency+vdbrb_radiance_min_price);
    }else if(vdbrb_radiance_max_price !== null && vdbrb_radiance_max_price!=''){
        $('#vdbrb_radiance_price_mobile_val').html(priceCurrency+vdbrb_radiance_max_price);
    }

    //Min Carat
    var vdbrb_radiance_min_carat = getCookie("vdbrb_radiance_min_carat");
    if (vdbrb_radiance_min_carat !== null && vdbrb_radiance_min_carat!='') {
        if($(".vdbrb_min_carat_radiance_web").length>0){
            $(".vdbrb_min_carat_radiance_web").val(vdbrb_radiance_min_carat);
        }
    }

    //Max Carat
    var vdbrb_radiance_max_carat = getCookie("vdbrb_radiance_max_carat");
    if (vdbrb_radiance_max_carat !== null && vdbrb_radiance_max_carat!='') {
        if($(".vdbrb_max_carat_radiance_web").length>0){
            $(".vdbrb_max_carat_radiance_web").val(vdbrb_radiance_max_carat);
        }
    }
    if(vdbrb_radiance_min_carat !== null && vdbrb_radiance_min_carat!='' && vdbrb_radiance_max_carat !== null && vdbrb_radiance_max_carat!=''){
        $(".vbdrb_carat_radiance_web").val(vdbrb_radiance_min_carat+','+vdbrb_radiance_max_carat);
    }

    if(vdbrb_radiance_min_carat !== null && vdbrb_radiance_min_carat!='' && vdbrb_radiance_max_carat !== null && vdbrb_radiance_max_carat!=''){
        $('#vdbrb_radiance_carat_mobile_val').html(vdbrb_radiance_min_carat+caratSymbol+' - '+vdbrb_radiance_max_carat+caratSymbol);
    }else if(vdbrb_radiance_min_carat !== null && vdbrb_radiance_min_carat!=''){
        $('#vdbrb_radiance_carat_mobile_val').html(vdbrb_radiance_min_carat+caratSymbol);
    }else if(vdbrb_radiance_max_carat !== null && vdbrb_radiance_max_carat!=''){
        $('#vdbrb_radiance_carat_mobile_val').html(vdbrb_radiance_max_carat+caratSymbol);
    }

    //sorting
    var vdbRbStoneTab = $("#vdbrb_active_tab").val();
    if(vdbRbStoneTab=='radiance'){
        var vdbrb_radiance_sorting = getCookie("vdbrb_radiance_sorting");
        if (vdbrb_radiance_sorting !== null && vdbrb_radiance_sorting!='') {
            $('#vdbrb_sorting_item_text').html(vdbrb_radiance_sorting);
            if($(".vdbrb_sort_option").length>0){
                $(".vdbrb_sort_option").each(function () {
                    if($(this).data('value')==vdbrb_radiance_sorting){
                        $(this).addClass('vdb-rb-selected');
                    }
                });
            }
        }

        $(".vdbrb_sort_dropdown_cut").hide();
        $(".vdbrb_sort_dropdown_color").hide();
        $(".vdbrb_sort_dropdown_clarity").hide();
    }
}

function call_natural_list(){
    if($ajax_call_stone_list_running=='No'){
        $ajax_call_stone_list_running = 'Yes';
        if($xhr!=undefined && $xhr!=''){
            //this is cancel multiple ajax call and consider only last ajax call
            $xhr.abort();
        }
        var _this, sendData;

        resetDeepLink();

        var pushstate_string = window.top.location.href;

        pushstate_string = updateUrl(pushstate_string,'diamond_type','natural');

        sendData = "action=get_natural_list";
        sendData += "&shop="+shop;
        var page_number = $("#vdbrb_natural_page_number").val();
        sendData += "&page_number="+page_number;

        if(pagination_type == 'SCROLL'){
            page_number++;
            $("#vdbrb_natural_page_number").val(page_number);
        }

        var vdbrb_is_quiz = getCookie("vdbrb_is_quiz");
        var vdbrb_is_quiz_matters = getCookie("vdbrb_is_quiz_matters");
        if (vdbrb_is_quiz == null || vdbrb_is_quiz == '' && vdbrb_is_quiz_matters == null || vdbrb_is_quiz_matters == '') {
            vdbrb_is_quiz = 'false';
            vdbrb_is_quiz_matters = '';
        }else{
            sendData += "&vdbrb_is_quiz=true";
            sendData += "&vdbrb_is_quiz_matters="+vdbrb_is_quiz_matters;
        }

        // get with images
        if(with_images_natural.length>0){
            sendData += "&with_images="+with_images_natural;
        }

        // get with videos
        if(with_videos_natural.length>0){
            sendData += "&with_videos="+with_videos_natural;
        }

        // get sorting
        var vdbrb_natural_sorting = getCookie("vdbrb_natural_sorting");
        if (vdbrb_natural_sorting !== null && vdbrb_natural_sorting!='') {
            sendData += "&sorting="+vdbrb_natural_sorting;
        }

        // get shape
        var vdbrb_natural_shape_style = getCookie("vdbrb_natural_shape_style");
        if (vdbrb_natural_shape_style !== null && vdbrb_natural_shape_style!='') {
            sendData += "&shape_data="+vdbrb_natural_shape_style;
            
            pushstate_string = updateUrl(pushstate_string,'shape',vdbrb_natural_shape_style);
        }else{
            var default_shape = [];
            $(".vdbrb_list_item_a_shape_style_natural").each(function () {
                default_shape.push($(this).data('value_for_api'));
            });
            default_shape = array_unique(default_shape);
            sendData += "&shape_data="+default_shape.join(',');
        }

        // get lab
        var vdbrb_natural_lab_style = getCookie("vdbrb_natural_lab_style");
        if (vdbrb_natural_lab_style !== null && vdbrb_natural_lab_style!='') {
            sendData += "&lab_data="+vdbrb_natural_lab_style;

            pushstate_string = updateUrl(pushstate_string,'lab',vdbrb_natural_lab_style);
        }else{
            var default_lab_data = [];
            $(".vdbrb_list_item_a_lab_style_natural").each(function () {
                default_lab_data.push($(this).data('value_for_api'));
            });
            default_lab_data = array_unique(default_lab_data);
            sendData += "&lab_data="+default_lab_data.join(',');
        }

        // get flour
        var vdbrb_natural_fluorescence_intensities = getCookie("vdbrb_natural_fluorescence_intensities");
        if (vdbrb_natural_fluorescence_intensities !== null && vdbrb_natural_fluorescence_intensities!='') {
            sendData += "&fluorescence_intensities_data="+vdbrb_natural_fluorescence_intensities;

            let flour_arr = vdbrb_natural_fluorescence_intensities.split(',');  //['Faint','Medium','Strong']
            let fluor_to = flour_arr[0]; //Faint
            let fluor_from = flour_arr[flour_arr.length-1];    //Strong
            
            pushstate_string = updateUrl(pushstate_string,'fluor_to',fluor_to);
            pushstate_string = updateUrl(pushstate_string,'fluor_from',fluor_from);
        }

        //get Price values min and max
        var vdbrb_natural_min_price = getCookie("vdbrb_natural_min_price");
        if (vdbrb_natural_min_price !== null && vdbrb_natural_min_price!='') {
            if($(".vdbrb_min_price_natural_web").length>0){
                sendData += "&min_price="+parseFloat(vdbrb_natural_min_price*$currency_rate).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_price',vdbrb_natural_min_price);
            }
        }else{
            if($(".vdbrb_min_price_natural_web").length>0){
                var vdbrb_textbox_price_min_value = $('.vdbrb_min_price_natural_web').val();
                sendData += "&min_price="+parseFloat(vdbrb_textbox_price_min_value*$currency_rate).toFixed(2);
            }
        }
        var vdbrb_natural_max_price = getCookie("vdbrb_natural_max_price");
        if (vdbrb_natural_max_price !== null && vdbrb_natural_max_price!='') {
            if($(".vdbrb_max_price_natural_web").length>0){
                sendData += "&max_price="+parseFloat(vdbrb_natural_max_price*$currency_rate).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_price',vdbrb_natural_max_price);
            }
        }else{
            if($(".vdbrb_max_price_natural_web").length>0){
                var vdbrb_textbox_price_max_value = $('.vdbrb_max_price_natural_web').val();
                sendData += "&max_price="+parseFloat(vdbrb_textbox_price_max_value*$currency_rate).toFixed(2);
            }
        }

        //get Carat values min and max
        var vdbrb_natural_min_carat = getCookie("vdbrb_natural_min_carat");
        if (vdbrb_natural_min_carat !== null && vdbrb_natural_min_carat!='') {
            if($(".vdbrb_min_carat_natural_web").length>0){
                sendData += "&carat_min="+parseFloat(vdbrb_natural_min_carat).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_carat',vdbrb_natural_min_carat);
            }
        }else{
            if($(".vdbrb_min_carat_natural_web").length>0){
                var vdbrb_textbox_carat_min_value = $('.vdbrb_min_carat_natural_web').val();
                sendData += "&carat_min="+parseFloat(vdbrb_textbox_carat_min_value).toFixed(2);
            }
        }
        var vdbrb_natural_max_carat = getCookie("vdbrb_natural_max_carat");
        if (vdbrb_natural_max_carat !== null && vdbrb_natural_max_carat!='') {
            if($(".vdbrb_max_carat_natural_web").length>0){
                sendData += "&carat_max="+parseFloat(vdbrb_natural_max_carat).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_carat',vdbrb_natural_max_carat);
            }
        }else{
            if($(".vdbrb_max_carat_natural_web").length>0){
                var vdbrb_textbox_carat_max_value = $('.vdbrb_max_carat_natural_web').val();
                sendData += "&carat_max="+parseFloat(vdbrb_textbox_carat_max_value).toFixed(2);
            }
        }

        // get Clarity
        var vdbrb_natural_clarity = getCookie("vdbrb_natural_clarity");
        if (vdbrb_natural_clarity !== null && vdbrb_natural_clarity!='') {
            sendData += "&clarity_data="+vdbrb_natural_clarity;

            let clarity_arr = vdbrb_natural_clarity.split(',');   //['FL','IF','VVS1']
            let clarity_to = clarity_arr[0]; //FL
            let clarity_from = clarity_arr[clarity_arr.length-1];    //VVS1
            
            pushstate_string = updateUrl(pushstate_string,'clarity_to',clarity_to);
            pushstate_string = updateUrl(pushstate_string,'clarity_from',clarity_from);
        }else{
            if(clarity_value_natural_arr.length > 0){
                sendData += "&clarity_data="+clarity_value_natural_arr[0]+','+clarity_value_natural_arr[(clarity_value_natural_arr.length-1)];
            }
        }

        // get Cut
        var vdbrb_natural_cut = getCookie("vdbrb_natural_cut");
        if (vdbrb_natural_cut !== null && vdbrb_natural_cut!='') {
            sendData += "&cut_data_wrap="+vdbrb_natural_cut;

            let cut_arr = vdbrb_natural_cut.split(',');
            let cut_to = cut_arr[0];
            let cut_from = cut_arr[cut_arr.length-1];
            
            pushstate_string = updateUrl(pushstate_string,'cut_to',cut_to);
            pushstate_string = updateUrl(pushstate_string,'cut_from',cut_from);
        }else{
            if(cut_value_natural_arr.length > 0){
                sendData += "&cut_data_wrap="+cut_value_natural_arr[0]+','+cut_value_natural_arr[(cut_value_natural_arr.length-1)];
            }
        }

        // get Symmetry
        var vdbrb_natural_symmetry = getCookie("vdbrb_natural_symmetry");
        if (vdbrb_natural_symmetry !== null && vdbrb_natural_symmetry!='') {
            sendData += "&symmetry_data_wrap="+vdbrb_natural_symmetry;

            let symmetry_arr = vdbrb_natural_symmetry.split(',');
            let symmetry_to = symmetry_arr[0];
            let symmetry_from = symmetry_arr[symmetry_arr.length-1];
            
            pushstate_string = updateUrl(pushstate_string,'symmetry_to',symmetry_to);
            pushstate_string = updateUrl(pushstate_string,'symmetry_from',symmetry_from);
        }else{
            if(symmetry_value_natural_arr.length > 0){
                sendData += "&symmetry_data_wrap="+symmetry_value_natural_arr[0]+','+symmetry_value_natural_arr[(symmetry_value_natural_arr.length-1)];
            }
        }

        // get Polish
        var vdbrb_natural_polish = getCookie("vdbrb_natural_polish");
        if (vdbrb_natural_polish !== null && vdbrb_natural_polish!='') {
            sendData += "&polish_data_wrap="+vdbrb_natural_polish;

            let polish_arr = vdbrb_natural_polish.split(',');
            let polish_to = polish_arr[0];
            let polish_from = polish_arr[polish_arr.length-1];
            
            pushstate_string = updateUrl(pushstate_string,'polish_to',polish_to);
            pushstate_string = updateUrl(pushstate_string,'polish_from',polish_from);
        }else{
            if(polish_value_natural_arr.length > 0){
                sendData += "&polish_data_wrap="+polish_value_natural_arr[0]+','+polish_value_natural_arr[(polish_value_natural_arr.length-1)];
            }
        }

        //get Depth values min and max
        var vdbrb_natural_min_depth = getCookie("vdbrb_natural_min_depth");
        if (vdbrb_natural_min_depth !== null && vdbrb_natural_min_depth!='') {
            if($(".vdbrb_min_depth_natural_web").length>0){
                sendData += "&min_depth="+parseFloat(vdbrb_natural_min_depth).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_depth',vdbrb_natural_min_depth);
            }
        }
        var vdbrb_natural_max_depth = getCookie("vdbrb_natural_max_depth");
        if (vdbrb_natural_max_depth !== null && vdbrb_natural_max_depth!='') {
            if($(".vdbrb_max_depth_natural_web").length>0){
                sendData += "&max_depth="+parseFloat(vdbrb_natural_max_depth).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_depth',vdbrb_natural_max_depth);
            }
        }
        //get Table values min and max
        var vdbrb_natural_min_table = getCookie("vdbrb_natural_min_table");
        if (vdbrb_natural_min_table !== null && vdbrb_natural_min_table!='') {
            if($(".vdbrb_min_table_natural_web").length>0){
                sendData += "&min_table="+parseFloat(vdbrb_natural_min_table).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_table',vdbrb_natural_min_table);
            }
        }

        var vdbrb_natural_max_table = getCookie("vdbrb_natural_max_table");
        if (vdbrb_natural_max_table !== null && vdbrb_natural_max_table!='') {
            if($(".vdbrb_max_table_natural_web").length>0){
                sendData += "&max_table="+parseFloat(vdbrb_natural_max_table).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_table',vdbrb_natural_max_table);
            }
        }

        //color
        var vdbrb_natural_color = getCookie("vdbrb_natural_color");
        if (vdbrb_natural_color !== null && vdbrb_natural_color!='') {
            if(vdbrb_natural_color=='White'){
                var vdbrb_natural_color_white = getCookie("vdbrb_natural_color_white");
                if (vdbrb_natural_color_white !== null && vdbrb_natural_color_white!='') {
                    sendData += "&color_data_wrap="+vdbrb_natural_color_white;

                    let color_white_arr = vdbrb_natural_color_white.split(',');
                    let white_color_to = color_white_arr[0];
                    let white_color_from = color_white_arr[color_white_arr.length-1];
                    
                    pushstate_string = updateUrl(pushstate_string,'white_color_to',white_color_to);
                    pushstate_string = updateUrl(pushstate_string,'white_color_from',white_color_from);
                }
            }
            else if(vdbrb_natural_color=='Fancy'){
                var vdbrb_natural_color_fancy = getCookie("vdbrb_natural_color_fancy");
                if (vdbrb_natural_color_fancy !== null && vdbrb_natural_color_fancy!='') {
                    sendData += "&fcolor_data_wrap="+vdbrb_natural_color_fancy;

                    pushstate_string = updateUrl(pushstate_string,'fancy_color',vdbrb_natural_color_fancy);
                }
            }
        }else{
            var isWhiteColorActive = false;
            if($(".vdbrb_color_module_switch").length > 0){
                $(".vdbrb_color_module_switch").each(function () {
                    if($(this).data('stone_type') == 'natural' && $(this).data('color-module') == 'White' && $(this).hasClass('vdb-rb-switch-active')){
                        isWhiteColorActive = true;
                    }
                });
            }
            if(isWhiteColorActive){
                if(white_color_value_natural_arr.length > 0){
                    sendData += "&color_data_wrap="+white_color_value_natural_arr[0]+','+white_color_value_natural_arr[(white_color_value_natural_arr.length-1)];
                }
            }
        }

        top.window.history.pushState({}, '', pushstate_string);

        $("#vdbrb_list_cover_loader").show();
        $xhr = $.post("rb-stone-list.php", sendData, function(resultData){
            $ajax_call_stone_list_running = 'No';
            $("#vdbrb_list_cover_loader").hide();

            var resultArray = JSON.parse(resultData);
            var stoneArray = [];
            if(resultArray['main_data']['response']['body']['diamonds'] != undefined){
                stoneArray = resultArray['main_data']['response']['body']['diamonds'];
            }

            var stoneTotal = 0;
            if(resultArray['main_data']['response']['body']['total_diamonds_found'] != undefined){
                stoneTotal = number_format(resultArray['main_data']['response']['body']['total_diamonds_found']);
            }

            var stoneCountHtml = '';
            if(stoneTotal == 0 || stoneTotal == '0'){
                $(".vdb-rb-product-pagination").hide();
                $("#vdbrb_stone_grid_view_row").html('');

                $('.vdb-rb-results-count').html('');
                stoneCountHtml += llt_data["no_results_found"]!=undefined && llt_data["no_results_found"]["label_text"]!=undefined?llt_data["no_results_found"]["label_text"]:"No Results Found";
                $(".vdb-rb-results-count").html(stoneCountHtml);

                $('.vdb-rb-sort-by-product-options').addClass("vdb-rb-dn");
                $('.vdb-rb-sort-by-product-options').removeClass("vdb-rb-db"); 
            }else{
                $(".vdb-rb-product-pagination").show();

                $('.vdb-rb-results-count').html('');
                stoneCountHtml += llt_data["view"]!=undefined && llt_data["view"]["label_text"]!=undefined?llt_data["view"]["label_text"]:"View";
                stoneCountHtml += ' <span class="vdbrb_stone_search_diamond_count">-</span> ';
                stoneCountHtml += llt_data["natural_diamonds"]!=undefined && llt_data["natural_diamonds"]["label_text"]!=undefined?llt_data["natural_diamonds"]["label_text"]:"Natural Diamonds";

                $(".vdb-rb-results-count").html(stoneCountHtml);

                $(".vdbrb_stone_search_diamond_count").html(stoneTotal);
                $('.vdb-rb-sort-by-product-options').addClass("vdb-rb-db"); 
                $('.vdb-rb-sort-by-product-options').removeClass("vdb-rb-dn"); 
            }
            $(".vdbrb_stone_search_start").html(resultArray['sr_start']);
            $(".vdbrb_stone_search_end").html(resultArray['sr_end']);

            if(resultArray !== undefined && stoneArray.length > 0) {
                var grid_html = '';
                var listColumnClass = '';
                if(items_per_row_natural == 3){
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6 vdb-rb-col-3';
                }else if(items_per_row_natural == 2){
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6 vdb-rb-col-2';
                }else{
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6';
                }

                for(x=0; x<(stoneArray.length); x++){
                    var stock_num = stoneArray[x]['stock_num'];

                    var shape = stoneArray[x]['shape'];
                    if(shape==null){ shape = ''; }

                    var size = Number(stoneArray[x]['size']).toFixed(2);
                    if(size==null){ size = ''; }

                    var color = stoneArray[x]['color'];
                    if(color==null){ color = ''; }

                    var clarity = stoneArray[x]['clarity'];
                    if(clarity==null){ clarity = ''; }

                    var image_url = stoneArray[x]['image_url'];
                    if(image_url==null){ image_url=''; }

                    var total_sales_price = stoneArray[x]['total_sales_price'];
                    if(Number(Math. abs(price_margin_natural)) > 0){
                        total_sales_price = Number(total_sales_price) + ((Number(total_sales_price) * Number(Math. abs(price_margin_natural))) / 100);
                    }
                    var price = formatMoney(Math.round(price_in_shop_currency(total_sales_price)) * 100, moneyFormat);
                    if(stoneArray[x]['currency_code']!=undefined && stoneArray[x]['currency_code']!=null && stoneArray[x]['currency_code']!="" && stoneArray[x]['currency_code']!='USD'){
                        if (stoneArray[x]['currency_code']!=shop_currency) {
                            //if vdb-currency is NOT USD then first convert into USD, then convert it into store currency
                            let usd_price = currency_conversion(total_sales_price,stoneArray[x]['currency_code'],'USD');
                            usd_price = parseFloat(usd_price);
                            price = formatMoney(Math.round(price_in_shop_currency(usd_price)) * 100, moneyFormat);
                        } else {
                            price = formatMoney(Math.round(total_sales_price) * 100, moneyFormat);
                        }
                    }

                    var name = shape+" "+size+" "+color+" "+clarity;
                    var next_step_url = '';
                    if(selected_ring_stock_num!=''){
                        next_step_url = 'rb-stone-details?ring_stock_num='+selected_ring_stock_num.replace(/ /g, '%20')+'&natural_stock_num='+stock_num.replace(/ /g, '%20')+'';
                    }else{
                        next_step_url = 'rb-stone-details?natural_stock_num='+stock_num.replace(/ /g, '%20')+'';
                    }
                    if(selected_shopify_ring_var_id!=''){
                        //this key is set from shopify setting-product page
                        next_step_url += '&ring_var_id='+selected_shopify_ring_var_id;
                    }

                    grid_html += '<div class="'+listColumnClass+'">';
                    grid_html += '  <div class="vdb-rb-list-product-item">';
                    grid_html += '      <a target="_top" href="'+next_step_url+'">';
                    grid_html += '          <div class="vdb-rb-product-img-wrapper">';
                    grid_html += '              <img src="'+image_url+'" alt="'+name+'" class="vdb-rb-img-fluid">';
                    grid_html += '          </div>';
                    grid_html += '          <div class="vdb-rb-product-details">';
                    grid_html += '              <p class="vdb-rb-product-name">'+name+'</p>';
                    grid_html += '              <div class="vdb-rb-price-block"><h3>'+price+'</h3></div>';//<span>(Stone Price)</span>
                    grid_html += '          </div>';
                    grid_html += '      </a>';
                    grid_html += '  </div>';
                    grid_html += '</div>';
                }

                if(pagination_type == 'SCROLL'){
                    $("#vdbrb_stone_grid_view_row").append(grid_html);
                }else{
                    $("#vdbrb_stone_grid_view_row").html(grid_html);
                }

                $('.vdb-rb-list-product-item img').on("error", function () {
                    this.src = SITE_URL+'images/no-image.png';
                });

            }

            var pagination_btn_html = inex_pagination(resultArray['current_page'],resultArray['page_count'],resultArray['adjacents']);
            $("#vdbrb_pagination_block").html(pagination_btn_html);
        });
    }
}
function call_labgrown_list(){
    if($ajax_call_stone_list_running=='No'){
        $ajax_call_stone_list_running = 'Yes';
        if($xhr!=undefined && $xhr!=''){
            //this is cancel multiple ajax call and consider only last ajax call
            $xhr.abort();
        }
        var _this, sendData;

        resetDeepLink();

        var pushstate_string = window.top.location.href;

        pushstate_string = updateUrl(pushstate_string,'diamond_type','labgrown');

        sendData = "action=get_labgrown_list";
        sendData += "&shop="+shop;
        var page_number = $("#vdbrb_labgrown_page_number").val();
        sendData += "&page_number="+page_number;

        if(pagination_type == 'SCROLL'){
            page_number++;
            $("#vdbrb_labgrown_page_number").val(page_number);
        }

        var vdbrb_is_quiz = getCookie("vdbrb_is_quiz");
        var vdbrb_is_quiz_matters = getCookie("vdbrb_is_quiz_matters");
        if (vdbrb_is_quiz == null || vdbrb_is_quiz == '' && vdbrb_is_quiz_matters == null || vdbrb_is_quiz_matters == '') {
            vdbrb_is_quiz = 'false';
            vdbrb_is_quiz_matters = '';
        }else{
            sendData += "&vdbrb_is_quiz=true";
            sendData += "&vdbrb_is_quiz_matters="+vdbrb_is_quiz_matters;
        }

        // get with images
        if(with_images_labgrown.length>0){
            sendData += "&with_images="+with_images_labgrown;
        }

        // get with videos
        if(with_videos_labgrown.length>0){
            sendData += "&with_videos="+with_videos_labgrown;
        }

        // get sorting
        var vdbrb_labgrown_sorting = getCookie("vdbrb_labgrown_sorting");
        if (vdbrb_labgrown_sorting !== null && vdbrb_labgrown_sorting!='') {
            sendData += "&sorting="+vdbrb_labgrown_sorting;
        }

        // get shape
        var vdbrb_labgrown_shape_style = getCookie("vdbrb_labgrown_shape_style");
        if (vdbrb_labgrown_shape_style !== null && vdbrb_labgrown_shape_style!='') {
            sendData += "&shape_data="+vdbrb_labgrown_shape_style;

            pushstate_string = updateUrl(pushstate_string,'shape',vdbrb_labgrown_shape_style);
        }else{
            var default_shape = [];
            $(".vdbrb_list_item_a_shape_style_labgrown").each(function () {
                default_shape.push($(this).data('value_for_api'));
            });
            default_shape = array_unique(default_shape);
            sendData += "&shape_data="+default_shape.join(',');
        }

        // get lab
        var vdbrb_labgrown_lab_style = getCookie("vdbrb_labgrown_lab_style");
        if (vdbrb_labgrown_lab_style !== null && vdbrb_labgrown_lab_style!='') {
            sendData += "&lab_data="+vdbrb_labgrown_lab_style;

            pushstate_string = updateUrl(pushstate_string,'lab',vdbrb_labgrown_lab_style);
        }else{
            var default_lab_data = [];
            $(".vdbrb_list_item_a_lab_style_labgrown").each(function () {
                default_lab_data.push($(this).data('value_for_api'));
            });
            default_lab_data = array_unique(default_lab_data);
            sendData += "&lab_data="+default_lab_data.join(',');
        }
        

        // get flour
        var vdbrb_labgrown_fluorescence_intensities = getCookie("vdbrb_labgrown_fluorescence_intensities");
        if (vdbrb_labgrown_fluorescence_intensities !== null && vdbrb_labgrown_fluorescence_intensities!='') {
            sendData += "&fluorescence_intensities_data="+vdbrb_labgrown_fluorescence_intensities;

            let flour_arr = vdbrb_labgrown_fluorescence_intensities.split(',');  //['Faint','Medium','Strong']
            let fluor_to = flour_arr[0]; //Faint
            let fluor_from = flour_arr[flour_arr.length-1];    //Strong
            
            pushstate_string = updateUrl(pushstate_string,'fluor_to',fluor_to);
            pushstate_string = updateUrl(pushstate_string,'fluor_from',fluor_from);
        }

        //get Price values min and max
        var vdbrb_labgrown_min_price = getCookie("vdbrb_labgrown_min_price");
        if (vdbrb_labgrown_min_price !== null && vdbrb_labgrown_min_price!='') {
            if($(".vdbrb_min_price_labgrown_web").length>0){
                sendData += "&min_price="+parseFloat(vdbrb_labgrown_min_price*$currency_rate).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_price',vdbrb_labgrown_min_price);
            }
        }else{
            if($(".vdbrb_min_price_labgrown_web").length>0){
                var vdbrb_textbox_price_min_value = $('.vdbrb_min_price_labgrown_web').val();
                sendData += "&min_price="+parseFloat(vdbrb_textbox_price_min_value*$currency_rate).toFixed(2);
            }
        }
        var vdbrb_labgrown_max_price = getCookie("vdbrb_labgrown_max_price");
        if (vdbrb_labgrown_max_price !== null && vdbrb_labgrown_max_price!='') {
            if($(".vdbrb_max_price_labgrown_web").length>0){
                sendData += "&max_price="+parseFloat(vdbrb_labgrown_max_price*$currency_rate).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_price',vdbrb_labgrown_max_price);
            }
        }else{
            if($(".vdbrb_max_price_labgrown_web").length>0){
                var vdbrb_textbox_price_max_value = $('.vdbrb_max_price_labgrown_web').val();
                sendData += "&max_price="+parseFloat(vdbrb_textbox_price_max_value*$currency_rate).toFixed(2);
            }
        }

        //get Carat values min and max
        var vdbrb_labgrown_min_carat = getCookie("vdbrb_labgrown_min_carat");
        if (vdbrb_labgrown_min_carat !== null && vdbrb_labgrown_min_carat!='') {
            if($(".vdbrb_min_carat_labgrown_web").length>0){
                sendData += "&carat_min="+parseFloat(vdbrb_labgrown_min_carat).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_carat',vdbrb_labgrown_min_carat);
            }
        }else{
            if($(".vdbrb_min_carat_labgrown_web").length>0){
                var vdbrb_textbox_carat_min_value = $('.vdbrb_min_carat_labgrown_web').val();
                sendData += "&carat_min="+parseFloat(vdbrb_textbox_carat_min_value).toFixed(2);
            }
        }
        var vdbrb_labgrown_max_carat = getCookie("vdbrb_labgrown_max_carat");
        if (vdbrb_labgrown_max_carat !== null && vdbrb_labgrown_max_carat!='') {
            if($(".vdbrb_max_carat_labgrown_web").length>0){
                sendData += "&carat_max="+parseFloat(vdbrb_labgrown_max_carat).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_carat',vdbrb_labgrown_max_carat);
            }
        }else{
            if($(".vdbrb_max_carat_labgrown_web").length>0){
                var vdbrb_textbox_carat_max_value = $('.vdbrb_max_carat_labgrown_web').val();
                sendData += "&carat_max="+parseFloat(vdbrb_textbox_carat_max_value).toFixed(2);
            }
        }
        

        // get Clarity
        var vdbrb_labgrown_clarity = getCookie("vdbrb_labgrown_clarity");
        if (vdbrb_labgrown_clarity !== null && vdbrb_labgrown_clarity!='') {
            sendData += "&clarity_data="+vdbrb_labgrown_clarity;

            let clarity_arr = vdbrb_labgrown_clarity.split(',');   //['FL','IF','VVS1']
            let clarity_to = clarity_arr[0]; //FL
            let clarity_from = clarity_arr[clarity_arr.length-1];    //VVS1
            
            pushstate_string = updateUrl(pushstate_string,'clarity_to',clarity_to);
            pushstate_string = updateUrl(pushstate_string,'clarity_from',clarity_from);
        }else{
            if(clarity_value_labgrown_arr.length > 0){
                sendData += "&clarity_data="+clarity_value_labgrown_arr[0]+','+clarity_value_labgrown_arr[(clarity_value_labgrown_arr.length-1)];
            }
        }

        // get Cut
        var vdbrb_labgrown_cut = getCookie("vdbrb_labgrown_cut");
        if (vdbrb_labgrown_cut !== null && vdbrb_labgrown_cut!='') {
            sendData += "&cut_data_wrap="+vdbrb_labgrown_cut;

            let cut_arr = vdbrb_labgrown_cut.split(',');
            let cut_to = cut_arr[0];
            let cut_from = cut_arr[cut_arr.length-1];
            
            pushstate_string = updateUrl(pushstate_string,'cut_to',cut_to);
            pushstate_string = updateUrl(pushstate_string,'cut_from',cut_from);
        }else{
            if(cut_value_labgrown_arr.length > 0){
                sendData += "&cut_data_wrap="+cut_value_labgrown_arr[0]+','+cut_value_labgrown_arr[(cut_value_labgrown_arr.length-1)];
            }
        }

        // get Symmetry
        var vdbrb_labgrown_symmetry = getCookie("vdbrb_labgrown_symmetry");
        if (vdbrb_labgrown_symmetry !== null && vdbrb_labgrown_symmetry!='') {
            sendData += "&symmetry_data_wrap="+vdbrb_labgrown_symmetry;

            let symmetry_arr = vdbrb_labgrown_symmetry.split(',');
            let symmetry_to = symmetry_arr[0];
            let symmetry_from = symmetry_arr[symmetry_arr.length-1];
            
            pushstate_string = updateUrl(pushstate_string,'symmetry_to',symmetry_to);
            pushstate_string = updateUrl(pushstate_string,'symmetry_from',symmetry_from);
        }else{
            if(symmetry_value_labgrown_arr.length > 0){
                sendData += "&symmetry_data_wrap="+symmetry_value_labgrown_arr[0]+','+symmetry_value_labgrown_arr[(symmetry_value_labgrown_arr.length-1)];
            }
        }
    

        // get Polish
        var vdbrb_labgrown_polish = getCookie("vdbrb_labgrown_polish");
        if (vdbrb_labgrown_polish !== null && vdbrb_labgrown_polish!='') {
            sendData += "&polish_data_wrap="+vdbrb_labgrown_polish;

            let polish_arr = vdbrb_labgrown_polish.split(',');
            let polish_to = polish_arr[0];
            let polish_from = polish_arr[polish_arr.length-1];
            
            pushstate_string = updateUrl(pushstate_string,'polish_to',polish_to);
            pushstate_string = updateUrl(pushstate_string,'polish_from',polish_from);
        }else{
            if(polish_value_labgrown_arr.length > 0){
                sendData += "&polish_data_wrap="+polish_value_labgrown_arr[0]+','+polish_value_labgrown_arr[(polish_value_labgrown_arr.length-1)];
            }
        }

        //get Depth values min and max
        var vdbrb_labgrown_min_depth = getCookie("vdbrb_labgrown_min_depth");
        if (vdbrb_labgrown_min_depth !== null && vdbrb_labgrown_min_depth!='') {
            if($(".vdbrb_min_depth_labgrown_web").length>0){
                sendData += "&min_depth="+parseFloat(vdbrb_labgrown_min_depth).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_depth',vdbrb_labgrown_min_depth);
            }
        }
        var vdbrb_labgrown_max_depth = getCookie("vdbrb_labgrown_max_depth");
        if (vdbrb_labgrown_max_depth !== null && vdbrb_labgrown_max_depth!='') {
            if($(".vdbrb_max_depth_labgrown_web").length>0){
                sendData += "&max_depth="+parseFloat(vdbrb_labgrown_max_depth).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_depth',vdbrb_labgrown_max_depth);
            }
        }
    

        //get Table values min and max
        var vdbrb_labgrown_min_table = getCookie("vdbrb_labgrown_min_table");
        if (vdbrb_labgrown_min_table !== null && vdbrb_labgrown_min_table!='') {
            if($(".vdbrb_min_table_labgrown_web").length>0){
                sendData += "&min_table="+parseFloat(vdbrb_labgrown_min_table).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_table',vdbrb_labgrown_min_table);
            }
        }
        var vdbrb_labgrown_max_table = getCookie("vdbrb_labgrown_max_table");
        if (vdbrb_labgrown_max_table !== null && vdbrb_labgrown_max_table!='') {
            if($(".vdbrb_max_table_labgrown_web").length>0){
                sendData += "&max_table="+parseFloat(vdbrb_labgrown_max_table).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_table',vdbrb_labgrown_max_table);
            }
        }
    

        //color
        var vdbrb_labgrown_color = getCookie("vdbrb_labgrown_color");
        if (vdbrb_labgrown_color !== null && vdbrb_labgrown_color!='') {
            if(vdbrb_labgrown_color=='White'){
                var vdbrb_labgrown_color_white = getCookie("vdbrb_labgrown_color_white");
                if (vdbrb_labgrown_color_white !== null && vdbrb_labgrown_color_white!='') {
                    sendData += "&color_data_wrap="+vdbrb_labgrown_color_white;

                    let color_white_arr = vdbrb_labgrown_color_white.split(',');
                    let white_color_to = color_white_arr[0];
                    let white_color_from = color_white_arr[color_white_arr.length-1];
                    
                    pushstate_string = updateUrl(pushstate_string,'white_color_to',white_color_to);
                    pushstate_string = updateUrl(pushstate_string,'white_color_from',white_color_from);
                }
            }
            else if(vdbrb_labgrown_color=='Fancy'){
                var vdbrb_labgrown_color_fancy = getCookie("vdbrb_labgrown_color_fancy");
                if (vdbrb_labgrown_color_fancy !== null && vdbrb_labgrown_color_fancy!='') {
                    sendData += "&fcolor_data_wrap="+vdbrb_labgrown_color_fancy;

                    pushstate_string = updateUrl(pushstate_string,'fancy_color',vdbrb_labgrown_color_fancy);
                }
            }
        }else{
            var isWhiteColorActive = false;
            if($(".vdbrb_color_module_switch").length > 0){
                $(".vdbrb_color_module_switch").each(function () {
                    if($(this).data('stone_type') == 'labgrown' && $(this).data('color-module') == 'White' && $(this).hasClass('vdb-rb-switch-active')){
                        isWhiteColorActive = true;
                    }
                });
            }
            if(isWhiteColorActive){
                if(white_color_value_labgrown_arr.length > 0){
                    sendData += "&color_data_wrap="+white_color_value_labgrown_arr[0]+','+white_color_value_labgrown_arr[(white_color_value_labgrown_arr.length-1)];
                }
            }
        }

        top.window.history.pushState({}, '', pushstate_string);

        $("#vdbrb_list_cover_loader").show();
        $xhr = $.post("rb-stone-list.php", sendData, function(resultData){
            $ajax_call_stone_list_running = 'No';
            $("#vdbrb_list_cover_loader").hide();

            var resultArray = JSON.parse(resultData);
            var stoneArray = [];
            if(resultArray['main_data']['response']['body']['diamonds'] != undefined){
                stoneArray = resultArray['main_data']['response']['body']['diamonds'];
            }

            var stoneTotal = 0;
            if(resultArray['main_data']['response']['body']['total_diamonds_found'] != undefined){
                stoneTotal = number_format(resultArray['main_data']['response']['body']['total_diamonds_found']);
            }
            
            var stoneCountHtml = '';
            if(stoneTotal == 0 || stoneTotal == '0'){
                $(".vdb-rb-product-pagination").hide();
                $("#vdbrb_stone_grid_view_row").html('');
               
                $('.vdb-rb-results-count').html('');
                stoneCountHtml += llt_data["no_results_found"]!=undefined && llt_data["no_results_found"]["label_text"]!=undefined?llt_data["no_results_found"]["label_text"]:"No Results Found";
                $(".vdb-rb-results-count").html(stoneCountHtml);

                $('.vdb-rb-sort-by-product-options').addClass("vdb-rb-dn");
                $('.vdb-rb-sort-by-product-options').removeClass("vdb-rb-db"); 
            }else{
                $(".vdb-rb-product-pagination").show();

                $('.vdb-rb-results-count').html('');
                stoneCountHtml += llt_data["view"]!=undefined && llt_data["view"]["label_text"]!=undefined?llt_data["view"]["label_text"]:"View";
                stoneCountHtml += ' <span class="vdbrb_stone_search_diamond_count">-</span> ';
                stoneCountHtml += llt_data["lab_grown_diamonds"]!=undefined && llt_data["lab_grown_diamonds"]["label_text"]!=undefined?llt_data["lab_grown_diamonds"]["label_text"]:"Lab-Grown Diamonds";
                $(".vdb-rb-results-count").html(stoneCountHtml);

                $(".vdbrb_stone_search_diamond_count").html(stoneTotal);
                $('.vdb-rb-sort-by-product-options').addClass("vdb-rb-db"); 
                $('.vdb-rb-sort-by-product-options').removeClass("vdb-rb-dn"); 
            }
            $(".vdbrb_stone_search_start").html(resultArray['sr_start']);
            $(".vdbrb_stone_search_end").html(resultArray['sr_end']);

            if(resultArray !== undefined && stoneArray.length > 0) {
                var grid_html = '';

                var listColumnClass = '';
                if(items_per_row_labgrown == 3){
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6 vdb-rb-col-3';
                }else if(items_per_row_labgrown == 2){
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6 vdb-rb-col-2';
                }else{
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6';
                }
                for(x=0; x<(stoneArray.length); x++){
                    var stock_num = stoneArray[x]['stock_num'];

                    var shape = stoneArray[x]['shape'];
                    if(shape==null){ shape = ''; }

                    var size = Number(stoneArray[x]['size']).toFixed(2);
                    if(size==null){ size = ''; }

                    var color = stoneArray[x]['color'];
                    if(color==null){ color = ''; }

                    var clarity = stoneArray[x]['clarity'];
                    if(clarity==null){ clarity = ''; }

                    var image_url = stoneArray[x]['image_url'];
                    if(image_url==null){ image_url=''; }
                    
                    var total_sales_price = stoneArray[x]['total_sales_price'];
                    if(Number(Math. abs(price_margin_labgrown)) > 0){
                        total_sales_price = Number(total_sales_price )+ ((Number(total_sales_price) * Number(Math. abs(price_margin_labgrown))) / 100);
                    }
                    var price = formatMoney(Math.round(price_in_shop_currency(total_sales_price)) * 100, moneyFormat);
                    if(stoneArray[x]['currency_code']!=undefined && stoneArray[x]['currency_code']!=null && stoneArray[x]['currency_code']!="" && stoneArray[x]['currency_code']!='USD'){
                        if (stoneArray[x]['currency_code']!=shop_currency) {
                            //if vdb-currency is NOT USD then first convert into USD, then convert it into store currency
                            let usd_price = currency_conversion(total_sales_price,stoneArray[x]['currency_code'],'USD');
                            usd_price = parseFloat(usd_price);
                            price = formatMoney(Math.round(price_in_shop_currency(usd_price)) * 100, moneyFormat);
                        } else {
                            price = formatMoney(Math.round(total_sales_price) * 100, moneyFormat);
                        }
                    }
                    
                    var name = shape+" "+size+" "+color+" "+clarity;

                    var next_step_url = '';
                    if(selected_ring_stock_num!=''){
                        next_step_url = 'rb-stone-details?ring_stock_num='+selected_ring_stock_num.replace(/ /g, '%20')+'&labgrown_stock_num='+stock_num.replace(/ /g, '%20')+'';
                    }else{
                        next_step_url = 'rb-stone-details?labgrown_stock_num='+stock_num.replace(/ /g, '%20')+'';
                    }
                    if(selected_shopify_ring_var_id!=''){
                        //this key is set from shopify setting-product page
                        next_step_url += '&ring_var_id='+selected_shopify_ring_var_id;
                    }

                    grid_html += '<div class="'+listColumnClass+'">';
                    grid_html += '  <div class="vdb-rb-list-product-item">';
                    grid_html += '      <a target="_top" href="'+next_step_url+'">';
                    grid_html += '          <div class="vdb-rb-product-img-wrapper">';
                    grid_html += '              <img src="'+image_url+'" alt="'+name+'" class="vdb-rb-img-fluid">';
                    grid_html += '          </div>';
                    grid_html += '          <div class="vdb-rb-product-details">';
                    grid_html += '              <p class="vdb-rb-product-name">'+name+'</p>';
                    grid_html += '              <div class="vdb-rb-price-block"><h3>'+price+'</h3></div>'; //<span>(Stone Price)</span>
                    grid_html += '          </div>';
                    grid_html += '      </a>';
                    grid_html += '  </div>';
                    grid_html += '</div>';
                }
                if(pagination_type == 'SCROLL'){
                    $("#vdbrb_stone_grid_view_row").append(grid_html);
                }else{
                    $("#vdbrb_stone_grid_view_row").html(grid_html);
                }

                $('.vdb-rb-list-product-item img').on("error", function () {
                    this.src = SITE_URL+'images/no-image.png';
                });

            }

            var pagination_btn_html = inex_pagination(resultArray['current_page'],resultArray['page_count'],resultArray['adjacents']);
            $("#vdbrb_pagination_block").html(pagination_btn_html);
        });
    }
}
function call_gemstone_list(){
    if($ajax_call_stone_list_running=='No'){
        $ajax_call_stone_list_running = 'Yes';
        if($xhr!=undefined && $xhr!=''){
            //this is cancel multiple ajax call and consider only last ajax call
            $xhr.abort();
        }
        var _this, sendData;

        resetDeepLink();

        var pushstate_string = window.top.location.href;

        pushstate_string = updateUrl(pushstate_string,'diamond_type','gemstone');

        sendData = "action=get_gemstone_list";
        sendData += "&shop="+shop;
        var page_number = $("#vdbrb_gemstone_page_number").val();
        sendData += "&page_number="+page_number;

        if(pagination_type == 'SCROLL'){
            page_number++;
            $("#vdbrb_gemstone_page_number").val(page_number);
        }

        // get with images
        if(with_images_gemstone.length>0){
            sendData += "&with_images="+with_images_gemstone;
        }

        // get with videos
        if(with_videos_gemstone.length>0){
            sendData += "&with_videos="+with_videos_gemstone;
        }

        // get sorting
        var vdbrb_gemstone_sorting = getCookie("vdbrb_gemstone_sorting");
        if (vdbrb_gemstone_sorting !== null && vdbrb_gemstone_sorting!='') {
            sendData += "&sorting="+vdbrb_gemstone_sorting;
        }

        // get shape
        var vdbrb_gemstone_shape = getCookie("vdbrb_gemstone_shape");
        if (vdbrb_gemstone_shape !== null && vdbrb_gemstone_shape!='') {
            sendData += "&shapes="+vdbrb_gemstone_shape;

            pushstate_string = updateUrl(pushstate_string,'shape',vdbrb_gemstone_shape);
        }else{
            var default_shape = [];
            $(".vdbrb_list_item_a_shape_gemstone").each(function () {
                default_shape.push($(this).data('value_for_api'));
            });
            default_shape = array_unique(default_shape);
            sendData += "&shapes="+default_shape.join(',');
        }

        // get type
        var vdbrb_gemstone_type = getCookie("vdbrb_gemstone_type");
        if (vdbrb_gemstone_type !== null && vdbrb_gemstone_type!='') {
            sendData += "&gem_type="+vdbrb_gemstone_type;

            pushstate_string = updateUrl(pushstate_string,'type',vdbrb_gemstone_type);
        }else{
            var default_gem_type = [];
            $(".vdbrb_list_item_a_type_gemstone").each(function () {
                default_gem_type.push($(this).data('value_for_api'));
            });
            default_gem_type = array_unique(default_gem_type);
            sendData += "&gem_type="+default_gem_type.join(',');
        }

        // get color
        var vdbrb_gemstone_color = getCookie("vdbrb_gemstone_color");
        if (vdbrb_gemstone_color !== null && vdbrb_gemstone_color!='') {
            sendData += "&color="+vdbrb_gemstone_color;

            pushstate_string = updateUrl(pushstate_string,'color',vdbrb_gemstone_color);
        }

        //get Price values min and max
        var vdbrb_gemstone_min_price = getCookie("vdbrb_gemstone_min_price");
        if (vdbrb_gemstone_min_price !== null && vdbrb_gemstone_min_price!='') {
            if($(".vdbrb_min_price_gemstone_web").length>0){
                sendData += "&min_price="+parseFloat(vdbrb_gemstone_min_price*$currency_rate).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_price',vdbrb_gemstone_min_price);
            }
        }else{
            if($(".vdbrb_min_price_gemstone_web").length>0){
                var vdbrb_textbox_price_min_value = $('.vdbrb_min_price_gemstone_web').val();
                sendData += "&min_price="+parseFloat(vdbrb_textbox_price_min_value*$currency_rate).toFixed(2);
            }
        }

        var vdbrb_gemstone_max_price = getCookie("vdbrb_gemstone_max_price");
        if (vdbrb_gemstone_max_price !== null && vdbrb_gemstone_max_price!='') {
            if($(".vdbrb_max_price_gemstone_web").length>0){
                sendData += "&max_price="+parseFloat(vdbrb_gemstone_max_price*$currency_rate).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_price',vdbrb_gemstone_max_price);
            }
        }else{
            if($(".vdbrb_max_price_gemstone_web").length>0){
                var vdbrb_textbox_price_max_value = $('.vdbrb_max_price_gemstone_web').val();
                sendData += "&max_price="+parseFloat(vdbrb_textbox_price_max_value*$currency_rate).toFixed(2);
            }
        }

        //get Carat values min and max
        var vdbrb_gemstone_min_carat = getCookie("vdbrb_gemstone_min_carat");
        if (vdbrb_gemstone_min_carat !== null && vdbrb_gemstone_min_carat!='') {
            if($(".vdbrb_min_carat_gemstone_web").length>0){
                sendData += "&carat_min="+parseFloat(vdbrb_gemstone_min_carat).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_carat',vdbrb_gemstone_min_carat);
            }
        }else{
            if($(".vdbrb_min_carat_gemstone_web").length>0){
                var vdbrb_textbox_carat_min_value = $('.vdbrb_min_carat_gemstone_web').val();
                sendData += "&carat_min="+parseFloat(vdbrb_textbox_carat_min_value).toFixed(2);
            }
        }
        var vdbrb_gemstone_max_carat = getCookie("vdbrb_gemstone_max_carat");
        if (vdbrb_gemstone_max_carat !== null && vdbrb_gemstone_max_carat!='') {
            if($(".vdbrb_max_carat_gemstone_web").length>0){
                sendData += "&carat_max="+parseFloat(vdbrb_gemstone_max_carat).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_carat',vdbrb_gemstone_max_carat);
            }
        }else{
            if($(".vdbrb_max_carat_gemstone_web").length>0){
                var vdbrb_textbox_carat_max_value = $('.vdbrb_max_carat_gemstone_web').val();
                sendData += "&carat_max="+parseFloat(vdbrb_textbox_carat_max_value).toFixed(2);
            }
        }

        top.window.history.pushState({}, '', pushstate_string);

        $("#vdbrb_list_cover_loader").show();
        $xhr = $.post("rb-stone-list.php", sendData, function(resultData){
            $ajax_call_stone_list_running = 'No';
            $("#vdbrb_list_cover_loader").hide();

            var resultArray = JSON.parse(resultData);
            var stoneArray = [];
            if(resultArray['main_data']['response']['body']['gemstones'] != undefined){
                stoneArray = resultArray['main_data']['response']['body']['gemstones'];
            }

            var stoneTotal = 0;
            if(resultArray['main_data']['response']['body']['total_gemstones_found'] != undefined){
                stoneTotal = number_format(resultArray['main_data']['response']['body']['total_gemstones_found']);
            }
            
            var stoneCountHtml = '';
            if(stoneTotal == 0 || stoneTotal == '0'){
                $(".vdb-rb-product-pagination").hide();
                $("#vdbrb_stone_grid_view_row").html('');
               
                $('.vdb-rb-results-count').html('');
                stoneCountHtml += llt_data["no_results_found"]!=undefined && llt_data["no_results_found"]["label_text"]!=undefined?llt_data["no_results_found"]["label_text"]:"No Results Found";
                $(".vdb-rb-results-count").html(stoneCountHtml);

                $('.vdb-rb-sort-by-product-options').addClass("vdb-rb-dn");
                $('.vdb-rb-sort-by-product-options').removeClass("vdb-rb-db"); 
            }else{
                $(".vdb-rb-product-pagination").show();

                $('.vdb-rb-results-count').html('');
                stoneCountHtml += llt_data["view"]!=undefined && llt_data["view"]["label_text"]!=undefined?llt_data["view"]["label_text"]:"View";
                stoneCountHtml += ' <span class="vdbrb_stone_search_diamond_count">-</span> ';
                stoneCountHtml += llt_data["colored_gemstones"]!=undefined && llt_data["colored_gemstones"]["label_text"]!=undefined?llt_data["colored_gemstones"]["label_text"]:"Colored Gemstones";
                $(".vdb-rb-results-count").html(stoneCountHtml);

                $(".vdbrb_stone_search_diamond_count").html(stoneTotal);
                $('.vdb-rb-sort-by-product-options').addClass("vdb-rb-db"); 
                $('.vdb-rb-sort-by-product-options').removeClass("vdb-rb-dn"); 
            }
            $(".vdbrb_stone_search_start").html(resultArray['sr_start']);
            $(".vdbrb_stone_search_end").html(resultArray['sr_end']);

            if(resultArray !== undefined && stoneArray.length > 0) {
                var grid_html = '';

                var listColumnClass = '';
                if(items_per_row_gemstone == 3){
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6 vdb-rb-col-3';
                }else if(items_per_row_gemstone == 2){
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6 vdb-rb-col-2';
                }else{
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6';
                }
                for(x=0; x<(stoneArray.length); x++){
                    var stock_num = stoneArray[x]['stock_num'];

                    var gem_type = stoneArray[x]['gem_type'];
                    if(gem_type==null){ gem_type = ''; }

                    var shape = stoneArray[x]['shape'];
                    if(shape==null){ shape = ''; }

                    var size = Number(stoneArray[x]['size']).toFixed(2);
                    if(size==null){ size = ''; }

                    var color = stoneArray[x]['color'];
                    if(color==null){ color = ''; }

                    var image_url = stoneArray[x]['image_url'];
                    if(image_url==null){ image_url=''; }

                    var total_sales_price = stoneArray[x]['total_sales_price'];
                    if(Number(Math. abs(price_margin_gemstone)) > 0){
                        total_sales_price = Number(total_sales_price) + ((Number(total_sales_price) * Number(Math. abs(price_margin_gemstone))) / 100);
                    }
                    var price = formatMoney(Math.round(price_in_shop_currency(total_sales_price)) * 100, moneyFormat);
                    if(stoneArray[x]['currency_code']!=undefined && stoneArray[x]['currency_code']!=null && stoneArray[x]['currency_code']!="" && stoneArray[x]['currency_code']!='USD'){
                        if (stoneArray[x]['currency_code']!=shop_currency) {
                            //if vdb-currency is NOT USD then first convert into USD, then convert it into store currency
                            let usd_price = currency_conversion(total_sales_price,stoneArray[x]['currency_code'],'USD');
                            usd_price = parseFloat(usd_price);
                            price = formatMoney(Math.round(price_in_shop_currency(usd_price)) * 100, moneyFormat);
                        } else {
                            price = formatMoney(Math.round(total_sales_price) * 100, moneyFormat);
                        }
                    }

                    var name = shape+" "+color+" "+gem_type+" "+size+'ct';

                    var next_step_url = '';
                    if(selected_ring_stock_num!=''){
                        next_step_url = 'rb-stone-details?ring_stock_num='+selected_ring_stock_num.replace(/ /g, '%20')+'&gemstone_stock_num='+stock_num.replace(/ /g, '%20')+'';
                    }else{
                        next_step_url = 'rb-stone-details?gemstone_stock_num='+stock_num.replace(/ /g, '%20')+'';
                    }
                    if(selected_shopify_ring_var_id!=''){
                        //this key is set from shopify setting-product page
                        next_step_url += '&ring_var_id='+selected_shopify_ring_var_id;
                    }

                    grid_html += '<div class="'+listColumnClass+'">';
                    grid_html += '  <div class="vdb-rb-list-product-item">';
                    grid_html += '      <a target="_top" href="'+next_step_url+'">';
                    grid_html += '          <div class="vdb-rb-product-img-wrapper">';
                    grid_html += '              <img src="'+image_url+'" alt="'+name+'" class="vdb-rb-img-fluid">';
                    grid_html += '          </div>';
                    grid_html += '          <div class="vdb-rb-product-details">';
                    grid_html += '              <p class="vdb-rb-product-name">'+name+'</p>';
                    grid_html += '              <div class="vdb-rb-price-block"><h3>'+price+'</h3></div>'; //<span>(Stone Price)</span>
                    grid_html += '          </div>';
                    grid_html += '      </a>';
                    grid_html += '  </div>';
                    grid_html += '</div>';
                }
                if(pagination_type == 'SCROLL'){
                    $("#vdbrb_stone_grid_view_row").append(grid_html);
                }else{
                    $("#vdbrb_stone_grid_view_row").html(grid_html);
                }

                $('.vdb-rb-list-product-item img').on("error", function () {
                    this.src = SITE_URL+'images/no-image.png';
                });

            }

            var pagination_btn_html = inex_pagination(resultArray['current_page'],resultArray['page_count'],resultArray['adjacents']);
            $("#vdbrb_pagination_block").html(pagination_btn_html);
        });
    }
}
function call_radiance_list(){
    if($ajax_call_stone_list_running=='No'){
        $ajax_call_stone_list_running = 'Yes';
        if($xhr!=undefined && $xhr!=''){
            //this is cancel multiple ajax call and consider only last ajax call
            $xhr.abort();
        }
        var _this, sendData;

        resetDeepLink();

        var pushstate_string = window.top.location.href;

        pushstate_string = updateUrl(pushstate_string,'diamond_type','radiance');

        sendData = "action=get_radiance_list";
        sendData += "&shop="+shop;
        var page_number = $("#vdbrb_radiance_page_number").val();
        sendData += "&page_number="+page_number;

        if(pagination_type == 'SCROLL'){
            page_number++;
            $("#vdbrb_radiance_page_number").val(page_number);
        }

        // get with images
        if(with_images_radiance.length>0){
            sendData += "&with_images="+with_images_radiance;
        }

        // get with videos
        if(with_videos_radiance.length>0){
            sendData += "&with_videos="+with_videos_radiance;
        }

        // get type
        var vdbrb_radiance_type = getCookie("vdbrb_radiance_type");
        if (vdbrb_radiance_type !== null && vdbrb_radiance_type!='') {
            sendData += "&gem_type="+vdbrb_radiance_type;

            pushstate_string = updateUrl(pushstate_string,'type',vdbrb_radiance_type);
        }else{
            var default_gem_type = [];
            $(".vdbrb_list_item_a_type_radiance").each(function () {
                default_gem_type.push($(this).data('value_for_api'));
            });
            default_gem_type = array_unique(default_gem_type);
            sendData += "&gem_type="+default_gem_type.join(',');
        }

        // get shape
        var vdbrb_radiance_shape = getCookie("vdbrb_radiance_shape");
        if (vdbrb_radiance_shape !== null && vdbrb_radiance_shape!='') {
            var vdbrb_radiance_subshape = getCookie("vdbrb_radiance_subshape");
            if (vdbrb_radiance_subshape !== null && vdbrb_radiance_subshape!='') {
                var vdbrb_radiance_shape_arr = [];
                vdbrb_radiance_shape_arr.push(vdbrb_radiance_shape.replace(/&/g, "##AND##"));

                var vdbrb_radiance_sub_shape_arr = [];
                vdbrb_radiance_sub_shape_arr.push(vdbrb_radiance_subshape.replace(/&/g, "##AND##"));

                sendData += "&shapes="+array_unique(vdbrb_radiance_sub_shape_arr.concat(vdbrb_radiance_shape_arr)).join(',');

                pushstate_string = updateUrl(pushstate_string,'shape',vdbrb_radiance_shape);
                pushstate_string = updateUrl(pushstate_string,'subshape',vdbrb_radiance_subshape);
            }else{
                var default_subshape = [];
                var vdbrb_radiance_shape_arr = [];
                vdbrb_radiance_shape_arr.push(vdbrb_radiance_shape.replace(/&/g, "##AND##"));

                if(Object.keys(type_value_radiance_arr).length > 0){
                    let typeDataArr = Object.keys(type_value_radiance_arr).map((key) => type_value_radiance_arr[key]);
                    $.each(typeDataArr, function (key, val) {
                        if(val?.shape){
                            let shapeArr = Object.keys(val?.shape).map((key) => val?.shape[key]);
                            $.each(shapeArr, function (shap_key, shap_val) {
                                if(shap_val?.srms_vdb_value == vdbrb_radiance_shape && shap_val?.subshape){
                                    let subshapeArr = Object.keys(shap_val?.subshape).map((key) => shap_val?.subshape[key]);
                                    $.each(subshapeArr, function (subshap_key, subshap_val) {
                                        if(subshap_val){
                                            default_subshape.push((subshap_val?.srmss_vdb_value).replace(/&/g, "##AND##"));
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
                default_subshape = array_unique(default_subshape);

                sendData += "&shapes="+array_unique(default_subshape.concat(vdbrb_radiance_shape_arr)).join(',');

                pushstate_string = updateUrl(pushstate_string,'shape',vdbrb_radiance_shape);
            }
        }else{
            var default_shape = []; var default_subshape = []; var subshapeArray = [];
            if(Object.keys(type_value_radiance_arr).length > 0){
                let typeDataArr = Object.keys(type_value_radiance_arr).map((key) => type_value_radiance_arr[key]);
                $.each(typeDataArr, function (key, val) {
                    if((vdbrb_radiance_type !== null && vdbrb_radiance_type!='') ? (val?.srmt_vdb_value == vdbrb_radiance_type && val?.shape) : (val?.shape)){
                        let shapeArr = Object.keys(val?.shape).map((key) => val?.shape[key]);
                        $.each(shapeArr, function (shap_key, shap_val) {
                            if(shap_val?.subshape){
                                let subshapeArr = Object.keys(shap_val?.subshape).map((key) => shap_val?.subshape[key]);
                                $.each(subshapeArr, function (subshap_key, subshap_val) {
                                    if(subshap_val){
                                        subshapeArray.push(subshap_val);
                                    }
                                });
                            }
                            default_shape.push((shap_val?.srms_vdb_value).replace(/&/g, "##AND##"));
                        });
                    }
                });
            }
            default_shape = array_unique(default_shape);

            $.each(subshapeArray, function (key, val) {
                if(setting_supported_shapes.length > 0){
                    if(setting_supported_shapes.includes(val.srmss_vdb_value)){
                        default_subshape.push((val.srmss_vdb_value).replace(/&/g, "##AND##"));
                    };
                }else{
                    default_subshape.push((val.srmss_vdb_value).replace(/&/g, "##AND##"));
                }
            });
            default_subshape = array_unique(default_subshape);

            shape_subshape_combiner_array = array_unique(default_shape.concat(default_subshape));

            sendData += "&shapes="+shape_subshape_combiner_array.join(',');
        }

        // get sorting
        var vdbrb_radiance_sorting = getCookie("vdbrb_radiance_sorting");
        if (vdbrb_radiance_sorting !== null && vdbrb_radiance_sorting!='') {
            sendData += "&sorting="+vdbrb_radiance_sorting;
        }

        // get color
        var vdbrb_radiance_color = getCookie("vdbrb_radiance_color");
        if (vdbrb_radiance_color !== null && vdbrb_radiance_color!='') {
            sendData += "&color="+vdbrb_radiance_color;

            pushstate_string = updateUrl(pushstate_string,'color',vdbrb_radiance_color);
        }

        //get Price values min and max
        var vdbrb_radiance_min_price = getCookie("vdbrb_radiance_min_price");
        if (vdbrb_radiance_min_price !== null && vdbrb_radiance_min_price!='') {
            if($(".vdbrb_min_price_radiance_web").length>0){
                sendData += "&min_price="+parseFloat(vdbrb_radiance_min_price*$currency_rate).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_price',vdbrb_radiance_min_price);
            }
        }else{
            if($(".vdbrb_min_price_radiance_web").length>0){
                var vdbrb_textbox_price_min_value = $('.vdbrb_min_price_radiance_web').val();
                sendData += "&min_price="+parseFloat(vdbrb_textbox_price_min_value*$currency_rate).toFixed(2);
            }
        }

        var vdbrb_radiance_max_price = getCookie("vdbrb_radiance_max_price");
        if (vdbrb_radiance_max_price !== null && vdbrb_radiance_max_price!='') {
            if($(".vdbrb_max_price_radiance_web").length>0){
                sendData += "&max_price="+parseFloat(vdbrb_radiance_max_price*$currency_rate).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_price',vdbrb_radiance_max_price);
            }
        }else{
            if($(".vdbrb_max_price_radiance_web").length>0){
                var vdbrb_textbox_price_max_value = $('.vdbrb_max_price_radiance_web').val();
                sendData += "&max_price="+parseFloat(vdbrb_textbox_price_max_value*$currency_rate).toFixed(2);
            }
        }

        //get Carat values min and max
        var vdbrb_radiance_min_carat = getCookie("vdbrb_radiance_min_carat");
        if (vdbrb_radiance_min_carat !== null && vdbrb_radiance_min_carat!='') {
            if($(".vdbrb_min_carat_radiance_web").length>0){
                sendData += "&carat_min="+parseFloat(vdbrb_radiance_min_carat).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'min_carat',vdbrb_radiance_min_carat);
            }
        }else{
            if($(".vdbrb_min_carat_radiance_web").length>0){
                var vdbrb_textbox_carat_min_value = $('.vdbrb_min_carat_radiance_web').val();
                sendData += "&carat_min="+parseFloat(vdbrb_textbox_carat_min_value).toFixed(2);
            }
        }
        var vdbrb_radiance_max_carat = getCookie("vdbrb_radiance_max_carat");
        if (vdbrb_radiance_max_carat !== null && vdbrb_radiance_max_carat!='') {
            if($(".vdbrb_max_carat_radiance_web").length>0){
                sendData += "&carat_max="+parseFloat(vdbrb_radiance_max_carat).toFixed(2);

                pushstate_string = updateUrl(pushstate_string,'max_carat',vdbrb_radiance_max_carat);
            }
        }else{
            if($(".vdbrb_max_carat_radiance_web").length>0){
                var vdbrb_textbox_carat_max_value = $('.vdbrb_max_carat_radiance_web').val();
                sendData += "&carat_max="+parseFloat(vdbrb_textbox_carat_max_value).toFixed(2);
            }
        }

        top.window.history.pushState({}, '', pushstate_string);

        $("#vdbrb_list_cover_loader").show();
        $xhr = $.post("rb-stone-list.php", sendData, function(resultData){
            $ajax_call_stone_list_running = 'No';
            $("#vdbrb_list_cover_loader").hide();

            var resultArray = JSON.parse(resultData);
            var stoneArray = [];
            if(resultArray['main_data']['response']['body']['gemstones'] != undefined){
                stoneArray = resultArray['main_data']['response']['body']['gemstones'];
            }

            var stoneTotal = 0;
            if(resultArray['main_data']['response']['body']['total_gemstones_found'] != undefined){
                stoneTotal = number_format(resultArray['main_data']['response']['body']['total_gemstones_found']);
            }
            
            var stoneCountHtml = '';
            if(stoneTotal == 0 || stoneTotal == '0'){
                $(".vdb-rb-product-pagination").hide();
                $("#vdbrb_stone_grid_view_row").html('');
               
                $('.vdb-rb-results-count').html('');
                stoneCountHtml += llt_data["no_results_found"]!=undefined && llt_data["no_results_found"]["label_text"]!=undefined?llt_data["no_results_found"]["label_text"]:"No Results Found";
                $(".vdb-rb-results-count").html(stoneCountHtml);

                $('.vdb-rb-sort-by-product-options').addClass("vdb-rb-dn");
                $('.vdb-rb-sort-by-product-options').removeClass("vdb-rb-db"); 
            }else{
                $(".vdb-rb-product-pagination").show();

                $('.vdb-rb-results-count').html('');
                stoneCountHtml += llt_data["view"]!=undefined && llt_data["view"]["label_text"]!=undefined?llt_data["view"]["label_text"]:"View";
                stoneCountHtml += ' <span class="vdbrb_stone_search_diamond_count">-</span> ';
                stoneCountHtml += radiance_module_caption;
                $(".vdb-rb-results-count").html(stoneCountHtml);

                $(".vdbrb_stone_search_diamond_count").html(stoneTotal);
                $('.vdb-rb-sort-by-product-options').addClass("vdb-rb-db"); 
                $('.vdb-rb-sort-by-product-options').removeClass("vdb-rb-dn"); 
            }
            $(".vdbrb_stone_search_start").html(resultArray['sr_start']);
            $(".vdbrb_stone_search_end").html(resultArray['sr_end']);

            if(resultArray !== undefined && stoneArray.length > 0) {
                var grid_html = '';

                var listColumnClass = '';
                if(items_per_row_radiance == 3){
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6 vdb-rb-col-3';
                }else if(items_per_row_radiance == 2){
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6 vdb-rb-col-2';
                }else{
                    listColumnClass = 'vdb-rb-col-md-3 vdb-rb-col-sm-6';
                }
                for(x=0; x<(stoneArray.length); x++){
                    var stock_num = stoneArray[x]['stock_num'];

                    var gem_type = stoneArray[x]['gem_type'];
                    if(gem_type==null){ gem_type = ''; }

                    var shape = stoneArray[x]['shape'];
                    if(shape==null){ shape = ''; }

                    var size = Number(stoneArray[x]['size']).toFixed(2);
                    if(size==null){ size = ''; }

                    var color = stoneArray[x]['color'];
                    if(color==null){ color = ''; }

                    var image_url = stoneArray[x]['image_url'];
                    if(image_url==null){ image_url=''; }

                    var total_sales_price = stoneArray[x]['total_sales_price'];
                    if(Number(Math. abs(price_margin_radiance)) > 0){
                        total_sales_price = Number(total_sales_price) + ((Number(total_sales_price) * Number(Math. abs(price_margin_radiance))) / 100);
                    }
                    var price = formatMoney(Math.round(price_in_shop_currency(total_sales_price)) * 100, moneyFormat);
                    if(stoneArray[x]['currency_code']!=undefined && stoneArray[x]['currency_code']!=null && stoneArray[x]['currency_code']!="" && stoneArray[x]['currency_code']!='USD'){
                        if (stoneArray[x]['currency_code']!=shop_currency) {
                            //if vdb-currency is NOT USD then first convert into USD, then convert it into store currency
                            let usd_price = currency_conversion(total_sales_price,stoneArray[x]['currency_code'],'USD');
                            usd_price = parseFloat(usd_price);
                            price = formatMoney(Math.round(price_in_shop_currency(usd_price)) * 100, moneyFormat);
                        } else {
                            price = formatMoney(Math.round(total_sales_price) * 100, moneyFormat);
                        }
                    }

                    var name = shape+" "+color+" "+gem_type+" "+size+'ct';

                    var next_step_url = '';
                    if(selected_ring_stock_num!=''){
                        next_step_url = 'rb-stone-details?ring_stock_num='+selected_ring_stock_num.replace(/ /g, '%20')+'&radiance_stock_num='+stock_num.replace(/ /g, '%20')+'';
                    }else{
                        next_step_url = 'rb-stone-details?radiance_stock_num='+stock_num.replace(/ /g, '%20')+'';
                    }
                    if(selected_shopify_ring_var_id!=''){
                        //this key is set from shopify setting-product page
                        next_step_url += '&ring_var_id='+selected_shopify_ring_var_id;
                    }

                    grid_html += '<div class="'+listColumnClass+'">';
                    grid_html += '  <div class="vdb-rb-list-product-item">';
                    grid_html += '      <a target="_top" href="'+next_step_url+'">';
                    grid_html += '          <div class="vdb-rb-product-img-wrapper">';
                    grid_html += '              <img src="'+image_url+'" alt="'+name+'" class="vdb-rb-img-fluid">';
                    grid_html += '          </div>';
                    grid_html += '          <div class="vdb-rb-product-details">';
                    grid_html += '              <p class="vdb-rb-product-name">'+name+'</p>';
                    grid_html += '              <div class="vdb-rb-price-block"><h3>'+price+'</h3></div>'; //<span>(Stone Price)</span>
                    grid_html += '          </div>';
                    grid_html += '      </a>';
                    grid_html += '  </div>';
                    grid_html += '</div>';
                }
                if(pagination_type == 'SCROLL'){
                    $("#vdbrb_stone_grid_view_row").append(grid_html);
                }else{
                    $("#vdbrb_stone_grid_view_row").html(grid_html);
                }

                $('.vdb-rb-list-product-item img').on("error", function () {
                    this.src = SITE_URL+'images/no-image.png';
                });

            }

            var pagination_btn_html = inex_pagination(resultArray['current_page'],resultArray['page_count'],resultArray['adjacents']);
            $("#vdbrb_pagination_block").html(pagination_btn_html);
        });
    }
}

function refreshSlickFilter(){
    $("#vdbrb_shape_filter_slider_natural").slick("refresh");
    $("#vdbrb_lab_filter_slider_natural").slick("refresh");
    $("#vdbrb_fancy_color_filter_slider_natural").slick("refresh");

    $("#vdbrb_shape_filter_slider_labgrown").slick("refresh");
    $("#vdbrb_lab_filter_slider_labgrown").slick("refresh");
    $("#vdbrb_fancy_color_filter_slider_labgrown").slick("refresh");

    $("#vdbrb_shape_filter_slider_gemstone").slick("refresh");
    $("#vdbrb_type_filter_slider_gemstone").slick("refresh");

    $("#vdbrb_type_filter_slider_radiance").slick("refresh");
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function closeModal(){
    $(".vdb-rb-open-modal").removeClass("vdb-rb-active");
    $(".vdb-rb-modal-window").removeClass("vdb-rb-show-popup");
}

if(pagination_type == 'SCROLL'){
    $(parent.window).scroll(function() { 
        if( $(".vdb-rb-container").height()>0 && $(parent.window).scrollTop() + $(parent.window).height() >= $(".vdb-rb-container").height()){ 
            var vdbRbStoneTab = getCookie('vdb_rb_stone_tab');
            if(vdbRbStoneTab == 'natural'){
                call_natural_list();
            }else if(vdbRbStoneTab == 'labgrown'){
                call_labgrown_list();
            }else if(vdbRbStoneTab == 'gemstone'){
                call_gemstone_list();
            }else if(vdbRbStoneTab == 'radiance'){
                call_radiance_list();
            }
        }
    });
}

// #region - Pagination Click Event
$('body').on('click','.vdbrb_pagination_link',function(){
    var page_number = $(this).data('current_page');

    var vdbRbStoneTab = $("#vdbrb_active_tab").val();
    if(vdbRbStoneTab=='natural'){
        $("#vdbrb_natural_page_number").val(page_number);
        document.cookie = "vdbrb_natural_page_number="+page_number;
        call_natural_list();
    }else if(vdbRbStoneTab=='labgrown'){
        $("#vdbrb_labgrown_page_number").val(page_number);
        document.cookie = "vdbrb_labgrown_page_number="+page_number;
        call_labgrown_list();
    }else if(vdbRbStoneTab=='gemstone'){
        $("#vdbrb_gemstone_page_number").val(page_number);
        document.cookie = "vdbrb_gemstone_page_number="+page_number;
        call_gemstone_list();
    }else if(vdbRbStoneTab=='radiance'){
        $("#vdbrb_radiance_page_number").val(page_number);
        document.cookie = "vdbrb_radiance_page_number="+page_number;
        call_radiance_list();
    }
});
//#endregion

// #region - Stone Main Tab change
$('body').on('click', '.vdb-rb-tabbing', function() {
    var stoneTab = $(this).attr("data-id");
    $(".vdb-rb-tabbing").removeClass("vdb-rb-active-tab");
    $(this).addClass("vdb-rb-active-tab");
    document.cookie = "vdb_rb_stone_tab="+stoneTab;

    var windowSize = window.screen.width;

    if(stoneTab == 'natural'){
        $("#vdbrb_active_tab").val(stoneTab);
        $('.vdb-rb-steps-icon.vdb-rb-stone-icon').html('<span class="vdb-rb-icon vdb-rb-icon-mainmenu_switch_diamond"></span>');
        if(windowSize < 640){
            $(".vdb_rb_natural_mob_block").show();
            $(".vdb_rb_labgrown_mob_block").hide();
            $(".vdb_rb_gemstone_mob_block").hide();
            $(".vdb_rb_radiance_mob_block").hide();

            $(".vdb_rb_natural_mob_block_content").show();
            $(".vdb_rb_labgrown_mob_block_content").hide();
            $(".vdb_rb_gemstone_mob_block_content").hide();
            $(".vdb_rb_radiance_mob_block_content").hide();

            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }else{
            $(".vdb_rb_natural_block").show();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }   

        if(adv_fltr_natural_count==0){
            $("#vdbrb_advanced_filter").hide();
        }else{
            $("#vdbrb_advanced_filter").show();
        }

        var vdbrb_natural_sorting = getCookie("vdbrb_natural_sorting");
        if (vdbrb_natural_sorting !== null && vdbrb_natural_sorting!='') {
            $('#vdbrb_sorting_item_text').html(vdbrb_natural_sorting);
            $(".vdbrb_sort_option").removeClass('vdb-rb-selected');
            if($(".vdbrb_sort_option").length>0){
                $(".vdbrb_sort_option").each(function () {
                    if($(this).data('value')==vdbrb_labgrown_sorting){
                        $(this).addClass('vdb-rb-selected');
                    }
                });
            }
        }else{
            $(".vdbrb_sort_option").removeClass('vdb-rb-selected');
            $('#vdbrb_sorting_item_text').html('');
        }

        $(".vdbrb_sort_dropdown_cut").show();
        $(".vdbrb_sort_dropdown_color").show();
        $(".vdbrb_sort_dropdown_clarity").show();
    }
    else if(stoneTab == 'labgrown'){
        $("#vdbrb_active_tab").val(stoneTab);

        $('.vdb-rb-steps-icon.vdb-rb-stone-icon').html('<span class="vdb-rb-icon vdb-rb-icon-LAB-Icon"><span class="path1"></span></span>');
        
        if(windowSize < 640){
            $(".vdb_rb_natural_mob_block").hide();
            $(".vdb_rb_labgrown_mob_block").show();
            $(".vdb_rb_gemstone_mob_block").hide();
            $(".vdb_rb_radiance_mob_block").hide();

            $(".vdb_rb_natural_mob_block_content").hide();
            $(".vdb_rb_labgrown_mob_block_content").show();
            $(".vdb_rb_gemstone_mob_block_content").hide();
            $(".vdb_rb_radiance_mob_block_content").hide();

            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }else{
            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").show();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }

        if(adv_fltr_labgrown_count==0){
            $("#vdbrb_advanced_filter").hide();
        }else{
            $("#vdbrb_advanced_filter").show();
        }

        var vdbrb_labgrown_sorting = getCookie("vdbrb_labgrown_sorting");
        // var selectedSortClass = (vdbrb_labgrown_sorting.toLowerCase()).replace(/ /g,"_");
        if (vdbrb_labgrown_sorting !== null && vdbrb_labgrown_sorting!='') {
            $('#vdbrb_sorting_item_text').html(vdbrb_labgrown_sorting);
            $(".vdbrb_sort_option").removeClass('vdb-rb-selected');

            if($(".vdbrb_sort_option").length>0){
                $(".vdbrb_sort_option").each(function () {
                    if($(this).data('value')==vdbrb_labgrown_sorting){
                        $(this).addClass('vdb-rb-selected');
                    }
                });
            }
        }else{
            $(".vdbrb_sort_option").removeClass('vdb-rb-selected');
            $('#vdbrb_sorting_item_text').html('');
        }

        $(".vdbrb_sort_dropdown_cut").show();
        $(".vdbrb_sort_dropdown_color").show();
        $(".vdbrb_sort_dropdown_clarity").show();
    }
    else if(stoneTab == 'gemstone'){
        $("#vdbrb_active_tab").val(stoneTab);

        $('.vdb-rb-steps-icon.vdb-rb-stone-icon').html('<span class="vdb-rb-icon vdb-rb-icon-mainmenu_switch_gemstone"><span class="path1"></span></span>');

        if(windowSize < 640){
            $(".vdb_rb_natural_mob_block").hide();
            $(".vdb_rb_labgrown_mob_block").hide();
            $(".vdb_rb_gemstone_mob_block").show();
            $(".vdb_rb_radiance_mob_block").hide();

            $(".vdb_rb_natural_mob_block_content").hide();
            $(".vdb_rb_labgrown_mob_block_content").hide();
            $(".vdb_rb_gemstone_mob_block_content").show();
            $(".vdb_rb_radiance_mob_block_content").hide();

            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }else{
            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").show();
            $(".vdb_rb_radiance_block").hide();
        }

        if(adv_fltr_gemstone_count==0){
            $("#vdbrb_advanced_filter").hide();
        }else{
            $("#vdbrb_advanced_filter").show();
        }

        var vdbrb_gemstone_sorting = getCookie("vdbrb_gemstone_sorting");
        // var selectedSortClass = (vdbrb_gemstone_sorting.toLowerCase()).replace(/ /g,"_");
        if (vdbrb_gemstone_sorting !== null && vdbrb_gemstone_sorting!='') {
            $('#vdbrb_sorting_item_text').html(vdbrb_gemstone_sorting);
            $(".vdbrb_sort_option").removeClass('vdb-rb-selected');

            if($(".vdbrb_sort_option").length>0){
                $(".vdbrb_sort_option").each(function () {
                    if($(this).data('value')==vdbrb_labgrown_sorting){
                        $(this).addClass('vdb-rb-selected');
                    }
                });
            }
        }else{
            $(".vdbrb_sort_option").removeClass('vdb-rb-selected');
            $('#vdbrb_sorting_item_text').html('');
        }

        $(".vdbrb_sort_dropdown_cut").hide();
        $(".vdbrb_sort_dropdown_color").hide();
        $(".vdbrb_sort_dropdown_clarity").hide();
    }
    else if(stoneTab == 'radiance'){
        $("#vdbrb_active_tab").val(stoneTab);

        $('.vdb-rb-steps-icon.vdb-rb-stone-icon').html('<span class="vdb-rb-icon vdb-rb-icon-mainmenu_switch_gemstone"><span class="path1"></span></span>');

        if(windowSize < 640){
            $(".vdb_rb_natural_mob_block").hide();
            $(".vdb_rb_labgrown_mob_block").hide();
            $(".vdb_rb_gemstone_mob_block").hide();
            $(".vdb_rb_radiance_mob_block").show();

            $(".vdb_rb_natural_mob_block_content").hide();
            $(".vdb_rb_labgrown_mob_block_content").hide();
            $(".vdb_rb_gemstone_mob_block_content").hide();
            $(".vdb_rb_radiance_mob_block_content").show();

            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").hide();
        }else{
            $(".vdb_rb_natural_block").hide();
            $(".vdb_rb_labgrown_block").hide();
            $(".vdb_rb_gemstone_block").hide();
            $(".vdb_rb_radiance_block").show();
        }

        if(adv_fltr_radiance_count==0){
            $("#vdbrb_advanced_filter").hide();
        }else{
            $("#vdbrb_advanced_filter").show();
        }

        var vdbrb_radiance_sorting = getCookie("vdbrb_radiance_sorting");
        // var selectedSortClass = (vdbrb_radiance_sorting.toLowerCase()).replace(/ /g,"_");
        if (vdbrb_radiance_sorting !== null && vdbrb_radiance_sorting!='') {
            $('#vdbrb_sorting_item_text').html(vdbrb_radiance_sorting);
            $(".vdbrb_sort_option").removeClass('vdb-rb-selected');

            if($(".vdbrb_sort_option").length>0){
                $(".vdbrb_sort_option").each(function () {
                    if($(this).data('value')==vdbrb_labgrown_sorting){
                        $(this).addClass('vdb-rb-selected');
                    }
                });
            }
        }else{
            $(".vdbrb_sort_option").removeClass('vdb-rb-selected');
            $('#vdbrb_sorting_item_text').html('');
        }

        $(".vdbrb_sort_dropdown_cut").hide();
        $(".vdbrb_sort_dropdown_color").hide();
        $(".vdbrb_sort_dropdown_clarity").hide();
    }

    if(stoneTab == 'natural' || stoneTab == 'labgrown'){
        $('#vdb_rb_quiz_shape_modal_open').show();
    }else{
        $('#vdb_rb_quiz_shape_modal_open').hide();
    }

    refreshSlickFilter();
    call_stone_again();
});
//#endregion

// #region - Color Module White-Fancy Switch change
$('body').on('click', '.vdbrb_color_module_switch', function() {
    var stone_type = $(this).data("stone_type");
    var module_section = $(this).data("module_section");
    var colorModule = $(this).attr("data-color-module");

    $(".vdbrb_color_module_switch").each(function () {
        if($(this).data('stone_type') == stone_type){
            $(this).removeClass("vdb-rb-switch-active");
        }
    });

    if(stone_type=='natural'){
        $(".vdbrb_natural_color").hide();
        $("."+module_section).show();

        $(this).addClass("vdb-rb-switch-active");

        document.cookie = "vdbrb_natural_color="+colorModule;
        if(colorModule == 'White'){
            document.cookie = "vdbrb_natural_color_fancy=";
            $("#vdbrb_fancy_color_filter_slider_natural li a .vdb-rb-list-item").removeClass("vdb-rb-list-item-active");
        }else{
            document.cookie = "vdbrb_natural_color_white=";
            $(".vbdrb_white_color_from_natural_web").val(0);
            $(".vbdrb_white_color_to_natural_web").val(white_color_value_natural_arr.length);
        }
    }
    else{
        $(".vdbrb_labgrown_color").hide();
        $("."+module_section).show();

        $(this).addClass("vdb-rb-switch-active");

        document.cookie = "vdbrb_labgrown_color="+colorModule;
        if(colorModule == 'White'){
            document.cookie = "vdbrb_labgrown_color_fancy=";
            $("#vdbrb_fancy_color_filter_slider_labgrown li a .vdb-rb-list-item").removeClass("vdb-rb-list-item-active");
        }else{
            document.cookie = "vdbrb_labgrown_color_white=";
            $(".vbdrb_white_color_from_labgrown_web").val(0);
            $(".vbdrb_white_color_to_labgrown_web").val(white_color_value_labgrown_arr.length);
        }
    }

    $("#vdbrb_fancy_color_filter_slider_natural").slick("refresh");
    $("#vdbrb_fancy_color_filter_slider_labgrown").slick("refresh");
});
//#endregion

// #region - Advance Filter Show And Hide Function
$('body').on('click', '.vdb-rb-advanced-filter', function() {
    $('.vdbrb_main_advance_filter_web_natural').toggle();
    $('#vdbrb_main_advance_filter_mobile_natural').toggle();

    $('.vdbrb_main_advance_filter_web_labgrown').toggle();
    $('#vdbrb_main_advance_filter_mobile_labgrown').toggle();

    $('.vdbrb_main_advance_filter_web_gemstone').toggle();
    $('#vdbrb_main_advance_filter_mobile_gemstone').toggle();

    $('.vdbrb_main_advance_filter_web_radiance').toggle();
    $('#vdbrb_main_advance_filter_mobile_radiance').toggle();

    $('.vdb-rb-arrow-down').toggleClass("vdb-rb-arrow-up");

    refreshSlickFilter();
});
//#endregion

// #region - Natural All Module Click-Change Event Filter
$('body').on('click', '.vdbrb_list_item_a_shape_style_natural', function(){
    var module_section = $(this).data('module_section');
    var short_code = $(this).data('short_code');

    $(".vdbrb_list_item_a_shape_style_natural").each(function () {
        if($(this).data('module_section') != module_section){
            $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
        }
    });
    
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_shape_style_natural").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_natural_shape_style="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_natural_shape_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_natural_shape_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }

    call_stone_again();

    refetch_variantion(short_code);
});
$('body').on('click', '.vdbrb_list_item_a_lab_style_natural', function(){
    var module_section = $(this).data('module_section');
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_lab_style_natural").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_natural_lab_style="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_natural_lab_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_natural_lab_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    call_stone_again();
});
$('body').on('click', '.vdbrb_list_item_a_fancy_color_style_natural', function(){
    var module_section = $(this).data('module_section');
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_fancy_color_style_natural").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_natural_color_fancy="+arr.join(',');
    document.cookie = "vdbrb_natural_color=Fancy";
    if(title_arr.length > 0){
        $('#vdbrb_natural_color_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_natural_color_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    call_stone_again();
});

$('body').on('change','.vdbrb_min_price_natural_web', function() {
    var vdbrb_max_price_natural_web = parseFloat($(".vdbrb_max_price_natural_web").val().trim()).toFixed(2);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_price_natural_web){
        v = vdbrb_max_price_natural_web;
    }else if(v < default_min_price_natural){
        v = default_min_price_natural;
    }else if(v > default_max_price_natural){
        v = default_max_price_natural;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_min_price_natural;
    }
    $(".vdbrb_min_price_natural_web").val(v);

    document.cookie = "vdbrb_natural_min_price="+v;
    document.cookie = "vdbrb_natural_max_price="+vdbrb_max_price_natural_web;
    if($(".vbdrb_price_natural_web").length>0){
        $(".vbdrb_price_natural_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }

    set_min_max_mobile_price_natural();
});
$('body').on('change', '.vdbrb_max_price_natural_web', function() {
    var vdbrb_min_price_natural_web = parseFloat($(".vdbrb_min_price_natural_web").val().trim()).toFixed(2);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_price_natural_web){
        v = vdbrb_min_price_natural_web;
    }else if(v < default_min_price_natural){
        v = default_min_price_natural;
    }else if(v > default_max_price_natural){
        v = default_max_price_natural;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_max_price_natural;
    }
    $(".vdbrb_max_price_natural_web").val(v);

    document.cookie = "vdbrb_natural_max_price="+v;
    document.cookie = "vdbrb_natural_min_price="+vdbrb_min_price_natural_web;
    if($(".vbdrb_price_natural_web").length>0){
        $(".vbdrb_price_natural_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }
    set_min_max_mobile_price_natural()
});
function set_min_max_mobile_price_natural(){
    var vdbrb_natural_min_price = getCookie("vdbrb_natural_min_price");
    var vdbrb_natural_max_price = getCookie("vdbrb_natural_max_price");

    if(vdbrb_natural_min_price !== null && vdbrb_natural_min_price!='' && vdbrb_natural_max_price !== null && vdbrb_natural_max_price!=''){
        $('#vdbrb_natural_price_mobile_val').html(priceCurrency+vdbrb_natural_min_price+' - '+priceCurrency+vdbrb_natural_max_price);
    }else if(vdbrb_natural_min_price !== null && vdbrb_natural_min_price!=''){
        $('#vdbrb_natural_price_mobile_val').html(priceCurrency+vdbrb_natural_min_price);
    }else if(vdbrb_natural_max_price !== null && vdbrb_natural_max_price!=''){
        $('#vdbrb_natural_price_mobile_val').html(priceCurrency+vdbrb_natural_max_price);
    }
    call_stone_again();
}

$('body').on('change', '.vdbrb_min_carat_natural_web', function() {
    var vdbrb_max_carat_natural_web = parseFloat($(".vdbrb_max_carat_natural_web").val().trim()).toFixed(2);
    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_carat_natural_web){
        v = vdbrb_max_carat_natural_web;
    }else if(v < default_min_carat_natural){
        v = default_min_carat_natural;
    }else if(v > default_max_carat_natural){
        v = default_max_carat_natural;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_min_carat_natural;
    }
    $(".vdbrb_min_carat_natural_web").val(v);

    document.cookie = "vdbrb_natural_min_carat="+v;
    document.cookie = "vdbrb_natural_max_carat="+vdbrb_max_carat_natural_web;
    $(".vdbrb_min_carat_natural_web").val(v);
    if($(".vbdrb_carat_natural_web").length>0){
        $(".vbdrb_carat_natural_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }

    set_min_max_mobile_carat_natural();
});
$('body').on('change', '.vdbrb_max_carat_natural_web', function() {
    var vdbrb_min_carat_natural_web = parseFloat($(".vdbrb_min_carat_natural_web").val().trim()).toFixed(2);
    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_carat_natural_web){
        v = vdbrb_min_carat_natural_web;
    }else if(v < default_min_carat_natural){
        v = default_min_carat_natural;
    }else if(v > default_max_carat_natural){
        v = default_max_carat_natural;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_max_carat_natural;
    }
    $(".vdbrb_max_carat_natural_web").val(v);

    document.cookie = "vdbrb_natural_max_carat="+v;
    document.cookie = "vdbrb_natural_min_carat="+vdbrb_min_carat_natural_web;
    $(".vdbrb_max_carat_natural_web").val(v);
    if($(".vbdrb_carat_natural_web").length>0){
        $(".vbdrb_carat_natural_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }

    set_min_max_mobile_carat_natural();
});
function set_min_max_mobile_carat_natural(){
    var vdbrb_natural_min_carat = getCookie("vdbrb_natural_min_carat");
    var vdbrb_natural_max_carat = getCookie("vdbrb_natural_max_carat");

    if(vdbrb_natural_min_carat !== null && vdbrb_natural_min_carat!='' && vdbrb_natural_max_carat !== null && vdbrb_natural_max_carat!=''){
        $('#vdbrb_natural_carat_mobile_val').html(vdbrb_natural_min_carat+caratSymbol+' - '+vdbrb_natural_max_carat+caratSymbol);
    }else if(vdbrb_natural_min_carat !== null && vdbrb_natural_min_carat!=''){
        $('#vdbrb_natural_carat_mobile_val').html(vdbrb_natural_min_carat+caratSymbol);
    }else if(vdbrb_natural_max_carat !== null && vdbrb_natural_max_carat!=''){
        $('#vdbrb_natural_carat_mobile_val').html(vdbrb_natural_max_carat+caratSymbol);
    }else{
        $('#vdbrb_natural_carat_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    call_stone_again();
}

$('body').on('change', '.vdbrb_min_depth_natural_web', function() {
    var vdbrb_max_depth_natural_web = parseFloat($(".vdbrb_max_depth_natural_web").val().trim()).toFixed(1);
    
    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_depth_natural_web){
        v = vdbrb_max_depth_natural_web;
    }else if(v < default_min_depth_natural){
        v = default_min_depth_natural;
    }else if(v > default_max_depth_natural){
        v = default_max_depth_natural;
    }

    v = parseFloat(v).toFixed(1);
    if(isNaN(v)){
        v = default_min_depth_natural;
    }
    $(".vdbrb_min_depth_natural_web").val(v);

    document.cookie = "vdbrb_natural_min_depth="+v;
    document.cookie = "vdbrb_natural_max_depth="+vdbrb_max_depth_natural_web;
    if($(".vbdrb_depth_natural_web").length>0){
        $(".vbdrb_depth_natural_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }
    set_min_max_mobile_depth_natural();
});
$('body').on('change', '.vdbrb_max_depth_natural_web', function() {
    var vdbrb_min_depth_natural_web = parseFloat($(".vdbrb_min_depth_natural_web").val().trim()).toFixed(1);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_depth_natural_web){
        v = vdbrb_min_depth_natural_web;
    }else if(v < default_min_depth_natural){
        v = default_min_depth_natural;
    }else if(v > default_max_depth_natural){
        v = default_max_depth_natural;
    }

    v = parseFloat(v).toFixed(1);
    if(isNaN(v)){
        v = default_max_depth_natural;
    }
    $(".vdbrb_max_depth_natural_web").val(v);

    document.cookie = "vdbrb_natural_max_depth="+v;
    document.cookie = "vdbrb_natural_min_depth="+vdbrb_min_depth_natural_web;
    if($(".vbdrb_depth_natural_web").length>0){
        $(".vbdrb_depth_natural_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }
    set_min_max_mobile_depth_natural();
});
function set_min_max_mobile_depth_natural(){
    var vdbrb_natural_min_depth = getCookie("vdbrb_natural_min_depth");
    var vdbrb_natural_max_depth = getCookie("vdbrb_natural_max_depth");

    if(vdbrb_natural_min_depth !== null && vdbrb_natural_min_depth!='' && vdbrb_natural_max_depth !== null && vdbrb_natural_max_depth!=''){
        $('#vdbrb_natural_depth_mobile_val').html(vdbrb_natural_min_depth+' - '+vdbrb_natural_max_depth);
    }else if(vdbrb_natural_min_depth !== null && vdbrb_natural_min_depth!=''){
        $('#vdbrb_natural_depth_mobile_val').html(vdbrb_natural_min_depth);
    }else if(vdbrb_natural_max_depth !== null && vdbrb_natural_max_depth!=''){
        $('#vdbrb_natural_depth_mobile_val').html(vdbrb_natural_max_depth);
    }
    call_stone_again();
}

$('body').on('change', '.vdbrb_min_table_natural_web', function() {
    var vdbrb_max_table_natural_web = parseFloat($(".vdbrb_max_table_natural_web").val().trim()).toFixed(1);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_table_natural_web){
        v = vdbrb_max_table_natural_web;
    }else if(v < default_min_table_natural){
        v = default_min_table_natural;
    }else if(v > default_max_table_natural){
        v = default_max_table_natural;
    }

    v = parseFloat(v).toFixed(1);
    if(isNaN(v)){
        v = default_min_table_natural;
    }
    $(".vdbrb_min_table_natural_web").val(v);

    document.cookie = "vdbrb_natural_min_table="+v;
    document.cookie = "vdbrb_natural_max_table="+vdbrb_max_table_natural_web;
    if($(".vbdrb_table_natural_web").length>0){
        $(".vbdrb_table_natural_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }

    set_min_max_mobile_table_natural();
});
$('body').on('change', '.vdbrb_max_table_natural_web', function() {
    var vdbrb_min_table_natural_web = parseFloat($(".vdbrb_min_table_natural_web").val().trim()).toFixed(1);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_table_natural_web){
        v = vdbrb_min_table_natural_web;
    }else if(v < default_min_table_natural){
        v = default_min_table_natural;
    }else if(v > default_max_table_natural){
        v = default_max_table_natural;
    }

    v = parseFloat(v).toFixed(1);
    if(isNaN(v)){
        v = default_max_table_natural;
    }
    $(".vdbrb_max_table_natural_web").val(v);

    document.cookie = "vdbrb_natural_max_table="+v;
    document.cookie = "vdbrb_natural_min_table="+vdbrb_min_table_natural_web;
    if($(".vbdrb_table_natural_web").length>0){
        $(".vbdrb_table_natural_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }

    set_min_max_mobile_table_natural();
});
function set_min_max_mobile_table_natural(){
    var vdbrb_natural_min_table = getCookie("vdbrb_natural_min_table");
    var vdbrb_natural_max_table = getCookie("vdbrb_natural_max_table");

    if(vdbrb_natural_min_table !== null && vdbrb_natural_min_table!='' && vdbrb_natural_max_table !== null && vdbrb_natural_max_table!=''){
        $('#vdbrb_natural_table_mobile_val').html(vdbrb_natural_min_table+' - '+vdbrb_natural_max_table);
    }else if(vdbrb_natural_min_table !== null && vdbrb_natural_min_table!=''){
        $('#vdbrb_natural_table_mobile_val').html(vdbrb_natural_min_table);
    }else if(vdbrb_natural_max_table !== null && vdbrb_natural_max_table!=''){
        $('#vdbrb_natural_table_mobile_val').html(vdbrb_natural_max_table);
    }
    call_stone_again();
}
//#endregion

// #region - Labgrown All Module Click-Change Event Filter
$('body').on('click', '.vdbrb_list_item_a_shape_style_labgrown', function(){
    var module_section = $(this).data('module_section');
    var short_code = $(this).data('short_code');

    $(".vdbrb_list_item_a_shape_style_labgrown").each(function () {
        if($(this).data('module_section') != module_section){
            $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
        }
    });
    
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_shape_style_labgrown").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_labgrown_shape_style="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_labgrown_shape_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_labgrown_shape_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }

    call_stone_again();

    refetch_variantion(short_code);
});
$('body').on('click', '.vdbrb_list_item_a_lab_style_labgrown', function(){
    var module_section = $(this).data('module_section');
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_lab_style_labgrown").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_labgrown_lab_style="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_labgrown_lab_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_labgrown_lab_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    call_stone_again();
});
$('body').on('click', '.vdbrb_list_item_a_fancy_color_style_labgrown', function(){
    var module_section = $(this).data('module_section');
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_fancy_color_style_labgrown").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_labgrown_color_fancy="+arr.join(',');
    document.cookie = "vdbrb_labgrown_color=Fancy";
    if(title_arr.length > 0){
        $('#vdbrb_labgrown_color_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_labgrown_color_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    call_stone_again();
});

$('body').on('change','.vdbrb_min_price_labgrown_web', function() {
    var vdbrb_max_price_labgrown_web = parseFloat($(".vdbrb_max_price_labgrown_web").val().trim()).toFixed(2);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_price_labgrown_web){
        v = vdbrb_max_price_labgrown_web;
    }else if(v < default_min_price_labgrown){
        v = default_min_price_labgrown;
    }else if(v > default_max_price_labgrown){
        v = default_max_price_labgrown;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_min_price_labgrown;
    }
    $(".vdbrb_min_price_labgrown_web").val(v);

    document.cookie = "vdbrb_labgrown_min_price="+v;
    document.cookie = "vdbrb_labgrown_max_price="+vdbrb_max_price_labgrown_web;
    if($(".vbdrb_price_labgrown_web").length>0){
        $(".vbdrb_price_labgrown_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }

    set_min_max_mobile_price_labgrown();
});
$('body').on('change', '.vdbrb_max_price_labgrown_web', function() {
    var vdbrb_min_price_labgrown_web = parseFloat($(".vdbrb_min_price_labgrown_web").val().trim()).toFixed(2);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_price_labgrown_web){
        v = vdbrb_min_price_labgrown_web;
    }else if(v < default_min_price_labgrown){
        v = default_min_price_labgrown;
    }else if(v > default_max_price_labgrown){
        v = default_max_price_labgrown;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_max_price_labgrown;
    }
    $(".vdbrb_max_price_labgrown_web").val(v);

    document.cookie = "vdbrb_labgrown_max_price="+v;
    document.cookie = "vdbrb_labgrown_min_price="+vdbrb_min_price_labgrown_web;
    if($(".vbdrb_price_labgrown_web").length>0){
        $(".vbdrb_price_labgrown_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }
    set_min_max_mobile_price_labgrown()
});
function set_min_max_mobile_price_labgrown(){
    var vdbrb_labgrown_min_price = getCookie("vdbrb_labgrown_min_price");
    var vdbrb_labgrown_max_price = getCookie("vdbrb_labgrown_max_price");

    if(vdbrb_labgrown_min_price !== null && vdbrb_labgrown_min_price!='' && vdbrb_labgrown_max_price !== null && vdbrb_labgrown_max_price!=''){
        $('#vdbrb_labgrown_price_mobile_val').html(priceCurrency+vdbrb_labgrown_min_price+' - '+priceCurrency+vdbrb_labgrown_max_price);
    }else if(vdbrb_labgrown_min_price !== null && vdbrb_labgrown_min_price!=''){
        $('#vdbrb_labgrown_price_mobile_val').html(priceCurrency+vdbrb_labgrown_min_price);
    }else if(vdbrb_labgrown_max_price !== null && vdbrb_labgrown_max_price!=''){
        $('#vdbrb_labgrown_price_mobile_val').html(priceCurrency+vdbrb_labgrown_max_price);
    }
    call_stone_again();
}

$('body').on('change', '.vdbrb_min_carat_labgrown_web', function() {
    var vdbrb_max_carat_labgrown_web = parseFloat($(".vdbrb_max_carat_labgrown_web").val().trim()).toFixed(2);
    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_carat_labgrown_web){
        v = vdbrb_max_carat_labgrown_web;
    }else if(v < default_min_carat_labgrown){
        v = default_min_carat_labgrown;
    }else if(v > default_max_carat_labgrown){
        v = default_max_carat_labgrown;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_min_carat_labgrown;
    }
    $(".vdbrb_min_carat_labgrown_web").val(v);

    document.cookie = "vdbrb_labgrown_min_carat="+v;
    document.cookie = "vdbrb_labgrown_max_carat="+vdbrb_max_carat_labgrown_web;
    if($(".vbdrb_carat_labgrown_web").length>0){
        $(".vbdrb_carat_labgrown_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }

    set_min_max_mobile_carat_labgrown();
});
$('body').on('change', '.vdbrb_max_carat_labgrown_web', function() {
    var vdbrb_min_carat_labgrown_web = parseFloat($(".vdbrb_min_carat_labgrown_web").val().trim()).toFixed(2);
    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_carat_labgrown_web){
        v = vdbrb_min_carat_labgrown_web;
    }else if(v < default_min_carat_labgrown){
        v = default_min_carat_labgrown;
    }else if(v > default_max_carat_labgrown){
        v = default_max_carat_labgrown;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_max_carat_labgrown;
    }
    $(".vdbrb_max_carat_labgrown_web").val(v);

    document.cookie = "vdbrb_labgrown_max_carat="+v;
    document.cookie = "vdbrb_labgrown_min_carat="+vdbrb_min_carat_labgrown_web;
    if($(".vbdrb_carat_labgrown_web").length>0){
        $(".vbdrb_carat_labgrown_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }

    set_min_max_mobile_carat_labgrown();
});
function set_min_max_mobile_carat_labgrown(){
    var vdbrb_labgrown_min_carat = getCookie("vdbrb_labgrown_min_carat");
    var vdbrb_labgrown_max_carat = getCookie("vdbrb_labgrown_max_carat");

    if(vdbrb_labgrown_min_carat !== null && vdbrb_labgrown_min_carat!='' && vdbrb_labgrown_max_carat !== null && vdbrb_labgrown_max_carat!=''){
        $('#vdbrb_labgrown_carat_mobile_val').html(vdbrb_labgrown_min_carat+caratSymbol+' - '+vdbrb_labgrown_max_carat+caratSymbol);
    }else if(vdbrb_labgrown_min_carat !== null && vdbrb_labgrown_min_carat!=''){
        $('#vdbrb_labgrown_carat_mobile_val').html(vdbrb_labgrown_min_carat+caratSymbol);
    }else if(vdbrb_labgrown_max_carat !== null && vdbrb_labgrown_max_carat!=''){
        $('#vdbrb_labgrown_carat_mobile_val').html(vdbrb_labgrown_max_carat+caratSymbol);
    }else{
        $('#vdbrb_labgrown_carat_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    call_stone_again();
}

$('body').on('change', '.vbdrb_clarity_labgrown_web', function() {
    $('.vbdrb_clarity_labgrown_web').val($(this).val());
    changeLabgrownClarity();
});
function changeLabgrownClarity(){
    /*var from = parseInt($(".vbdrb_clarity_from_labgrown_web").val());
     var to = parseInt($(".vbdrb_clarity_to_labgrown_web").val());

     var arr = [];
     if(clarity_value_labgrown_arr!=undefined && clarity_value_labgrown_arr.length>0){
     for(var i=from; i<=to; i++){
     arr.push(clarity_value_labgrown_arr[i]);
     }
     }
     arr = array_unique(arr);*/

    var clarity_value = $(".vbdrb_clarity_labgrown_web").val();
    var arr = clarity_value.split(',');

    vdbrbLabrownClarityRange = clarity_value.split(',').join(' - ');

    document.cookie = "vdbrb_labgrown_clarity="+arr.join(',');
    if(arr.length > 0){
        $('#vdbrb_labgrown_clarity_mobile_val').html(arr.join(',').length>30?vdbrbLabrownClarityRange.substr(0,30)+'...':vdbrbLabrownClarityRange);
    }else{
        $('#vdbrb_labgrown_clarity_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    call_stone_again();
}

$('body').on('change', '.vdbrb_min_depth_labgrown_web', function() {
    var vdbrb_max_depth_labgrown_web = parseFloat($(".vdbrb_max_depth_labgrown_web").val().trim()).toFixed(1);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_depth_labgrown_web){
        v = vdbrb_max_depth_labgrown_web;
    }else if(v < default_min_depth_labgrown){
        v = default_min_depth_labgrown;
    }else if(v > default_max_depth_labgrown){
        v = default_max_depth_labgrown;
    }

    v = parseFloat(v).toFixed(1);
    if(isNaN(v)){
        v = default_min_depth_labgrown;
    }
    $(".vdbrb_min_depth_labgrown_web").val(v);

    document.cookie = "vdbrb_labgrown_min_depth="+v;
    document.cookie = "vdbrb_labgrown_max_depth="+vdbrb_max_depth_labgrown_web;
    if($(".vbdrb_depth_labgrown_web").length>0){
        $(".vbdrb_depth_labgrown_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }
    set_min_max_mobile_depth_labgrown();
});
$('body').on('change', '.vdbrb_max_depth_labgrown_web', function() {
    var vdbrb_min_depth_labgrown_web = parseFloat($(".vdbrb_min_depth_labgrown_web").val().trim()).toFixed(1);
    
    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_depth_labgrown_web){
        v = vdbrb_min_depth_labgrown_web;
    }else if(v < default_min_depth_labgrown){
        v = default_min_depth_labgrown;
    }else if(v > default_max_depth_labgrown){
        v = default_max_depth_labgrown;
    }

    v = parseFloat(v).toFixed(1);
    if(isNaN(v)){
        v = default_max_depth_labgrown;
    }
    $(".vdbrb_max_depth_labgrown_web").val(v);

    document.cookie = "vdbrb_labgrown_max_depth="+v;
    document.cookie = "vdbrb_labgrown_min_depth="+vdbrb_min_depth_labgrown_web;
    if($(".vbdrb_depth_labgrown_web").length>0){
        $(".vbdrb_depth_labgrown_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }
    set_min_max_mobile_depth_labgrown();
});
function set_min_max_mobile_depth_labgrown(){
    var vdbrb_labgrown_min_depth = getCookie("vdbrb_labgrown_min_depth");
    var vdbrb_labgrown_max_depth = getCookie("vdbrb_labgrown_max_depth");

    if(vdbrb_labgrown_min_depth !== null && vdbrb_labgrown_min_depth!='' && vdbrb_labgrown_max_depth !== null && vdbrb_labgrown_max_depth!=''){
        $('#vdbrb_labgrown_depth_mobile_val').html(vdbrb_labgrown_min_depth+' - '+vdbrb_labgrown_max_depth);
    }else if(vdbrb_labgrown_min_depth !== null && vdbrb_labgrown_min_depth!=''){
        $('#vdbrb_labgrown_depth_mobile_val').html(vdbrb_labgrown_min_depth);
    }else if(vdbrb_labgrown_max_depth !== null && vdbrb_labgrown_max_depth!=''){
        $('#vdbrb_labgrown_depth_mobile_val').html(vdbrb_labgrown_max_depth);
    }
    call_stone_again();
}

$('body').on('change', '.vdbrb_min_table_labgrown_web', function() {
    var vdbrb_max_table_labgrown_web = parseFloat($(".vdbrb_max_table_labgrown_web").val().trim()).toFixed(1);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_table_labgrown_web){
        v = vdbrb_max_table_labgrown_web;
    }else if(v < default_min_table_labgrown){
        v = default_min_table_labgrown;
    }else if(v > default_max_table_labgrown){
        v = default_max_table_labgrown;
    }

    v = parseFloat(v).toFixed(1);
    if(isNaN(v)){
        v = default_min_table_labgrown;
    }
    $(".vdbrb_min_table_labgrown_web").val(v);

    document.cookie = "vdbrb_labgrown_min_table="+v;
    document.cookie = "vdbrb_labgrown_max_table="+vdbrb_max_table_labgrown_web;
    if($(".vbdrb_table_labgrown_web").length>0){
        $(".vbdrb_table_labgrown_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }

    set_min_max_mobile_table_labgrown();
});
$('body').on('change', '.vdbrb_max_table_labgrown_web', function() {
    var vdbrb_min_table_labgrown_web = parseFloat($(".vdbrb_min_table_labgrown_web").val().trim()).toFixed(1);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_table_labgrown_web){
        v = vdbrb_min_table_labgrown_web;
    }else if(v < default_min_table_labgrown){
        v = default_min_table_labgrown;
    }else if(v > default_max_table_labgrown){
        v = default_max_table_labgrown;
    }

    v = parseFloat(v).toFixed(1);
    if(isNaN(v)){
        v = default_max_table_labgrown;
    }
    $(".vdbrb_max_table_labgrown_web").val(v);

    document.cookie = "vdbrb_labgrown_max_table="+v;
    document.cookie = "vdbrb_labgrown_min_table="+vdbrb_min_table_labgrown_web;
    if($(".vbdrb_table_labgrown_web").length>0){
        $(".vbdrb_table_labgrown_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }

    set_min_max_mobile_table_labgrown();
});
function set_min_max_mobile_table_labgrown(){
    var vdbrb_labgrown_min_table = getCookie("vdbrb_labgrown_min_table");
    var vdbrb_labgrown_max_table = getCookie("vdbrb_labgrown_max_table");

    if(vdbrb_labgrown_min_table !== null && vdbrb_labgrown_min_table!='' && vdbrb_labgrown_max_table !== null && vdbrb_labgrown_max_table!=''){
        $('#vdbrb_labgrown_table_mobile_val').html(vdbrb_labgrown_min_table+' - '+vdbrb_labgrown_max_table);
    }else if(vdbrb_labgrown_min_table !== null && vdbrb_labgrown_min_table!=''){
        $('#vdbrb_labgrown_table_mobile_val').html(vdbrb_labgrown_min_table);
    }else if(vdbrb_labgrown_max_table !== null && vdbrb_labgrown_max_table!=''){
        $('#vdbrb_labgrown_table_mobile_val').html(vdbrb_labgrown_max_table);
    }
    call_stone_again();
}
//#endregion

// #region - Gemstone All Module Click-Change Event Filter
$('body').on('click', '.vdbrb_list_item_a_shape_gemstone', function(){
    var module_section = $(this).data('module_section');
    var short_code = $(this).data('short_code');

    $(".vdbrb_list_item_a_shape_gemstone").each(function () {
        if($(this).data('module_section') != module_section){
            $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
        }
    });

    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_shape_gemstone").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_gemstone_shape="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_gemstone_shape_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_gemstone_shape_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }

    call_stone_again();

    refetch_variantion(short_code);
});

$('body').on('click', '.vdbrb_list_item_a_type_gemstone', function(){
    document.cookie = "vdbrb_gemstone_color=";
    
    var module_section = $(this).data('module_section');
    var value_for_api_of_type = $(this).data('value_for_api');
    $(".vdbrb_list_item_a_type_gemstone").each(function () {
        if($(this).data('module_section') != module_section){
            $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
        }
    });
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_type_gemstone").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_gemstone_type="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_gemstone_type_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_gemstone_type_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }

    var child_modules = $(this).data('child_modules');
    generate_gemstone_color_html(module_section,child_modules,value_for_api_of_type);

    call_stone_again();
});
function generate_gemstone_color_html(module_section,child_modules,value_for_api_of_type){
    if($("."+module_section).hasClass('vdb-rb-list-item-active')){

        var color_html = '';
        if(child_modules!=''){
            var child_modules_arr = child_modules.split(',');
            child_modules_arr = child_modules_arr.filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});

            $(child_modules_arr).each(function (k,v) {
                let class_a = 'vdbrb_list_item_a_color_gemstone';
                let color_small_letter = v.replace('gemstone_type_','').replace(value_for_api_of_type.toLowerCase()+'_','');//gemstone_type_sapphire_red => red
                let color_camel_case = color_small_letter.charAt(0).toUpperCase() + color_small_letter.slice(1);//Red
                color_camel_case = color_camel_case.split('_').join(' ');

                let img = 'frontend/images/'+color_small_letter+'.png';
                if(color_small_letter == 'other'){
                    img = 'frontend/images/'+'icon-fancy-other'+'.png';
                }else if(color_small_letter == 'blood_red'){
                    img = 'frontend/images/'+'blood-red'+'.png';
                }

                color_html += '<li>';
                color_html += '<a href="javascript:void(0)" class="'+class_a+'" data-title="'+(llt_data[color_small_letter]!=undefined && llt_data[color_small_letter]['label_text']!=undefined?llt_data[color_small_letter]['label_text']:color_camel_case)+'" data-value_for_api="'+color_camel_case+'" data-module_section="vdbrb_list_item_gemstone_color_'+color_small_letter+'">';
                color_html += '<div class="vdb-rb-list-item vdbrb_list_item_gemstone_color_'+color_small_letter+'">';
                color_html += '<img src="'+img+'" alt="">';
                color_html += '</div>';
                color_html += '<p class="vdv-rb-item-title">'+(llt_data[color_small_letter]!=undefined && llt_data[color_small_letter]['label_text']!=undefined?llt_data[color_small_letter]['label_text']:color_camel_case)+'</p>';
                color_html += '</a>';
                color_html += '</li>';
            });
            $("#vdbrb_main_setion_color_filter_gemstone").show();
            $("#vdbrb_color_filter_slider_gemstone").html(color_html);

            //mobile
            $("#vdbrb_main_setion_color_filter_gemstone_mob").show();
            $("#vdb_rb_gemstone_color_list_ul").html(color_html);

        }else{
            $("#vdbrb_main_setion_color_filter_gemstone").hide();
            $("#vdbrb_color_filter_slider_gemstone").html('');

            $("#vdbrb_main_setion_color_filter_gemstone_mob").hide();
            $("#vdb_rb_gemstone_color_list_ul").html('');

            document.cookie = "vdbrb_gemstone_color=";
        }
    }else{
        $("#vdbrb_main_setion_color_filter_gemstone").hide();
        $("#vdbrb_color_filter_slider_gemstone").html('');

        $("#vdbrb_main_setion_color_filter_gemstone_mob").hide();
        $("#vdb_rb_gemstone_color_list_ul").html('');

        document.cookie = "vdbrb_gemstone_color=";
    }
}
$('body').on('click', '.vdbrb_list_item_a_color_gemstone', function(){
    var module_section = $(this).data('module_section');
    $(".vdbrb_list_item_a_color_gemstone").each(function () {
        if($(this).data('module_section') != module_section){
            $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
        }
    });
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_color_gemstone").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_gemstone_color="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_gemstone_color_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_gemstone_color_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['colorel_text']!=undefined?llt_data['all']['colorel_text']:"All");
    }
    call_stone_again();
});

$('body').on('change','.vdbrb_min_price_gemstone_web', function() {
    var vdbrb_max_price_gemstone_web = parseFloat($(".vdbrb_max_price_gemstone_web").val().trim()).toFixed(2);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_price_gemstone_web){
        v = vdbrb_max_price_gemstone_web;
    }else if(v < default_min_price_gemstone){
        v = default_min_price_gemstone;
    }else if(v > default_max_price_gemstone){
        v = default_max_price_gemstone;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_min_price_gemstone;
    }
    $(".vdbrb_min_price_gemstone_web").val(v);

    document.cookie = "vdbrb_gemstone_min_price="+v;
    document.cookie = "vdbrb_gemstone_max_price="+vdbrb_max_price_gemstone_web;
    if($(".vbdrb_price_gemstone_web").length>0){
        $(".vbdrb_price_gemstone_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }

    set_min_max_mobile_price_gemstone();
});
$('body').on('change', '.vdbrb_max_price_gemstone_web', function() {
    var vdbrb_min_price_gemstone_web = parseFloat($(".vdbrb_min_price_gemstone_web").val().trim()).toFixed(2);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_price_gemstone_web){
        v = vdbrb_min_price_gemstone_web;
    }else if(v < default_min_price_gemstone){
        v = default_min_price_gemstone;
    }else if(v > default_max_price_gemstone){
        v = default_max_price_gemstone;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_max_price_gemstone;
    }
    $(".vdbrb_max_price_gemstone_web").val(v);

    document.cookie = "vdbrb_gemstone_max_price="+v;
    document.cookie = "vdbrb_gemstone_min_price="+vdbrb_min_price_gemstone_web;
    if($(".vbdrb_price_gemstone_web").length>0){
        $(".vbdrb_price_gemstone_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }
    set_min_max_mobile_price_gemstone()
});
function set_min_max_mobile_price_gemstone(){
    var vdbrb_gemstone_min_price = getCookie("vdbrb_gemstone_min_price");
    var vdbrb_gemstone_max_price = getCookie("vdbrb_gemstone_max_price");

    if(vdbrb_gemstone_min_price !== null && vdbrb_gemstone_min_price!='' && vdbrb_gemstone_max_price !== null && vdbrb_gemstone_max_price!=''){
        $('#vdbrb_gemstone_price_mobile_val').html(priceCurrency+vdbrb_gemstone_min_price+' - '+priceCurrency+vdbrb_gemstone_max_price);
    }else if(vdbrb_gemstone_min_price !== null && vdbrb_gemstone_min_price!=''){
        $('#vdbrb_gemstone_price_mobile_val').html(priceCurrency+vdbrb_gemstone_min_price);
    }else if(vdbrb_gemstone_max_price !== null && vdbrb_gemstone_max_price!=''){
        $('#vdbrb_gemstone_price_mobile_val').html(priceCurrency+vdbrb_gemstone_max_price);
    }
    call_stone_again();
}

$('body').on('change', '.vdbrb_min_carat_gemstone_web', function() {
    var vdbrb_max_carat_gemstone_web = parseFloat($(".vdbrb_max_carat_gemstone_web").val().trim()).toFixed(2);
    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_carat_gemstone_web){
        v = vdbrb_max_carat_gemstone_web;
    }else if(v < default_min_carat_gemstone){
        v = default_min_carat_gemstone;
    }else if(v > default_max_carat_gemstone){
        v = default_max_carat_gemstone;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_min_carat_gemstone;
    }
    $(".vdbrb_min_carat_gemstone_web").val(v);

    document.cookie = "vdbrb_gemstone_min_carat="+v;
    document.cookie = "vdbrb_gemstone_max_carat="+vdbrb_max_carat_gemstone_web;
    if($(".vbdrb_carat_gemstone_web").length>0){
        $(".vbdrb_carat_gemstone_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }

    set_min_max_mobile_carat_gemstone();
});
$('body').on('change', '.vdbrb_max_carat_gemstone_web', function() {
    var vdbrb_min_carat_gemstone_web = parseFloat($(".vdbrb_min_carat_gemstone_web").val().trim()).toFixed(2);
    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_carat_gemstone_web){
        v = vdbrb_min_carat_gemstone_web;
    }else if(v < default_min_carat_gemstone){
        v = default_min_carat_gemstone;
    }else if(v > default_max_carat_gemstone){
        v = default_max_carat_gemstone;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_max_carat_gemstone;
    }
    $(".vdbrb_max_carat_gemstone_web").val(v);

    document.cookie = "vdbrb_gemstone_max_carat="+v;
    document.cookie = "vdbrb_gemstone_min_carat="+vdbrb_min_carat_gemstone_web;
    if($(".vbdrb_carat_gemstone_web").length>0){
        $(".vbdrb_carat_gemstone_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }

    set_min_max_mobile_carat_gemstone();
});
function set_min_max_mobile_carat_gemstone(){
    var vdbrb_gemstone_min_carat = getCookie("vdbrb_gemstone_min_carat");
    var vdbrb_gemstone_max_carat = getCookie("vdbrb_gemstone_max_carat");

    if(vdbrb_gemstone_min_carat !== null && vdbrb_gemstone_min_carat!='' && vdbrb_gemstone_max_carat !== null && vdbrb_gemstone_max_carat!=''){
        $('#vdbrb_gemstone_carat_mobile_val').html(vdbrb_gemstone_min_carat+caratSymbol+' - '+vdbrb_gemstone_max_carat+caratSymbol);
    }else if(vdbrb_gemstone_min_carat !== null && vdbrb_gemstone_min_carat!=''){
        $('#vdbrb_gemstone_carat_mobile_val').html(vdbrb_gemstone_min_carat+caratSymbol);
    }else if(vdbrb_gemstone_max_carat !== null && vdbrb_gemstone_max_carat!=''){
        $('#vdbrb_gemstone_carat_mobile_val').html(vdbrb_gemstone_max_carat+caratSymbol);
    }else{
        $('#vdbrb_gemstone_carat_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    call_stone_again();
}
//#endregion

// #region - Radiance All Module Click-Change Event Filter
$('body').on('click', '.vdbrb_list_item_a_shape_radiance', function(){
    document.cookie = "vdbrb_radiance_subshape=";

    var value_for_api_of_type = $(this).data('value_for_api');
    var short_code = $(this).data('short_code');
    var type_short_code = $(this).data('type_short_code');
    var module_section = $(this).data('module_section');

    $(".vdbrb_list_item_a_shape_radiance").each(function () {
        if($(this).data('module_section') != module_section){
            $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
        }
    });

    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_shape_radiance").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_radiance_shape="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_radiance_shape_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_radiance_shape_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }

    var child_modules = [];
    if(type_value_radiance_arr?.[type_short_code]?.shape[short_code]?.subshape != undefined){
        child_modules = type_value_radiance_arr?.[type_short_code]?.shape[short_code]?.subshape;
    }

    console.log(type_short_code,short_code);
    console.log(type_value_radiance_arr?.[type_short_code]?.shape[short_code]?.subshape);
    console.log(module_section,child_modules,value_for_api_of_type);

    generate_radiance_subshape_html(module_section,child_modules,value_for_api_of_type);

    call_stone_again();

    refetch_variantion(short_code);
});
function generate_radiance_subshape_html(module_section,child_modules,value_for_api_of_type){
    if($("."+module_section).hasClass('vdb-rb-list-item-active')){
        var subshape_html = '';
        var settingSupportedShapesCount = 0;
        if(child_modules.length > 0){
            $(child_modules).each(function (k,v) {
                let class_a = 'vdbrb_list_item_a_subshape_radiance';                

                if(setting_supported_shapes.length > 0){
                    if(!(setting_supported_shapes.includes(v.srmss_vdb_value))){
                        class_a = '';
                        settingSupportedShapesCount++;
                    };
                }

                if(class_a != ''){
                    subshape_html += '<li>';
                    subshape_html += '<a href="javascript:void(0)" class="'+class_a+'" data-title="'+(llt_data[v.srmss_label]!=undefined && llt_data[v.srmss_label]['label_text']!=undefined?llt_data[v.srmss_label]['label_text']:v.srmss_label)+'" data-value_for_api="'+v.srmss_vdb_value+'" data-module_section="vdbrb_list_item_radiance_subshape_'+v.srmss_short_code+'">';
                    subshape_html += '<div class="vdb-rb-list-item vdbrb_list_item_radiance_subshape_'+v.srmss_short_code+'">';
                    subshape_html += '<img src="images/uploads/radiance_subshape/'+v.srmss_image+'" alt="">';
                    subshape_html += '</div>';
                    subshape_html += '<p class="vdv-rb-item-title">'+(llt_data[v.srmss_label]!=undefined && llt_data[v.srmss_label]['label_text']!=undefined?llt_data[v.srmss_label]['label_text']:v.srmss_label)+'</p>';
                    subshape_html += '</a>';
                    subshape_html += '</li>';
                }
            });
            if(child_modules.length == settingSupportedShapesCount){
                $("#vdbrb_main_setion_subshape_filter_radiance").hide();
                $("#vdbrb_subshape_filter_slider_radiance").html('');

                $("#vdbrb_main_setion_subshape_filter_radiance_mob").hide();
                $("#vdb_rb_radiance_subshape_list_ul").html('');

                document.cookie = "vdbrb_radiance_subshape=";
            }else{
                $("#vdbrb_main_setion_subshape_filter_radiance").show();
                $("#vdbrb_subshape_filter_slider_radiance").html(subshape_html);

                //mobile
                $("#vdbrb_main_setion_subshape_filter_radiance_mob").show();
                $("#vdb_rb_radiance_subshape_list_ul").html(subshape_html);
            }
        }else{
            $("#vdbrb_main_setion_subshape_filter_radiance").hide();
            $("#vdbrb_subshape_filter_slider_radiance").html('');

            $("#vdbrb_main_setion_subshape_filter_radiance_mob").hide();
            $("#vdb_rb_radiance_subshape_list_ul").html('');

            document.cookie = "vdbrb_radiance_subshape=";
        }
    }else{
        $("#vdbrb_main_setion_subshape_filter_radiance").hide();
        $("#vdbrb_subshape_filter_slider_radiance").html('');

        $("#vdbrb_main_setion_subshape_filter_radiance_mob").hide();
        $("#vdb_rb_radiance_subshape_list_ul").html('');

        document.cookie = "vdbrb_radiance_subshape=";
    }
}
$('body').on('click', '.vdbrb_list_item_a_subshape_radiance', function(){
    var module_section = $(this).data('module_section');
    $(".vdbrb_list_item_a_subshape_radiance").each(function () {
        if($(this).data('module_section') != module_section){
            $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
        }
    });
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_subshape_radiance").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_radiance_subshape="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_radiance_subshape_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_radiance_subshape_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['colorel_text']!=undefined?llt_data['all']['colorel_text']:"All");
    }
    call_stone_again();
});

$('body').on('click', '.vdbrb_list_item_a_type_radiance', function(){
    document.cookie = "vdbrb_radiance_color=";
    document.cookie = "vdbrb_radiance_shape=";

    var module_section = $(this).data('module_section');
    var value_for_api_of_type = $(this).data('value_for_api');
    var short_code = $(this).data('short_code');

    $(".vdbrb_list_item_a_type_radiance").each(function () {
        if($(this).data('module_section') != module_section){
            $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
        }
    });
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_type_radiance").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_radiance_type="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_radiance_type_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_radiance_type_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }

    var color_child_modules = [];
    if(type_value_radiance_arr[short_code]?.color != undefined){
        color_child_modules = type_value_radiance_arr[short_code]?.color;
    }

    var shape_child_modules = [];
    if(type_value_radiance_arr[short_code]?.shape != undefined){
        shape_child_modules = Object.keys(type_value_radiance_arr[short_code]?.shape).map((key) => type_value_radiance_arr[short_code]?.shape[key]);
    }

    generate_radiance_color_html(module_section,color_child_modules);
    generate_radiance_shape_html(module_section,shape_child_modules,short_code);

    call_stone_again();
});
function generate_radiance_color_html(module_section,child_modules){
    if($("."+module_section).hasClass('vdb-rb-list-item-active')){
        var color_html = '';
        if(child_modules.length > 0){
            $(child_modules).each(function (k,v) {
                let class_a = 'vdbrb_list_item_a_color_radiance';                

                color_html += '<li>';
                color_html += '<a href="javascript:void(0)" class="'+class_a+'" data-title="'+(llt_data[v.srmc_label]!=undefined && llt_data[v.srmc_label]['label_text']!=undefined?llt_data[v.srmc_label]['label_text']:v.srmc_label)+'" data-value_for_api="'+v.srmc_vdb_value+'" data-module_section="vdbrb_list_item_radiance_color_'+v.srmc_short_code+'">';
                color_html += '<div class="vdb-rb-list-item vdbrb_list_item_radiance_color_'+v.srmc_short_code+'">';
                color_html += '<img src="images/uploads/radiance_color/'+v.srmc_image+'" alt="">';
                color_html += '</div>';
                color_html += '<p class="vdv-rb-item-title">'+(llt_data[v.srmc_label]!=undefined && llt_data[v.srmc_label]['label_text']!=undefined?llt_data[v.srmc_label]['label_text']:v.srmc_label)+'</p>';
                color_html += '</a>';
                color_html += '</li>';
            });
            $("#vdbrb_main_setion_color_filter_radiance").show();
            $("#vdbrb_color_filter_slider_radiance").html(color_html);

            //mobile
            $("#vdbrb_main_setion_color_filter_radiance_mob").show();
            $("#vdb_rb_radiance_color_list_ul").html(color_html);

        }else{
            $("#vdbrb_main_setion_color_filter_radiance").hide();
            $("#vdbrb_color_filter_slider_radiance").html('');

            $("#vdbrb_main_setion_color_filter_radiance_mob").hide();
            $("#vdb_rb_radiance_color_list_ul").html('');

            document.cookie = "vdbrb_radiance_color=";
        }
    }else{
        $("#vdbrb_main_setion_color_filter_radiance").hide();
        $("#vdbrb_color_filter_slider_radiance").html('');

        $("#vdbrb_main_setion_color_filter_radiance_mob").hide();
        $("#vdb_rb_radiance_color_list_ul").html('');

        document.cookie = "vdbrb_radiance_color=";
    }
}
$('body').on('click', '.vdbrb_list_item_a_color_radiance', function(){
    var module_section = $(this).data('module_section');
    $(".vdbrb_list_item_a_color_radiance").each(function () {
        if($(this).data('module_section') != module_section){
            $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
        }
    });
    $("."+module_section).toggleClass('vdb-rb-list-item-active');

    var arr = [];
    var title_arr = [];
    $(".vdbrb_list_item_a_color_radiance").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            arr.push(value_for_api);
            title_arr.push(_this.data('title'));
        }
    });
    arr = array_unique(arr);
    title_arr = array_unique(title_arr);

    document.cookie = "vdbrb_radiance_color="+arr.join(',');
    if(title_arr.length > 0){
        $('#vdbrb_radiance_color_mobile_val').html(title_arr.join(',').length>30?title_arr.join(',').substr(0,30)+'...':title_arr.join(','));
    }else{
        $('#vdbrb_radiance_color_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['colorel_text']!=undefined?llt_data['all']['colorel_text']:"All");
    }
    call_stone_again();
});

function generate_radiance_shape_html(module_section,child_modules,type_short_code){
    if($("."+module_section).hasClass('vdb-rb-list-item-active')){
        var shape_html = '';
        if(child_modules.length > 0){
            $(child_modules).each(function (k,v) {
                let class_a = 'vdbrb_list_item_a_shape_radiance';                

                shape_html += '<li>';
                shape_html += '<a href="javascript:void(0)" class="'+class_a+'" data-type_short_code="'+type_short_code+'" data-short_code="'+v.srms_short_code+'" data-title="'+(llt_data[v.srms_label]!=undefined && llt_data[v.srms_label]['label_text']!=undefined?llt_data[v.srms_label]['label_text']:v.srms_label)+'" data-value_for_api="'+v.srms_vdb_value+'" data-module_section="vdbrb_list_item_radiance_shape_'+v.srms_short_code+'">';
                shape_html += '<div class="vdb-rb-list-item vdbrb_list_item_radiance_shape_'+v.srms_short_code+'">';
                shape_html += '<img src="images/uploads/radiance_shape/'+v.srms_image+'" alt="">';
                shape_html += '</div>';
                shape_html += '<p class="vdv-rb-item-title">'+(llt_data[v.srms_label]!=undefined && llt_data[v.srms_label]['label_text']!=undefined?llt_data[v.srms_label]['label_text']:v.srms_label)+'</p>';
                shape_html += '</a>';
                shape_html += '</li>';
            });
            $("#vdbrb_main_setion_shape_filter_radiance").show();
            $("#vdbrb_shape_filter_slider_radiance").html(shape_html);

            //mobile
            $("#vdbrb_main_setion_shape_filter_radiance_mob").show();
            $("#vdb_rb_radiance_shape_list_ul").html(shape_html);
        }else{
            $("#vdbrb_main_setion_shape_filter_radiance").hide();
            $("#vdbrb_main_setion_shape_filter_radiance_mob").hide();
    
            $("#vdbrb_shape_filter_slider_radiance").html('');
            $("#vdb_rb_radiance_shape_list_ul").html('');
    
            document.cookie = "vdbrb_radiance_shape=";
    
            $("#vdbrb_main_setion_subshape_filter_radiance").hide();
            $("#vdbrb_main_setion_subshape_filter_radiance_mob").hide();
    
            $("#vdbrb_subshape_filter_slider_radiance").html('');
            $("#vdb_rb_radiance_subshape_list_ul").html('');
    
            document.cookie = "vdbrb_radiance_subshape="; 
        }
    }else{
        $("#vdbrb_main_setion_shape_filter_radiance").hide();
        $("#vdbrb_main_setion_shape_filter_radiance_mob").hide();

        $("#vdbrb_shape_filter_slider_radiance").html('');
        $("#vdb_rb_radiance_shape_list_ul").html('');

        document.cookie = "vdbrb_radiance_shape=";

        $("#vdbrb_main_setion_subshape_filter_radiance").hide();
        $("#vdbrb_main_setion_subshape_filter_radiance_mob").hide();

        $("#vdbrb_subshape_filter_slider_radiance").html('');
        $("#vdb_rb_radiance_subshape_list_ul").html('');

        document.cookie = "vdbrb_radiance_subshape=";
    }
}

$('body').on('change','.vdbrb_min_price_radiance_web', function() {
    var vdbrb_max_price_radiance_web = parseFloat($(".vdbrb_max_price_radiance_web").val().trim()).toFixed(2);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_price_radiance_web){
        v = vdbrb_max_price_radiance_web;
    }else if(v < default_min_price_radiance){
        v = default_min_price_radiance;
    }else if(v > default_max_price_radiance){
        v = default_max_price_radiance;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_min_price_radiance;
    }
    $(".vdbrb_min_price_radiance_web").val(v);

    document.cookie = "vdbrb_radiance_min_price="+v;
    document.cookie = "vdbrb_radiance_max_price="+vdbrb_max_price_radiance_web;
    if($(".vbdrb_price_radiance_web").length>0){
        $(".vbdrb_price_radiance_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }

    set_min_max_mobile_price_radiance();
});
$('body').on('change', '.vdbrb_max_price_radiance_web', function() {
    var vdbrb_min_price_radiance_web = parseFloat($(".vdbrb_min_price_radiance_web").val().trim()).toFixed(2);

    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_price_radiance_web){
        v = vdbrb_min_price_radiance_web;
    }else if(v < default_min_price_radiance){
        v = default_min_price_radiance;
    }else if(v > default_max_price_radiance){
        v = default_max_price_radiance;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_max_price_radiance;
    }
    $(".vdbrb_max_price_radiance_web").val(v);

    document.cookie = "vdbrb_radiance_max_price="+v;
    document.cookie = "vdbrb_radiance_min_price="+vdbrb_min_price_radiance_web;
    if($(".vbdrb_price_radiance_web").length>0){
        $(".vbdrb_price_radiance_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }
    set_min_max_mobile_price_radiance()
});
function set_min_max_mobile_price_radiance(){
    var vdbrb_radiance_min_price = getCookie("vdbrb_radiance_min_price");
    var vdbrb_radiance_max_price = getCookie("vdbrb_radiance_max_price");

    if(vdbrb_radiance_min_price !== null && vdbrb_radiance_min_price!='' && vdbrb_radiance_max_price !== null && vdbrb_radiance_max_price!=''){
        $('#vdbrb_radiance_price_mobile_val').html(priceCurrency+vdbrb_radiance_min_price+' - '+priceCurrency+vdbrb_radiance_max_price);
    }else if(vdbrb_radiance_min_price !== null && vdbrb_radiance_min_price!=''){
        $('#vdbrb_radiance_price_mobile_val').html(priceCurrency+vdbrb_radiance_min_price);
    }else if(vdbrb_radiance_max_price !== null && vdbrb_radiance_max_price!=''){
        $('#vdbrb_radiance_price_mobile_val').html(priceCurrency+vdbrb_radiance_max_price);
    }
    call_stone_again();
}

$('body').on('change', '.vdbrb_min_carat_radiance_web', function() {
    var vdbrb_max_carat_radiance_web = parseFloat($(".vdbrb_max_carat_radiance_web").val().trim()).toFixed(2);
    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v > vdbrb_max_carat_radiance_web){
        v = vdbrb_max_carat_radiance_web;
    }else if(v < default_min_carat_radiance){
        v = default_min_carat_radiance;
    }else if(v > default_max_carat_radiance){
        v = default_max_carat_radiance;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_min_carat_radiance;
    }
    $(".vdbrb_min_carat_radiance_web").val(v);

    document.cookie = "vdbrb_radiance_min_carat="+v;
    document.cookie = "vdbrb_radiance_max_carat="+vdbrb_max_carat_radiance_web;
    if($(".vbdrb_carat_radiance_web").length>0){
        $(".vbdrb_carat_radiance_web").each(function () {
            $(this).data("ionRangeSlider").update({
                from: v
            });
        });
    }

    set_min_max_mobile_carat_radiance();
});
$('body').on('change', '.vdbrb_max_carat_radiance_web', function() {
    var vdbrb_min_carat_radiance_web = parseFloat($(".vdbrb_min_carat_radiance_web").val().trim()).toFixed(2);
    var _this = $(this);
    var v = parseFloat($(this).val().trim());
    if(v < vdbrb_min_carat_radiance_web){
        v = vdbrb_min_carat_radiance_web;
    }else if(v < default_min_carat_radiance){
        v = default_min_carat_radiance;
    }else if(v > default_max_carat_radiance){
        v = default_max_carat_radiance;
    }

    v = parseFloat(v).toFixed(2);
    if(isNaN(v)){
        v = default_max_carat_radiance;
    }
    $(".vdbrb_max_carat_radiance_web").val(v);

    document.cookie = "vdbrb_radiance_max_carat="+v;
    document.cookie = "vdbrb_radiance_min_carat="+vdbrb_min_carat_radiance_web;
    if($(".vbdrb_carat_radiance_web").length>0){
        $(".vbdrb_carat_radiance_web").each(function () {
            $(this).data("ionRangeSlider").update({
                to: v
            });
        });
    }

    set_min_max_mobile_carat_radiance();
});
function set_min_max_mobile_carat_radiance(){
    var vdbrb_radiance_min_carat = getCookie("vdbrb_radiance_min_carat");
    var vdbrb_radiance_max_carat = getCookie("vdbrb_radiance_max_carat");

    if(vdbrb_radiance_min_carat !== null && vdbrb_radiance_min_carat!='' && vdbrb_radiance_max_carat !== null && vdbrb_radiance_max_carat!=''){
        $('#vdbrb_radiance_carat_mobile_val').html(vdbrb_radiance_min_carat+caratSymbol+' - '+vdbrb_radiance_max_carat+caratSymbol);
    }else if(vdbrb_radiance_min_carat !== null && vdbrb_radiance_min_carat!=''){
        $('#vdbrb_radiance_carat_mobile_val').html(vdbrb_radiance_min_carat+caratSymbol);
    }else if(vdbrb_radiance_max_carat !== null && vdbrb_radiance_max_carat!=''){
        $('#vdbrb_radiance_carat_mobile_val').html(vdbrb_radiance_max_carat+caratSymbol);
    }else{
        $('#vdbrb_radiance_carat_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    call_stone_again();
}
//#endregion

// #region - Mobile Filter Options Modal
var windowSize = window.screen.width;
if (windowSize < 640) {
    $('body').on('click', '.vdb-rb-open-modal_natural', function() {
        closeModal();

        $("body").addClass("vdb-rb-modal-open");
        $(".vdb-rb-open-modal_natural").removeClass("vdb-rb-active");
        $(".vdb-rb-modal-window").removeClass("vdb-rb-show-popup");
        var modalId = $(this).attr("data-id");
        $(this).addClass("vdb-rb-active");
        $("#"+modalId).addClass("vdb-rb-show-popup");
    });

    $('body').on('click', '.vdb-rb-open-modal_labgrown', function() {
        closeModal();
        
        $("body").addClass("vdb-rb-modal-open");
        $(".vdb-rb-open-modal_labgrown").removeClass("vdb-rb-active");
        $(".vdb-rb-modal-window").removeClass("vdb-rb-show-popup");
        var modalId = $(this).attr("data-id");
        $(this).addClass("vdb-rb-active");
        $("#"+modalId).addClass("vdb-rb-show-popup");
    });

    $('body').on('click', '.vdb-rb-open-modal_gemstone', function() {
        closeModal();
        
        $("body").addClass("vdb-rb-modal-open");
        $(".vdb-rb-open-modal_gemstone").removeClass("vdb-rb-active");
        $(".vdb-rb-modal-window").removeClass("vdb-rb-show-popup");
        var modalId = $(this).attr("data-id");
        $(this).addClass("vdb-rb-active");
        $("#"+modalId).addClass("vdb-rb-show-popup");
    });

    $('body').on('click', '.vdb-rb-open-modal_radiance', function() {
        closeModal();
        
        $("body").addClass("vdb-rb-modal-open");
        $(".vdb-rb-open-modal_radiance").removeClass("vdb-rb-active");
        $(".vdb-rb-modal-window").removeClass("vdb-rb-show-popup");
        var modalId = $(this).attr("data-id");
        $(this).addClass("vdb-rb-active");
        $("#"+modalId).addClass("vdb-rb-show-popup");
    });

    $('body').on('click', '.vdb-rb-close-modal', function() {
        $("body").removeClass("vdb-rb-modal-open");
        $(".vdb-rb-open-modal_natural").removeClass("vdb-rb-active");
        $(".vdb-rb-open-modal_labgrown").removeClass("vdb-rb-active");
        $(".vdb-rb-open-modal_gemstone").removeClass("vdb-rb-active");
        $(".vdb-rb-modal-window").removeClass("vdb-rb-show-popup");
    });
}
//#endregion

// #region - Reset All Stone Filter Module
$('body').on('click', '#vdbrb_stone_reset_filter', function(){
    var vdbRbStoneTab = $("#vdbrb_active_tab").val();

    if(vdbRbStoneTab=='natural'){
        document.cookie = "vdbrb_natural_page_number=1";

        document.cookie = "vdbrb_natural_shape_style=";
        if($(".vdbrb_list_item_a_shape_style_natural").length>0){
            $(".vdbrb_list_item_a_shape_style_natural").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
        }

        document.cookie = "vdbrb_natural_color_fancy=";
        if($(".vdbrb_list_item_a_fancy_color_style_natural").length>0){
            $(".vdbrb_list_item_a_fancy_color_style_natural").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
        }

        document.cookie = "vdbrb_natural_lab_style=";
        if($(".vdbrb_list_item_a_lab_style_natural").length>0){
            $(".vdbrb_list_item_a_lab_style_natural").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
        }

        document.cookie = "vdbrb_natural_min_price="+default_min_price_natural;
        if($(".vdbrb_min_price_natural_web").length>0){
            $(".vdbrb_min_price_natural_web").val(default_min_price_natural);
        }
        document.cookie = "vdbrb_natural_max_price="+default_max_price_natural;
        if($(".vdbrb_max_price_natural_web").length>0){
            $(".vdbrb_max_price_natural_web ").val(default_max_price_natural);
        }

        if($(".vbdrb_price_natural_web").length>0){
            $(".vbdrb_price_natural_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_price_natural,
                    to: default_max_price_natural
                });
            });
        }

        document.cookie = "vdbrb_natural_min_carat="+default_min_carat_natural;
        if($(".vdbrb_min_carat_natural_web").length>0){
            $(".vdbrb_min_carat_natural_web").val(default_min_carat_natural);
        }
        document.cookie = "vdbrb_natural_max_carat="+default_max_carat_natural;
        if($(".vdbrb_max_carat_natural_web").length>0){
            $(".vdbrb_max_carat_natural_web").val(default_max_carat_natural);
        }

        if($(".vbdrb_carat_natural_web").length>0){
            $(".vbdrb_carat_natural_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_carat_natural,
                    to: default_max_carat_natural
                });
            });
        }

        document.cookie = "vdbrb_natural_min_depth="+default_min_depth_natural;
        if($(".vdbrb_min_depth_natural_web").length>0){
            $(".vdbrb_min_depth_natural_web").val(default_min_depth_natural);
        }
        document.cookie = "vdbrb_natural_max_depth="+default_max_depth_natural;
        if($(".vdbrb_max_depth_natural_web").length>0){
            $(".vdbrb_max_depth_natural_web").val(default_max_depth_natural);
        }

        if($(".vbdrb_depth_natural_web").length>0){
            $(".vbdrb_depth_natural_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_depth_natural,
                    to: default_max_depth_natural
                });
            });
        }

        document.cookie = "vdbrb_natural_min_table="+default_min_table_natural;
        if($(".vdbrb_min_table_natural_web").length>0){
            $(".vdbrb_min_table_natural_web").val(default_min_table_natural);
        }
        document.cookie = "vdbrb_natural_max_table="+default_max_table_natural;
        if($(".vdbrb_max_table_natural_web").length>0){
            $(".vdbrb_max_table_natural_web").val(default_max_table_natural);
        }

        if($(".vbdrb_table_natural_web").length>0){
            $(".vbdrb_table_natural_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_table_natural,
                    to: default_max_table_natural
                });
            });
        }

        document.cookie = "vdbrb_natural_color_white=";
        if($(".vbdrb_white_color_natural_web").length>0){
            $(".vbdrb_white_color_natural_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: white_color_value_natural_arr[0],
                    to: white_color_value_natural_arr[(white_color_value_natural_arr.length-1)]
                });
            });
        }

        document.cookie = "vdbrb_natural_fluorescence_intensities=";
        if($(".vbdrb_fluorescence_natural_web").length>0){
            $(".vbdrb_fluorescence_natural_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: flour_value_natural_arr[0],
                    to: flour_value_natural_arr[(flour_value_natural_arr.length-1)]
                });
            });
        }

        document.cookie = "vdbrb_natural_clarity=";
        if($(".vbdrb_clarity_natural_web").length>0){
            $(".vbdrb_clarity_natural_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: clarity_value_natural_arr[0],
                    to: clarity_value_natural_arr[(clarity_value_natural_arr.length-1)]
                });
            });
        }

        document.cookie = "vdbrb_natural_cut=";
        if($(".vbdrb_cut_natural_web").length>0){
            $(".vbdrb_cut_natural_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: cut_value_natural_arr[0],
                    to: cut_value_natural_arr[(cut_value_natural_arr.length-1)]
                });
            });
        }

        document.cookie = "vdbrb_natural_symmetry=";
        if($(".vbdrb_symmetry_natural_web").length>0){
            $(".vbdrb_symmetry_natural_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: symmetry_value_natural_arr[0],
                    to: symmetry_value_natural_arr[(symmetry_value_natural_arr.length-1)]
                });
            });
        }

        document.cookie = "vdbrb_natural_polish=";
        if($(".vbdrb_polish_natural_web").length>0){
            $(".vbdrb_polish_natural_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: polish_value_natural_arr[0],
                    to: polish_value_natural_arr[(polish_value_natural_arr.length-1)]
                });
            });
        }

        //sorting
        document.cookie = "vdbrb_natural_sorting=";
        $('#vdbrb_sorting_item_text').html('');

        if($('#vdbrb_shape_filter_slider_natural').length > 0){
            $('#vdbrb_shape_filter_slider_natural').slick('slickGoTo',0);
        }

        if($('#vdbrb_lab_filter_slider_natural').length > 0){
            $('#vdbrb_lab_filter_slider_natural').slick('slickGoTo',0);
        }

        if($('#vdbrb_fancy_color_filter_slider_natural').length > 0){
            $('#vdbrb_fancy_color_filter_slider_natural').slick('slickGoTo',0);
        }

        $('.vdb_rb_natural_mob_block .vdb-rb-filters-count').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    else if(vdbRbStoneTab=='labgrown'){
        document.cookie = "vdbrb_labgrown_page_number=1";

        document.cookie = "vdbrb_labgrown_shape_style=";
        if($(".vdbrb_list_item_a_shape_style_labgrown").length>0){
            $(".vdbrb_list_item_a_shape_style_labgrown").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
        }

        document.cookie = "vdbrb_labgrown_color_fancy=";
        if($(".vdbrb_list_item_a_fancy_color_style_labgrown").length>0){
            $(".vdbrb_list_item_a_fancy_color_style_labgrown").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
        }

        document.cookie = "vdbrb_labgrown_lab_style=";
        if($(".vdbrb_list_item_a_lab_style_labgrown").length>0){
            $(".vdbrb_list_item_a_lab_style_labgrown").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
        }

        document.cookie = "vdbrb_labgrown_min_price="+default_min_price_labgrown;
        if($(".vdbrb_min_price_labgrown_web").length>0){
            $(".vdbrb_min_price_labgrown_web").val(default_min_price_labgrown);
        }
        document.cookie = "vdbrb_labgrown_max_price="+default_max_price_labgrown;
        if($(".vdbrb_max_price_labgrown_web").length>0){
            $(".vdbrb_max_price_labgrown_web").val(default_max_price_labgrown);
        }

        if($(".vbdrb_price_labgrown_web").length>0){
            $(".vbdrb_price_labgrown_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_price_labgrown,
                    to: default_max_price_labgrown
                });
            });
        }

        document.cookie = "vdbrb_labgrown_min_carat="+default_min_carat_labgrown;
        if($(".vdbrb_min_carat_labgrown_web").length>0){
            $(".vdbrb_min_carat_labgrown_web").val(default_min_carat_labgrown);
        }
        document.cookie = "vdbrb_labgrown_max_carat="+default_max_carat_labgrown;
        if($(".vdbrb_max_carat_labgrown_web").length>0){
            $(".vdbrb_max_carat_labgrown_web").val(default_max_carat_labgrown);
        }

        if($(".vbdrb_carat_labgrown_web").length>0){
            $(".vbdrb_carat_labgrown_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_carat_labgrown,
                    to: default_max_carat_labgrown
                });
            });
        }

        document.cookie = "vdbrb_labgrown_min_depth="+default_min_depth_labgrown;
        if($(".vdbrb_min_depth_labgrown_web").length>0){
            $(".vdbrb_min_depth_labgrown_web").val(default_min_depth_labgrown);
        }
        document.cookie = "vdbrb_labgrown_max_depth="+default_max_depth_labgrown;
        if($(".vdbrb_max_depth_labgrown_web").length>0){
            $(".vdbrb_max_depth_labgrown_web").val(default_max_depth_labgrown);
        }

        if($(".vbdrb_depth_labgrown_web").length>0){
            $(".vbdrb_depth_labgrown_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_depth_labgrown,
                    to: default_max_depth_labgrown
                });
            });
        }

        document.cookie = "vdbrb_labgrown_min_table="+default_min_table_labgrown;
        if($(".vdbrb_min_table_labgrown_web").length>0){
            $(".vdbrb_min_table_labgrown_web").val(default_min_table_labgrown);
        }
        document.cookie = "vdbrb_labgrown_max_table="+default_max_table_labgrown;
        if($(".vdbrb_max_table_labgrown_web").length>0){
            $(".vdbrb_max_table_labgrown_web").val(default_max_table_labgrown);
        }

        if($(".vbdrb_table_labgrown_web").length>0){
            $(".vbdrb_table_labgrown_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_table_labgrown,
                    to: default_max_table_labgrown
                });
            });
        }

        document.cookie = "vdbrb_labgrown_color_white=";
        if($(".vbdrb_white_color_labgrown_web").length>0){
            $(".vbdrb_white_color_labgrown_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: white_color_value_labgrown_arr[0],
                    to: white_color_value_labgrown_arr[(white_color_value_labgrown_arr.length-1)]
                });
            });
        }

        document.cookie = "vdbrb_labgrown_fluorescence_intensities=";
        //$(".vbdrb_fluorescence_labgrown_web").val(flour_value_labgrown_arr[0]+','+flour_value_labgrown_arr[flour_value_labgrown_arr.length -1]);
        if($(".vbdrb_fluorescence_labgrown_web").length>0){
            $(".vbdrb_fluorescence_labgrown_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: flour_value_labgrown_arr[0],
                    to: flour_value_labgrown_arr[(flour_value_labgrown_arr.length-1)]
                });
            });
        }

        document.cookie = "vdbrb_labgrown_clarity=";
        /*$(".vbdrb_clarity_from_labgrown_web").val(0);
         $(".vbdrb_clarity_to_labgrown_web").val(clarity_value_labgrown_arr.length-1);*/
        //$(".vbdrb_clarity_labgrown_web").val(clarity_value_labgrown_arr[0]+','+clarity_value_labgrown_arr[(clarity_value_labgrown_arr.length-1)]);
        if($(".vbdrb_clarity_labgrown_web").length>0){
            $(".vbdrb_clarity_labgrown_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: clarity_value_labgrown_arr[0],
                    to: clarity_value_labgrown_arr[(clarity_value_labgrown_arr.length-1)]
                });
            });
        }

        document.cookie = "vdbrb_labgrown_cut=";
        if($(".vbdrb_cut_labgrown_web").length>0){
            $(".vbdrb_cut_labgrown_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: cut_value_labgrown_arr[0],
                    to: cut_value_labgrown_arr[(cut_value_labgrown_arr.length-1)]
                });
            });
        }

        document.cookie = "vdbrb_labgrown_symmetry=";
        if($(".vbdrb_symmetry_labgrown_web").length>0){
            $(".vbdrb_symmetry_labgrown_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: symmetry_value_labgrown_arr[0],
                    to: symmetry_value_labgrown_arr[(symmetry_value_labgrown_arr.length-1)]
                });
            });
        }

        document.cookie = "vdbrb_labgrown_polish=";
        if($(".vbdrb_polish_labgrown_web").length>0){
            $(".vbdrb_polish_labgrown_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: polish_value_labgrown_arr[0],
                    to: polish_value_labgrown_arr[(polish_value_labgrown_arr.length-1)]
                });
            });
        }

        //sorting
        document.cookie = "vdbrb_labgrown_sorting=";
        $('#vdbrb_sorting_item_text').html('');

        if($('#vdbrb_shape_filter_slider_labgrown').length > 0){
            $('#vdbrb_shape_filter_slider_labgrown').slick('slickGoTo',0);
        }

        if($('#vdbrb_lab_filter_slider_labgrown').length > 0){
            $('#vdbrb_lab_filter_slider_labgrown').slick('slickGoTo',0);
        }

        if($('#vdbrb_fancy_color_filter_slider_labgrown').length > 0){
            $('#vdbrb_fancy_color_filter_slider_labgrown').slick('slickGoTo',0);
        }
        
        $('.vdb_rb_labgrown_mob_block .vdb-rb-filters-count').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    else if(vdbRbStoneTab=='gemstone'){
        document.cookie = "vdbrb_gemstone_page_number=1";

        document.cookie = "vdbrb_gemstone_shape=";
        if($(".vdbrb_list_item_a_shape_gemstone").length>0){
            $(".vdbrb_list_item_a_shape_gemstone").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
        }

        document.cookie = "vdbrb_gemstone_type=";
        if($(".vdbrb_list_item_a_type_gemstone").length>0){
            $(".vdbrb_list_item_a_type_gemstone").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
        }

        document.cookie = "vdbrb_gemstone_color=";
        if($(".vdbrb_list_item_a_color_gemstone").length>0){
            $(".vdbrb_list_item_a_color_gemstone").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
            $('#vdbrb_main_setion_color_filter_gemstone').hide();
        }

        document.cookie = "vdbrb_gemstone_min_price="+default_min_price_gemstone;
        if($(".vdbrb_min_price_gemstone_web").length>0){
            $(".vdbrb_min_price_gemstone_web").val(default_min_price_gemstone);
        }
        document.cookie = "vdbrb_gemstone_max_price="+default_max_price_gemstone;
        if($(".vdbrb_max_price_gemstone_web").length>0){
            $(".vdbrb_max_price_gemstone_web").val(default_max_price_gemstone);
        }
        if($(".vbdrb_price_gemstone_web").length>0){
            $(".vbdrb_price_gemstone_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_price_gemstone,
                    to: default_max_price_gemstone
                });
            });
        }

        document.cookie = "vdbrb_gemstone_min_carat="+default_min_carat_gemstone;
        if($(".vdbrb_min_carat_gemstone_web").length>0){
            $(".vdbrb_min_carat_gemstone_web").val(default_min_carat_gemstone);
        }
        document.cookie = "vdbrb_gemstone_max_carat="+default_max_carat_gemstone;
        if($(".vdbrb_max_carat_gemstone_web").length>0){
            $(".vdbrb_max_carat_gemstone_web").val(default_max_carat_gemstone);
        }
        if($(".vbdrb_carat_gemstone_web").length>0){
            $(".vbdrb_carat_gemstone_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_carat_gemstone,
                    to: default_max_carat_gemstone
                });
            });
        }

        //sorting
        document.cookie = "vdbrb_gemstone_sorting=";
        $('#vdbrb_sorting_item_text').html('');

        if($('#vdbrb_shape_filter_slider_gemstone').length > 0){
            $('#vdbrb_shape_filter_slider_gemstone').slick('slickGoTo',0);
        }
        if($('#vdbrb_type_filter_slider_gemstone').length > 0){
            $('#vdbrb_type_filter_slider_gemstone').slick('slickGoTo',0);
        }

        $('.vdb_rb_gemstone_mob_block .vdb-rb-filters-count').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }
    else if(vdbRbStoneTab=='radiance'){
        document.cookie = "vdbrb_radiance_page_number=1";

        document.cookie = "vdbrb_radiance_type=";
        if($(".vdbrb_list_item_a_type_radiance").length>0){
            $(".vdbrb_list_item_a_type_radiance").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
        }

        document.cookie = "vdbrb_radiance_color=";
        if($(".vdbrb_list_item_a_color_radiance").length>0){
            $(".vdbrb_list_item_a_color_radiance").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
            $('#vdbrb_main_setion_color_filter_radiance').hide();
        }

        document.cookie = "vdbrb_radiance_shape=";
        if($(".vdbrb_list_item_a_shape_radiance").length>0){
            $(".vdbrb_list_item_a_shape_radiance").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
            $('#vdbrb_main_setion_shape_filter_radiance').hide();
        }

        document.cookie = "vdbrb_radiance_subshape=";
        if($(".vdbrb_list_item_a_subshape_radiance").length>0){
            $(".vdbrb_list_item_a_subshape_radiance").each(function () {
                $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
            });
            $('#vdbrb_main_setion_subshape_filter_radiance').hide();
        }

        document.cookie = "vdbrb_radiance_min_price="+default_min_price_radiance;
        if($(".vdbrb_min_price_radiance_web").length>0){
            $(".vdbrb_min_price_radiance_web").val(default_min_price_radiance);
        }
        document.cookie = "vdbrb_radiance_max_price="+default_max_price_radiance;
        if($(".vdbrb_max_price_radiance_web").length>0){
            $(".vdbrb_max_price_radiance_web").val(default_max_price_radiance);
        }
        if($(".vbdrb_price_radiance_web").length>0){
            $(".vbdrb_price_radiance_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_price_radiance,
                    to: default_max_price_radiance
                });
            });
        }

        document.cookie = "vdbrb_radiance_min_carat="+default_min_carat_radiance;
        if($(".vdbrb_min_carat_radiance_web").length>0){
            $(".vdbrb_min_carat_radiance_web").val(default_min_carat_radiance);
        }
        document.cookie = "vdbrb_radiance_max_carat="+default_max_carat_radiance;
        if($(".vdbrb_max_carat_radiance_web").length>0){
            $(".vdbrb_max_carat_radiance_web").val(default_max_carat_radiance);
        }
        if($(".vbdrb_carat_radiance_web").length>0){
            $(".vbdrb_carat_radiance_web").each(function () {
                $(this).data("ionRangeSlider").update({
                    from: default_min_carat_radiance,
                    to: default_max_carat_radiance
                });
            });
        }

        //sorting
        document.cookie = "vdbrb_radiance_sorting=";
        $('#vdbrb_sorting_item_text').html('');

        if($('#vdbrb_type_filter_slider_radiance').length > 0){
            $('#vdbrb_type_filter_slider_radiance').slick('slickGoTo',0);
        }

        $('.vdb_rb_radiance_mob_block .vdb-rb-filters-count').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
    }

    if($(".vdbrb_sort_option").length>0){
        $(".vdbrb_sort_option").each(function () {
            $(this).removeClass('vdb-rb-selected');
        });
    }
    
    top.window.scrollTo({ top: 0, behavior: 'smooth' });

    call_stone_again();
});
//#endregion

// #region - Shorting Filter
$('#vdbrb_sorting_item_text').on('click', function () {
    if (!$("#vdbrb_sort_dropdown").hasClass("vdb-rb-show")) {
        setTimeout(function(){
            $("#vdbrb_sorting_item_text").toggleClass('vdb-rb-open');
            $('#vdbrb_sort_dropdown').toggleClass('vdb-rb-show'); 
        }, 200);
    }
});
$(".vdbrb_sort_option").click(function () {
    var _this = $(this);
    var vdbRbStoneTab = $("#vdbrb_active_tab").val();

    $(".vdbrb_sort_option").removeClass('vdb-rb-selected');
    _this.addClass('vdb-rb-selected');

    $('#vdbrb_sorting_item_text').html(_this.data('value'));

    //close sorting popup
    $('#vdbrb_sorting_item_text').removeClass('vdb-rb-open');
    $('#vdbrb_sort_dropdown').removeClass('vdb-rb-show');

    if(vdbRbStoneTab=='natural'){
        document.cookie = "vdbrb_natural_sorting="+_this.data('value');
    }else if(vdbRbStoneTab=='labgrown'){
        document.cookie = "vdbrb_labgrown_sorting="+_this.data('value');
    }else if(vdbRbStoneTab=='gemstone'){
        document.cookie = "vdbrb_gemstone_sorting="+_this.data('value');
    }else if(vdbRbStoneTab=='radiance'){
        document.cookie = "vdbrb_radiance_sorting="+_this.data('value');
    }

    call_stone_again();
});

document.addEventListener("click", (evt) => {
	let targetElement = evt.target; // clicked element
	
	const div_id1 = document.getElementById("vdbrb_sort_dropdown");
    const div_id2 = document.getElementById("vdbrb_sorting_item_text");
	do {
		if (targetElement == div_id1) {
			return;
		}/*else if (targetElement == div_id2) {
			return;
		}*/
		
		targetElement = targetElement.parentNode;
	} while (targetElement);

    div_id1.classList.remove("vdb-rb-show");
    div_id2.classList.remove("vdb-rb-open");
});

//#endregion

//#region - Mobile View Clear Button
$('.vdb-rb-clear-selection').on('click', function () {
    var vdbRbStoneTab = $("#vdbrb_active_tab").val();
    var module = $(this).data('module');
    
    if(vdbRbStoneTab=='natural'){
        if(module == 'shape'){
            document.cookie = "vdbrb_natural_shape_style=";
            if($(".vdbrb_list_item_a_shape_style_natural").length>0){
                $(".vdbrb_list_item_a_shape_style_natural").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_natural_shape_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'color'){
            document.cookie = "vdbrb_natural_color_fancy=";
            if($(".vdbrb_list_item_a_fancy_color_style_natural").length>0){
                $(".vdbrb_list_item_a_fancy_color_style_natural").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            document.cookie = "vdbrb_natural_lab_style=";
            if($(".vdbrb_list_item_a_lab_style_natural").length>0){
                $(".vdbrb_list_item_a_lab_style_natural").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }

            document.cookie = "vdbrb_natural_color_white=";
            if($(".vbdrb_white_color_natural_web").length>0){
                $(".vbdrb_white_color_natural_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: white_color_value_natural_arr[0],
                        to: white_color_value_natural_arr[(white_color_value_natural_arr.length-1)]
                    });
                });
            }

            $('#vdbrb_natural_color_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'carat'){
            document.cookie = "vdbrb_natural_min_carat="+default_min_carat_natural;
            if($(".vdbrb_min_carat_natural_web").length>0){
                $(".vdbrb_min_carat_natural_web").val(default_min_carat_natural);
            }
            document.cookie = "vdbrb_natural_max_carat="+default_max_carat_natural;
            if($(".vdbrb_max_carat_natural_web").length>0){
                $(".vdbrb_max_carat_natural_web").val(default_max_carat_natural);
            }
    
            if($(".vbdrb_carat_natural_web").length>0){
                $(".vbdrb_carat_natural_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_carat_natural,
                        to: default_max_carat_natural
                    });
                });
            }
            $('#vdbrb_natural_carat_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");

        }else if(module == 'clarity'){
            document.cookie = "vdbrb_natural_clarity=";
            if($(".vbdrb_clarity_natural_web").length>0){
                $(".vbdrb_clarity_natural_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: clarity_value_natural_arr[0],
                        to: clarity_value_natural_arr[(clarity_value_natural_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_natural_clarity_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'cut'){
            document.cookie = "vdbrb_natural_cut=";
            if($(".vbdrb_cut_natural_web").length>0){
                $(".vbdrb_cut_natural_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: cut_value_natural_arr[0],
                        to: cut_value_natural_arr[(cut_value_natural_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_natural_cut_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'price'){
            document.cookie = "vdbrb_natural_min_price="+default_min_price_natural;
            if($(".vdbrb_min_price_natural_web").length>0){
                $(".vdbrb_min_price_natural_web").val(default_min_price_natural);
            }
            document.cookie = "vdbrb_natural_max_price="+default_max_price_natural;
            if($(".vdbrb_max_price_natural_web").length>0){
                $(".vdbrb_max_price_natural_web ").val(default_max_price_natural);
            }
    
            if($(".vbdrb_price_natural_web").length>0){
                $(".vbdrb_price_natural_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_price_natural,
                        to: default_max_price_natural
                    });
                });
            }
            $('#vdbrb_natural_price_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'polish'){
            document.cookie = "vdbrb_natural_polish=";
            if($(".vbdrb_polish_natural_web").length>0){
                $(".vbdrb_polish_natural_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: polish_value_natural_arr[0],
                        to: polish_value_natural_arr[(polish_value_natural_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_natural_polish_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'symmetry'){
            document.cookie = "vdbrb_natural_symmetry=";
            if($(".vbdrb_symmetry_natural_web").length>0){
                $(".vbdrb_symmetry_natural_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: symmetry_value_natural_arr[0],
                        to: symmetry_value_natural_arr[(symmetry_value_natural_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_natural_symmetry_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'fluorescence'){
            document.cookie = "vdbrb_natural_fluorescence_intensities=";
            if($(".vbdrb_fluorescence_natural_web").length>0){
                $(".vbdrb_fluorescence_natural_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: flour_value_natural_arr[0],
                        to: flour_value_natural_arr[(flour_value_natural_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_natural_fluorescence_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'lab'){
            document.cookie = "vdbrb_natural_lab_style=";
            if($(".vdbrb_list_item_a_lab_style_natural").length>0){
                $(".vdbrb_list_item_a_lab_style_natural").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_natural_lab_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'depth'){
            document.cookie = "vdbrb_natural_min_depth="+default_min_depth_natural;
            if($(".vdbrb_min_depth_natural_web").length>0){
                $(".vdbrb_min_depth_natural_web").val(default_min_depth_natural);
            }
            document.cookie = "vdbrb_natural_max_depth="+default_max_depth_natural;
            if($(".vdbrb_max_depth_natural_web").length>0){
                $(".vdbrb_max_depth_natural_web").val(default_max_depth_natural);
            }
    
            if($(".vbdrb_depth_natural_web").length>0){
                $(".vbdrb_depth_natural_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_depth_natural,
                        to: default_max_depth_natural
                    });
                });
            }
            $('#vdbrb_natural_depth_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'table'){
            document.cookie = "vdbrb_natural_min_table="+default_min_table_natural;
            if($(".vdbrb_min_table_natural_web").length>0){
                $(".vdbrb_min_table_natural_web").val(default_min_table_natural);
            }
            document.cookie = "vdbrb_natural_max_table="+default_max_table_natural;
            if($(".vdbrb_max_table_natural_web").length>0){
                $(".vdbrb_max_table_natural_web").val(default_max_table_natural);
            }
    
            if($(".vbdrb_table_natural_web").length>0){
                $(".vbdrb_table_natural_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_table_natural,
                        to: default_max_table_natural
                    });
                });
            }
            $('#vdbrb_natural_table_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }
    }
    else if(vdbRbStoneTab=='labgrown'){
        if(module == 'shape'){
            document.cookie = "vdbrb_labgrown_shape_style=";
            if($(".vdbrb_list_item_a_shape_style_labgrown").length>0){
                $(".vdbrb_list_item_a_shape_style_labgrown").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_labgrown_shape_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'color'){
            document.cookie = "vdbrb_labgrown_color_fancy=";
            if($(".vdbrb_list_item_a_fancy_color_style_labgrown").length>0){
                $(".vdbrb_list_item_a_fancy_color_style_labgrown").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            document.cookie = "vdbrb_labgrown_lab_style=";
            if($(".vdbrb_list_item_a_lab_style_labgrown").length>0){
                $(".vdbrb_list_item_a_lab_style_labgrown").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }

            document.cookie = "vdbrb_labgrown_color_white=";
            if($(".vbdrb_white_color_labgrown_web").length>0){
                $(".vbdrb_white_color_labgrown_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: white_color_value_labgrown_arr[0],
                        to: white_color_value_labgrown_arr[(white_color_value_labgrown_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_labgrown_color_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'carat'){
            document.cookie = "vdbrb_labgrown_min_carat="+default_min_carat_labgrown;
            if($(".vdbrb_min_carat_labgrown_web").length>0){
                $(".vdbrb_min_carat_labgrown_web").val(default_min_carat_labgrown);
            }
            document.cookie = "vdbrb_labgrown_max_carat="+default_max_carat_labgrown;
            if($(".vdbrb_max_carat_labgrown_web").length>0){
                $(".vdbrb_max_carat_labgrown_web").val(default_max_carat_labgrown);
            }
    
            if($(".vbdrb_carat_labgrown_web").length>0){
                $(".vbdrb_carat_labgrown_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_carat_labgrown,
                        to: default_max_carat_labgrown
                    });
                });
            }
            $('#vdbrb_labgrown_carat_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");

        }else if(module == 'clarity'){
            document.cookie = "vdbrb_labgrown_clarity=";
            if($(".vbdrb_clarity_labgrown_web").length>0){
                $(".vbdrb_clarity_labgrown_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: clarity_value_labgrown_arr[0],
                        to: clarity_value_labgrown_arr[(clarity_value_labgrown_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_labgrown_clarity_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'cut'){
            document.cookie = "vdbrb_labgrown_cut=";
            if($(".vbdrb_cut_labgrown_web").length>0){
                $(".vbdrb_cut_labgrown_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: cut_value_labgrown_arr[0],
                        to: cut_value_labgrown_arr[(cut_value_labgrown_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_labgrown_cut_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'price'){
            document.cookie = "vdbrb_labgrown_min_price="+default_min_price_labgrown;
            if($(".vdbrb_min_price_labgrown_web").length>0){
                $(".vdbrb_min_price_labgrown_web").val(default_min_price_labgrown);
            }
            document.cookie = "vdbrb_labgrown_max_price="+default_max_price_labgrown;
            if($(".vdbrb_max_price_labgrown_web").length>0){
                $(".vdbrb_max_price_labgrown_web ").val(default_max_price_labgrown);
            }
    
            if($(".vbdrb_price_labgrown_web").length>0){
                $(".vbdrb_price_labgrown_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_price_labgrown,
                        to: default_max_price_labgrown
                    });
                });
            }
            $('#vdbrb_labgrown_price_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'polish'){
            document.cookie = "vdbrb_labgrown_polish=";
            if($(".vbdrb_polish_labgrown_web").length>0){
                $(".vbdrb_polish_labgrown_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: polish_value_labgrown_arr[0],
                        to: polish_value_labgrown_arr[(polish_value_labgrown_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_labgrown_polish_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'symmetry'){
            document.cookie = "vdbrb_labgrown_symmetry=";
            if($(".vbdrb_symmetry_labgrown_web").length>0){
                $(".vbdrb_symmetry_labgrown_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: symmetry_value_labgrown_arr[0],
                        to: symmetry_value_labgrown_arr[(symmetry_value_labgrown_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_labgrown_symmetry_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'fluorescence'){
            document.cookie = "vdbrb_labgrown_fluorescence_intensities=";
            if($(".vbdrb_fluorescence_labgrown_web").length>0){
                $(".vbdrb_fluorescence_labgrown_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: flour_value_labgrown_arr[0],
                        to: flour_value_labgrown_arr[(flour_value_labgrown_arr.length-1)]
                    });
                });
            }
            $('#vdbrb_labgrown_fluorescence_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'lab'){
            document.cookie = "vdbrb_labgrown_lab_style=";
            if($(".vdbrb_list_item_a_lab_style_labgrown").length>0){
                $(".vdbrb_list_item_a_lab_style_labgrown").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_labgrown_lab_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'depth'){
            document.cookie = "vdbrb_labgrown_min_depth="+default_min_depth_labgrown;
            if($(".vdbrb_min_depth_labgrown_web").length>0){
                $(".vdbrb_min_depth_labgrown_web").val(default_min_depth_labgrown);
            }
            document.cookie = "vdbrb_labgrown_max_depth="+default_max_depth_labgrown;
            if($(".vdbrb_max_depth_labgrown_web").length>0){
                $(".vdbrb_max_depth_labgrown_web").val(default_max_depth_labgrown);
            }
    
            if($(".vbdrb_depth_labgrown_web").length>0){
                $(".vbdrb_depth_labgrown_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_depth_labgrown,
                        to: default_max_depth_labgrown
                    });
                });
            }
            $('#vdbrb_labgrown_depth_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'table'){
            document.cookie = "vdbrb_labgrown_min_table="+default_min_table_labgrown;
            if($(".vdbrb_min_table_labgrown_web").length>0){
                $(".vdbrb_min_table_labgrown_web").val(default_min_table_labgrown);
            }
            document.cookie = "vdbrb_labgrown_max_table="+default_max_table_labgrown;
            if($(".vdbrb_max_table_labgrown_web").length>0){
                $(".vdbrb_max_table_labgrown_web").val(default_max_table_labgrown);
            }
    
            if($(".vbdrb_table_labgrown_web").length>0){
                $(".vbdrb_table_labgrown_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_table_labgrown,
                        to: default_max_table_labgrown
                    });
                });
            }
            $('#vdbrb_labgrown_table_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }
    }
    else if(vdbRbStoneTab=='gemstone'){
        if(module == 'shape'){
            document.cookie = "vdbrb_gemstone_shape=";
            if($(".vdbrb_list_item_a_shape_gemstone").length>0){
                $(".vdbrb_list_item_a_shape_gemstone").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_gemstone_shape_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'type'){
            document.cookie = "vdbrb_gemstone_type=";
            if($(".vdbrb_list_item_a_type_gemstone").length>0){
                $(".vdbrb_list_item_a_type_gemstone").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_gemstone_type_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'color'){
            document.cookie = "vdbrb_gemstone_color=";
            if($(".vdbrb_list_item_a_color_gemstone").length>0){
                $(".vdbrb_list_item_a_color_gemstone").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_gemstone_color_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'carat'){
            document.cookie = "vdbrb_gemstone_min_carat="+default_min_carat_gemstone;
            if($(".vdbrb_min_carat_gemstone_web").length>0){
                $(".vdbrb_min_carat_gemstone_web").val(default_min_carat_gemstone);
            }
            document.cookie = "vdbrb_gemstone_max_carat="+default_max_carat_gemstone;
            if($(".vdbrb_max_carat_gemstone_web").length>0){
                $(".vdbrb_max_carat_gemstone_web").val(default_max_carat_gemstone);
            }

            if($(".vbdrb_carat_gemstone_web").length>0){
                $(".vbdrb_carat_gemstone_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_carat_gemstone,
                        to: default_max_carat_gemstone
                    });
                });
            }
            $('#vdbrb_gemstone_carat_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");

        } else if(module == 'price'){
            document.cookie = "vdbrb_gemstone_min_price="+default_min_price_gemstone;
            if($(".vdbrb_min_price_gemstone_web").length>0){
                $(".vdbrb_min_price_gemstone_web").val(default_min_price_gemstone);
            }
            document.cookie = "vdbrb_gemstone_max_price="+default_max_price_gemstone;
            if($(".vdbrb_max_price_gemstone_web").length>0){
                $(".vdbrb_max_price_gemstone_web ").val(default_max_price_gemstone);
            }

            if($(".vbdrb_price_gemstone_web").length>0){
                $(".vbdrb_price_gemstone_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_price_gemstone,
                        to: default_max_price_gemstone
                    });
                });
            }
            $('#vdbrb_gemstone_price_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }
    }
    else if(vdbRbStoneTab=='radiance'){
        if(module == 'shape'){
            document.cookie = "vdbrb_radiance_shape=";
            if($(".vdbrb_list_item_a_shape_radiance").length>0){
                $(".vdbrb_list_item_a_shape_radiance").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_radiance_shape_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'subshape'){
            document.cookie = "vdbrb_radiance_subshape=";
            if($(".vdbrb_list_item_a_subshape_radiance").length>0){
                $(".vdbrb_list_item_a_subshape_radiance").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_radiance_subshape_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'type'){
            document.cookie = "vdbrb_radiance_type=";
            if($(".vdbrb_list_item_a_type_radiance").length>0){
                $(".vdbrb_list_item_a_type_radiance").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_radiance_type_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'color'){
            document.cookie = "vdbrb_radiance_color=";
            if($(".vdbrb_list_item_a_color_radiance").length>0){
                $(".vdbrb_list_item_a_color_radiance").each(function () {
                    $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
                });
            }
            $('#vdbrb_radiance_color_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }else if(module == 'carat'){
            document.cookie = "vdbrb_radiance_min_carat="+default_min_carat_radiance;
            if($(".vdbrb_min_carat_radiance_web").length>0){
                $(".vdbrb_min_carat_radiance_web").val(default_min_carat_radiance);
            }
            document.cookie = "vdbrb_radiance_max_carat="+default_max_carat_radiance;
            if($(".vdbrb_max_carat_radiance_web").length>0){
                $(".vdbrb_max_carat_radiance_web").val(default_max_carat_radiance);
            }

            if($(".vbdrb_carat_radiance_web").length>0){
                $(".vbdrb_carat_radiance_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_carat_radiance,
                        to: default_max_carat_radiance
                    });
                });
            }
            $('#vdbrb_radiance_carat_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");

        } else if(module == 'price'){
            document.cookie = "vdbrb_radiance_min_price="+default_min_price_radiance;
            if($(".vdbrb_min_price_radiance_web").length>0){
                $(".vdbrb_min_price_radiance_web").val(default_min_price_radiance);
            }
            document.cookie = "vdbrb_radiance_max_price="+default_max_price_radiance;
            if($(".vdbrb_max_price_radiance_web").length>0){
                $(".vdbrb_max_price_radiance_web ").val(default_max_price_radiance);
            }

            if($(".vbdrb_price_radiance_web").length>0){
                $(".vbdrb_price_radiance_web").each(function () {
                    $(this).data("ionRangeSlider").update({
                        from: default_min_price_radiance,
                        to: default_max_price_radiance
                    });
                });
            }
            $('#vdbrb_radiance_price_mobile_val').html(llt_data['all']!=undefined && llt_data['all']['label_text']!=undefined?llt_data['all']['label_text']:"All");
        }
    }

    call_stone_again();
});
//#endregion

//#region - Quiz Module
$('#vdb_rb_quiz_shape_modal_open').click(function () {
    $('#vdbrb_quiz_modal_overlay').addClass('vdb-rb-open-modal');
    $('#vdb_rb_quiz_shape_modal').addClass('vdb-rb-open-modal');
    $('body').addClass('vdb-rb-overflow-hidden');
    $(window).scrollTop(0);
});

$('.vdb-rb-retake-quiz').click(function () {
    let backStepModalId = $(this).attr('data-back');

    $(".vdbrb_quiz_shape_list").each(function () {
        $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
    });

    $(".vdbrb_quiz_budget_list").each(function () {
        $(this).removeClass('vdb-rb-list-item-active');
    });

    $(".vdb_rb_quiz_stone").each(function () {
        $(this).removeClass('vdb-rb-list-item-active');
    });

    $(".vdb_rb_quiz_matters").each(function () {
        $(this).removeClass('vdb-rb-list-item-active');
    });

    $('#vdbrb_quiz_modal_overlay').removeClass('vdb-rb-open-modal');
    $('.vdb-rb-find-stone-modal').removeClass('vdb-rb-open-modal');
    $('body').removeClass('vdb-rb-overflow-hidden');

    $('#vdbrb_quiz_modal_overlay').addClass('vdb-rb-open-modal');
    $('#'+backStepModalId).addClass('vdb-rb-open-modal');
    $('body').addClass('vdb-rb-overflow-hidden');
});

$('.vdb_rb_steps_modal_close').click(function () {
    $(".vdbrb_quiz_shape_list").each(function () {
        $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
    });

    $(".vdbrb_quiz_budget_list").each(function () {
        $(this).removeClass('vdb-rb-list-item-active');
    });

    $(".vdb_rb_quiz_stone").each(function () {
        $(this).removeClass('vdb-rb-list-item-active');
    });

    $(".vdb_rb_quiz_matters").each(function () {
        $(this).removeClass('vdb-rb-list-item-active');
    });

    $('#vdbrb_quiz_modal_overlay').removeClass('vdb-rb-open-modal');
    $('.vdb-rb-find-stone-modal').removeClass('vdb-rb-open-modal');
    $('body').removeClass('vdb-rb-overflow-hidden');
});

$('.vdb-rb-back-button').click(function () {
    let backStepModalId = $(this).attr('data-back');

    $('#vdbrb_quiz_modal_overlay').removeClass('vdb-rb-open-modal');
    $('.vdb-rb-find-stone-modal').removeClass('vdb-rb-open-modal');
    $('body').removeClass('vdb-rb-overflow-hidden');

    $('#vdbrb_quiz_modal_overlay').addClass('vdb-rb-open-modal');
    $('#'+backStepModalId).addClass('vdb-rb-open-modal');
    $('body').addClass('vdb-rb-overflow-hidden');
});

$('body').on('click', '.vdbrb_quiz_shape_list', function(){
    var module_section = $(this).data('module_section');

    $(".vdbrb_quiz_shape_list").each(function () {
        if($(this).data('module_section') != module_section){
            $("."+$(this).data('module_section')).removeClass('vdb-rb-list-item-active');
        }
    });
    
    $("."+module_section).toggleClass('vdb-rb-list-item-active');
    
    var isAnySelected = false;
    $(".vdbrb_quiz_shape_list").each(function () {
        if($("."+$(this).data('module_section')).hasClass('vdb-rb-list-item-active')){
            isAnySelected = true;
        }
    });

    if(isAnySelected){
        $('#vdbrb_quiz_modal_overlay').removeClass('vdb-rb-open-modal');
        $('.vdb-rb-find-stone-modal').removeClass('vdb-rb-open-modal');
        $('body').removeClass('vdb-rb-overflow-hidden');

        $('#vdbrb_quiz_modal_overlay').addClass('vdb-rb-open-modal');
        $('#vdb_rb_quiz_budget_modal').addClass('vdb-rb-open-modal');
        $('body').addClass('vdb-rb-overflow-hidden');
    }
});

$('body').on('click', '.vdbrb_quiz_budget_list', function(){
    var min_price = $(this).data('min_price');

    $(".vdbrb_quiz_budget_list").each(function () {
        if($(this).data('min_price') != min_price){
            $(this).removeClass('vdb-rb-list-item-active');
        }
    });
    
    $(this).toggleClass('vdb-rb-list-item-active');

    var isAnySelected = false;
    $(".vdbrb_quiz_budget_list").each(function () {
        if($(this).hasClass('vdb-rb-list-item-active')){
            isAnySelected = true;
        }
    });

    if(isAnySelected){
        $('#vdbrb_quiz_modal_overlay').removeClass('vdb-rb-open-modal');
        $('.vdb-rb-find-stone-modal').removeClass('vdb-rb-open-modal');
        $('body').removeClass('vdb-rb-overflow-hidden');


        if(search_diamond_allow == '1' && search_lab_grown_allow == '1'){
            $('#vdb_rb_quiz_diamond_type_modal').addClass('vdb-rb-open-modal');
        }else if(search_diamond_allow == '1'){
            $(".vdb_rb_quiz_stone").each(function () {
                if($(this).data('stone') == 'natural'){
                    $(this).addClass('vdb-rb-list-item-active');
                }
            });
            $('#vdb_rb_quiz_matters_modal').addClass('vdb-rb-open-modal');
        }else if(search_lab_grown_allow == '1'){
            $(".vdb_rb_quiz_stone").each(function () {
                if($(this).data('stone') == 'lab-grown'){
                    $(this).addClass('vdb-rb-list-item-active');
                }
            });
            $('#vdb_rb_quiz_matters_modal').addClass('vdb-rb-open-modal');
        }

        $('#vdbrb_quiz_modal_overlay').addClass('vdb-rb-open-modal');
        $('body').addClass('vdb-rb-overflow-hidden');
    }
});

$('body').on('click', '.vdb_rb_quiz_stone', function(){
    var quiz_stone = $(this).data('stone');
    $(".vdb_rb_quiz_stone").each(function () {
        if($(this).data('stone') != quiz_stone){
            $(this).removeClass('vdb-rb-list-item-active');
        }
    });
    
    $(this).toggleClass('vdb-rb-list-item-active');

    var isAnySelected = false;
    $(".vdb_rb_quiz_stone").each(function () {
        if($(this).hasClass('vdb-rb-list-item-active')){
            isAnySelected = true;
        }
    });

    if(isAnySelected){
        $('#vdbrb_quiz_modal_overlay').removeClass('vdb-rb-open-modal');
        $('.vdb-rb-find-stone-modal').removeClass('vdb-rb-open-modal');
        $('body').removeClass('vdb-rb-overflow-hidden');

        $('#vdbrb_quiz_modal_overlay').addClass('vdb-rb-open-modal');
        $('#vdb_rb_quiz_matters_modal').addClass('vdb-rb-open-modal');
        $('body').addClass('vdb-rb-overflow-hidden');
    }
});

$('body').on('click', '.vdb_rb_quiz_matters', function(){
    var quiz_matters = $(this).data('matters');

    $(".vdb_rb_quiz_matters").each(function () {
        if($(this).data('stone') != quiz_matters){
            $(this).removeClass('vdb-rb-list-item-active');
        }
    });
    
    $(this).toggleClass('vdb-rb-list-item-active');

    var isAnySelected = false;
    $(".vdb_rb_quiz_matters").each(function () {
        if($(this).hasClass('vdb-rb-list-item-active')){
            isAnySelected = true;
        }
    });

    if(isAnySelected){
        $('#vdbrb_quiz_modal_overlay').removeClass('vdb-rb-open-modal');
        $('.vdb-rb-find-stone-modal').removeClass('vdb-rb-open-modal');
        $('body').removeClass('vdb-rb-overflow-hidden');

        // collect all select data
        var col_qz_shape_arr = [];
        $(".vdbrb_quiz_shape_list").each(function () {
            var _this = $(this);
            if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
                var value_for_api = _this.data('value_for_api');
                col_qz_shape_arr.push(value_for_api);
            }
        });
        
        var col_qz_min_price = '';
        var col_qz_max_price = '';
        $(".vdbrb_quiz_budget_list").each(function () {
            var _this = $(this);
            if($(_this).hasClass('vdb-rb-list-item-active')){
                col_qz_min_price = _this.data('min_price');
                col_qz_max_price = _this.data('max_price');
            }
        });

        var col_qz_stone_type = '';
        $(".vdb_rb_quiz_stone").each(function () {
            var _this = $(this);
            if($(_this).hasClass('vdb-rb-list-item-active')){
                col_qz_stone_type = _this.data('stone');
            }
        });

        var col_qz_quiz_matters = '';
        $(".vdb_rb_quiz_matters").each(function () {
            var _this = $(this);
            if($(_this).hasClass('vdb-rb-list-item-active')){
                col_qz_quiz_matters = _this.data('matters');
            }
        });

        var sendData;
        var page_number = 1;

        sendData = "action=get_diamond_list_by_quiz";
        sendData += "&shop="+shop;
        sendData += "&page_number="+page_number;

        sendData += "&stone_type="+col_qz_stone_type;
        sendData += "&shape_data="+col_qz_shape_arr.join(',');
        sendData += "&min_price="+parseFloat(col_qz_min_price*$currency_rate).toFixed(2);
        sendData += "&max_price="+parseFloat(col_qz_max_price*$currency_rate).toFixed(2);

        if(col_qz_quiz_matters == 'best_balance'){
            sendData += "&cut_data_wrap=Ideal,Good";
            sendData += "&color_data_wrap=D,H";
            sendData += "&clarity_data=VS1,VS2";
        }
        if(col_qz_quiz_matters == 'most_sparkle'){
            sendData += "&cut_data_wrap=Ideal,Excellent";
            sendData += "&clarity_data=FL,VVS2";
            sendData += "&color_data_wrap=D,F";
        }
        if(col_qz_quiz_matters == 'largest_carat'){
            sendData += "&sorting=Highest Size";
        }
        if(col_qz_quiz_matters == 'premium_quality'){
            sendData += "&color_data_wrap=D,F";
            sendData += "&clarity_data=FL,VVS2";
            sendData += "&cut_data_wrap=Ideal,Excellent";
        }

        sendData += `&quiz_matters=${col_qz_quiz_matters}`;

        if(col_qz_stone_type == 'natural'){
            var default_lab_data = [];
            $(".vdbrb_list_item_a_lab_style_natural").each(function () {
                default_lab_data.push($(this).data('value_for_api'));
            });
            default_lab_data = array_unique(default_lab_data);
            sendData += "&lab_data="+default_lab_data.join(',');

            if($(".vdbrb_min_carat_natural_web").length>0){
                var vdbrb_textbox_carat_min_value = $('.vdbrb_min_carat_natural_web').val();
                sendData += "&carat_min="+parseFloat(vdbrb_textbox_carat_min_value).toFixed(2);
            }

            if($(".vdbrb_max_carat_natural_web").length>0){
                var vdbrb_textbox_carat_max_value = $('.vdbrb_max_carat_natural_web').val();
                sendData += "&carat_max="+parseFloat(vdbrb_textbox_carat_max_value).toFixed(2);
            }

            if(symmetry_value_natural_arr.length > 0){
                sendData += "&symmetry_data_wrap="+symmetry_value_natural_arr[0]+','+symmetry_value_natural_arr[(symmetry_value_natural_arr.length-1)];
            }

            if(polish_value_natural_arr.length > 0){
                sendData += "&polish_data_wrap="+polish_value_natural_arr[0]+','+polish_value_natural_arr[(polish_value_natural_arr.length-1)];
            }

            if(col_qz_quiz_matters == 'largest_carat'){
                if(clarity_value_natural_arr.length > 0){
                    sendData += "&clarity_data="+clarity_value_natural_arr[0]+','+clarity_value_natural_arr[(clarity_value_natural_arr.length-1)];
                }
                
                if(cut_value_natural_arr.length > 0){
                    sendData += "&cut_data_wrap="+cut_value_natural_arr[0]+','+cut_value_natural_arr[(cut_value_natural_arr.length-1)];
                }
                
                if(white_color_value_natural_arr.length > 0){
                    sendData += "&color_data_wrap="+white_color_value_natural_arr[0]+','+white_color_value_natural_arr[(white_color_value_natural_arr.length-1)];
                }
            }

            var vdbrb_natural_min_depth = getCookie("vdbrb_natural_min_depth");
            if (vdbrb_natural_min_depth !== null && vdbrb_natural_min_depth!='') {
                if($(".vdbrb_min_depth_natural_web").length>0){
                    sendData += "&min_depth="+parseFloat(vdbrb_natural_min_depth).toFixed(2);
                }
            }else{
                sendData += "&min_depth="+default_min_depth_natural;
            }
            var vdbrb_natural_max_depth = getCookie("vdbrb_natural_max_depth");
            if (vdbrb_natural_max_depth !== null && vdbrb_natural_max_depth!='') {
                if($(".vdbrb_max_depth_natural_web").length>0){
                    sendData += "&max_depth="+parseFloat(vdbrb_natural_max_depth).toFixed(2);
                }
            }else{
                sendData += "&max_depth="+default_max_depth_natural;
            }

            var vdbrb_natural_min_table = getCookie("vdbrb_natural_min_table");
            if (vdbrb_natural_min_table !== null && vdbrb_natural_min_table!='') {
                if($(".vdbrb_min_table_natural_web").length>0){
                    sendData += "&min_table="+parseFloat(vdbrb_natural_min_table).toFixed(2);
                }
            }else{
                sendData += "&min_table="+default_min_table_natural;
            }
            var vdbrb_natural_max_table = getCookie("vdbrb_natural_max_table");
            if (vdbrb_natural_max_table !== null && vdbrb_natural_max_table!='') {
                if($(".vdbrb_max_table_natural_web").length>0){
                    sendData += "&max_table="+parseFloat(vdbrb_natural_max_table).toFixed(2);
                }
            }else{
                sendData += "&max_table="+default_max_table_natural;
            }

            sendData += "&with_images="+with_images_natural;
            sendData += "&with_videos="+with_videos_natural;
            sendData += "&carat_min="+parseFloat(default_min_carat_natural).toFixed(2);
            sendData += "&carat_max="+parseFloat(default_max_carat_natural).toFixed(2);
        }else if(col_qz_stone_type == 'lab-grown'){
            var default_lab_data = [];
            $(".vdbrb_list_item_a_lab_style_labgrown").each(function () {
                default_lab_data.push($(this).data('value_for_api'));
            });
            default_lab_data = array_unique(default_lab_data);
            sendData += "&lab_data="+default_lab_data.join(',');

            if($(".vdbrb_min_carat_labgrown_web").length>0){
                var vdbrb_textbox_carat_min_value = $('.vdbrb_min_carat_labgrown_web').val();
                sendData += "&carat_min="+parseFloat(vdbrb_textbox_carat_min_value).toFixed(2);
            }

            if($(".vdbrb_max_carat_labgrown_web").length>0){
                var vdbrb_textbox_carat_max_value = $('.vdbrb_max_carat_labgrown_web').val();
                sendData += "&carat_max="+parseFloat(vdbrb_textbox_carat_max_value).toFixed(2);
            }

            if(symmetry_value_labgrown_arr.length > 0){
                sendData += "&symmetry_data_wrap="+symmetry_value_labgrown_arr[0]+','+symmetry_value_labgrown_arr[(symmetry_value_labgrown_arr.length-1)];
            }

            if(polish_value_labgrown_arr.length > 0){
                sendData += "&polish_data_wrap="+polish_value_labgrown_arr[0]+','+polish_value_labgrown_arr[(polish_value_labgrown_arr.length-1)];
            }
            
            if(col_qz_quiz_matters == 'largest_carat'){
                if(clarity_value_labgrown_arr.length > 0){
                    sendData += "&clarity_data="+clarity_value_labgrown_arr[0]+','+clarity_value_labgrown_arr[(clarity_value_labgrown_arr.length-1)];
                }
                
                if(cut_value_labgrown_arr.length > 0){
                    sendData += "&cut_data_wrap="+cut_value_labgrown_arr[0]+','+cut_value_labgrown_arr[(cut_value_labgrown_arr.length-1)];
                }
                
                if(white_color_value_labgrown_arr.length > 0){
                    sendData += "&color_data_wrap="+white_color_value_labgrown_arr[0]+','+white_color_value_labgrown_arr[(white_color_value_labgrown_arr.length-1)];
                }
            }

            var vdbrb_labgrown_min_depth = getCookie("vdbrb_labgrown_min_depth");
            if (vdbrb_labgrown_min_depth !== null && vdbrb_labgrown_min_depth!='') {
                if($(".vdbrb_min_depth_labgrown_web").length>0){
                    sendData += "&min_depth="+parseFloat(vdbrb_labgrown_min_depth).toFixed(2);
                }
            }else{
                sendData += "&min_depth="+default_min_depth_labgrown;
            }
            var vdbrb_labgrown_max_depth = getCookie("vdbrb_labgrown_max_depth");
            if (vdbrb_labgrown_max_depth !== null && vdbrb_labgrown_max_depth!='') {
                if($(".vdbrb_max_depth_labgrown_web").length>0){
                    sendData += "&max_depth="+parseFloat(vdbrb_labgrown_max_depth).toFixed(2);
                }
            }else{
                sendData += "&max_depth="+default_max_depth_labgrown;
            }

            var vdbrb_labgrown_min_table = getCookie("vdbrb_labgrown_min_table");
            if (vdbrb_labgrown_min_table !== null && vdbrb_labgrown_min_table!='') {
                if($(".vdbrb_min_table_labgrown_web").length>0){
                    sendData += "&min_table="+parseFloat(vdbrb_labgrown_min_table).toFixed(2);
                }
            }else{
                sendData += "&min_table="+default_min_table_labgrown;
            }
            var vdbrb_labgrown_max_table = getCookie("vdbrb_labgrown_max_table");
            if (vdbrb_labgrown_max_table !== null && vdbrb_labgrown_max_table!='') {
                if($(".vdbrb_max_table_labgrown_web").length>0){
                    sendData += "&max_table="+parseFloat(vdbrb_labgrown_max_table).toFixed(2);
                }
            }else{
                sendData += "&max_table="+default_max_table_labgrown;
            }

            sendData += "&with_images="+with_images_labgrown;
            sendData += "&with_videos="+with_videos_labgrown;
            sendData += "&carat_min="+parseFloat(default_min_carat_labgrown).toFixed(2);
            sendData += "&carat_max="+parseFloat(default_max_carat_labgrown).toFixed(2);
        }

        var stoneProcessText = '';
        stoneProcessText += llt_data["loading_text"]!=undefined && llt_data["loading_text"]["label_text"]!=undefined?llt_data["loading_text"]["label_text"]:"No Results Found";

        $("#vdb_rb_best_diamond_list").html(`
            <div style="position: absolute;text-align: center;top: 50%;left: 0;width: 100%;transform: translateY(-50%);-webkit-transform: translateY(-50%);-moz-transform: translateY(-50%);-ms-transform: translateY(-50%);">
            <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style="height: 4.4rem; width: 4.4rem; animation: inex-spinner .5s linear infinite; fill: #449DA7;">
                <style>
                    @keyframes inex-spinner{to{transform:rotate(1turn)}}
                </style>
                <path d="M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"></path>
            </svg>
            <br/><span>${stoneProcessText}</span></div>`
        );

        $xhr = $.post("rb-stone-list.php", sendData, function(resultData){
            var resultArray = JSON.parse(resultData);
            var stoneArray = [];
            if(resultArray['main_data']['response']['body']['diamonds'] != undefined){
                stoneArray = resultArray['main_data']['response']['body']['diamonds'];
            }

            var stoneTotal = 0;
            if(resultArray['main_data']['response']['body']['total_diamonds_found'] != undefined){
                stoneTotal = number_format(resultArray['main_data']['response']['body']['total_diamonds_found']);
            }

            var stoneNoRecordText = ''
            if(stoneTotal == 0 || stoneTotal == '0'){
                $('#vdb_rb_best_diamond_list').html('');

                stoneNoRecordText += llt_data["no_results_found"]!=undefined && llt_data["no_results_found"]["label_text"]!=undefined?llt_data["no_results_found"]["label_text"]:"No Results Found";

                $("#vdb_rb_best_diamond_list").html(`<div class='vdb-rb-no-results'>${stoneNoRecordText}</div>`);

                $("#vdb_rb_quiz_diamonds_result_modal .vdb-rb-show-all-title").hide();
            }else{
                $("#vdb_rb_quiz_diamonds_result_modal .vdb-rb-show-all-title").show();
            }
            
            if(resultArray !== undefined && stoneArray.length > 0) {
                var grid_html = '';
                $('#vdb_rb_best_diamond_list').html('');

                for(x=0; x<(stoneArray.length); x++){
                    var stock_num = stoneArray[x]['stock_num'];

                    var shape = stoneArray[x]['shape'];
                    if(shape==null){ shape = ''; }

                    var size = Number(stoneArray[x]['size']).toFixed(2);
                    if(size==null){ size = ''; }

                    var color = stoneArray[x]['color'];
                    if(color==null){ color = ''; }

                    var clarity = stoneArray[x]['clarity'];
                    if(clarity==null){ clarity = ''; }

                    var image_url = stoneArray[x]['image_url'];
                    if(image_url==null){ image_url=''; }

                    var total_sales_price = stoneArray[x]['total_sales_price'];
                    if(col_qz_stone_type == 'natural'){
                        if(Number(Math. abs(price_margin_natural)) > 0){
                            total_sales_price = Number(total_sales_price) + ((Number(total_sales_price) * Number(Math. abs(price_margin_natural))) / 100);
                        }
                    }else if(col_qz_stone_type == 'lab-grown'){
                        if(Number(Math. abs(price_margin_labgrown)) > 0){
                            total_sales_price = Number(total_sales_price) + ((Number(total_sales_price) * Number(Math. abs(price_margin_labgrown))) / 100);
                        }
                    }
                    var price = formatMoney(Math.round(price_in_shop_currency(total_sales_price)) * 100, moneyFormat);
                    if(stoneArray[x]['currency_code']!=undefined && stoneArray[x]['currency_code']!=null && stoneArray[x]['currency_code']!="" && stoneArray[x]['currency_code']!='USD'){
                        if (stoneArray[x]['currency_code']!=shop_currency) {
                            //if vdb-currency is NOT USD then first convert into USD, then convert it into store currency
                            let usd_price = currency_conversion(total_sales_price,stoneArray[x]['currency_code'],'USD');
                            usd_price = parseFloat(usd_price);
                            price = formatMoney(Math.round(price_in_shop_currency(usd_price)) * 100, moneyFormat);
                        } else {
                            price = formatMoney(Math.round(total_sales_price) * 100, moneyFormat);
                        }
                    }

                    var priceWithoutCurrency = Math.round(price_in_shop_currency(total_sales_price));

                    var name = shape+" "+size+" "+color+" "+clarity;
                    var next_step_url = '';
                    var add_to_ring_url = '';

                    if(col_qz_stone_type == 'natural'){
                        if(selected_ring_stock_num!=''){
                            next_step_url = 'rb-stone-details?ring_stock_num='+selected_ring_stock_num.replace(/ /g, '%20')+'&natural_stock_num='+stock_num.replace(/ /g, '%20')+'';
                        }else{
                            next_step_url = 'rb-stone-details?natural_stock_num='+stock_num.replace(/ /g, '%20')+'';
                        }
                        add_to_ring_url = 'rb-setting-list?natural_stock_num='+stock_num.replace(/ /g, '%20');
                    }else if(col_qz_stone_type == 'lab-grown'){
                        if(selected_ring_stock_num!=''){
                            next_step_url = 'rb-stone-details?ring_stock_num='+selected_ring_stock_num.replace(/ /g, '%20')+'&labgrown_stock_num='+stock_num.replace(/ /g, '%20')+'';
                        }else{
                            next_step_url = 'rb-stone-details?labgrown_stock_num='+stock_num.replace(/ /g, '%20')+'';
                        }
                        add_to_ring_url = 'rb-setting-list?labgrown_stock_num='+stock_num.replace(/ /g, '%20');
                    }
                    if(selected_shopify_ring_var_id!=''){
                        //this key is set from shopify setting-product page
                        next_step_url += '&ring_var_id='+selected_shopify_ring_var_id;
                    }

                    var short_title = stoneArray[x]['short_title'];
                    var previewable = stoneArray[x]['previewable'];
                    var stockNoId = stoneArray[x]['id'];
                    var cert_num = stoneArray[x]['cert_num'];  
                    var available = stoneArray[x]['available']; 

                    grid_html += '  <div class="vdb-rb-list-product-item">';
                    grid_html += '      <a target="_top" href="'+next_step_url+'">';
                    grid_html += '          <div class="vdb-rb-product-img-wrapper">';
                    grid_html += '              <img src="'+image_url+'" alt="'+name+'" class="vdb-rb-img-fluid">';
                    grid_html += '          </div>';
                    grid_html += '          <div class="vdb-rb-product-details">';
                    grid_html += '              <p class="vdb-rb-product-name">'+name+'</p>';
                    grid_html += '              <div class="vdb-rb-price-block"><h3>'+price+'</h3></div>';//<span>(Stone Price)</span>
                    grid_html += '              <div class="vdb-rb-selected-diamond-button-wrapper">';
                    grid_html += '                  <a target="_top" href="'+add_to_ring_url+'" class="vdb-modal-btn vdb-rb-primary-btn">'+add_to_ring_text+'</a>';
                    grid_html += '                  <a href="javascript:void(0)" class="vdb-modal-btn vdb-rb-primary-btn-outline vdbrb-add-to-cart-btn" data-stock_num="'+stock_num+'" data-stock_id="'+stockNoId+'" data-previewable="'+previewable+'" data-stone_type="'+col_qz_stone_type+'" data-available="'+available+'" data-cert_num="'+cert_num+'" data-image_url="'+image_url+'" data-product_title="'+short_title+'" data-price="'+priceWithoutCurrency+'">'+add_to_cart_text+'</a>';
                    grid_html += '              </div>';
                    grid_html += '          </div>';
                    grid_html += '      </a>';
                    grid_html += '  </div>';
                }

                $("#vdb_rb_best_diamond_list").html(grid_html);

                $('.vdb-rb-list-product-item img').on("error", function () {
                    this.src = SITE_URL+'images/no-image.png';
                });
            }
        });
        $('#vdbrb_quiz_modal_overlay').addClass('vdb-rb-open-modal');
        $('#vdb_rb_quiz_diamonds_result_modal').addClass('vdb-rb-open-modal');
        $('body').addClass('vdb-rb-overflow-hidden');
    }
});

$('body').on('click', '.vdbrb-add-to-cart-btn', function(){
    $(this).html(adding_to_cart_text+"...");
    $(this).prop("disabled", true);
    
    var product_title = $(this).data("product_title");
    var product_price = $(this).data("price");
    var stock_item_id = $(this).data("stock_num");
    var previewable = $(this).data("previewable");
    var stock_id = $(this).data("stock_id");
    var cert_num = $(this).data("cert_num");
    var image_url = $(this).data("image_url");
    var available = $(this).data("available");
    var stone_type = $(this).data("stone_type");

    if (parseInt(available) > 0) {
        productAddItems = {};
        productAddItems.method = "addProductInfo";
        productAddItems.product_title = product_title;
        productAddItems.product_price = product_price;
        productAddItems.stock_item_id = stock_item_id;
        productAddItems.prod_img = image_url;
        productAddItems.is_lab = stone_type == 'lab-grown' ? 1 : 0;
        productAddItems.is_gem = 0;
        productAddItems.is_rad = 0;
        
        $.ajax({
            type: 'POST',                             
            url: 'rb-stone-details.php',
            dataType: 'json',                               
            data: productAddItems,
            success: function(response){
            if(response.isSuccess == "1"){
                //check item already existed in cart or not
                $.getJSON('/cart.json', function(cartResult){
                    var item_existed = 'No';
                    if(cartResult.item_count>0){
                        $(cartResult.items).each(function(k,v){
                            if(v.id==response.var_id){
                                item_existed = 'Yes';
                            }
                        });
                    }
                    
                    if(item_existed == 'No'){
                        var prop = '';
                        if(preview_request_allow=='1'){
                            prop = {
                                'Request Type':'Purchase Request',
                                'Stock ID': stock_id,
                                '_Stock #': stock_item_id,
                                'Certificate No' : cert_num
                            };
                        }else{
                            prop = {
                                'Stock ID': stock_id,
                                '_Stock #': stock_item_id,
                                'Certificate No' : cert_num
                            };
                        }
                        addCurrentProductToCart(response.var_id,prop);
                    }else{
                        forgetAllSettings();
                        if(shop == "izakov-diamond-co.myshopify.com"){
                            Shopify.theme.jsAjaxCart.updateView();
                            $("[data-ajax-cart-trigger]").click();
                        }
                        else{
                            top.location.href = "/cart";
                        }
                    }
                });
            }
            },                        
            error: function(data){
            }                           
        });
    }else{
        alert(product_title + ' '+(llt_data['is_out_of_stock']!=undefined && llt_data['is_out_of_stock']['label_text']!=undefined?llt_data['is_out_of_stock']['label_text']:"is out of stock"+'.'));
        $(this).html(add_to_cart_text);
        $(this).prop("disabled", false);
    }
});

var addCurrentProductToCart = function(__varId,properties){
    var dataVals = {
        quantity: 1,
        id: __varId,
        properties: properties
    };

    $.ajax({
        type: "POST",
        url: '/cart/add.js',
        data: dataVals,
        success: function (result) {
            forgetAllSettings();
            if(shop == "izakov-diamond-co.myshopify.com"){
                Shopify.theme.jsAjaxCart.updateView();
                $("[data-ajax-cart-trigger]").click();
            }
            else{
                top.location.href = "/cart";
            }
        },
        error: function(jqXhr, textStatus, errorMessage){
            forgetAllSettings();
            if(shop == "izakov-diamond-co.myshopify.com"){
                Shopify.theme.jsAjaxCart.updateView();
                $("[data-ajax-cart-trigger]").click();
            }
            else{
                top.location.href = "/cart";
            }
        }
    });
};

$('body').on('click', '.vdb-rb-show-all-title', function(){
    var col_qz_stone_type = '';
    $(".vdb_rb_quiz_stone").each(function () {
        var _this = $(this);
        if($(_this).hasClass('vdb-rb-list-item-active')){
            col_qz_stone_type = _this.data('stone');
        }
    });

    if(col_qz_stone_type=='natural'){
        document.cookie = "vdb_rb_stone_tab=natural";
        $("#vdbrb_active_tab").val('natural');
    }else if(col_qz_stone_type=='lab-grown'){
        document.cookie = "vdb_rb_stone_tab=labgrown";
        $("#vdbrb_active_tab").val('labgrown');
    }

    $("#vdbrb_stone_reset_filter").trigger("click");

    var col_qz_shape_arr = [];
    $(".vdbrb_quiz_shape_list").each(function () {
        var _this = $(this);
        if($("."+_this.data('module_section')).hasClass('vdb-rb-list-item-active')){
            var value_for_api = _this.data('value_for_api');
            col_qz_shape_arr.push(value_for_api);
        }
    });

    var col_qz_min_price = '';
    var col_qz_max_price = '';
    $(".vdbrb_quiz_budget_list").each(function () {
        var _this = $(this);
        if($(_this).hasClass('vdb-rb-list-item-active')){
            col_qz_min_price = _this.data('min_price');
            col_qz_max_price = _this.data('max_price');
        }
    });

    var col_qz_quiz_matters = '';
    $(".vdb_rb_quiz_matters").each(function () {
        var _this = $(this);
        if($(_this).hasClass('vdb-rb-list-item-active')){
            col_qz_quiz_matters = _this.data('matters');
        }
    });

    if(col_qz_stone_type == 'natural'){
        document.cookie = "vdb_rb_stone_tab=natural";
        document.cookie = "vdbrb_natural_shape_style="+col_qz_shape_arr.join(',');
        document.cookie = "vdbrb_natural_min_price="+col_qz_min_price;
        document.cookie = "vdbrb_natural_max_price="+col_qz_max_price;
        
        if(col_qz_quiz_matters == 'best_balance'){
            document.cookie = "vdbrb_natural_color=White";
            document.cookie = "vdbrb_natural_cut=Ideal,Good";
            document.cookie = "vdbrb_natural_color_white=D,H";
            document.cookie = "vdbrb_natural_clarity=VS1,VS2";
        }
        if(col_qz_quiz_matters == 'largest_carat'){
            document.cookie = "vdbrb_natural_sorting=Highest Size";
        }
        if(col_qz_quiz_matters == 'most_sparkle'){
            document.cookie = "vdbrb_natural_color=White";
            document.cookie = "vdbrb_natural_cut=Ideal,Excellent";
            document.cookie = "vdbrb_natural_color_white=D,F";
            document.cookie = "vdbrb_natural_clarity=FL,VVS2";
        }
        if(col_qz_quiz_matters == 'premium_quality'){
            document.cookie = "vdbrb_natural_color=White";
            document.cookie = "vdbrb_natural_cut=Ideal,Excellent";
            document.cookie = "vdbrb_natural_color_white=D,F";
            document.cookie = "vdbrb_natural_clarity=FL,VVS2";
        }
    }else if(col_qz_stone_type == 'lab-grown'){
        document.cookie = "vdb_rb_stone_tab=labgrown";
        document.cookie = "vdbrb_labgrown_shape_style="+col_qz_shape_arr.join(',');
        document.cookie = "vdbrb_labgrown_min_price="+col_qz_min_price;
        document.cookie = "vdbrb_labgrown_max_price="+col_qz_max_price;
        
        if(col_qz_quiz_matters == 'best_balance'){
            document.cookie = "vdbrb_labgrown_color=White";
            document.cookie = "vdbrb_labgrown_cut=Ideal,Good";
            document.cookie = "vdbrb_labgrown_color_white=D,H";
            document.cookie = "vdbrb_labgrown_clarity=VS1,VS2";
        }
        if(col_qz_quiz_matters == 'largest_carat'){
            document.cookie = "vdbrb_labgrown_sorting=Highest Size";
        }
        if(col_qz_quiz_matters == 'most_sparkle'){
            document.cookie = "vdbrb_labgrown_color=White";
            document.cookie = "vdbrb_labgrown_cut=Ideal,Excellent";
            document.cookie = "vdbrb_labgrown_color_white=D,F";
            document.cookie = "vdbrb_labgrown_clarity=FL,VVS2";
        }
        if(col_qz_quiz_matters == 'premium_quality'){
            document.cookie = "vdbrb_labgrown_color=White";
            document.cookie = "vdbrb_labgrown_cut=Ideal,Excellent";
            document.cookie = "vdbrb_labgrown_color_white=D,F";
            document.cookie = "vdbrb_labgrown_clarity=FL,VVS2";
        }
    }

    document.cookie = "vdbrb_is_quiz=true";
    document.cookie = "vdbrb_is_quiz_matters="+col_qz_quiz_matters;

    var uri = window.location.toString();
    if (uri.indexOf("?") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, clean_uri);
    }

    top.location.reload();
});
//#endregion

function deepLinkStone(){
    let params = new URLSearchParams(window.location.search);

    if(params.has('diamond_type')){
        let reqShape = params.get('shape') || '';
        let reqLab = params.get('lab') || '';
        let reqColor = params.get('color') || ''; // For Gemstone
        let reqType = params.get('type') || ''; // For Gemstone
        let reqSubshape = params.get('subshape') || ''; // For Radiance
        let reqFancyColor = params.get('fancy_color') || '';

        let reqToWhiteColor = params.get('white_color_to') || '';
        let reqFromWhiteColor = params.get('white_color_from') || '';
        let reqToFlour = params.get('fluor_to') || '';
        let reqFromFlour = params.get('fluor_from') || '';
        let reqToClarity = params.get('clarity_to') || '';
        let reqFromClarity = params.get('clarity_from') || '';
        let reqToCut = params.get('cut_to') || '';
        let reqFromCut = params.get('cut_from') || '';
        let reqToSymmetry = params.get('symmetry_to') || '';
        let reqFromSymmetry = params.get('symmetry_from') || '';
        let reqToPolish = params.get('polish_to') || '';
        let reqFromPolish = params.get('polish_from') || '';

        let reqMinCarat = params.get('min_carat') || '';
        let reqMaxCarat = params.get('max_carat') || '';
        let reqMinPrice = params.get('min_price') || '';
        let reqMaxPrice = params.get('max_price') || '';
        let reqMinDepth = params.get('min_depth') || '';
        let reqMaxDepth = params.get('max_depth') || '';
        let reqMinTable = params.get('min_table') || '';
        let reqMaxTable = params.get('max_table') || '';

        if(params.get('diamond_type') == 'natural'){
            document.cookie = "vdb_rb_stone_tab=natural";
            document.cookie = "vdbrb_natural_page_number="+'1';

            if(reqShape != ''){
                document.cookie = `vdbrb_natural_shape_style=${reqShape}`;
            }

            if(reqLab != ''){
                document.cookie = `vdbrb_natural_lab_style=${reqLab}`;
            }

            if(reqToWhiteColor != '' && reqFromWhiteColor != ''){
                document.cookie = `vdbrb_natural_color=White`;
                document.cookie = `vdbrb_natural_color_white=${reqToWhiteColor+','+reqFromWhiteColor}`;
            }else if(reqFancyColor != ''){
                document.cookie = `vdbrb_natural_color=Fancy`;
                document.cookie = `vdbrb_natural_color_fancy=${reqFancyColor}`;
            }

            if(reqToFlour != '' && reqFromFlour != ''){
                document.cookie = `vdbrb_natural_fluorescence_intensities=${reqToFlour+','+reqFromFlour}`;
            }

            if(reqToClarity != '' && reqFromClarity != ''){
                document.cookie = `vdbrb_natural_clarity=${reqToClarity+','+reqFromClarity}`;
            }

            if(reqToCut != '' && reqFromCut != ''){
                document.cookie = `vdbrb_natural_cut=${reqToCut+','+reqFromCut}`;
            }
            
            if(reqToSymmetry != '' && reqFromSymmetry != ''){
                document.cookie = `vdbrb_natural_symmetry=${reqToSymmetry+','+reqFromSymmetry}`;
            }

            if(reqToPolish != '' && reqFromPolish != ''){
                document.cookie = `vdbrb_natural_polish=${reqToPolish+','+reqFromPolish}`;
            }

            if(reqMinCarat != '' && reqMaxCarat != '' && (Number(reqMinCarat) <= Number(reqMaxCarat))){
                document.cookie = `vdbrb_natural_min_carat=${reqMinCarat}`;
                document.cookie = `vdbrb_natural_max_carat=${reqMaxCarat}`;
            }else if(reqMinCarat != ''){
                document.cookie = `vdbrb_natural_min_carat=${reqMinCarat}`;
            }else if(reqMaxCarat != ''){
                document.cookie = `vdbrb_natural_max_carat=${reqMaxCarat}`;
            }

            if(reqMinPrice != '' && reqMaxPrice != '' && (Number(reqMinPrice) <= Number(reqMaxPrice))){
                document.cookie = `vdbrb_natural_min_price=${reqMinPrice}`;
                document.cookie = `vdbrb_natural_max_price=${reqMaxPrice}`;
            }else if(reqMinPrice != ''){
                document.cookie = `vdbrb_natural_min_price=${reqMinPrice}`;
            }else if(reqMaxPrice != ''){
                document.cookie = `vdbrb_natural_max_price=${reqMaxPrice}`;
            }
            
            if(reqMinDepth != '' && reqMaxDepth != '' && (Number(reqMinDepth) <= Number(reqMaxDepth))){
                document.cookie = `vdbrb_natural_min_depth=${reqMinDepth}`;
                document.cookie = `vdbrb_natural_max_depth=${reqMaxDepth}`;
            }else if(reqMinDepth != ''){
                document.cookie = `vdbrb_natural_min_depth=${reqMinDepth}`;
            }else if(reqMaxDepth != ''){
                document.cookie = `vdbrb_natural_max_depth=${reqMaxDepth}`;
            }

            if(reqMinTable != '' && reqMaxTable != '' && (Number(reqMinTable) <= Number(reqMaxTable))){
                document.cookie = `vdbrb_natural_min_table=${reqMinTable}`;
                document.cookie = `vdbrb_natural_max_table=${reqMaxTable}`;
            }else if(reqMinTable != ''){
                document.cookie = `vdbrb_natural_min_table=${reqMinTable}`;
            }else if(reqMaxTable != ''){
                document.cookie = `vdbrb_natural_max_table=${reqMaxTable}`;
            }
        }
        if(params.get('diamond_type') == 'labgrown'){
            document.cookie = "vdb_rb_stone_tab=labgrown";
            document.cookie = "vdbrb_labgrown_page_number="+'1';

            if(reqShape != ''){
                document.cookie = `vdbrb_labgrown_shape_style=${reqShape}`;
            }

            if(reqLab != ''){
                document.cookie = `vdbrb_labgrown_lab_style=${reqLab}`;
            }

            if(reqToWhiteColor != '' && reqFromWhiteColor != ''){
                document.cookie = `vdbrb_labgrown_color=White`;
                document.cookie = `vdbrb_labgrown_color_white=${reqToWhiteColor+','+reqFromWhiteColor}`;
            }else if(reqFancyColor != ''){
                document.cookie = `vdbrb_labgrown_color=Fancy`;
                document.cookie = `vdbrb_labgrown_color_fancy=${reqFancyColor}`;
            }

            if(reqToFlour != '' && reqFromFlour != ''){
                document.cookie = `vdbrb_labgrown_fluorescence_intensities=${reqToFlour+','+reqFromFlour}`;
            }

            if(reqToClarity != '' && reqFromClarity != ''){
                document.cookie = `vdbrb_labgrown_clarity=${reqToClarity+','+reqFromClarity}`;
            }

            if(reqToCut != '' && reqFromCut != ''){
                document.cookie = `vdbrb_labgrown_cut=${reqToCut+','+reqFromCut}`;
            }
            
            if(reqToSymmetry != '' && reqFromSymmetry != ''){
                document.cookie = `vdbrb_labgrown_symmetry=${reqToSymmetry+','+reqFromSymmetry}`;
            }

            if(reqToPolish != '' && reqFromPolish != ''){
                document.cookie = `vdbrb_labgrown_polish=${reqToPolish+','+reqFromPolish}`;
            }

            if(reqMinCarat != '' && reqMaxCarat != '' && (Number(reqMinCarat) <= Number(reqMaxCarat))){
                document.cookie = `vdbrb_labgrown_min_carat=${reqMinCarat}`;
                document.cookie = `vdbrb_labgrown_max_carat=${reqMaxCarat}`;
            }else if(reqMinCarat != ''){
                document.cookie = `vdbrb_labgrown_min_carat=${reqMinCarat}`;
            }else if(reqMaxCarat != ''){
                document.cookie = `vdbrb_labgrown_max_carat=${reqMaxCarat}`;
            }

            if(reqMinPrice != '' && reqMaxPrice != '' && (Number(reqMinPrice) <= Number(reqMaxPrice))){
                document.cookie = `vdbrb_labgrown_min_price=${reqMinPrice}`;
                document.cookie = `vdbrb_labgrown_max_price=${reqMaxPrice}`;
            }else if(reqMinPrice != ''){
                document.cookie = `vdbrb_labgrown_min_price=${reqMinPrice}`;
            }else if(reqMaxPrice != ''){
                document.cookie = `vdbrb_labgrown_max_price=${reqMaxPrice}`;
            }
            
            if(reqMinDepth != '' && reqMaxDepth != '' && (Number(reqMinDepth) <= Number(reqMaxDepth))){
                document.cookie = `vdbrb_labgrown_min_depth=${reqMinDepth}`;
                document.cookie = `vdbrb_labgrown_max_depth=${reqMaxDepth}`;
            }else if(reqMinDepth != ''){
                document.cookie = `vdbrb_labgrown_min_depth=${reqMinDepth}`;
            }else if(reqMaxDepth != ''){
                document.cookie = `vdbrb_labgrown_max_depth=${reqMaxDepth}`;
            }

            if(reqMinTable != '' && reqMaxTable != '' && (Number(reqMinTable) <= Number(reqMaxTable))){
                document.cookie = `vdbrb_labgrown_min_table=${reqMinTable}`;
                document.cookie = `vdbrb_labgrown_max_table=${reqMaxTable}`;
            }else if(reqMinTable != ''){
                document.cookie = `vdbrb_labgrown_min_table=${reqMinTable}`;
            }else if(reqMaxTable != ''){
                document.cookie = `vdbrb_labgrown_max_table=${reqMaxTable}`;
            }
        }
        if(params.get('diamond_type') == 'gemstone'){
            document.cookie = "vdb_rb_stone_tab=gemstone";
            document.cookie = "vdbrb_gemstone_page_number="+'1';

            if(reqMinCarat != '' && reqMaxCarat != '' && (Number(reqMinCarat) <= Number(reqMaxCarat))){
                document.cookie = `vdbrb_gemstone_min_carat=${reqMinCarat}`;
                document.cookie = `vdbrb_gemstone_max_carat=${reqMaxCarat}`;
            }else if(reqMinCarat != ''){
                document.cookie = `vdbrb_gemstone_min_carat=${reqMinCarat}`;
            }else if(reqMaxCarat != ''){
                document.cookie = `vdbrb_gemstone_max_carat=${reqMaxCarat}`;
            }

            if(reqMinPrice != '' && reqMaxPrice != '' && (Number(reqMinPrice) <= Number(reqMaxPrice))){
                document.cookie = `vdbrb_gemstone_min_price=${reqMinPrice}`;
                document.cookie = `vdbrb_gemstone_max_price=${reqMaxPrice}`;
            }else if(reqMinPrice != ''){
                document.cookie = `vdbrb_gemstone_min_price=${reqMinPrice}`;
            }else if(reqMaxPrice != ''){
                document.cookie = `vdbrb_gemstone_max_price=${reqMaxPrice}`;
            }

            if(reqShape != ''){
                document.cookie = `vdbrb_gemstone_shape=${reqShape}`;
            }   

            if(reqType != ''){
                document.cookie = `vdbrb_gemstone_type=${reqType}`;
            }

            if(reqColor != ''){
                document.cookie = `vdbrb_gemstone_color=${reqColor}`;
            }
        }
        if(params.get('diamond_type') == 'radiance'){
            document.cookie = "vdb_rb_stone_tab=radiance";
            document.cookie = "vdbrb_radiance_page_number="+'1';

            if(reqShape != ''){
                document.cookie = `vdbrb_radiance_shape=${reqShape}`;
            }   

            if(reqSubshape != ''){
                document.cookie = `vdbrb_radiance_subshape=${reqSubshape}`;
            }

            if(reqType != ''){
                document.cookie = `vdbrb_radiance_type=${reqType}`;
            }

            if(reqColor != ''){
                document.cookie = `vdbrb_radiance_color=${reqColor}`;
            }

            if(reqMinCarat != '' && reqMaxCarat != '' && (Number(reqMinCarat) <= Number(reqMaxCarat))){
                document.cookie = `vdbrb_radiance_min_carat=${reqMinCarat}`;
                document.cookie = `vdbrb_radiance_max_carat=${reqMaxCarat}`;
            }else if(reqMinCarat != ''){
                document.cookie = `vdbrb_radiance_min_carat=${reqMinCarat}`;
            }else if(reqMaxCarat != ''){
                document.cookie = `vdbrb_radiance_max_carat=${reqMaxCarat}`;
            }

            if(reqMinPrice != '' && reqMaxPrice != '' && (Number(reqMinPrice) <= Number(reqMaxPrice))){
                document.cookie = `vdbrb_radiance_min_price=${reqMinPrice}`;
                document.cookie = `vdbrb_radiance_max_price=${reqMaxPrice}`;
            }else if(reqMinPrice != ''){
                document.cookie = `vdbrb_radiance_min_price=${reqMinPrice}`;
            }else if(reqMaxPrice != ''){
                document.cookie = `vdbrb_radiance_max_price=${reqMaxPrice}`;
            }
        }        
    }
}

function resetDeepLink(){
    let newUrl = removeURLParameters(window.top.location.href,'diamond_type','shape','lab','fancy_color','white_color_to','white_color_from','fluor_to','fluor_from','clarity_to','clarity_from','cut_to','cut_from','symmetry_to','symmetry_from','polish_to','polish_from','min_carat','max_carat','min_price','max_price','min_depth','max_depth','min_table','max_table','type','color','subshape');

    top.window.history.pushState({}, '', newUrl);
}

function removeURLParameters(url, ...parameters) {
    const parsed = new URL(url);
    parameters.forEach(e => parsed.searchParams.delete(e))
    return parsed.toString()
}

function changeQueryVariable(url,key,val) {
    var urlArr = url.split('?');
    var query = urlArr[1]!=undefined ? urlArr[1] : "";
    var vars = query.split('&');
    var new_var_arr = [];
    for (var i=0; i<vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == key) {
            pair[1] = val;
        }
        new_var_arr.push(pair[0]+"="+pair[1]);
    }

  return urlArr[0]+"?"+(new_var_arr.join('&'));
}

function refetch_variantion(short_code){
    if(selected_ring_stock_num != '' && setting_supported_shapes.length){
        $('#vdbrb_main_page_cover').show();

        var slugArr = [];
        if(vdbrb_ring_metal_type_api != ''){
            slugArr.push(vdbrb_ring_metal_type_api.toLowerCase().replace(' | ', ' ').replace(/ /g,'-'));
        }
        if(centerType != ''){
            slugArr.push(centerType.toLowerCase().replace(/ /g,'-'));
        }
        slugArr.push(short_code);

        var slug = slugArr.join('-');

        console.log(slug);
        console.log(variantionsArray);
        console.log(Object.keys(variantionsArray).length>0 && variantionsArray[slug]!=undefined);

        if(Object.keys(variantionsArray).length>0 && variantionsArray[slug]!=undefined){
            var new_stock_id = variantionsArray[slug].id;
            var new_stock_num = variantionsArray[slug].stock_num;
            var item = variantionsArray[slug].item_data;

            let url = updateUrl(window.top.location.href,'ring_stock_num',new_stock_num);

            window.top.location.href = url;
        }else{
            $("#vdbrb_main_page_cover").hide();
        }
    }
}

function updateUrl(url, key, value) {
    if (value !== undefined) {
        value = encodeURI(value);
    }
    var hashIndex = url.indexOf("#") | 0;
    if (hashIndex === -1) hashIndex = url.length | 0;
    var urls = url.substring(0, hashIndex).split("?");
    var baseUrl = urls[0];
    var parameters = "";
    var outPara = {};
    if (urls.length > 1) {
        parameters = urls[1];
    }
    if (parameters !== "") {
        parameters = parameters.split("&");
        for (k in parameters) {
            var keyVal = parameters[k];
            keyVal = keyVal.split("=");
            var ekey = keyVal[0];
            var evalue = "";
            if (keyVal.length > 1) {
                evalue = keyVal[1];
            }
            outPara[ekey] = evalue;
        }
    }

    if (value !== undefined) {
        outPara[key] = value;
    } else {
        delete outPara[key];
    }
    parameters = [];
    for (var k in outPara) {
        parameters.push(k + "=" + outPara[k]);
    }

    var finalUrl = baseUrl;

    if (parameters.length > 0) {
        finalUrl += "?" + parameters.join("&");
    }

    return finalUrl + url.substring(hashIndex);
}