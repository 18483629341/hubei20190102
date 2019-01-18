$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		autoFitNav();
		autoFitContent();
		//tabToggle();
		listToggle();
		P2popContorl();
		moduleToggle('.map4');
		setRadio();
		//净化厂弹窗上的线图  的排污口1 绘制
		initPopupObjByData0=new InitPopupObjByData('.PopUpBox_jing',dataJing);
		popupObj00=initPopupObjByData0.init('P2jingCanvas');
		initPopCanvas = new InitPopCanvas(popupObj00);
		initPopCanvas.initCanvas();
		initPopupObjByData0.dragToggle(initPopCanvas);  //  选项框选中后的一系列方法；
		
		//企业弹窗上的线图  的排污口1 绘制
			
			initPopupObjByData1=new InitPopupObjByData('.PopUpBox_qi',dataQi);
			popupObj10=initPopupObjByData1.init('P2qiCanvas');
			initPopCanvas1 = new InitPopCanvas(popupObj10);
			initPopCanvas1.initCanvas();
			initPopupObjByData1.dragToggle(initPopCanvas1);  //  选项框选中后的一系列方法；
	});
});

window.onresize=function(){
	autoFit();
	autoFitNav();
	autoFitContent();
	setRadio();
	initPopCanvas.initCanvas();
	initPopCanvas.popUpChart.resize();
	// initPopCanvas1.initCanvas();
	// initPopCanvas1.popUpChart.resize();
}
/*********popup   线框图的相关数据 /手工断面沿江化工企业  ***** */

$("body").on('click','.PopUpBox_jing .tabSpan',function(){
	$(this).toggleClass('active');
	initPopCanvas.initCanvas();
})
let initPopCanvas=null;
let initPopCanvas1=null;
var initPopupObjByData0;
var popupObj00;
var popupArr0;
var initPopupObjByData1;
var popupObj10;
var popupArr1;

/*********popup1   线框图的相关数据 /自动站***** */
	
	$("body").on('click','.PopUpBox_qi .tabSpan',function(){
		$(this).toggleClass('active');
		initPopCanvas1.initCanvas();
	})



function stopBubble(e) { 
	//如果提供了事件对象，则这是一个非IE浏览器 
	if ( e && e.stopPropagation ) {
		//因此它支持W3C的stopPropagation()方法 
		e.stopPropagation(); 
	}else {
		//否则，我们需要使用IE的方式来取消事件冒泡 
		window.event.cancelBubble = true; 
	}
}
/*********popup1   线框图的相关数据 / 净化厂 的数据对象数组***** */
var dataJing={                                              //！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData:['10-01','10-02','10-03','10-04','10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12'],
	dataArr:[
		{
			name:"排污口1",
			andanArr : [9.0, 6.0, 8.0,7.0, 6.0, 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0],
			MnArr : [4.0, 6.0, 5.5,5.5, 5.5, 4.0, 6.0, 5.5,  4.0,  5.5, 4.0, 6.0], 
			PArr : [6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 4.0, 5.6]
		},
		{
			name:"排污口2",
			andanArr : [6.0, 8.0,  9.0, 6.0, 9.0, 6.0, 8.0,7.0, 8.0,  9.0, 6.0, 8.0],
			MnArr : [6.0, 5.5,4.0, 5.5, 5.5, 4.0, 6.0, 5.5,  4.0, 6.0, 5.5, 4.0], 
			PArr : [4.0, 6.0, 7.0,6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 7.0, 5.6]
		},
		{
			name:"排污口3",
			andanArr : [ 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0,9.0, 6.0, 8.0,7.0, 6.0],
			MnArr : [ 6.0, 3.5,7.0, 6.0, 5.5,  4.0,  4.0, 6.0,4.0, 6.0, 5.5,5.5 ], 
			PArr : [6.0, 8.8, 6.6, 5.0,6.0, 5.5,  6.0, 5.5, 4.0, 6.0, 7.0, 4.0]
		},
	]
}
/*********popup2   线框图的相关数据 / 排污口 的数据对象数组***** */
var dataQi={                                              //！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData:['10-01','10-02','10-03','10-04','10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12'],
	dataArr:[
		{
			name:"排污口1",
			andanArr : [9.0, 6.0, 8.0,7.0, 6.0, 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0],
			MnArr : [4.0, 6.0, 5.5,5.5, 5.5, 4.0, 6.0, 5.5,  4.0,  5.5, 4.0, 6.0], 
			PArr : [6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 4.0, 5.6]
		},
		{
			name:"排污口2",
			andanArr : [6.0, 8.0,  9.0, 6.0, 9.0, 6.0, 8.0,7.0, 8.0,  9.0, 6.0, 8.0],
			MnArr : [6.0, 5.5,4.0, 5.5, 5.5, 4.0, 6.0, 5.5,  4.0, 6.0, 5.5, 4.0], 
			PArr : [4.0, 6.0, 7.0,6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 7.0, 5.6]
		},
		{
			name:"排污口3",
			andanArr : [ 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0,9.0, 6.0, 8.0,7.0, 6.0],
			MnArr : [ 6.0, 3.5,7.0, 6.0, 5.5,  4.0,  4.0, 6.0,4.0, 6.0, 5.5,5.5 ], 
			PArr : [6.0, 8.8, 6.6, 5.0,6.0, 5.5,  6.0, 5.5, 4.0, 6.0, 7.0, 4.0]
		},
	]
}



