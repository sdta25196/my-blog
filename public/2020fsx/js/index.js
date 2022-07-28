// JavaScript Document
$(function () {
    $(".you").click(function () {
        var num = parseInt($('.acont').attr('style').slice(12, $('.acont').attr('style').length - 4));
        var j = $(".acont p").length;
        if (num > -1 * (j - 5)) {
            $('.acont').css("marginLeft", "-=1rem")
        }

    });
    $(".zuo").click(function () {
        var num = parseInt($('.acont').css('marginLeft'));
        if (num < 0) {
            $('.acont').css("marginLeft", "+=1rem")
        }
    })

    function tab(obj) {
        $(obj).find('.awrap').find('.acont p').click(function () {
            $(obj).find('.awrap').find('.acont p').eq($(this).index()).addClass("adbg").siblings().removeClass("adbg");
            $(obj).parent().find('.ky_content_image').hide().eq($(this).index()).show();
        })
    }
    tab(".ky_content_yearwrap");

    function getParameter(name) {
        var query = window.location.search;
        var iLen = name.length;
        var iStart = query.indexOf(name);
        if(iStart == -1)
            return "";
        iStart += iLen + 1;
        var iEnd = query.indexOf("&", iStart);
        if(iEnd == -1)
            return query.substring(iStart);
    }

    $('.fenBtn').on('click',function(){
        if( getParameter('from_source')=='APP' ){
            var num = $(this).attr('schoolId');
            var year = $(this).text();
            var json = '#{"schoolid":'+num+',"year":20'+year+',"key":"fen"}';
            Toast.postMessage(json);
        }else{
            window.location.href = $(this).attr('data');
        }
    });
})