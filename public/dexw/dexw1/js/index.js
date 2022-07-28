// 讲堂轮播效果
$(function(){
    var timer = '';
    var news_len = $('.news-right>ul li').length;
    var news_img_len = $('.news-right>ul img').width();
    var news_img_count_len = parseInt(news_len * news_img_len);

    $(".next").click(function(){
        if(!$(".news-right>ul li:first").is(":animated")){
            $(".news-right>ul li:first").animate({'marginTop':'-=275px'},500,function(){
                $(".news-right>ul li:first").css('marginTop',0);
                $('.news-right>ul').append($(".news-right>ul li:first"));
            });
        }
    });

    $(".prev").click(function(){
        if(!$(".news-right>ul li:first").is(":animated")){
            $('.news-right>ul').prepend($(".news-right>ul li:last"));
            $('.news-right>ul li:first').css({'marginTop':'-275px'});
            $(".news-right>ul li:first").animate({'marginTop':'+=275px'},500,function(){
                $(".news-right>ul li:first").css('marginLeft','0px');
            });
        }
    });

    timer = setInterval(function(){
        $(".next").click();
    },2000);

    $(".news-right>ul>li").mouseenter(function(){
        clearInterval(timer);
    });

    $(".news-right>ul>li").mouseleave(function(){
        timer = setInterval(function(){
            $(".next").click();
        },2000)
    });
});





