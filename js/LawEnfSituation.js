$(document).ready(function () {
    //
    $(window).load(function () {
        autoFit();
        listToggle();
        P2popContorl();
        callbacks.fire();
        moduleToggle('.map5');
    });
});

window.onresize = function () {
    autoFit();
  
    
}



var category = ['武汉', '荆州', '襄阳', '宜昌', '韩宁', '随州', '天门','仙桃', '潜江', '荆门', '十堰','恩施', '黄石', '黄冈', '鄂州','神农架','神农架'];
var barData = [3100, 2142, 1218,631, 599,581,581,561,582,482, 431,431,383, 383, 163,163,500,163,163];//
var mylength=category.length;

function initHtml(){
    var innerHtml='';
    var maxValue=parseInt(barData.max()*1.2);

    for(var i=0;i<mylength;i++){
        var varTr=' <tr class="tbodyTr ">'+
                    ' <td class="firstTd">'+category[i]+'市'+'</td>'+
                    ' <td class="seconfTd"><div class="inner"><div class="progressDiv"  value="'+barData[i]+'" style="width:'+(barData[i]/maxValue).toFixed(2)*100+'%"></div></div></td>'+
                    ' <td class="threeTd">'+barData[i]+'次'+'</td>'+
                ' </tr>'
         innerHtml+=varTr;       
    }
    $('.tbodyContainer').html(innerHtml);
}
var callbacks=$.Callbacks();
callbacks.add(function(){
    initHtml();
})
callbacks.add(function(){
    autoScrollFun('#P5scrollBox');
})
Array.prototype.max = function () {
	return Math.max.apply({}, this)
}

