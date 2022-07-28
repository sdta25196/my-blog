$(function () {
	gg()
	var num = 11;
	var temp = 0;
	var temp2 = 0;
	var ua = window.navigator.userAgent;
	if (/Mobile|iP(hone|ad)|Android|BlackBerry|IEMobile/.test(ua)) {
		getData2()
	} else {
		getData();
	}

	$('.diqu-li').click(function () {
		$(this).addClass('select').siblings().removeClass('select');
		var tex = $(this).text() + '地区';
		$('.city .item-head').text(tex);
		$('.table1 tbody .tr-cont').remove();
		$('.table2 tbody .tr-cont').remove();
		$('.more').text('加载更多');
		num = $(this).attr('data-id');
		temp = 0;
		getData(num);
	});

	$('.more').click(function () {
		temp++;
		var newLen = 30 * temp;
		$.ajax({
			url: 'https://school.kaoyan.cn/api/newapi/zsjzTakeinfo',
			dataType: "jsonp",
			data: {
				provinceid: num
			},
			type: "get",
			jsonp: "jsonpcallback",
			timeout: 10000,
			success: function (data) {
				var objLen = data.data.length;
				if (objLen > 30) {
					//如果总条数减去已经加载，剩下的数据少于30条，左右平均分布加载
					if ((objLen - newLen) < 30) {
						var len = Math.ceil((objLen - newLen) / 2);
						for (var i = newLen; i < newLen + len; i++) {
							tab1 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[i].name + '</td>';
							if (data.data[i].takeinfo_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
							} else {
								tab1 += '<td><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
							}
							if (data.data[i].special_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].special + '>专业目录</a></td>';
							} else {
								tab1 += '<td><a href=' + data.data[i].special + '>专业目录</a></td>';
							}
							if (data.data[i].book_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
							} else {
								tab1 += '<td ><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
							}
							tab1 += '</tr>';
							$('.table1 tbody').append(tab1);
						}
						for (var j = newLen + len; j < objLen; j++) {
							tab2 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[j].name + '</td>';
							if (data.data[j].takeinfo_color == '1') {
								tab2 += '<td class="red"><a href=' + data.data[j].takeinfo + '>招生简章</a></td>';
							} else {
								tab2 += '<td><a href=' + data.data[j].takeinfo + '>招生简章</a></td>';
							}
							if (data.data[j].special_color == '1') {
								tab2 += '<td class="red"><a href=' + data.data[j].special + '>专业目录</a></td>';
							} else {
								tab2 += '<td><a href=' + data.data[j].special + '>专业目录</a></td>';
							}
							if (data.data[j].book_color == '1') {
								tab2 += '<td class="red"><a href=' + data.data[j].schoolbook + '>参考书目</a></td>';
							} else {
								tab2 += '<td ><a href=' + data.data[j].schoolbook + '>参考书目</a></td>';
							}
							tab2 += '</tr>';

							$('.table2 tbody').append(tab2);
						}
						$('.more').text('已无更多数据');
					} else if ((objLen - newLen) >= 30) { //剩下的数据大于30条，左边加载满，右边加载满
						for (var i = newLen; i < newLen + 15; i++) {
							tab1 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[i].name + '</td>';
							if (data.data[i].takeinfo_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
							} else {
								tab1 += '<td><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
							}
							if (data.data[i].special_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].special + '>专业目录</a></td>';
							} else {
								tab1 += '<td><a href=' + data.data[i].special + '>专业目录</a></td>';
							}
							if (data.data[i].book_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
							} else {
								tab1 += '<td ><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
							}
							tab1 += '</tr>';
							$('.table1 tbody').append(tab1);
						}
						for (var j = newLen + 15; j < newLen + 30; j++) {
							tab2 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[j].name + '</td>';
							if (data.data[j].takeinfo_color == '1') {
								tab2 += '<td class="red"><a href=' + data.data[j].takeinfo + '>招生简章</a></td>';
							} else {
								tab2 += '<td><a href=' + data.data[j].takeinfo + '>招生简章</a></td>';
							}
							if (data.data[j].special_color == '1') {
								tab2 += '<td class="red"><a href=' + data.data[j].special + '>专业目录</a></td>';
							} else {
								tab2 += '<td><a href=' + data.data[j].special + '>专业目录</a></td>';
							}
							if (data.data[j].book_color == '1') {
								tab2 += '<td class="red"><a href=' + data.data[j].schoolbook + '>参考书目</a></td>';
							} else {
								tab2 += '<td ><a href=' + data.data[j].schoolbook + '>参考书目</a></td>';
							}
							tab2 += '</tr>';
							$('.table2 tbody').append(tab2);
						}
					}
				} else {
					$('.more').text('已无更多数据');
				}
			},
			error: function (XHR, textStatus, errorThrown) {
				console.log('error: ' + textStatus);
				console.log('error: ' + errorThrown);
				console.log('error: ' + XHR);
			}

		})

	});

	$('.chengshi select').change(function (event) {
		num = $(this).find("option:selected").attr('data-id');
		$('.table1 tbody .tr-cont').remove();
		getData2();
		temp2 = 0;
	});

	$('.more-m').click(function () {
		temp2++;
		var mnewLen = 15 * temp2;
		$.ajax({
			url: 'https://school.kaoyan.cn/api/newapi/zsjzTakeinfo',
			dataType: "jsonp",
			data: {
				provinceid: num
			},
			type: "get",
			jsonp: "jsonpcallback",
			timeout: 10000,
			success: function (data) {
				var objLen = data.data.length;
				if (objLen > 15) {
					console.log('1');
					//如果总条数减去已经加载，剩下的数据少于30条，左右平均分布加载
					if ((objLen - mnewLen) < 15) {
						for (var i = mnewLen; i < objLen; i++) {
							tab1 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[i].name + '</td>';
							if (data.data[i].takeinfo_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
							} else {
								tab1 += '<td><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
							}
							if (data.data[i].special_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].special + '>专业目录</a></td>';
							} else {
								tab1 += '<td><a href=' + data.data[i].special + '>专业目录</a></td>';
							}
							if (data.data[i].book_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
							} else {
								tab1 += '<td ><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
							}
							tab1 += '</tr>';
							$('.table1 tbody').append(tab1);
						}
						$('.more-m').text('已无更多数据');
					} else if ((objLen - mnewLen) >= 15) { //剩下的数据大于30条，左边加载满，右边加载满
						for (var i = mnewLen; i < mnewLen + 15; i++) {
							tab1 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[i].name + '</td>';
							if (data.data[i].takeinfo_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
							} else {
								tab1 += '<td><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
							}
							if (data.data[i].special_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].special + '>专业目录</a></td>';
							} else {
								tab1 += '<td><a href=' + data.data[i].special + '>专业目录</a></td>';
							}
							if (data.data[i].book_color == '1') {
								tab1 += '<td class="red"><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
							} else {
								tab1 += '<td ><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
							}
							tab1 += '</tr>';
							$('.table1 tbody').append(tab1);
						}
					}
				} else {
					$('.more-m').text('已无更多数据');
				}
			},
			error: function (XHR, textStatus, errorThrown) {
				console.log('error: ' + textStatus);
				console.log('error: ' + errorThrown);
				console.log('error: ' + XHR);
			}
		});

	});

	function getData() {
		$.ajax({
			url: 'https://school.kaoyan.cn/api/newapi/zsjzTakeinfo',
			dataType: "jsonp",
			data: {
				provinceid: num
			},
			type: "get",
			jsonp: "jsonpcallback",
			timeout: 10000,
			success: function (data) {
				var objLen = data.data.length;
				if (objLen <= 30) {
					//小于30所学校，左右对称加载
					var len = Math.ceil(objLen / 2);
					for (var i = 0; i < len; i++) {
						tab1 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[i].name + '</td>';
						if (data.data[i].takeinfo_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
						} else {
							tab1 += '<td><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
						}
						if (data.data[i].special_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].special + '>专业目录</a></td>';
						} else {
							tab1 += '<td><a href=' + data.data[i].special + '>专业目录</a></td>';
						}
						if (data.data[i].book_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
						} else {
							tab1 += '<td ><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
						}
						tab1 += '</tr>';
						$('.table1 tbody').append(tab1);
					}
					for (var j = len; j < objLen; j++) {
						tab2 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[j].name + '</td>';
						if (data.data[j].takeinfo_color == '1') {
							tab2 += '<td class="red"><a href=' + data.data[j].takeinfo + '>招生简章</a></td>';
						} else {
							tab2 += '<td><a href=' + data.data[j].takeinfo + '>招生简章</a></td>';
						}
						if (data.data[j].special_color == '1') {
							tab2 += '<td class="red"><a href=' + data.data[j].special + '>专业目录</a></td>';
						} else {
							tab2 += '<td><a href=' + data.data[j].special + '>专业目录</a></td>';
						}
						if (data.data[j].book_color == '1') {
							tab2 += '<td class="red"><a href=' + data.data[j].schoolbook + '>参考书目</a></td>';
						} else {
							tab2 += '<td ><a href=' + data.data[j].schoolbook + '>参考书目</a></td>';
						}
						tab2 += '</tr>';
						$('.table2 tbody').append(tab2);
					}
				} else {
					for (var i = 0; i < 15; i++) {
						tab1 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[i].name + '</td>';
						if (data.data[i].takeinfo_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
						} else {
							tab1 += '<td><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
						}
						if (data.data[i].special_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].special + '>专业目录</a></td>';
						} else {
							tab1 += '<td><a href=' + data.data[i].special + '>专业目录</a></td>';
						}
						if (data.data[i].book_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
						} else {
							tab1 += '<td ><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
						}
						tab1 += '</tr>';
						$('.table1 tbody').append(tab1);
					}
					for (var j = 15; j < 30; j++) {
						tab2 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[j].name + '</td>';
						if (data.data[j].takeinfo_color == '1') {
							tab2 += '<td class="red"><a href=' + data.data[j].takeinfo + '>招生简章</a></td>';
						} else {
							tab2 += '<td><a href=' + data.data[j].takeinfo + '>招生简章</a></td>';
						}
						if (data.data[j].special_color == '1') {
							tab2 += '<td class="red"><a href=' + data.data[j].special + '>专业目录</a></td>';
						} else {
							tab2 += '<td><a href=' + data.data[j].special + '>专业目录</a></td>';
						}
						if (data.data[j].book_color == '1') {
							tab2 += '<td class="red"><a href=' + data.data[j].schoolbook + '>参考书目</a></td>';
						} else {
							tab2 += '<td ><a href=' + data.data[j].schoolbook + '>参考书目</a></td>';
						}
						tab2 += '</tr>';
						$('.table2 tbody').append(tab2);
					}
				}

			},
			error: function (XHR, textStatus, errorThrown) {
				console.log('error: ' + textStatus);
				console.log('error: ' + errorThrown);
				console.log('error: ' + XHR);
			}
		});
	}

	function getData2() {
		$.ajax({
			url: 'https://school.kaoyan.cn/api/newapi/zsjzTakeinfo',
			dataType: "jsonp",
			data: {
				provinceid: num
			},
			type: "get",
			jsonp: "jsonpcallback",
			timeout: 10000,
			success: function (data) {
				var objLen = data.data.length;
				if (objLen <= 15) {
					for (var i = 0; i < objLen; i++) {
						tab1 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[i].name + '</td>';
						if (data.data[i].takeinfo_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
						} else {
							tab1 += '<td><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
						}
						if (data.data[i].special_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].special + '>专业目录</a></td>';
						} else {
							tab1 += '<td><a href=' + data.data[i].special + '>专业目录</a></td>';
						}
						if (data.data[i].book_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
						} else {
							tab1 += '<td ><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
						}
						tab1 += '</tr>';
						$('.table1 tbody').append(tab1);
					}
				} else {
					for (var i = 0; i < 15; i++) {
						tab1 = '<tr class="tr-cont"><tr class="tr-cont"><td>' + data.data[i].name + '</td>';
						if (data.data[i].takeinfo_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
						} else {
							tab1 += '<td><a href=' + data.data[i].takeinfo + '>招生简章</a></td>';
						}
						if (data.data[i].special_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].special + '>专业目录</a></td>';
						} else {
							tab1 += '<td><a href=' + data.data[i].special + '>专业目录</a></td>';
						}
						if (data.data[i].book_color == '1') {
							tab1 += '<td class="red"><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
						} else {
							tab1 += '<td ><a href=' + data.data[i].schoolbook + '>参考书目</a></td>';
						}
						tab1 += '</tr>';
						$('.table1 tbody').append(tab1);
					}
				}
			},
			error: function (XHR, textStatus, errorThrown) {
				console.log('error: ' + textStatus);
				console.log('error: ' + errorThrown);
				console.log('error: ' + XHR);
			}
		});
	}

	function gg() {
		$.ajax({
			url: 'https://misc.eol.cn/js/target/pc/ky/zsjz/269.json',
			type: 'get',
			success: function (res) {
				let data = res.data;
				console.log(data);
				let html = ''

				// 轮播图
				for (let i in data) {
					if (i == 10371) {
						for (let j = 0; j < data[i].length; j++) {
							html += `
						<a href="${data[i][j].href}" data-publish= "` + data[i][j].publish_id + `">	
						<div class="item">
						<img src="${data[i][j].img}" alt="">
					</div></a>
						`
						}
						$('.guanggao').html(html)
					}
				}
			}
		})
	}
})
