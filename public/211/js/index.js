$(function(){
	
	var ua = window.navigator.userAgent;
	if (/Mobile|iP(hone|ad)|Android|BlackBerry|IEMobile/.test(ua)) {
	$('.zi span').on('touchend',function(){
		$('.zi span').removeClass('lanse')
		$(this).addClass('lanse')
		var aa = $(this).parent().index()
		$(this).parents().find('.main-beian').eq(aa/2).addClass('chuxian').siblings().removeClass('chuxian')
	})
	
	
	//下拉展现
	var ppp = 0
	$('.main-jiaoyubu:nth-child(2) .xiala').on('touchend',function(){
		ppp++;
		if(ppp%2==1){
			$(this).siblings().css('height','auto')
			$(this).find('img').removeAttr('src')
			$(this).find('img').attr('src','images/shangjiantou.png')
		}else{
			$(this).siblings().css('height','5rem')
			$(this).find('img').removeAttr('src')
			$(this).find('img').attr('src','images/main-xiajiantou.jpg')
		}	
	})
	
	var pp = 0
	$('.main-jiaoyubu .xiala').not('.main-jiaoyubu:nth-child(2) .xiala').on('touchend',function(){
		pp++;
		if(pp%2==1){
			$(this).siblings().css('height','auto')
			$(this).find('img').removeAttr('src')
			$(this).find('img').attr('src','images/shangjiantou.png')
		}else{
			$(this).siblings().css('height','5rem')
			$(this).find('img').removeAttr('src')
			$(this).find('img').attr('src','images/main-xiajiantou.jpg')
		}	
	})
	
	
	} else {
		//pc端
		$('.zi span').click(function(){
		$('.zi span').removeClass('lanse')
		$(this).addClass('lanse')
		var aa = $(this).parent().index()
		$(this).parents().find('.main-beian').eq(aa/2).addClass('chuxian').siblings().removeClass('chuxian')
	})
	
	
	//下拉展现
	var mmm = 0
	$('.main-jiaoyubu:nth-child(2) .xiala').click(function(){
		mmm++;
		if(mmm%2==1){
			$(this).siblings().css('height','95px')
			$(this).find('img').removeAttr('src')
			$(this).find('img').attr('src','images/shangjiantou.png')
		}else{
			$(this).siblings().css('height','auto')
			$(this).find('img').removeAttr('src')
			$(this).find('img').attr('src','images/main-xiajiantou.jpg')
		}	
	})
	
	
	var mm = 0
	$('.main-jiaoyubu .xiala').not('.main-jiaoyubu:nth-child(2) .xiala').click(function(){
		mm++;
		if(mm%2==1){
			$(this).siblings().css('height','95px')
			$(this).find('img').removeAttr('src')
			$(this).find('img').attr('src','images/shangjiantou.png')
		}else{
			$(this).siblings().css('height','auto')
			$(this).find('img').removeAttr('src')
			$(this).find('img').attr('src','images/main-xiajiantou.jpg')
		}	
	})
	}
})
