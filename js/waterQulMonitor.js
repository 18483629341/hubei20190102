$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		autoFitNav();
		autoFitContent();
		//tabToggle();
		listToggle();
		P2popContorl();
		moduleToggle('.map2');
		setRadio();
		//弹窗上的线图绘制
		initPopCanvas = new InitPopCanvas(popupObj);
		initPopCanvas.initCanvas();
		initPopCanvas1 = new InitPopCanvas(popupObj1);
		initPopCanvas1.initCanvas();
		cloneObj(popupObj1,popupObj2);
	});
});

window.onresize = function () {
	autoFit();
	autoFitNav();
	autoFitContent();
	setRadio();  
	initPopCanvas.popUpChart.resize();  
	initPopCanvas.initCanvas();
	initPopCanvas1.popUpChart.resize();
	initPopCanvas1.initCanvas();
	
}
let initPopCanvas=null;
let initPopCanvas1=null;


/*********popup   线框图的相关数据 /纱帽  ***** */
let popupObj = {};
	popupObj.elementId = 'P2comCanvas';
	popupObj.andanArr = [7.0, 6.0, 8.0, 9.0, 6.0, 8.0, 9.0, 6.0, 8.0, 9.0, 6.0, 8.0]; //!!!!!!!需要后台引入的数据
	popupObj.MnArr = [5.5, 5.5, 4.0, 6.0, 5.5, 4.0, 6.0, 5.5, 4.0, 6.0, 5.5, 4.0, 6.0]; //!!!!!!!需要后台引入的数据
	popupObj.PArr = [8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 7.0, 4.0, 6.0, 5.5, 6.0, 5.6]; //!!!!!!!需要后台引入的数据

	popupObj.colorArr = ["#fd4800", "#f1ec3f","#72e75e"];
	popupObj.Yname = 'mg/l';
	
	popupObj.Ylabel = function(value){
		return value.toFixed(1);
	};
	popupObj.Yvalue = function(value){
		return value.toFixed(1);
	};
	popupObj.min='0';
	popupObj.max=function(value){
		var a=value.max*1.2;
        return a.toFixed(1);
	};
	popupObj.tabSpanS=$('.PopUpBox_sha .tabSpan');
	popupObj.seriesArr = [{
			name: '氨氮',
			type: 'line',
			data: popupObj.andanArr,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'
		},
		{
			name: '高锰酸钾指数',
			type: 'line',
			stack: '总量',
			data: popupObj.MnArr,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'
		},{
			name: '总磷',
			type: 'line',
			stack: '总量',
			data: popupObj.PArr,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'
		}
	];
console.log('popupObj:', popupObj);
$("body").on('click','.PopUpBox_sha .tabSpan',function(){
	$(this).toggleClass('active');
	initPopCanvas.initCanvas();
})
/*********popup1   线框图的相关数据 /  自动站 日期类型***** */
let popupObj1 = {};
	popupObj1.elementId = 'P2ziCanvas';
	popupObj1.xData=['10-01','10-02','10-03','10-04','10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12'];
	popupObj1.andanArr = [7.0, 6.0, 8.0, 9.0, 6.0, 8.0, 9.0, 6.0, 8.0, 9.0, 6.0, 8.0]; //!!!!!!!需要后台引入的数据
	popupObj1.MnArr = [5.5, 5.5, 4.0, 6.0, 5.5, 4.0, 6.0, 5.5, 4.0, 6.0, 5.5, 4.0, 6.0]; //!!!!!!!需要后台引入的数据
	popupObj1.PArr = [8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 7.0, 4.0, 6.0, 5.5, 6.0, 5.6]; //!!!!!!!需要后台引入的数据

	popupObj1.colorArr = ["#fd4800", "#f1ec3f","#72e75e"];
	popupObj1.Yname = 'mg/l';
	
	popupObj1.Ylabel = function(value){
		return value.toFixed(1);
	};
	popupObj1.Yvalue = function(value){
		return value.toFixed(1);
	};
	popupObj1.min='0';
	popupObj1.max=function(value){
		var a=value.max*1.2;
        return a.toFixed(1);
	};
	popupObj1.tabSpanS=$('.PopUpBox_zi .tabSpan');
	popupObj1.seriesArr = [{
			name: '氨氮',
			type: 'line',
			data: popupObj.andanArr,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'
		},
		{
			name: '高锰酸钾指数',
			type: 'line',
			stack: '总量',
			data: popupObj.MnArr,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'
		},{
			name: '总磷',
			type: 'line',
			stack: '总量',
			data: popupObj.PArr,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'
		}
	];
console.log('popupObj1:', popupObj1);
$("body").on('click','.PopUpBox_zi .tabSpan',function(){
	$(this).toggleClass('active');
	initPopCanvas1.initCanvas();
})
var isFirst=true;
$("body").on('click','.PopUpBox_zi .timeTypeSpan',function(){
	$('.PopUpBox_zi .timeTypeSpan').removeClass('active');
	$(this).toggleClass('active');
	var type=$(this).attr('data-name');
	if(type=='hour'){
		initPopupObj2();
		initPopCanvas1.setObj(popupObj2);
		initPopCanvas1.initCanvas();//绘制图形
	}else{
        initPopCanvas1.setObj(popupObj1);
		initPopCanvas1.initCanvas();//绘制图形
	}
	initPopCanvas1.initCanvas();
})
/*********popup1   线框图的相关数据 /  自动站 日期类型***** */
let popupObj2 ={};
function initPopupObj2(){
	popupObj2.xData=['2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'];
    popupObj2.andanArr = [9.0, 6.0, 8.0,7.0, 6.0, 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0]; //!!!!!!!需要后台引入的数据
	popupObj2.MnArr = [4.0, 6.0, 5.5,5.5, 5.5, 4.0, 6.0, 5.5,  4.0, 6.0, 5.5, 4.0, 6.0]; //!!!!!!!需要后台引入的数据
	popupObj2.PArr = [6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 7.0, 4.0, 5.6]; //!!!!!!!需要后台引入的数据
	//将三组数组传到   seriesArr数组中
	popupObj2.seriesArr = [{
		name: '氨氮',
		type: 'line',
		data: popupObj2.andanArr,
		smooth: true,
		lineStyle: {
			width: 1,
		},
		symbol: 'none'
	},
	{
		name: '高锰酸钾指数',
		type: 'line',
		stack: '总量',
		data: popupObj2.MnArr,
		smooth: true,
		lineStyle: {
			width: 1,
		},
		symbol: 'none'
	},{
		name: '总磷',
		type: 'line',
		stack: '总量',
		data: popupObj2.PArr,
		smooth: true,
		lineStyle: {
			width: 1,
		},
		symbol: 'none'
	}
];
}


