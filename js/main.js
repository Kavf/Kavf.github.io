$(document).ready(function(){
	$(window).on('scroll',function(){
		var sTop = $(window).scrollTop();
		if(sTop > $('header').height()){
			$('.header_wrapper').addClass('fixed');
		}else{
			$('.header_wrapper').removeClass('fixed');
		}
	});
	$('header .bar a.tel').hover(function(){
		$('header .bar .tel_box').addClass('active');
	},function(){
		$('header .bar .tel_box').removeClass('active');
	});
	$('header .bar a.qr').hover(function(){
		$('header .bar .qr_box').addClass('active');
	},function(){
		$('header .bar .qr_box').removeClass('active');
	});
	$('.page').css('min-height', $(document).innerHeight() - $('header').height() - $('footer').height() + 'px');
});