$(document).ready(function() {

	$(".navbar-toggler").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".navbar-collapse ul a").mPageScroll2id();

});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

}); 