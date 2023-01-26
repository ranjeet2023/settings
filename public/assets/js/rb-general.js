var moneyFormat = shop_money_format;
//Currency variable is coming from - https://cdn.shopify.com/s/javascripts/currencies.js
$currency_rate = 1;
if(Currency!=undefined && Currency.rates!=undefined && Currency.rates[shop_currency]!=undefined){
    if(shop_currency=='USD'){
        $currency_rate = 1;
    }else{
        $currency_rate = Currency.rates[shop_currency];
    }
}
function price_in_shop_currency(vdb_doller_price){
    var price_in_shop_currency = vdb_doller_price/$currency_rate;
    return price_in_shop_currency;
}
function currency_conversion(price,from_currency,to_currency){
    //Currency variable and convert function is coming from - https://cdn.shopify.com/s/javascripts/currencies.js
    let converted_price = price;
    if(Currency!=undefined && Currency.convert!=undefined){
        converted_price = Currency.convert(price,from_currency,to_currency);
    }
    return converted_price;
}
function formatMoney(cents, format) {
    if (typeof cents === 'string') {
        cents = cents.replace('.', '');
    }
    var value = '';
    var formatString = format || moneyFormat;

    function formatWithDelimiters(number, precision, thousands, decimal) {
        thousands = thousands || ',';
        decimal = decimal || '.';

        if (isNaN(number) || number === null) {
            return 0;
        }

        number = (number / 100.0).toFixed(precision);

        var parts = number.split('.');
        var dollarsAmount = parts[0].replace(
            /(\d)(?=(\d\d\d)+(?!\d))/g,
            '$1' + thousands
        );
        var centsAmount = parts[1] ? decimal + parts[1] : '';

        return dollarsAmount + centsAmount;
    }

    if(formatString.includes('{{amount}}')){
        value = formatWithDelimiters(cents, 2);
        return formatString.replace('{{amount}}', value);
    }else if(formatString.includes('{amount}')){
        value = formatWithDelimiters(cents, 2);
        return formatString.replace('{amount}', value);
    }else if(formatString.includes('{amount_no_decimals}')){
        value = formatWithDelimiters(cents, 0);
        return formatString.replace('{amount_no_decimals}', value);
    }else if(formatString.includes('{amount_with_comma_separator}')){
        value = formatWithDelimiters(cents, 2, '.', ',');
        return formatString.replace('{amount_with_comma_separator}', value);
    }else if(formatString.includes('{amount_no_decimals_with_comma_separator}')){
        value = formatWithDelimiters(cents, 0, '.', ',');
        return formatString.replace('{amount_no_decimals_with_comma_separator}', value);
    }else if(formatString.includes('{amount_no_decimals_with_space_separator}')){
        value = formatWithDelimiters(cents, 0, ' ');
        return formatString.replace('{amount_no_decimals_with_space_separator}', value);
    }else if(formatString.includes('{amount_with_apostrophe_separator}')){
        value = formatWithDelimiters(cents, 2, "'");
        return formatString.replace('{amount_with_apostrophe_separator}', value);
    }
}

$(document).ready(function () {
    if($(".class_dlr_to_shop_currency").length>0){
        $(".class_dlr_to_shop_currency").each(function () {
            var _this = $(this);
            
            var total_sales_price = _this.data('dlr');
            var currency_code_api = _this.data('currency_code');
            var price = formatMoney(Math.round(price_in_shop_currency(total_sales_price)) * 100, moneyFormat);
            if(currency_code_api!=undefined && currency_code_api!=null && currency_code_api!="" && currency_code_api!='USD'){
                if (currency_code_api!=shop_currency) {
                    //if vdb-currency is NOT USD then first convert into USD, then convert it into store currency
                    let usd_price = currency_conversion(total_sales_price,currency_code_api,'USD');
                    usd_price = parseFloat(usd_price);
                    price = formatMoney(Math.round(price_in_shop_currency(usd_price)) * 100, moneyFormat);
                } else {
                    price = formatMoney(Math.round(total_sales_price) * 100, moneyFormat);
                }
            }

            _this.html(price);
        });
    }
});

function inex_pagination(current_page,page_count,adjacents){
    current_page = parseInt(current_page);
    page_count = parseInt(page_count);
    adjacents = parseInt(adjacents);

    var out = '<ul>';

    // previous
    if(current_page==1) {
        //out+='<li class="disabled"><a href="javascript:;"><span class="vdb-rb-icon vdb-rb-icon-detail_page_match_arrow_left_white"></span></a></li>';
    }else{
        out+='<li><a class="vdbrb_pagination_link" data-current_page="'+(current_page-1)+'" href="javascript:;"><span class="vdb-rb-icon vdb-rb-icon-detail_page_match_arrow_left_white"></span></a></li>';
    }

    // first
    if(current_page>(adjacents+1)) {
        out+='<li><a class="vdbrb_pagination_link" data-current_page="1" href="javascript:;">1</a></li>';
    }

    // interval
    if(current_page>(adjacents+2)) {
        out+='<li class="disabled"><a class="button" href="javascript:;">...</a></li>';
    }

    // pages
    let pmin = (current_page>adjacents) ? (current_page-adjacents) : 1;
    let pmax = (current_page<(page_count-adjacents)) ? (current_page+adjacents) : page_count;
    for(let i=pmin; i<=pmax; i++) {
        if(i==current_page) {
            out+='<li class="active"><a href="javascript:;">'+i+'</a></li>';
        }else{
            out+='<li><a class="vdbrb_pagination_link" data-current_page="'+i+'" href="javascript:;">'+i+'</a></li>';
        }
    }

    // interval
    if(current_page<(page_count-adjacents-1)) {
        out+='<li class="disabled"><a href="javascript:;">...</a></li>';
    }

    // last
    if(current_page<(page_count-adjacents)) {
        out+='<li><a class="vdbrb_pagination_link" data-current_page="'+page_count+'" href="javascript:;">'+page_count+'</a></li>';
    }

    // next
    if(current_page<page_count) {
        out+='<li><a class="vdbrb_pagination_link" data-current_page="'+(current_page+1)+'" href="javascript:;"><span class="vdb-rb-icon  vdb-rb-icon-detail_page_match_arrow_right_white"></span></a></li>';
    }else{
        //out+='<li class="disabled"><a href="javascript:;"><span class="vdb-rb-icon  vdb-rb-icon-detail_page_match_arrow_right_white"></span></a></li>';
    }

    out+= '</ul>';

    return out;
}

$(document).on('keyup','.vdbrb_only_digit_with_two_decimal',function(e){
    var _this = $(this);

    var validNumber = new RegExp(/^\d*\.?\d*$/);
    if (validNumber.test((_this.val()))){
        _this.val(_this.val());
    }else{
        _this.val('');
    }

    //below code is for not allow double dot
    var event_keyCode = e.keyCode!=undefined?e.keyCode:'';
    if (((event_keyCode != 46 || (event_keyCode == 46 && $(this).val() == '')) ||
        $(this).val().indexOf('.') != -1) && (event_keyCode < 48 || event_keyCode > 57)) {
        e.preventDefault();
    }

    //below code allow only digit, dot and hifen
    var regx = /[^\d+(\.\d{1,2})?$-]/g;
    if(_this.val().match(regx)) {
        _this.val(_this.val().replace(regx, ''));
    }

    if(_this.val().includes(".")){
        var input_val_arr = _this.val().split('.');
        if(input_val_arr.length>2){
            //if we enter second dot, then remove last dot
            _this.val(_this.val().slice(0,-1));
            _this.val(parseFloat(_this.val()));

            //check NaN
            if(isNaN(_this.val())){
                _this.val('');
            }
        }

        //this code allow only 2 digit after dot
        if(input_val_arr[1].length>2){
            _this.val(input_val_arr[0]+'.'+input_val_arr[1].substring(0,2));
        }
    }
});

$(document).on('keyup','.vdbrb_only_digit_with_one_decimal',function(e){
    var _this = $(this);

    var validNumber = new RegExp(/^\d*\.?\d*$/);
    if (validNumber.test((_this.val()))){
        _this.val(_this.val());
    }else{
        _this.val('');
    }
    
    //below code is for not allow double dot
    var event_keyCode = e.keyCode!=undefined?e.keyCode:'';
    if (((event_keyCode != 46 || (event_keyCode == 46 && $(this).val() == '')) ||
        $(this).val().indexOf('.') != -1) && (event_keyCode < 48 || event_keyCode > 57)) {
        e.preventDefault();
    }

    //below code allow only digit, dot and hifen
    var regx = /[^\d+(\.\d{1,2})?$-]/g;
    if(_this.val().match(regx)) {
        _this.val(_this.val().replace(regx, ''));
    }

    if(_this.val().includes(".")){
        var input_val_arr = _this.val().split('.');
        if(input_val_arr.length>2){
            //if we enter second dot, then remove last dot
            _this.val(_this.val().slice(0,-1));
            _this.val(parseFloat(_this.val()));

            //check NaN
            if(isNaN(_this.val())){
                _this.val('');
            }
        }

        //this code allow only 1 digit after dot
        if(input_val_arr[1].length>1){
            _this.val(input_val_arr[0]+'.'+input_val_arr[1].substring(0,1));
        }
    }
});

$(document).keydown(function(e){
    /*disable "Tabs" key*/
    if(e.keyCode=='9'){
        return false;
    }
});

function capitalizeFirstLetter(string) {
    var string_name = '';
    if(string.includes('_')){
        var stringArr = string.split('_');
        if(stringArr.length>0){
            stringArr.forEach(function(item){
                string_name += item.charAt(0).toUpperCase() + item.slice(1)+' ';
            });
        }
    }else{
        string_name = string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string_name.trim();
}

function number_format(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
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

function array_unique(array){
    return array.filter(function(el, index, arr) {
        return index === arr.indexOf(el);
    });
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function vdbrb_view_selected_ring() {
    if ($(window).width() < 840) {
        if(document.getElementById("vdbrb_step_selected_ring")){
            var elSetting = document.getElementById("vdbrb_step_selected_ring");
            if (elSetting.style.display != "none") {
                elSetting.style.display = "none";
            } else {
                elSetting.style.display = "block";
            }

            if(document.getElementById("vdbrb_step_selected_stone")){
                document.getElementById("vdbrb_step_selected_stone").style.display = "none";
            }
        }else{
            top.location.href = 'rb-setting-list';
        }
    }
}
function vdbrb_view_selected_stone() {
    if ($(window).width() < 840) {
        if(document.getElementById("vdbrb_step_selected_stone")){
            var elStone = document.getElementById("vdbrb_step_selected_stone");
            if (elStone.style.display != "none") {
                elStone.style.display = "none";
            } else {
                elStone.style.display = "block";
            }

            if(document.getElementById("vdbrb_step_selected_ring")){
                document.getElementById("vdbrb_step_selected_ring").style.display = "none";
            }
        }else{
            top.location.href = 'rb-stone-list';
        }
    }
}

$(document).on('click','.vdb-rb-step-ring-review',function(){
    if($('#vdbrb_step_ring_review_popup').length>0){
        var x = document.getElementById("vdbrb_step_ring_review_popup");
        if (window.getComputedStyle(x).display === "none") {
            setTimeout(function(){ 
                $('#vdbrb_step_ring_review_popup').show();
            }, 200);
        }
    }
});

function forgetAllSettings(){
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++){
        var cookieSeg = cookieArr[i].trim();
        var firstEq = cookieSeg.indexOf("=");
        var name = cookieSeg.substr(0,firstEq);
        var value = cookieSeg.substr(firstEq+1);

        if(name.includes("vdb")){
            document.cookie = name+"=";
        }
    }
}

document.addEventListener("click", (evt) => {
	let targetElement = evt.target; // clicked element
	
	const div_id1 = document.getElementById("vdbrb_step_ring_review_popup");
	do {
		if (targetElement == div_id1) {
			// This is a click inside. Do nothing, just return.
			return;
		}/*else if (targetElement == div_id2) {
			return;
		}*/
		
		targetElement = targetElement.parentNode;
	} while (targetElement);

	// This is a click outside.
	if(div_id1 && div_id1!= null){
        div_id1.style.display = 'none';
    }
});