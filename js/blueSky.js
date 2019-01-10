

$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		//autoFitNav();
		autoFitContent();
		//tabToggle();
		//mapToggle();
		// 使用刚指定的配置项和数据显示图表。
         myChart21.setOption(option21);
        //  myChart22.setOption(option22);
        //  myChart23.setOption(option23);
        //  myChart24.setOption(option24);
	});
});

window.onresize=function(){
	autoFit();
	autoFitContent();
}

/*************
 * 
 * 相应也页面的饼状图渲染
 * 
 * */
var myChart21 = echarts.init(document.getElementById('CompRateCanvas021'));
// var myChart22 = echarts.init(document.getElementById('CompRateCanvas022'));
// var myChart23 = echarts.init(document.getElementById('CompRateCanvas023'));
// var myChart24 = echarts.init(document.getElementById('CompRateCanvas024'));
var option21=setOptionfun('#023157','100%');
// var option21=setOptionfun('#03143a','98%');
// var option21=setOptionfun('#023157','68%');
// var option21=setOptionfun('#03143a','66%');
var array=[78.5,21.5]; //达标的数据和不达标的数据组成的数组                                 //需要后台引入的数据
// 指定饼状图的配置项和数据
function setOptionfun(color,radius){
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
                value: array[0],//注意：这里是达标的数据1，还需要不达标的数据2（在下面），才能展示正确的百分比
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
                value: array[1],//注意：这里是不达标的数据2
            }]
        }]
    };
    return option;
}



