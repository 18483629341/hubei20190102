

$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		//autoFitNav();
		autoFitContent();
		//tabToggle();
        mapToggle2();
        RankToggle();
        P6moduleToggle();
        setRadio();
        autoScrollFun('#scrollBox1');
        autoScrollFun('#scrollBox2');
        autoScrollFun('#scrollBox3');
        popContorl();
        //弹窗上的线图绘制
        initPopCanvas=new InitPopCanvas(popupObj);
        initPopCanvas.initCanvas();
        // 使用刚指定的配置项和数据显示图表。
        //饼图
         myChart21.setOption(option21);
         myChart22.setOption(option22);
         myChart23.setOption(option23);
         myChart24.setOption(option24);
         //左列表线图
         myChart3.setOption(option31);
         
         
	});
});
let initPopCanvas=null;
window.onresize=function(){
	autoFit();
    autoFitContent();
    setRadio();
    console.log(W,radio);
   // changeTop()
    myChart21.resize();//根据窗口的大小 变动图表 --- 重点 
    myChart22.resize();
    myChart23.resize();
    myChart24.resize();
    myChart3.resize();
    initPopCanvas.popUpChart.resize();
    initPopCanvas.initCanvas();
}

/*************
 * 
 * 相应也页面的饼状图渲染
 * 
 * */
var myChart21 = echarts.init(document.getElementById('CompRateCanvas021'));
var myChart22 = echarts.init(document.getElementById('CompRateCanvas022'));
var myChart23 = echarts.init(document.getElementById('CompRateCanvas023'));
var myChart24 = echarts.init(document.getElementById('CompRateCanvas024'));
var option21=setOptionfun('#023157','98.5%');
var option22=setOptionfun('#03143a','93%');
var option23=setOptionfun('#023157','70%');
var option24=setOptionfun('#03143a','64.5%');
                             
// 指定饼状图的配置项和数据
function setOptionfun(color,radius){
    var arr=[78.5,21.5]; //达标的数据和不达标的数据组成的数组     //!!!!!!!需要后台引入的数据
    var option = {
        color: [color], //调色板，这里为圆环的底色
        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            startAngle:0,//圆环的绘画的起始角度
            radius: [0, radius],//圆环的半径比例
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false, 
            data: [{
                value: arr[0],//注意：这里是达标的数据1，还需要不达标的数据2（在下面），才能展示正确的百分比
                name: '01',
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                }
            }, {
                name: '02',
                value: arr[1],//注意：这里是不达标的数据2
            }]
        }]
    };
    return option;
}
/* 地图div的交互   */
var mainActive = 'map6'; //主页面活动的模块div
function mapToggle2(){
	//P1tabLi
	$("body").on('click','.P6tabLi',function(){
		$(this).siblings('.P6tabLi').removeClass('active');
		$(this).addClass('active');
	    if($(this).attr("data-map")=="PM1"){
			$('.map6').removeClass('active');
            $('.map61').addClass('active');
            mainActive='map61';
            $('.js_title').html('全省2018年PM<sub>2.5</sub>年均浓度变化趋势');           
            myChart3.setOption(option32);
            $('.P6legendBox1').addClass('show');
		}else if($(this).attr("data-map")=="GoodWeath1"){
			$('.map61').removeClass('active');
            $('.map6').addClass('active');
            mainActive='map6';
            $('.js_title').html('全省2018年优良天数比例变化趋势');
            myChart3.setOption(option31);
            $('.P6legendBox1').removeClass('show');
		}
    })
}

/* 排名相关点击交互   */
function RankToggle(){
    $("body").on('click','.P6tabLi3',function(){
        console.log("2");
		$(this).siblings('.P6tabLi3').removeClass('active');
        $(this).addClass('active');
        
    })
    $("body").on('click','.P6ArrowIcon',function(){
        console.log("2");
		$(this).siblings('.P6ArrowIcon').removeClass('active');
		$(this).addClass('active');
	})
}
/*************
 * 
 * 左边列表页面的线图渲染
 * 
 * */
var myChart3 = echarts.init(document.getElementById('goodWeatherCanvas'));
var areaBack='rgba(1,53,91,.3)';

//!!!!!!!需要后台引入的数据  全省年均值的数据

var goodWheatherData={
    arrMonth:['1月','2月', '3月','4月','5月', '6月','7月','8月', '9月','10月', '11月','12月'],
    arrThisYear:['70', '60','80','90' ,'60','80','90', '60','80','90' ,'60','80'],
    aIndex:'75',
    arrLastYear:['55','55','40','60','55','40','60','55','40','60','55','40','60'],
    label:'单位：%',
    formatter:'{value}',
    max:'100',
} 
var PMData={
    arrMonth:['1月','2月', '3月','4月','5月', '6月','7月','8月', '9月','10月', '11月','12月'],
    arrThisYear:['250', '160','240','190' ,'160','80','90', '160','80','90' ,'160','180'],
    aIndex:'100',
    arrLastYear:['155','155','140','160','155','140','160','155','140','160','155','140','160'],
    label:'ug/m3',
    formatter:'{value}',
    max:function(value){
        var a=value.max*1.2;
        return a.toFixed(1);
    },
} 

var option31=getOption3(goodWheatherData);
var option32=getOption3(PMData);
function getOption3(obj){
    var arrIndex=[];
    for(var i=0;i<12;i++){
        arrIndex.push(goodWheatherData.aIndex);
    }
    var option= {
        color:["#72e75e","#00e4ff","#f7823c"],//调色板
        tooltip : {
            //show:false,
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                label: {
                    backgroundColor: '#6a7985'
                },
                //formatter: '{c}  {name|{a}}%',
            }
        },
        grid: {
            top:130,
            left: '0%',
            right: '0%',
            bottom: 0,
            containLabel: true,
            show:false
        },
        xAxis: {
            type: 'category',
            onZero:true,
            boundaryGap: true,
            axisTick: {
                show: false
            },
            axisLabel: {        
                show: true,
                textStyle: {
                    color: '#c3d4ff',
                    fontSize:26,
                    align:'right'
                }
            },
            axisLine: {//X轴线的设置
                show: false,
                lineStyle:{
                    color:"#324b75",
                    type:'dashed'
                }
            },
            data: obj.arrMonth,
            boundaryGap:false
        },
        yAxis: {
            type: 'value',
            name:obj.label,
            nameLocation:'end',
            nameTextStyle:{
                color:'#c3d4ff',
                align:'left',
                fontSize:28,
                padding: [0,0,50,0]
            },
            splitLine: {//Y轴线的设置
                show: true,
                lineStyle:{
                    color:["#324b75"],
                    type:'dashed'
                }
            },
            //nameGap:15,
            axisLabel: {        
                show: true,
                textStyle: {
                    color: '#c3d4ff',
                    fontSize:26
                },
                formatter:obj.formatter
            },
            axisLine: {//Y轴线的设置
                show: false,
            },
            splitLine: {//Y轴线的设置
                show: true,
                lineStyle:{
                    color:["#324b75"],
                    type:'dashed'
                }
            },
            axisTick: {
                show: false
            },
            max:obj.max,
            min:'0',
            boundaryGap:['0%','0%']
        },
        series: [
            {   
                name:'考核目标',
                data:arrIndex,
                type: 'line',
                lineStyle:{
                   // color:"#72e75e",
                    width:4,
                },
                smooth: true,
                symbol:'none'
            },
            {   
                name:'空气优良天气比例',
                data: obj.arrThisYear,
                type: 'line',
                areaStyle: {normal: {}},
                smooth: true,
                lineStyle:{
                  //  color:"#00e4ff",
                    width:4,
                },
                areaStyle:{
                    color:areaBack
                },
                symbol:'none'
    
            },
           
            {
                name:'2017年同期',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:obj.arrLastYear,
                smooth: true,
                lineStyle:{
                   // color:"#f7823c",
                    width:4,
                },
                areaStyle:{
                    color:areaBack
                },
                symbol:'none'
            },
        ]
    };
    return option;
}

var mainActive='map61';//主页面活动的模块div
/* 市区显示和主页面交替   */
function P6moduleToggle(){
    $("body").on('click','.goWuhan',function(){
        intoggle();
      
        $('.map6').removeClass('active') ; 
        $('.map61').removeClass('active') ;
    })
    $("body").on('click','.GoAwayWuhan',function(){
        intoggle();
        $('.MapBox').removeClass('active') ; 
        $('.'+mainActive).addClass('active');
    })
    function intoggle(){
        $('.goWuhan').toggleClass('show');
        $('.P6RightBox').toggleClass('show');
        $('.P6RightSummary1').toggleClass('show');
        $('.P6RightSummary2').toggleClass('show');
        $('.P6legendBox1').toggleClass('show');
        $('.P6legendBox2').toggleClass('show');
        $('.GoAwayWuhan').toggleClass('show');
        $('.mapWuhan').toggleClass('active');   
    }
}
/*********popup0   线框图 相关数据对象***** */
var popData={
        goodWheatherData:{
            arrThisYear:['70', '60','80','90' ,'60','80','90', '60','80','90' ,'60','80'],
        
            arrLastYear:['55','55','40','60','55','40','60','55','40','60','55','40','60'],
            label:'单位：%',
            formatter:'{value}%',
            max:'100',
        } ,
        PMData:{
            arrThisYear:['250', '160','240','190' ,'160','80','90', '160','80','90' ,'160','180'],
            arrLastYear:['155','155','140','160','155','140','160','155','140','160','155','140','160'],
            label:'ug/m3',
            formatter:'{value}',
            max:function(value){
                var a=value.max*1.2;
                return a.toFixed(1);
            }
            
        } 
   }
var  popupObj=getOption4(popData.goodWheatherData);
var  popupObj1=getOption4(popData.PMData);
function getOption4(obj){
    var popupObj={};
    popupObj.elementId='P6popUpcanvas';
    popupObj.arrThisYear=obj.arrThisYear;//!!!!!!!需要后台引入的数据
    popupObj.arrLastYear=obj.arrLastYear;//!!!!!!!需要后台引入的数据

    popupObj.colorArr=["#fbe83a","#00cdff"];
    popupObj.Yname=obj.label;
    popupObj.min='0';    
    popupObj.max=obj.label.max;
    popupObj.tabSpanS=$('.tabSpan');
    popupObj.seriesArr=[
        {   
            name:'空气优良天气比例',
            type: 'line',
            data:  obj.arrThisYear,
            smooth: true,
            lineStyle:{
                width:4,
            },
            symbol:'none'

        },
        {
            name:'2017年同期',
            type:'line',
            stack: '总量',
            data: obj.arrLastYear,
            smooth: true,
            lineStyle:{
                width:4,
            },
            symbol:'none'
        }
    ];
    return popupObj;
   }

    console.log(popupObj1);
    $("body").on('click','.tabSpan',function(){
        $('.tabSpan').removeClass('active');
        $(this).addClass('active');
        if($(this).attr('data-name')=='goodWeather'){
            // $('.js_title').html('全省2018年优良天数比例变化趋势');
            initPopCanvas.setObj(popupObj);
          
        }else{
            // $('.js_title').html('全省2018年PM<sub>2.5</sub>变化趋势');
            initPopCanvas.setObj(popupObj1);
           
        }
        initPopCanvas.initCanvas();
    })

   
















