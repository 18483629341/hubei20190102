$(document).ready(function () {
	//
	$(window).load(function () {
		autoFit();
		autoFitNav();
		autoFitContent();
		tabToggle();
		mapToggle();
	});
});

window.onresize=function(){
	autoFit();
	autoFitNav();
	autoFitContent()
}

