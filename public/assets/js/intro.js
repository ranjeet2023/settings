"use strict";var KTIntro=function(){var e=function(e,t,o){var i=new Date,n=(i.getTime(),1296e6);if(!KTCookie.get(e+"_counter")||parseInt(KTCookie.get(e+"_counter"))<3)return KTCookie.get(e+"_counter")?"1"!=KTCookie.get(e+"_counter")||KTCookie.get(e+"_show_1")?"2"==KTCookie.get(e+"_counter")&&!KTCookie.get(e+"_show_2")&&(setTimeout(t,o),KTCookie.set(e+"_show_3","1",{expires:new Date(i.getTime()+n)}),KTCookie.set(e+"_counter","3",{expires:new Date(i.getTime()+n)}),!0):(setTimeout(t,o),KTCookie.set(e+"_show_2","1",{expires:new Date(i.getTime()+6048e5)}),KTCookie.set(e+"_counter","2",{expires:new Date(i.getTime()+18144e5)}),!0):(setTimeout(t,o),KTCookie.set(e+"_show_1","1",{expires:new Date(i.getTime()+1728e5)}),KTCookie.set(e+"_counter","1",{expires:new Date(i.getTime()+2592e6)}),!0)},t=function(){var e=document.querySelector("#kt_header_search_toggle");if(e){var t=KTApp.initBootstrapPopover(e,{customClass:"popover-dark",container:"body",trigger:"manual",boundary:"window",placement:"left",dismiss:!0,html:!0,title:"Quick Search",content:"Fully functional search with advance options and preferences setup"});t.show(),setTimeout((function(){t&&t.dispose()}),1e4),e.addEventListener("click",(function(e){t.dispose()}))}},o=function(){var e=document.querySelector("#kt_toolbar_primary_button");if(e){var t=KTApp.initBootstrapPopover(e,{customClass:"popover-dark",container:"body",boundary:"window",trigger:"manual",placement:"left",dismiss:!0,html:!0,title:"Quick Notifications",content:"Seamless access to updates and notifications in various formats"});t.show(),setTimeout((function(){t&&t.dispose()}),1e4),e.addEventListener("click",(function(e){t.dispose()}))}},i=function(){var e=document.querySelector("#kt_header_user_menu_toggle");if(e){var t=KTApp.initBootstrapPopover(e,{customClass:"popover-dark",container:"body",boundary:"window",placement:"left",trigger:"manual",dismiss:!0,html:!0,title:"Advanced User Menu",content:"With quick links to user profile and account settings pages"});t.show(),setTimeout((function(){t&&t.dispose()}),1e4),e.addEventListener("click",(function(e){t.dispose()}))}};return{init:function(){var n;n="metronic",!1===KTUtil.inIframe()&&(e("kt_"+n+"_intro_1",t,5e3)||e("kt_"+n+"_intro_2",o,5e3)||e("kt_"+n+"_intro_3",i,5e3))}}}();"undefined"!=typeof module&&(module.exports=KTIntro),KTUtil.onDOMContentLoaded((function(){KTIntro.init()}));
$('#notification-panel').click(function(e){
    console.log(window.location.origin);
    $.ajax({
        url        : window.location.origin + '/get-notification',
        type       :'GET',
        dataType   :'json',
        success    :function(mydata){
            var row='';
            mydata.notifications.forEach(function(item,data) {
                row += '<div class="d-flex justify-content-start border-bottom border-2">'+
                            '<div class="d-flex flex-column align-items-start">'+
                                '<div class="d-flex align-items-center mb-2">'+
                                    '<div class="ms-3">'+
                                        '<a class="fs-5 h5 text-gray-900 text-primary ">';
                                    if(item.created_by != null){
                                     row += item.created_by.firstname +' '+ item.created_by.lastname + '<br/>' + item.created_date;
                                    }
                                row +=  '</a>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="p-4 rounded text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">'+
                                    item.body +
                                '</div>'+
                            '</div>'+
                        '</div>';

                    })
            $('#kt_drawer_chat_messenger_body').html(row);
        }
    });
})
var target = document.querySelector("#kt_body");
var blockUI = new KTBlockUI(target, {
    message: '<div class="blockui-message"><span class="spinner-border text-primary"></span> Loading...</div>',
});
