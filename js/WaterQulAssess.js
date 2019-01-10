

$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		autoFitNav();
		autoFitContent();
		//tabToggle();
		//mapToggle();
		// 使用刚指定的配置项和数据显示图表。
         myChart.setOption(option);
	});
});

window.onresize=function(){
	autoFit();
	autoFitNav();
	autoFitContent();
}

/*************
 * 
 * 相应也页面的饼状图渲染
 * 
 * */
var myChart = echarts.init(document.getElementById('CompRateCanvas01'));
var array=[74.5,25.5]; //达标的数据和不达标的数据组成的数组                                 //需要后台引入的数据
// 指定饼状图的配置项和数据
var option = {
    color: ['#081039'], //调色板，这里为圆环的底色
    series: [{
        name: 'Line 1',
        type: 'pie',
		clockWise: true,
		startAngle:0,//圆环的绘画的起始角度
        radius: [0, '66%'],//圆环的半径比例
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


