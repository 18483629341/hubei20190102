
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
		element.style.width=parseInt(W*3526/3840)+"px";
		console.log(H,H-W*323/3840);
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
    //GIS图和概要图的标签切换 
function mapToggle(){
	//P1tabLi
	$("body").on('click','.P1tabLi',function(){
		$(this).siblings('.P1tabLi').removeClass('active');
		$(this).addClass('active');
	    if($(this).attr("data-map")=="GIS"){
			$('.map11').removeClass('active');
			$('.map1').addClass('active');
		}else{
			$('.map1').removeClass('active');
			$('.map11').addClass('active');
		}
	})
}

