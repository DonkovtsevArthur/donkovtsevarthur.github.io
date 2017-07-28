$(document).ready(function() {


          var $menu = $("#menu");
 
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll


	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
		$(".toggle_menu").click(function() {
		if($(".top_menu").is(":visible")) {
			$(".top_menu").fadeOut(600);
			$(".top_menu ul a").addClass("fadeInUp animated");
		}else {
			$(".top_menu").fadeIn(600);
			$(".top_menu ul a").addClass("fadeInUp animated");
		}

	});
	$('.carousel').carousel();

	$(".main_menu  a").mPageScroll2id();
	$(".top_menu ul a").mPageScroll2id();
$("a[href*='#contact']").mPageScroll2id();

	$(".toggle_menu").click(function() {
	  $("#sandwich").toggleClass("active");
	});

	$(".top_menu li a").click(function(){
		$(".top_menu").fadeOut(600);
		$("#sandwich").toggleClass("active");
	});

});
$(window).load(function() { 
	$(".loader_Inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});