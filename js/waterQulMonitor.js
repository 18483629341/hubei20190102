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


/*********popup   线框图的相关数据 /手工断面沿江化工企业  ***** */
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
	popupObj.max=function(value){
		var a=value.max*1.2
        return a.toFixed(1);
	};
	popupObj.tabSpanS=$('.PopUpBox_shou .tabSpan');
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
$("body").on('click','.PopUpBox_shou .tabSpan',function(){
	$(this).toggleClass('active');
	initPopCanvas.initCanvas();
})
/*********popup1   线框图的相关数据 /自动站***** */
let popupObj1 = {};
	popupObj1.elementId = 'P2ziCanvas';
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
	popupObj1.max=function(value){
		var a=value.max*1.2
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
