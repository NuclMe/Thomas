$(document).ready(function(){

$(".services__tabs .tabs__wrapper .tab").click(function() {
	$(".services__tabs .tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".services__tabs .tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

var mixer = mixitup('.portfolio__items-content');

$('.slider__inner').slick({
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	dots: true,
});

$('.map__cover').click(function(){
	$('.map__cover').addClass('active');
	$('.map__form-title').addClass('active');
	$('.map__form-title').addClass('no-before-1');
	$('.map__form-title').addClass('no-after-1');
	$('.map__form-title span').addClass('active');
	$('.map__form-title span').addClass('no-before-2');
	
});
	
	$(".btn-menu").click(function(){
	$(".header__menu ul").slideToggle();
	});

  });