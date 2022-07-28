$(function() {
	var ua = window.navigator.userAgent;
	if(/Mobile|iP(hone|ad)|Android|BlackBerry|IEMobile/.test(ua)) {
		$('.select-show').on('click','.sel-ri',function() {
			if($(this).find('img').attr('src') == 'images/arrow.png') {
				$(this).find('img').attr('src', 'images/arrow2.png');
				$(this).parent().siblings('.sel-cont').css('max-height', 'none');
			} else {
				$(this).find('img').attr('src', 'images/arrow.png');
				$(this).parent().siblings('.sel-cont').css('max-height', '270px');
			}
		});
	} else {
		$('.select-show').on('click','.sel-ri',function() {
			if($(this).find('img').attr('src') == 'images/arrow.png') {
				$(this).find('img').attr('src', 'images/arrow2.png');
				$(this).parent().siblings('.sel-cont').css('max-height', 'none');
			} else {
				$(this).find('img').attr('src', 'images/arrow.png');
				$(this).parent().siblings('.sel-cont').css('max-height', '240px');
			}
		});
	}

	//默认刚进来加载医学，学术型
	var levId = "01";
	var typeId = 2;
	getData();

	$('.select-zy').change(function(event) {
		var val= $(this).find("option:selected").text();
		var id = $(this).find("option:selected").attr('data-id');
		$('.select-head span').text(val);
		$('.select-head img').attr('src','images/xk'+id+'.png');
		levId =id;
		getData();

		$('.select-show .sel-li').remove();
	});
	$('.select-type').change(function(event) {
		var id = $(this).find("option:selected").attr('data-type');
		typeId =id;
		console.log(typeId);
		getData();

		$('.select-show .sel-li').remove();
	});

	function getData() {
		$.ajax({
			url: '//school.kaoyan.cn/api/newapi/zsjzSpecial',
			dataType: "jsonp",
			data: {
				lev:levId,
				type:typeId
			},
			type: "get",
			jsonp: "jsonpcallback",
			timeout: 10000,
			success: function(data) {
				try{
					if(typeof(data.data.lev1.lev2) == undefined){
						console.log('3');
						alert("暂无当前类型的专业数据！");
						return;
					}
					var lev2 = data.data.lev1.lev2;
					var selli1;
					for (var i in lev2) {
						if (lev2[i].type == 1) {
							selli1 = '<div class="sel-li"><div class="sel-head clearfix"><div class="sel-lf clearfix"><span class="num">'+lev2[i].code+'</span><span class="zy">'+lev2[i].name+'</span><img src="images/star2.png" class="bq" /></div><div class="sel-ri"><img src="images/arrow.png" /></div></div>';
						}else{
							selli1 = '<div class="sel-li"><div class="sel-head clearfix"><div class="sel-lf clearfix"><span class="num">'+lev2[i].code+'</span><span class="zy">'+lev2[i].name+'</span></div><div class="sel-ri"><img src="images/arrow.png" /></div></div>';
						}
						var selli2 = selli1+'<div class="sel-cont mt_10 clearfix">';
						var selli3='';
						for (var j in lev2[i].lev3) {
							selli3 += '<div class="sel-item dian"><a href='+lev2[i].lev3[j].url+'>'+lev2[i].lev3[j].code+' '+lev2[i].lev3[j].name+'</a></div>';
						}
						var selli4 =selli2 + selli3 + '</div></div>';
						$('.select-show').append(selli4);
					}
				}catch(e){
					alert("暂无当前类型的专业数据！");
				}
			},
			error: function(XHR, textStatus, errorThrown) {
				console.log('3');
				console.log('error: ' + textStatus);
				console.log('error: ' + errorThrown);
				console.log('error: ' + XHR);
			}

		});
	};



})
