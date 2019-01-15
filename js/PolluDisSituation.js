$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		autoFitNav();
		autoFitContent();
		//tabToggle();
		mapToggle();
		listToggle();
	});
});

window.onresize=function(){
	autoFit();
	autoFitNav();
	autoFitContent()
}

