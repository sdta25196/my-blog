jQuery(document).ready(function($){
	$('#Tabs_01').eol_Tabs({tabs:"tabs_01",currentClass:'tag_01'});
	$('#Tabs_02').eol_Tabs({tabs:"tabs_02",currentClass:'tag_02'});
	$('#Tabs_03').eol_Tabs({tabs:"tabs_03",currentClass:'tag_03'});
	$('#Tabs_04').eol_Tabs({tabs:"tabs_04",currentClass:'tag_04'});
	$('#Tabs_05').eol_Tabs({tabs:"tabs_05",currentClass:'tag_05'});
	$('#Tabs_06').eol_Tabs({tabs:"tabs_06",currentClass:'tag_06'});
	$('#Tabs_07').eol_Tabs({tabs:"tabs_07",currentClass:'tag_07'});
	$('#Tabs_08').eol_Tabs({tabs:"tabs_08",currentClass:'tag_08'});
	$('#Tabs_09').eol_Tabs({tabs:"tabs_09",currentClass:'tag_09'});
	if($('#player').length>0);
	$('#player').eol_picFocus();
	if($('#adleft').length>0){$('#adleft').eol_adAutoPlay().eol_hoverImg({bigpic:true}).eol_closeBtn();}
	if($('#adright').length>0){$('#adright').eol_adAutoPlay().eol_hoverImg({bigpic:true}).eol_closeBtn();}
	jQuery('#adfloat_l').eol_scrollAd().eol_hoverImg().eol_adAutoPlay().eol_closeBtn();
	jQuery('#adfloat_r').eol_scrollAd().eol_hoverImg().eol_adAutoPlay().eol_closeBtn();
	
	$(".menu_list .menu_body:eq(0)").show();
            $('.menu_list .fiveBox').each(function (i) {
                $(this).click(function () {
                    $('.menu_list .menu_body').not($('.menu_list .menu_body').eq(i)).slideUp("slow");
                    $('.menu_list .menu_body').eq(i).slideDown(500);
                    var obj = $(".icon");
                    $('.menu_list .fiveBox').find(obj).removeClass("current");
                    $(this).find(obj).addClass("current");
					//$(this).addClass("five_02");
                    $(this).addClass("fiveBox1");
                    $('.menu_list .fiveBox').not($('.menu_list .fiveBox').eq(i)).removeClass("fiveBox1");
                })
            })
			
})