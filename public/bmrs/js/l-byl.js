
/*
Copyright © 2015 HTML5andBeyond.com
Licensed Under MIT
*/

(function ( $ ) {
 
    $.fn.lbyl = function( options ) {
 
        var s = $.extend({
            content: '',
            speed: 10,
            type: 'fade',
            fadeSpeed: 500,
            finished: function(){}
        }, options );

        var elem = $(this),
            letterArray = [],
            lbylContent = s.content,
            count = $(this).length;
        
        elem.empty();
        elem.attr('data-time', lbylContent.length * s.speed)
                                
        for (var i = 0; i < lbylContent.length; i++) {
            letterArray.push(lbylContent[i]);
        }
            
        $.each(letterArray, function(index, value) {
        elem.append('<span style="display: none;">' + value + '</span>');

            setTimeout(function(){
                if (s.type == 'show') {
                    elem.find('span:eq(' + index + ')').show();
                } else if (s.type == 'fade') {
                   elem.find('span:eq(' + index + ')').fadeIn(s.fadeSpeed); 
                }
            }, index * s.speed);

        });

        setTimeout(function(){
            s.finished();
        }, lbylContent.length * s.speed);
        
    };
 
}( jQuery ));
