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



