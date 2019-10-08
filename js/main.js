$(document).ready(function(){
	$(window).on('scroll',function(){
		var sTop = $(window).scrollTop();
		if(sTop > $('header').height()){
			$('.header_wrapper').addClass('fixed');
		}else{
			$('.header_wrapper').removeClass('fixed');
		}
	});
	resizeWindow();
	$(window).on('resize',function(){
		resizeWindow();
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
	$('header .bar a.menu').on('click',function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('on');
		}else{
			$(this).removeClass('on');
		}
		$('.nav_bar').toggleClass('hidden-xs');
	});
	$(document).bind("click", function (e) {
		if ($(e.target).closest(".nav_bar").length == 0 && $(e.target).closest("header .bar a.menu").length == 0) {
			$(".nav_bar").addClass('hidden-xs');
			$('header .bar a.menu').removeClass('on');
		}
	});
});

function resizeWindow(){
	var bannerHeight = 0.41 * $('.swp_banner').width();
	$('.swp_banner').css('height',bannerHeight+'px');
}