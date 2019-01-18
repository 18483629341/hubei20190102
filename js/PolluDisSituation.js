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
		console.log(popupObj00);
		//popupArr0=initPopupObjByData0.popupObjArr;//净化厂弹窗所有排污的渲染数据组
		initPopCanvas = new InitPopCanvas(popupObj00);
		initPopCanvas.initCanvas();
		//initPopupObjByData0.dragToggle(initPopCanvas);//对某个图像绑定选中排污口后的一系列事件；
		
		//企业弹窗上的线图  的排污口1 绘制
		// initPopupObjByData0=new InitPopupObjByData('.PopUpBox_qi',dataArr1);
		// popupObj00=initPopupObjByData0.init('P2qiCanvas')
		// popupArr0=initPopupObjByData0.popupObjArr;//净化厂弹窗所有排污的渲染数据组
		// initPopCanvas = new InitPopCanvas(popupObj00);
		// initPopCanvas1 = new InitPopCanvas(popupObj1);
		// initPopCanvas.initCanvas();
	});
});

window.onresize=function(){
	autoFit();
	autoFitNav();
	autoFitContent();
	setRadio();
	// initPopCanvas.initCanvas();
	// initPopCanvas.popUpChart.resize();
	// initPopCanvas1.initCanvas();
	// initPopCanvas1.popUpChart.resize();
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
	// 	popupObj1.elementClass = 'P2qiCanvas';
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
let popupObj2 ={};
function InitPopupObjByData(elementClass,Obj){//将数据库转化为绘图  需要的含数组的对象
	this.popUpDataObj={};
	this.popUpDataObj.elementClass=elementClass,
	this.popUpDataObj.xData=Obj.xData;
	this.popUpDataObj.popupObjArr=[];
	this.dataArr=Obj.dataArr;
	this.initArr=function(){
		for(let i=0;i<this.dataArr.length;i++){
			let obj=this.dataArr[i];
			let newPopupObj = {};
			//newPopupObj.elementClass = 'P2jingCanvas';
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
				var a=10.0;
				if(!value){//如果value的值不为null或undefinded
					a=value.max*1.2
				}
				return a.toFixed(1);
			};
			newPopupObj.tabSpanS=$(elementClass+' .tabSpan');
			newPopupObj.seriesArr = [{
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
			this.popUpDataObj.popupObjArr.push(newPopupObj);
		}
		//console.log('this.popUpDataObj.popupObjArr:', this.popUpDataObj.popupObjArr);
	}
	this.initTablist=function(){
		let inhtml='';
		inhtml='<span class="selectSpan ">'+
				'<span class="spanInner active" data-index="0" >'+this.dataArr[0].name+'</span>'+
				 '<i class="icon dropIcon"></i>'+
			'</span>'+
			'<ul class="TreeList" >';
			let listArr='';
		for(let i=0;i<this.dataArr.length;i++){
			let lihtml='';
            if(i==0){
				lihtml='<li class="treeLi active" data-index="0" >'+this.dataArr[i].name+'</li>'
			}else{
				lihtml='<li class="treeLi active" data-index="'+i+'">'+this.dataArr[i].name+'</li>'
			}	
			listArr+=lihtml;	
		}
		inhtml+=listArr;
		inhtml+='</ul>';
		$(this.popUpDataObj.elementClass+' .selectLi').html(inhtml);
	}
	this.init=function(elmentId){
		this.initArr();         //初始化某个弹幕的所有排污口的数组
		this.initTablist();     //初始化某个弹幕的选框的dom
		                    //生成需要渲染第一排污口的线图的 数据  
        console.log(this.popUpDataObj.popupObjArr[0]);
		let obj=this.setPopupObj(this.popUpDataObj.popupObjArr[0]);
			obj.elmentId=elmentId;
			console.log(obj);
		return obj
	}
	this.dragToggle=function(canvasNo){
		let _this=this;
		let elementClass=_this.popUpDataObj.elementClass;
		$("body").on('click',elementClass+' .selectLi',function(e){
			stopBubble(e);
			$(elementClass+' .TreeList').toggleClass('show');
			$(elementClass+' .dropIcon.icon').toggleClass('rotatel');
		})
		$("body").on('click',elementClass+' .treeLi',function(e){
			stopBubble(e);
			var name=$(this).html();
			var i=$(this).attr('data-index');
			$(elementClass+' .spanInner').attr('data-index',index);
			$(elementClass+' .spanInner').html(name);
			$(elementClass+' .treeLi').removeClass("active");
			$(this).addClass("active");
			$(elementClass+' .spanInner').addClass("active");
			setTimeout(function(){
				$(elementClass+' .TreeList').removeClass('show');
				$(elementClass+'.dropIcon.icon').removeClass('rotatel');
			},1000);
			//根据排污口渲染数据；
			var newPopupObj=null;
			console.log("newPopupObj");
			//cloneObj(this.init,newPopupObj);//深度克隆数据
			//newPopupObj=this.setPopupObj(this.popUpDataObj.popupObjArr[i]);//根据i值变化数据源
			//canvasNo.setObj(newObj);//canvas引入数据源
			//canvasNo.initCanvas();//绘制图形
		})
	}
	this.setPopupObj=function(obj){//初始化或更新数据源
		console.log(obj);
		var popupObj2={};
		popupObj2.xData=obj.xData;
		popupObj2.colorArr = ["#fd4800", "#f1ec3f","#72e75e"];
		popupObj2.Yname = 'mg/l';
	
		popupObj2.Ylabel = function(value){
			return value.toFixed(1);
		};
		popupObj2.Yvalue = function(value){
			return value.toFixed(1);
		};
		popupObj2.min='0';
		popupObj2.max=function(value){
			var a=value.max*1.2;
			return a.toFixed(1);
		};
		popupObj2.tabSpanS=$(this.popUpDataObj.elementClass+' .tabSpan');
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
