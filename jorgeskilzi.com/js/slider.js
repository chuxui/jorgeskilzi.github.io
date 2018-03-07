(function(document , window , $){
	$(document).ready(function(){
		$('.slider').slick({
			dots: true,
			autoplay: false,
			autoplaySpeed: 4000,
			infinite: true,
		});
	});
	$(document).ready(function(){
		$('.slider2').slick({
			dots: true,
			infinite: true,
			speed: 0,
			fade: true,
			cssEase: 'linear'
		});
	});
})(document, window, jQuery);


		
		