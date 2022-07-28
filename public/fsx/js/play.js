// JavaScript Document
$(function () {
	$(".rw").click(function () {
		var num = parseInt($('.left-topcont').css('marginLeft'));
		var banner_width = $(".left-topcont").width();
		var j = $(".left-topcont img").length;
		if (num > -502 * (j - 1)) {
			$('.left-topcont').css("marginLeft", "-=507px")
		}
	});
	$(".lw").click(function () {
		var num = parseInt($('.left-topcont').css('marginLeft'));
		if (num < 0) {
			$('.left-topcont').css("marginLeft", "+=507px")
		}
	})
	$('.year a').mouseenter(function () {
		$(this).addClass('adbg').siblings().removeClass('adbg');
	})
	$(".you").click(function () {
		var num = parseInt($('.acont').css('marginLeft'));
		var banner_width = $(".acont").width();
		var j = $(".yearwrap a").length;
		console.log(j);
		if (num > -106 * (j - 6)) {
			$('.acont').css("marginLeft", "-=106px")
		}

	});
	$(".zuo").click(function () {
		var num = parseInt($('.acont').css('marginLeft'));
		if (num < 0) {
			$('.acont').css("marginLeft", "+=106px")
		}
	})
	$(".zyh").click(function () {
		var num = parseInt($('.schlwrap').css('marginTop'));
		if (num > -222) {
			$('.schlwrap').css("marginTop", "-=222px")
		}
		else {
			$('.schlwrap').css("marginTop", 0)
		}
	});
	$(".zh1").click(function () {
		var num = parseInt($('.lun').css('marginTop'));
		var j = $(".lun img").length;
		var x = Math.ceil(j / 4);
		if (num > -568 * (x - 1)) {
			$('.lun').css("marginTop", "-=579px")
		}
		else {
			$('.lun').css("marginTop", 0)
		}
	});
	$(".zh2").click(function () {
		var num = parseInt($('.lun2').css('marginTop'));
		var j = $(".lun2 img").length;
		var x = Math.ceil(j / 4);
		if (num > -620 * (x - 1)) {
			$('.lun2').css("marginTop", "-=631px")
		}
		else {
			$('.lun2').css("marginTop", 0)
		}
	});
	$(".zh3").click(function () {
		var num = parseInt($('.clawrap').css('marginTop'));
		var j = $(".univer").length;
		var x = Math.ceil(j / 4);
		if (num > -492 * (x - 5)) {
			$('.clawrap').css("marginTop", "-=500px")
		}
		else {
			$('.clawrap').css("marginTop", 0)
		}
	});
	$(".ry").click(function () {
		var num = parseInt($('.tuiwrap').css('marginLeft'));
		var banner_width = $(".tuiwrap").width();
		var j = $(".tuiwrap img").length;
		if (num > -278 * (j - 3)) {
			$('.tuiwrap').css("marginLeft", "-=278px")
		}
		else {
			$('.tuiwrap').css("marginLeft", "0")
		}
	});
	$(".lz").click(function () {
		var num = parseInt($('.tuiwrap').css('marginLeft'));
		if (num < -280) {
			$('.tuiwrap').css("marginLeft", "+=278px")
		}
		else {
			$('.tuiwrap').css("marginLeft", "-556px")
		}
	})
	$(".lun2").find(".sec").hover(function () {
		$(this).find('img').siblings().slideDown();
	}, function () {
		$(this).find('img').siblings().slideUp("fast")
			;
	})
})