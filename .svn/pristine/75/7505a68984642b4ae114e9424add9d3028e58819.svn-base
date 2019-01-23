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
		
		
		//纱帽弹窗上的线图   绘制
		
		initPopupObjByData0=new InitPopupObjByData('.PopUpBox_sha',dataSha);
		popupObj0=initPopupObjByData0.init('P2comCanvas');
		initPopCanvas = new InitPopCanvas(popupObj0);
		initPopCanvas.initCanvas();

        //自动站弹窗上的线图   绘制
		
		initPopupObjByData10=new InitPopupObjByData('.PopUpBox_zi',dataZiDate);
		popupObj10=initPopupObjByData10.init('P2ziCanvas');
		initPopupObjByData11=new InitPopupObjByData('.PopUpBox_zi',dataZiHour);
		popupObj11=initPopupObjByData11.init('P2ziCanvas');

		initPopCanvas1 = new InitPopCanvas(popupObj10);
		initPopCanvas1.initCanvas();
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
var initPopupObjByData0=null;
var popupObj0=null;
var initPopupObjByData10=null;
var popupObj10=null;
var initPopupObjByData11=null;
var popupObj11=null;

/*********popup   线框图的相关数据 /纱帽  ***** */
/*********popup1   线框图的相关数据 / 净化厂 的数据对象数组***** */
var dataSha={                                              //！！！！！！！！！！！！！！！！！需要后台传输的数据
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

$("body").on('click','.PopUpBox_sha .tabSpan',function(){
	$(this).toggleClass('active');
	initPopCanvas.initCanvas();
})
/*********popup1   线框图的相关数据 /  自动站 日期类型***** */
var dataZiDate={                                              //！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData:['10-01','10-02','10-03','10-04','10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12'],
	dataArr:[
		{
			name:"",
			andanArr : [ 6.0, 8.0, 9.0,9.0, 6.0, 8.0,7.0, 6.0, 8.0,  9.0, 6.0, 8.0],
			MnArr : [ 4.0, 6.0, 5.5,  4.0,  5.5,4.0, 6.0, 5.5,5.5, 5.5, 4.0, 6.0], 
			PArr : [6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 4.0, 5.6]
		},
		
	]
}
/*********popup1   线框图的相关数据 /  自动站 小时类型***** */
var dataZiHour={                                              //！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData:['2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
	dataArr:[
		{
			name:"",
			andanArr :[9.0, 6.0, 8.0,7.0, 6.0, 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0],
			MnArr :  [4.0, 6.0, 5.5,5.5, 5.5, 4.0, 6.0, 5.5,  4.0, 6.0, 5.5, 4.0, 6.0], 
			PArr :[6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 7.0, 4.0, 5.6]
		},
		
	]
}

// let popupObj1 = {};
	// 	popupObj1.elementId = 'P2ziCanvas';
	// 	popupObj1.xData=['10-01','10-02','10-03','10-04','10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12'];
	// 	popupObj1.andanArr = [7.0, 6.0, 8.0, 9.0, 6.0, 8.0, 9.0, 6.0, 8.0, 9.0, 6.0, 8.0]; //!!!!!!!需要后台引入的数据
	// 	popupObj1.MnArr = [5.5, 5.5, 4.0, 6.0, 5.5, 4.0, 6.0, 5.5, 4.0, 6.0, 5.5, 4.0, 6.0]; //!!!!!!!需要后台引入的数据
	// 	popupObj1.PArr = [8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 7.0, 4.0, 6.0, 5.5, 6.0, 5.6]; //!!!!!!!需要后台引入的数据

	// 	popupObj1.colorArr = ["#fd4800", "#f1ec3f","#72e75e"];
	// 	popupObj1.Yname = 'mg/l';
		
	// 	popupObj1.Ylabel = function(value){
	// 		return value.toFixed(1);
	// 	};
	// 	popupObj1.Yvalue = function(value){
	// 		return value.toFixed(1);
	// 	};
	// 	popupObj1.min='0';
	// 	popupObj1.max=function(value){
	// 		var a=value.max*1.2;
	//         return a.toFixed(1);
	// 	};
	// 	popupObj1.tabSpanS=$('.PopUpBox_zi .tabSpan');
	// 	popupObj1.seriesArr = [{
	// 			name: '氨氮',
	// 			type: 'line',
	// 			data: popupObj1.andanArr,
	// 			smooth: true,
	// 			lineStyle: {
	// 				width: 1,
	// 			},
	// 			symbol: 'none'
	// 		},
	// 		{
	// 			name: '高锰酸钾指数',
	// 			type: 'line',
	// 			stack: '总量',
	// 			data: popupObj1.MnArr,
	// 			smooth: true,
	// 			lineStyle: {
	// 				width: 1,
	// 			},
	// 			symbol: 'none'
	// 		},{
	// 			name: '总磷',
	// 			type: 'line',
	// 			stack: '总量',
	// 			data: popupObj1.PArr,
	// 			smooth: true,
	// 			lineStyle: {
	// 				width: 1,
	// 			},
	// 			symbol: 'none'
	// 		}
	// 	];
	// console.log('popupObj1:', popupObj1);
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
		initPopCanvas1 = new InitPopCanvas(popupObj11);
		initPopCanvas1.initCanvas();
	}else{
     
		initPopCanvas1 = new InitPopCanvas(popupObj10);
		initPopCanvas1.initCanvas();
	}
	initPopCanvas1.initCanvas();
})



