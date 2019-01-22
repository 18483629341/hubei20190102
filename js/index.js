$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		//tabToggle();
		mapToggle();
		listToggle();
		P1moduleToggle();
		
	});
});

window.onresize = function () {
	autoFit();
}
//GIS图和概要图的标签切换 
var mainActive = 'map1'; //主页面活动的模块div
function mapToggle() {
	//P1tabLi
	$("body").on('click', '.P1tabLi', function () {
		$(this).siblings('.P1tabLi').removeClass('active');
		$(this).addClass('active');
		if ($(this).attr("data-map") == "GIS") {
			$('.map1').removeClass('active');
			$('.map11').addClass('active');
			mainActive='map11';
		} else {
			$('.map11').removeClass('active');
			$('.map1').addClass('active');
			mainActive='map1';
		}
	})
}

/* 市区显示和主页面交替   */
function P1moduleToggle() {
	$("body").on('click', '.goWuhan', function () {
		intoggle();

		$('.map1').removeClass('active');
		$('.map11').removeClass('active');
	})
	$("body").on('click', '.GoAwayWuhan', function () {
		intoggle();
		$('.MapBox').removeClass('active');
		$('.' + mainActive).addClass('active');
	})

	function intoggle() {
		$('.goWuhan').toggleClass('show');
		$('.GoAwayWuhan').toggleClass('show');
		$('.mapWuhan').toggleClass('active');
	}
}