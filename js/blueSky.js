

$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		//autoFitNav();
		autoFitContent();
		//tabToggle();
        mapToggle2();
        RankToggle();
        moduleToggle();
		// 使用刚指定的配置项和数据显示图表。
         myChart21.setOption(option21);
         myChart22.setOption(option22);
         myChart23.setOption(option23);
         myChart24.setOption(option24);
         setRadio()
         myChart3.setOption(option3);
         
         
	});
});

window.onresize=function(){
	autoFit();
    autoFitContent();
    setRadio();
    myChart21.resize();//根据窗口的大小变动图表 --- 重点 
    myChart22.resize();
    myChart23.resize();
    myChart24.resize();
    myChart3.resize();
    
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
function mapToggle2(){
	//P1tabLi
	$("body").on('click','.P6tabLi',function(){
		$(this).siblings('.P6tabLi').removeClass('active');
		$(this).addClass('active');
	    if($(this).attr("data-map")=="PM1"){
			$('.map6').removeClass('active');
			$('.map61').addClass('active');
		}else{
			$('.map61').removeClass('active');
			$('.map6').addClass('active');
		}
    })
}

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
 * 相应页面的线图渲染
 * 
 * */
var myChart3 = echarts.init(document.getElementById('goodWeatherCanvas'));
var areaBack='rgba(1,53,91,.5)';
var radio=1;

var arrMonth=['1月','2月', '3月','4月','5月', '6月','7月','8月', '9月','10月', '11月','12月']
var arrThisYear=['70', '60','80','90' ,'60','80','90', '60','80','90' ,'60','80'];//!!!!!!!需要后台引入的数据
var aIndex='75';                                                                   //!!!!!!!需要后台引入的数据
var arrLastYear=['55','55','40','60','55','40','60','55','40','60','55','40','60'];//!!!!!!!需要后台引入的数据
var arrIndex=[];
for(var i=0;i<12;i++){
    arrIndex.push(aIndex);
}
var option3 = {
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
        top:'20%',
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
                type:'dotted'
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
        data: arrMonth,
        boundaryGap:false
    },
    yAxis: {
        type: 'value',
        name:"比例",
        nameLocation:'end',
        nameTextStyle:{
            color:'#fff',
            align:'left',
            padding: [0,0,4,0]
        },
        axisLabel: {        
            show: true,
            textStyle: {
                color: '#fff',
                //fontSize:parseInt(15*radio)
            },
            formatter:'{value}%'
        },
        axisLine: {//Y轴线的设置
            show: false,
        },
        axisTick: {
            show: false
        },
        max:'100',
        boundaryGap:['0%','0%']
    },
    series: [
        {   
            name:'考核目标',
            data:arrIndex,
            type: 'line',
            lineStyle:{
               // color:"#72e75e",
                width:1,
            },
            smooth: true,
            symbol:'none'
        },
        {   
            name:'空气优良天气比例',
            data: arrThisYear,
            type: 'line',
            areaStyle: {normal: {}},
            smooth: true,
            lineStyle:{
              //  color:"#00e4ff",
                width:2,
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
            data:arrLastYear,
            smooth: true,
            lineStyle:{
               // color:"#f7823c",
                width:2,
            },
            areaStyle:{
                color:areaBack
            },
            symbol:'none'
        },
    ]
};
function setRadio(){
    W=window.innerWidth;
    radio=parseInt(W/3840); 
}
function moduleToggle(){
    $("body").on('click','.goWuhan',function(){
        intoggle();
    })
    $("body").on('click','.GoAwayWuhan',function(){
        intoggle();
    })
    function intoggle(){
        $('.goWuhan').toggleClass('show');
        $('.P6RightBox').toggleClass('show');
        $('.P6RightSummary1').toggleClass('show');
        $('.P6RightSummary2').toggleClass('show');
        $('.P6legendBox1').toggleClass('show');
        $('.P6legendBox2').toggleClass('show');
        $('.p6GoAwayWuhan').toggleClass('show');
         
    }
}



