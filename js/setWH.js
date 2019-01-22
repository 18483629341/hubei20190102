var W=null;
var H=null;
var minWidth=1920;
var minHeight=1080;
setWH()
//header部分里面的所有元素的宽高全自适应方法

function setWH(){
	W=window.innerWidth;
	H=window.innerHeight
	minHeight=parseInt(W*2160/3840)
	if(W<1920){
		W=1920;
	}
	if(H<minHeight){
		H=minHeight;
	}
	window.width=W;
	window.height=H;
	//return {W:W,H:H}
}

