
/****************************
 *   此js主要对样式的控制：宽高，边距的全自适应
 *          tab切换时对样式的控制
 *     
 * *************** */
var LeftNav=document.querySelector(".LeftNav");
var RightNav=document.querySelector(".RightNav");
var tablis=document.querySelectorAll(".tabli");
var TabLiContents=document.querySelectorAll(".TabLiContent");
var W=null;
var H=null;

//header部分里面的所有元素的宽高全自适应方法

function autoFit(){
	W=window.innerWidth;
	if(W<1366){
		W=1366;
	}
	if(window.innerHeight>parseInt(W*2160/3840)){
		H=window.innerHeight;
	}else{
		H=parseInt(W*2160/3840);
	}
	var BackDiv=document.querySelector(".BackDiv");
	BackDiv.style.width=parseInt(W*3526/3840)+"px";
	var H1=parseInt(W*323/3840);
	BackDiv.style.height=H1+"px";

	//HeaderCenter元素的宽度高度控制
	var H2=parseInt(W*230/3840);
	var HeaderCenter=document.querySelector(".HeaderCenter");
	var TitleImg=document.querySelector(".TitleImg");
	HeaderCenter.style.width=parseInt(W*1036/3840)+"px";
	TitleImg.style.width=HeaderCenter.style.width;

	//HeaderCenter内所有元素的高度控制
	HeaderCenter.style.height=H2+"px";
	document.querySelector(".h28").style.height=parseInt(H2*28/230)+"px";
	TitleImg.style.height=parseInt(H2*(77/230))+"px";
	var SubTitleP=document.querySelector(".SubTitleP");
	SubTitleP.style.lineHeight=parseInt(H2*93/230)+"px";
	SubTitleP.style.fontSize=parseInt(H2*62.5/230)+"px";
	SubTitleP.style.paddingTop=parseInt(H2*16/230)+"px";
}


//nav部分的全自适应方法

function autoFitNav(){
	 //W=window.innerWidth;
	
	//nav元素的宽度高度控制
	document.querySelector(".nav").style.top=-parseInt(W*40/3840)+"px";
	var H2=parseInt(W*230/3840);
	
	LeftNav.style.width=parseInt(W*1150/3840)+"px";
	RightNav.style.width=parseInt(W*1120/3840)+"px";
	LeftNav.style.height=RightNav.style.height=parseInt(W*90/3840)+"px";

	//.tabli内所有元素的高度控制

	for(var i=0;i<tablis.length;i++){
		var element=tablis[i];
		element.style.width=parseInt(W*360/3840)+"px";
		element.style.height=parseInt(W*90/3840)+"px";
		element.style.fontSize=parseInt(W*35/3840)+"px";
		element.style.paddingTop=parseInt(W*25/3840)+"px";
	}

	//.TabLiContent内所有元素的宽度控制
	for(var i=0;i<TabLiContents.length;i++){
		var element=TabLiContents[i];
		element.style.width=parseInt(W*338/3840)+"px";
	}
}
//nav部分的全自适应方法

function autoFitContent(){
	//LeftSummary元素的上边距控制
	var top1=parseInt(W*54/3840);
	var LeftSummarys=document.querySelectorAll(".LeftSummary");
	for(var i=0;i<LeftSummarys.length;i++){
		var element=LeftSummarys[i];
		element.style.top=top1+"px";
		element.style.left=parseInt(W*67/3840)+"px";;
	}
	//GisTabs元素的上边距控制
	var RightBoxs=document.querySelectorAll(".RightBox");
	for(var i=0;i<RightBoxs.length;i++){
		var element=RightBoxs[i];
		element.style.top=top1+"px";
	}
	var MapBoxs= document.querySelectorAll(".MapBox");
	for(var i=0;i<MapBoxs.length;i++){
		var element=MapBoxs[i];
		//console.log(H,H-W*323/3840);
		element.style.height=parseInt(H-W*323/3840)+"px";
	}
}

//tab切换方法
 /*   //header的标签切换
function tabToggle(){
	$("body").on('click','.tabli',function(){
		$('.tabli').removeClass('active');
		$(this).addClass('active');
		var v=$(this).attr("data-index");
		//console.log($(this),v)
		$('.TabContent').removeClass('show');
		$('.TabContent[data-index="'+v+'"]').addClass('show');
	})
	//tab切换时也要做样式自适应的控制
	autoFitContent();
}*/

var flag=false;
function listToggle(){
    $("body").on('click','.tableIcon',function(){
		$(this).toggleClass('rotate180');
		if(!flag){
			var w=$('.RightBox').outerWidth();
			flag=true;
		}
		//console.log(w);
		$('.RightBox').toggleClass('hidden');
		$('.RightBox').outerWidth(w+2);
		$('.RightBox').width(w+2);
	})
}

/**************弹窗显示/隐藏控制****** */

function popContorl(){
    $(document).mouseup(function(e){
        var _con = $('.PopUpBox '); // 设置目标区域 
       if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
           // Mark 1 some code... // 功能代码
           $('.PopUpBox').removeClass('show');
          // console.log('');
    }});
    $("body").on('click','.PopUpclose',function(){
        $('.PopUpBox').removeClass('show');
    })
    $("body").on('click','.ax_default',function(){
        $('.PopUpBox').toggleClass('show');
    })
}
function P2popContorl(){
    $(document).mouseup(function(e){
        var _con = $('.PopUpBox '); // 设置目标区域 
       if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
           // Mark 1 some code... // 功能代码
           $('.PopUpBox').removeClass('show');
          // console.log('');
    }});
    $("body").on('click','.PopUpclose',function(){
        $('.PopUpBox').removeClass('show');
    })
    $("body").on('click','.ax_default',function(){
		let name=$(this).attr('data-name');
		$('.PopUpBox').removeClass('show');
		$(".PopUpBox_"+name).addClass('show');
    })
}
function hasActive(str){
    var reg=/active*/;
    return reg.test(str);
}
var radio=1;
function setRadio(){
    radio=parseFloat(W/3840); 
}
/*  主页面和市区页面交替   */
function moduleToggle(Prodiv) {
	$("body").on('click', '.goWuhan', function () {
		intoggle();
		$(Prodiv).removeClass('active');
		
	})
	$("body").on('click', '.GoAwayWuhan', function () {
		intoggle();
		$(Prodiv).addClass('active');
	})

	function intoggle() {
		$('.goWuhan').toggleClass('show');
		$('.GoAwayWuhan').toggleClass('show');
		$('.mapWuhan').toggleClass('active');
	}
}
/************scroll bar 封装方法******* */
function autoScrollFun(element){//参数为需要滚动的容器
		
	var content=$(element),autoScrollTimer=8000,autoScrollTimerAdjust,autoScroll;
	
	content.mCustomScrollbar({
		scrollButtons:{enable:false},
		callbacks:{
			whileScrolling:function(){
				autoScrollTimerAdjust=autoScrollTimer*this.mcs.topPct/100;
			},
			onScroll:function(){ 
				if($(this).data("mCS").trigger==="internal"){AutoScrollOff();}
			}
		}
	});
	
	content.addClass("auto-scrolling-on auto-scrolling-to-bottom");
	AutoScrollOn("bottom");
	
	$(".auto-scrolling-toggle").click(function(e){
		e.preventDefault();
		if(content.hasClass("auto-scrolling-on")){
			AutoScrollOff();
		}else{
			if(content.hasClass("auto-scrolling-to-top")){
				AutoScrollOn("top",autoScrollTimerAdjust);
			}else{
				AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
			}
		}
	});
	
	function AutoScrollOn(to,timer){
		if(!timer){timer=autoScrollTimer;}
		content.addClass("auto-scrolling-on").mCustomScrollbar("scrollTo",to,{scrollInertia:timer,scrollEasing:"easeInOutSmooth"});
		autoScroll=setTimeout(function(){
			if(content.hasClass("auto-scrolling-to-top")){
				AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
				content.removeClass("auto-scrolling-to-top").addClass("auto-scrolling-to-bottom");
			}else{
				AutoScrollOn("top",autoScrollTimerAdjust);
				content.removeClass("auto-scrolling-to-bottom").addClass("auto-scrolling-to-top");
			}
		},timer);
	}
	
	function AutoScrollOff(){
		clearTimeout(autoScroll);
		content.removeClass("auto-scrolling-on").mCustomScrollbar("stop");
	}
}
var arrMonth4=['1月','2月', '3月','4月','5月', '6月','7月','8月', '9月','10月', '11月','12月']  //!!!!!!!需要后台引入的数据

function InitPopCanvas(obj){
	this._obj=obj
	this.elementId=this._obj.elementId;
	this.colorArr=this._obj.colorArr;
	this.seriesArr=this._obj.seriesArr;
	this.Yname=this._obj.Yname;
	this.popUpChart=echarts.init(document.getElementById(this._obj.elementId));
	this.tabSpanS=this._obj.tabSpanS;
	this.setObj=function(newObj){
        this._obj=newObj
	}
	this.initCanvas=function(){
		//console.log(tabSpanS);
		let _colors=[];
		let _series=[];
		for(let i=0;i<this.tabSpanS.length;i++){
			var item=this.tabSpanS[i];
			//if(item.className.)
		   if(hasActive(item.className)){
				_colors.push(this._obj.colorArr[i]);
				_series.push(this._obj.seriesArr[i]);
		   }
			//if(item.className.)
		}
		//console.log(this.tabSpanS);
		var newOption=this.getPopOption(_colors,_series);
		this.popUpChart.setOption(newOption,{
			notMerge: true,
		});
	}
	this.getPopOption=function(colorP,seriesP){
		var option = {
			color:colorP,//调色板
			tooltip : {
				//show:false,
				trigger: 'axis',
				axisPointer: {
					type: 'line',
					label: {
						backgroundColor: '#6a7985'
					}
				},
				//formatter:this._obj.Yvalue||'{a}{}{c}'
			},
			grid: {
				top:parseInt(100*radio),
				left: '0%',
				right: '0%',
				bottom: 0,
				containLabel: true,
				show:false
			},
			xAxis: {
				type: 'category',
				onZero:true,
				axisLine: {//X轴线的设置
					show: false,
					lineStyle:{
						color:"#fff",
						type:'dashed'
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {        
					show: true,
					textStyle: {
						color: '#fff',
					   // fontSize:parseInt(12*radio)
					}
				},
				data: this._obj.xData||arrMonth4,
				boundaryGap:false
			},
			yAxis: {
				type: 'value',
				name:this._obj.Yname,
				nameLocation:'end',
				nameTextStyle:{
					color:'#fff',
					align:'left',
					padding: [0,0,10*radio,0]
				},
				axisLabel: {        
					show: true,
					textStyle: {
						color: '#fff',
						//fontSize:parseInt(15*radio)
					},
					formatter:this._obj.Ylabel||'{value}'
				},
				axisLine: {//Y轴线的设置
					show: false,
				},
				axisTick: {
					show: false
				},
				splitLine: {//Y轴线的设置
					show: true,
					lineStyle:{
						color:["#fff"],
						type:'dashed'
					}
				},
				max:this._obj.max||100,
				min:this._obj.min,
				boundaryGap:['0%','0%']
			},
			series: seriesP
		};
		return option;
	}

}

/* .深度克隆 对象（针对 对象 或 对象数组 或 数组） 经典 */
 
function cloneObj(origin, target) {   
	console.log()
	var target = target || {};
	if (origin instanceof Array) {
		target = [];
	} else if (origin == null) {//null或者undefined时
		target = origin;
	}
	for (var key in origin) { //此方法即可遍历对象，也可遍历数组
		target[key] = typeof val === 'object' ? cloneObj(origin[key], target[key]) : origin[key];
		//typeof val==='object' 数组和对象以及null
	}
	return target;
}
