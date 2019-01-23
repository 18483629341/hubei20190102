$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		autoFitNav();
		autoFitContent();
		//tabToggle();
		listToggle();
		popContorl()
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		/* 主页面和市区页面交替   */
		moduleToggle('.map3');
		//autoScrollFun('#scrollBox1');
		setRadio();
		//弹窗上的线图绘制
		var initPopupObjByData0 = null;
		var popupObj00 = null;
		initPopupObjByData0 = new InitPopupObjByData('.PopUpBox_da', dataTa);
		popupObj00 = initPopupObjByData0.init('P2daCanvas');
		initPopCanvas = new InitPopCanvas(popupObj00);
		initPopCanvas.initCanvas();
	})


});

window.onresize = function () {
	autoFit();
	autoFitNav();
	autoFitContent();
	//使用resize()主动的去绑定这个事件
	myChart.resize(); //根据窗口的大小变动图表 --- 重点 
	initPopCanvas.initCanvas();
	initPopCanvas.popUpChart.resize();
}
let initPopCanvas = null;
/*************
 * 
 * 相应也页面的饼状图渲染
 * 
 * */
var myChart = echarts.init(document.getElementById('CompRateCanvas01'));
var array = [25.5, 74.5]; //达标的数据和不达标的数据组成的数组                                 //需要后台引入的数据
// 指定饼状图的配置项和数据
var option = {
	color: ['#081039'], //调色板，这里为圆环的底色
	series: [{
		name: 'Line 1',
		type: 'pie',
		clockWise: true,
		startAngle: 0, //圆环的绘画的起始角度
		radius: [0, '69%'], //圆环的半径比例
		itemStyle: {
			normal: {
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		},
		hoverAnimation: false,
		data: [{
			value: array[0], //注意：这里是达标的数据1，还需要不达标的数据2（在下面），才能展示正确的百分比
			name: '01',
			itemStyle: {
				normal: {
					color: 'transparent',
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				},
			}
		}, {
			name: '02',
			value: array[1], //注意：这里是不达标的数据2
		}]
	}]
};





/*********popup   线框图的相关数据 /跨界断面达标情况  ***** */
var dataTa={                                              //！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData:['10-01','10-02','10-03','10-04','10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12'],
	dataArr:[
		{
			name:"",
			andanArr : [9.0, 6.0, 8.0,7.0, 6.0, 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0],
			MnArr : [4.0, 6.0, 5.5,5.5, 5.5, 4.0, 6.0, 5.5,  4.0,  5.5, 4.0, 6.0], 
			PArr : [6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 4.0, 5.6]
		},
		
	]
}

// let popupObj = {};
	// popupObj.elementId = 'P2daCanvas';
	// popupObj.andanArr = ['70', '60', '80', '90', '60', '80', '90', '60', '80', '90', '60', '80']; //!!!!!!!需要后台引入的数据
	// popupObj.MnArr = ['55', '55', '40', '60', '55', '40', '60', '55', '40', '60', '55', '40', '60']; //!!!!!!!需要后台引入的数据
	// popupObj.PArr = ['88', '66', '50', '60', '55', '40', '60', '70', '40', '60', '55', '60', '56']; //!!!!!!!需要后台引入的数据

	// popupObj.colorArr = ["#fd4800", "#f1ec3f", "#72e75e"];
	// popupObj.Yname = 'mg/l';

	// popupObj.Ylabel = function (value) {
	// 	return value.toFixed(1);
	// };
	// popupObj.Yvalue = function (value) {
	// 	return value.toFixed(1);
	// };
	// popupObj.min = '0';
	// popupObj.max = function (value) {
	// 	var a = value.max * 1.2;
	// 	return a.toFixed(1);
	// };
	// popupObj.tabSpanS = $('.PopUpBox_da .tabSpan');
	// popupObj.seriesArr = [{
	// 		name: '高锰酸钾指数',
	// 		type: 'line',
	// 		stack: '总量',
	// 		data: popupObj.MnArr,
	// 		smooth: true,
	// 		lineStyle: {
	// 			width: 1,
	// 		},
	// 		symbol: 'none'
	// 	},
	// 	{
	// 		name: '氨氮',
	// 		type: 'line',
	// 		data: popupObj.andanArr,
	// 		smooth: true,
	// 		lineStyle: {
	// 			width: 1,
	// 		},
	// 		symbol: 'none'
	// 	},
	// 	{
	// 		name: '总磷',
	// 		type: 'line',
	// 		stack: '总量',
	// 		data: popupObj.PArr,
	// 		smooth: true,
	// 		lineStyle: {
	// 			width: 1,
	// 		},
	// 		symbol: 'none'
	// 	}
	// ];
//console.log('popupObj:', popupObj);
$("body").on('click', '.PopUpBox_da .tabSpan', function () {
	$(this).toggleClass('active');
	
	initPopCanvas.initCanvas();

})