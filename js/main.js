
/****************************
 *   此js主要对样式的控制：宽高，边距的全自适应
 *          tab切换时对样式的控制
 *     
 * *************** */
// var LeftNav=document.querySelector(".LeftNav");
// var RightNav=document.querySelector(".RightNav");
// var tablis=document.querySelectorAll(".tabli");
// var TabLiContents=document.querySelectorAll(".TabLiContent");
var swidth =null;
var W=null;
//header部分里面的所有元素的宽高全自适应方法

function autoFit(){
	 swidth = $(window).width();
		if(swidth > 1366 || swidth === 1366){
			resize();
		}
}
//resize();
//整屏等比缩放


function resize() {
	var winratio = $(window).width()/3840;
	$('body').css({
	  transform: "scale("+winratio+")",
	  transformOrigin: "left top"
	});
	$(window).height(parseInt(winratio*2160));
}

//nav部分的全自适应方法

function autoFitNav(){
	
}
//nav部分的全自适应方法

function autoFitContent(){
}



var flag=false;
function listToggle(){
    $("body").on('click','.tableIcon',function(){
		$(this).toggleClass('rotate180');
		if(!flag){
			var w=$('.RightBox').outerWidth();
			flag=true;
		}
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
    radio=parseFloat(swidth/3840); 
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
	var $this = $(element);
    var scrollTimer;
    $this.hover(function() {
        clearInterval(scrollTimer);
    }, function() {
        scrollTimer = setInterval(function() {
            scrollNews($this);
        }, 2000);
    }).trigger("mouseleave");

    function scrollNews(obj) {
		console.log($(element).find(".table"));
		if(obj.find(".table").length){
			var $self = obj.find(".table");
			var lineHeight = $self.find("tr:first").height(); 
			$self.animate({
				"marginTop": -lineHeight + "px"
			}, 600, function() {
				$self.css({
					marginTop: 0
				}).find("tr:first").appendTo($self);
			})
		}
    }
		
    var goTop=setTimeout(function(){
		$self.css({
			marginTop: 0
		},5000)
	})
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
		let _colors=[];
		let _series=[];
		var noActiveN=0;
		for(let i=0;i<this.tabSpanS.length;i++){
			var item=this.tabSpanS[i];
			//if(item.className.)
		   if(hasActive(item.className)){
				_colors.push(this._obj.colorArr[i]);
				_series.push(this._obj.seriesArr[i]);
		   }else{
				noActiveN++;
		   }

		      if(noActiveN==3){//至少显示第一条
				_colors=this._obj.colorArr[0];
				_series=this._obj.seriesArr[0];
				$(this.tabSpanS[0]).addClass('active');
			  }
			//if(item.className.)
		}
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
						backgroundColor: '#6a7985',
						fontSize:32
					}
				},
			},
			grid: {
				top:80,
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
						color:"#324b75",
						type:'dashed'
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {        
					show: true,
					textStyle: {
						color: '#c3d4ff',
					   fontSize:32
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
					color:'#c3d4ff',
					align:'left',
					padding: [0,0,20,0],
					fontSize:32
				},
				axisLabel: {        
					show: true,
					textStyle: {
						color: '#c3d4ff',
						fontSize:32
					},
					formatter:this._obj.formatter||'{value}'
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
						color:["#324b75"],
						type:'dashed'
					}
				},
				max:this._obj.max,
				min:this._obj.min,
				boundaryGap:['0%','0%']
			},
			series: seriesP
		};
		return option;
	}

}
function InitPopupObjByData(elementClass,Obj){//将数据库转化为绘图 针对排污情况P4页面的方法  需要的含数组的对象
	//elementClass 弹窗的最大容器的独特的类  ,如‘.PopUpBox_jing’
	this.popUpDataObj={};
	this.popUpDataObj.elementClass=elementClass,
	this.popUpDataObj.xData=Obj.xData;
	this.popUpDataObj.popupObjArr=[];
	this.dataArr=Obj.dataArr;
	this.initTablist=function(){//初始化某个弹幕的选框的dom
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
				lihtml='<li class="treeLi" data-index="'+i+'">'+this.dataArr[i].name+'</li>'
			}	
			listArr+=lihtml;	
		}
		inhtml+=listArr;
		inhtml+='</ul>';
		$(this.popUpDataObj.elementClass+' .selectLi').html(inhtml);
	}
	this.init=function(elementId){
		                    //生成需要渲染第一排污口的线图的 数据  
		let obj=this.setPopupObj(this.dataArr[0]);
			obj.elementId=elementId;
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
			$(elementClass+' .spanInner').attr('data-index',i);
			$(elementClass+' .spanInner').html(name);
			$(elementClass+' .treeLi').removeClass("active");
			$(this).addClass("active");
			$(elementClass+' .spanInner').addClass("active");
			setTimeout(function(){
				$(elementClass+' .TreeList').removeClass('show');
				$(elementClass+' .dropIcon.icon').removeClass('rotatel');
			},1000);
			//根据排污口渲染数据；
			var newPopupObj=null;
			//cloneObj(_this.init,newPopupObj);//深度克隆数据
			newPopupObj=_this.setPopupObj(_this.dataArr[i]);//根据i值变化数据源
			canvasNo.setObj(newPopupObj);//canvas引入数据源
			canvasNo.initCanvas();//绘制图形
		})
	}
	this.setPopupObj=function(obj){//初始化或更新数据源
		var popupObj2={};
		popupObj2.xData=Obj.xData;//注意Obj为原型参数
		popupObj2.colorArr = ["#fd4800", "#f1ec3f","#72e75e"];
		popupObj2.Yname = 'mg/l';
	    popupObj2.andanArr = obj.andanArr;
		popupObj2.MnArr =obj.MnArr;
		popupObj2.PArr = obj.PArr;
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
					width: 2,
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
					width: 2,
				},
				symbol: 'none'
			},{
				name: '总磷',
				type: 'line',
				stack: '总量',
				data: obj.PArr,
				smooth: true,
				lineStyle: {
					width: 2,
				},
				symbol: 'none'
			}
		];
		return popupObj2;
	}
}
/* .深度克隆 对象（针对 对象 或 对象数组 或 数组） 经典 */
 
function cloneObj(origin, target) {   
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
