$(document).ready(function () {
    //
    $(window).load(function () {
        autoFit();
        autoFitNav();
        autoFitContent();
        //tabToggle();
        listToggle();
        popContorl();
        myChart.setOption(option);
        moduleToggle('.map5');
        //弹窗上的线图绘制
		let initPopCanvas = new InitPopCanvas(popupObj);
		initPopCanvas.initCanvas();
		initPopCanvas.canvasTabToggle();
    });
});

window.onresize = function () {
    autoFit();
    autoFitNav();
    autoFitContent();
    myChart.resize();//根据窗口的大小变动图表 --- 重点 
    initPopCanvas.initCanvas();
	initPopCanvas.popUpChart.resize();
}


var myChart = echarts.init(document.getElementById('unstandCanvasBox'));

var category = ['武汉', '荆州', '襄阳', '宜昌', '韩宁', '随州', '天门','仙桃', '潜江', '荆门', '十堰','恩施', '黄石', '黄冈', '鄂州','神农架'];
var barData = [3100, 2142, 1218,631, 599,581,581,561,582,482, 431,431,383, 383, 163,163];//
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        show:false
    },
    grid: {
        top:0,
        left: '3%',
        right: '4%',
        bottom: '0%',
        containLabel: true,
        show:false
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {show: false},
        max: function(value) {
            return parseInt(value.max*1.6);
        },
        axisLabel: {        
            show: false
        },
    },
    yAxis: {
        type: 'category',
        data: category,
        splitLine: {show: false},
        inverse:true,
        axisLine: {//Y轴线的设置
            // show: true,
            lineStyle:{
                color:"#017298"
            }
        },
        axisTick: {
            show: false
        },
        offset: 5,
        nameGap:0,
        axisLabel: {        
            show: true,
            textStyle: {
                color: '#fff',
            }
        },
       
    },
    series: [
        {
            name: '数量',
            type: 'bar',
            data: barData,
            barCategoryGap:'67.5%',
            smooth: true,
            label: {
                show:false
            },
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
                normal: {
                    barBorderRadius: 7,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#008bff'},
                            {offset: 1, color: '#00d1ff'}

                        ]
                    )
                }
            }
        }
    ]
};

/*********popup   线框图 相关数据***** */
let popupObj = {};
	popupObj.elementId = 'P6popUpcanvas';
	popupObj.arrThisYear = ['70', '60', '80', '90', '60', '80', '90', '60', '80', '90', '60', '80']; //!!!!!!!需要后台引入的数据
	popupObj.arrLastYear = ['55', '55', '40', '60', '55', '40', '60', '55', '40', '60', '55', '40', '60']; //!!!!!!!需要后台引入的数据

	popupObj.colorArr = ["#fbe83a", "#00cdff"];
	popupObj.Yname = '单位：%';
	popupObj.seriesArr = [{
			name: '空气优良天气比例',
			type: 'line',
			data: popupObj.arrThisYear,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'

		},
		{
			name: '2017年同期',
			type: 'line',
			stack: '总量',
			data: popupObj.arrLastYear,
			smooth: true,
			lineStyle: {
				width: 1,
			},
			symbol: 'none'
		}
	];
console.log('popupObj:', popupObj);