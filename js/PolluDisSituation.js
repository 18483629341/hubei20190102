$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		autoFitNav();
		autoFitContent();
		//tabToggle();
		listToggle();
		popContorl();
		moduleToggle('.map4');
		//弹窗上的线图绘制
		let initPopCanvas = new InitPopCanvas(popupObj);
		initPopCanvas.initCanvas();
		initPopCanvas.canvasTabToggle();
		let initPopCanvas1 = new InitPopCanvas(popupObj1);
		initPopCanvas.initCanvas();
		initPopCanvas.canvasTabToggle();
	});
});

window.onresize=function(){
	autoFit();
	autoFitNav();
	autoFitContent();
	initPopCanvas.initCanvas();
	initPopCanvas.popUpChart.resize();
	initPopCanvas1.initCanvas();
	initPopCanvas1.popUpChart.resize();
}
/*********popup   线框图 相关数据***** */
let popupObj = {};
	popupObj.elementId = 'P6popUpcanvas';
	popupObj.arrThisYear = ['70', '60', '80', '90', '60', '80', '90', '60', '80', '90', '60', '80']; //!!!!!!!需要后台引入的数据
	popupObj.arrLastYear = ['55', '55', '40', '60', '55', '40', '60', '55', '40', '60', '55', '40', '60']; //!!!!!!!需要后台引入的数据

	popupObj.colorArr = ["#fbe83a", "#00cdff"];
	popupObj.Yname = '单位：%';
	popupObj.seriesArr = [{
			name: '空气优良天气比例',
			type: 'line',
			data: popupObj.arrThisYear,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'

		},
		{
			name: '2017年同期',
			type: 'line',
			stack: '总量',
			data: popupObj.arrLastYear,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'
		}
	];
console.log('popupObj:', popupObj);
/*********popup1  线框图 相关数据对象***** */
let popupObj1 = {};
	popupObj1.elementId = 'P6popUpcanvas';
	popupObj1.arrThisYear = ['70', '60', '80', '90', '60', '80', '90', '60', '80', '90', '60', '80']; //!!!!!!!需要后台引入的数据
	popupObj1.arrLastYear = ['55', '55', '40', '60', '55', '40', '60', '55', '40', '60', '55', '40', '60']; //!!!!!!!需要后台引入的数据

	popupObj1.colorArr = ["#fbe83a", "#00cdff"];
	popupObj1.Yname = '单位：%';
	popupObj1.seriesArr = [{
			name: '空气优良天气比例',
			type: 'line',
			data: popupObj.arrThisYear,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'

		},
		{
			name: '2017年同期',
			type: 'line',
			stack: '总量',
			data: popupObj.arrLastYear,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'
		}
	];
console.log('popupObj1:', popupObj1);

