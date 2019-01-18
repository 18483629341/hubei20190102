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
		initPopupObjByData0=new InitPopupObjByData('.PopUpBox_jing',dataArr0);
		popupObj00=initPopupObjByData0.initOne();
		popupArr0=initPopupObjByData0.popupObjArr;//净化厂弹窗所有排污的渲染数据组
		initPopCanvas = new InitPopCanvas(popupObj00);
		initPopCanvas.initCanvas();
		initPopupObjByData0.dragToggle(initPopCanvas);//对某个图像绑定选中排污口后的一系列事件；
		
		//企业弹窗上的线图  的排污口1 绘制
		initPopupObjByData0=new InitPopupObjByData('.PopUpBox_qi',dataArr1);
		popupObj00=initPopupObjByData0.initOne()
		popupArr0=initPopupObjByData0.popupObjArr;//净化厂弹窗所有排污的渲染数据组
		initPopCanvas = new InitPopCanvas(popupObj00);
		initPopCanvas1 = new InitPopCanvas(popupObj1);
		initPopCanvas.initCanvas();
	});
});

window.onresize=function(){
	autoFit();
	autoFitNav();
	autoFitContent();
	setRadio();
	initPopCanvas.initCanvas();
	initPopCanvas.popUpChart.resize();
	initPopCanvas1.initCanvas();
	initPopCanvas1.popUpChart.resize();
}
let initPopCanvas=null;
let initPopCanvas1=null;
var initPopupObjByData0;
var popupObj00;
var popupArr0;
var initPopupObjByData1;
var popupObj10;
var popupArr1;
/*********popup   线框图的相关数据 /手工断面沿江化工企业  ***** */

$("body").on('click','.PopUpBox_jing .tabSpan',function(){
	$(this).toggleClass('active');
	initPopCanvas.initCanvas();
})
/*********popup1   线框图的相关数据 /自动站***** */
	// let popupObj1 = {};
	// 	popupObj1.elementId = 'P2qiCanvas';
	// 	popupObj1.andanArr = ['70', '60', '80', '90', '60', '80', '90', '60', '80', '90', '60', '80']; //!!!!!!!需要后台引入的数据
	// 	popupObj1.MnArr = ['55', '55', '40', '60', '55', '40', '60', '55', '40', '60', '55', '40', '60']; //!!!!!!!需要后台引入的数据
	// 	popupObj1.PArr = ['88', '66', '50', '60', '55', '40', '60', '70', '40', '60', '55', '60', '56']; //!!!!!!!需要后台引入的数据

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
	// 		var a=value.max*1.2
	//         return a.toFixed(1);
	// 	};
	// 	popupObj1.tabSpanS=$('.PopUpBox_qi .tabSpan');
	// 	popupObj1.seriesArr = [{
	// 			name: '氨氮',
	// 			type: 'line',
	// 			data: popupObj.andanArr,
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
	// 			data: popupObj.MnArr,
	// 			smooth: true,
	// 			lineStyle: {
	// 				width: 1,
	// 			},
	// 			symbol: 'none'
	// 		},{
	// 			name: '总磷',
	// 			type: 'line',
	// 			stack: '总量',
	// 			data: popupObj.PArr,
	// 			smooth: true,
	// 			lineStyle: {
	// 				width: 1,
	// 			},
	// 			symbol: 'none'
	// 		}
	// 	];
	// console.log('popupObj1:', popupObj1);
	// $("body").on('click','.PopUpBox_qi .tabSpan',function(){
	// 	$(this).toggleClass('active');
	// 	initPopCanvas1.initCanvas();
	// })

/********排污口 下拉框交互******* */

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
/*********popup1   线框图的相关数据 / 排污口 的数据对象数组***** */
var xData=['10-01','10-02','10-03','10-04','10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12'];
var dataArr0=[                     //                 !!!!!!!需要后台引入的数据
	{
		name:"排污口1",
		andanArr : [9.0, 6.0, 8.0,7.0, 6.0, 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0],
		MnArr : [4.0, 6.0, 5.5,5.5, 5.5, 4.0, 6.0, 5.5,  4.0, 6.0, 5.5, 4.0, 6.0], 
		PArr : [6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 7.0, 4.0, 5.6]
	},
	{
		name:"排污口2",
		andanArr : [6.0, 8.0,  9.0, 6.0, 9.0, 6.0, 8.0,7.0, 6.0, 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0],
		MnArr : [6.0, 5.5,4.0, 5.5, 5.5, 4.0, 6.0, 5.5,  4.0, 6.0, 5.5, 4.0, 6.0], 
		PArr : [4.0, 6.0, 7.0,6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 7.0, 4.0, 5.6]
	},
	{
		name:"排污口3",
		andanArr : [ 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0,9.0, 6.0, 8.0,7.0, 6.0,],
		MnArr : [ 6.0, 3.5,7.0, 6.0, 5.5,  4.0,  4.0, 6.0,4.0, 6.0, 5.5,5.5, 5.5,], 
		PArr : [6.0, 8.8, 6.6, 5.0,6.0, 5.5,  6.0, 5.5, 4.0, 6.0, 7.0, 4.0, 5.6]
	},
]
let popupObj2 ={};
function InitPopupObjByData(elementId,arr){//将数据库转化为绘图  需要的含数组的对象
	this.popUpDataObj={'elementId':elementId,'xData':xData,'popupObjArr':[]};
	this.dataArr=arr;
	this.initArr=function(){
		for(let i=0;i<this.dataArr.length;i++){
			let obj=this.dataArr[i];
			let newPopupObj = {};
			//newPopupObj.elementId = 'P2jingCanvas';
			newPopupObj.andanArr = obj.andanArr;
			newPopupObj.MnArr = obj.MnArr;
			newPopupObj.PArr = obj.MnArr;
			newPopupObj.colorArr = ["#fd4800", "#f1ec3f","#72e75e"];
			newPopupObj.Yname = 'mg/l';
			newPopupObj.Ylabel = function(value){
				return value.toFixed(1);
			};
			newPopupObj.Yvalue = function(value){
				return value.toFixed(1);
			};
			newPopupObj.min='0';
			newPopupObj.max=function(value){
				var a=value.max*1.2
				return a.toFixed(1);
			};
			newPopupObj.tabSpanS=$('.PopUpBox_jing .tabSpan');
			newPopupObj.seriesArr = [{
					name: '氨氮',
					type: 'line',
					data: newPopupObj.andanArr,
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
					data: newPopupObj.MnArr,
					smooth: true,
					lineStyle: {
						width: 1,
					},
					symbol: 'none'
				},{
					name: '总磷',
					type: 'line',
					stack: '总量',
					data: newPopupObj.PArr,
					smooth: true,
					lineStyle: {
						width: 1,
					},
					symbol: 'none'
				}
			];
			this.popUpDataObj.popupObjArr.push(newPopupObj);
		}
		console.log('this.popUpDataObj.popupObjArr:', this.popUpDataObj.popupObjArr);
	}
	this.initOne=function(){//生成需要渲染第一组线图的 数据
		let obj={
			'elementId':elementId,'xData':xData,'seriesArr':this.popUpDataObj.popupObjArr[0]}
		return obj
	}
	this.dragToggle=function(canvasNo){
        var _this=this;
		$("body").on('click',_this.elementId+' .selectLi',function(e){
			stopBubble(e);
			$(_this.elementId+' .TreeList').toggleClass('show');
			$(_this.elementId+' .dropIcon.icon').toggleClass('rotatel');
		})
		$("body").on('click',_this.elementId+' .treeLi',function(e){
			stopBubble(e);
			var name=$(this).html();
			var i=$(this).attr('data-index');
			$(_this.elementId+' .spanInner').attr('data-index',index);
			$(_this.elementId+' .spanInner').html(name);
			$(_this.elementId+' .treeLi').removeClass("active");
			$(this).addClass("active");
			$(_this.elementId+' .spanInner').addClass("active");
			setTimeout(function(){
				$(_this.elementId+' .TreeList').removeClass('show');
				$(_this.elementId+'.dropIcon.icon').removeClass('rotatel');
			},1000);
			//根据排污口渲染数据；
			var newPopupObj=null;
			cloneObj(this.initOne,newPopupObj);//深度克隆数据
			newPopupObj=this.updatePopupObj(this.popUpDataObj.popupObjArr[i]);//根据i值变化数据源
			canvasNo.setObj(newObj);//canvas引入数据源
			canvasNo.initCanvas();//绘制图形
		})
	}
	this.updatePopupObj=function(obj){//更新数据源
		var popupObj2={};
		popupObj2.xData=obj.xData||this.popUpDataObj.xData;
		//将三组数组传到   seriesArr数组中
		popupObj2.seriesArr = [{
				name: '氨氮',
				type: 'line',
				data: obj.andanArr,
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
				data: obj.MnArr,
				smooth: true,
				lineStyle: {
					width: 1,
				},
				symbol: 'none'
			},{
				name: '总磷',
				type: 'line',
				stack: '总量',
				data: obj.PArr,
				smooth: true,
				lineStyle: {
					width: 1,
				},
				symbol: 'none'
			}
		];
		return popupObj2;
	}
}


$("body").on('click','.PopUpBox_jing .tabSpan',function(){
	$(this).toggleClass('active');
	initPopCanvas.initCanvas();
})
