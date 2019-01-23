$(document).ready(function () {
    //
    $(window).load(function () {
        autoFit();
        listToggle();
        P2popContorl();
        callbacks.fire();
        moduleToggle('.map5');
        autoScrollFun('#P5scrollBox',
            {   autoHideScrollbar:true,
                 theme:"bottom",
                 mouseWheel:{ preventDefault: true }
            }
        );
        // $('#P5scrollBox').mCustomScrollbar("scrollTo","bottom",{
        //     scrollInertia:3000
        //     });
            // $("#P5scrollBox").mCustomScrollbar({
            //     autoHideScrollbar:true,
            //     theme:"rounded"
            // });
        //弹窗上的线图绘制
		// let initPopCanvas = new InitPopCanvas(popupObj);
        // initPopCanvas.initCanvas();
    });
});

window.onresize = function () {
    autoFit();
    callbacks.fire();
   // myChart.resize();//根据窗口的大小变动图表 --- 重点 
    // initPopCanvas.initCanvas();
    // initPopCanvas.popUpChart.resize();
    
}


var myChart = echarts.init(document.getElementById('unstandCanvasBox'));

var category = ['武汉', '荆州', '襄阳', '宜昌', '韩宁', '随州', '天门','仙桃', '潜江', '荆门', '十堰','恩施', '黄石', '黄冈', '鄂州','神农架','神农架'];
var barData = [3100, 2142, 1218,631, 599,581,581,561,582,482, 431,431,383, 383, 163,163,500];//
var mylength=category.length>barData.length?category.length:barData.length;
var callbacks = $.Callbacks();
  callbacks.add(function() {
    $('.unstandCanvasBox').css({
        'height':65*mylength+'px'
    })
  });
  callbacks.add(function() {
      myChart.setOption(option);
    myChart.resize();
  });
  
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
                color:"#324b75"
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
                color: '#c3d4ff',
                fontSize:32
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
