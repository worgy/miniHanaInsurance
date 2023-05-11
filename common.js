var onPubInitCompleted;

window.onload = function(){
	if($(".half_r").length){
		li_hover();
	}
	//allmenu_popup
	if($(".allmenu_box").length){
		allmenuInit();
	}
	//popup
	if($(".popup_box").length){
		popupInit();
	}
	if($(".popup_box2").length){
		popup2Init();
	}
	//tab1
	if($(".tab_header.active").length){
		tab1Init();
	}
	//accordion
	if($(".acc_group").length){
		accordion1Init(); 
	}
	if($(".acc_group2").length){
		accordion2Init(); 
	}
	//box_group1
	if($(".box_group").length){
		box1Init();
	}
	if($('.heightResize').length > 0) {
		heightResize();
	}
	if($('.certify_area').length > 0) {
		certify_index();
	}
	if($('.btn_hover').length > 0) {
		btn_hover();
	}
	if($('.indicator_box').length > 0) {
		var wh = $(window).height();;
		$('#wrap').scroll(function(){
			wh = $(window).height();
		});
		indibox(wh);
	}
	if($('.godirect_box').length > 0) {
		godirectInit();
	}

	if (typeof onPubInitCompleted === 'function') {
		onPubInitCompleted();
	}

	// 메인배너
	if($('.mbanner-owl').length){
		var mb_w = $('.mbanner').outerHeight();
		//mb_resize(mb_w);
	}
	if($('.quick_menu').length > 0) {
		quick_menuint();
		$('.quick_menu').css('top','311px');
	}
	/*
	if($('.sec_box_01').length > 0) {
		left_scroll();
		$('#contents').css('overflow-y','hidden');
	}
	if($('.sec_box_01_800').length > 0) {
		left_scroll_800();
		$('#contents').css('overflow-y','hidden');
	}
	if($('.sec_box_01_04').length > 0) {
		left_scroll_04();
		$('#contents').css('overflow-y','hidden');
	}
    */
	onloadfunction();

	$(window).resize(function(){
		heightResize();
		var wi = $(this).width();
		if(wi < 1024){
			$('#wrap').css('overflow-y','hidden');
			$('body').css('overflow-y','visible').css('height','auto');

		}
		else{
			$('#wrap').css('overflow-y','auto');
			$('body').css('overflow-y','hidden').css('height','100%');
		}
	});

	$('#wrap').scroll(function(){
		var winTop = $('#wrap').scrollTop();

		/* 보험상품 따라다니는 앵커 버튼 */
		$('.base_area .big_h2').each(function(){
			var boxTop = $(this).closest('.base_area').offset().top + winTop;
			var top = (winTop - boxTop) + 82;
			var bHei = $(this).closest('.base_area').outerHeight();
			var sHei = $(this).outerHeight() + 82;

			if(winTop > boxTop && winTop < (boxTop + bHei) - sHei){
				$(this).css({'top':top, 'bottom':'inherit'});
			}else if(winTop < boxTop){
				$(this).css({'top':'82px', 'bottom':'inherit'});
			}else if((winTop > boxTop + bHei) - sHei){
				$(this).css({'top':'inherit', 'bottom':'0'});
			}
		});
		$('.base_area800 .big_h2').each(function(){
			var boxTop = $(this).closest('.base_area800').offset().top + winTop;
			var top = (winTop - boxTop) + 82;
			var bHei = $(this).closest('.base_area800').outerHeight();
			var sHei = $(this).outerHeight() + 82;

			if(winTop > boxTop && winTop < (boxTop + bHei) - sHei){
				$(this).css({'top':top, 'bottom':'inherit'});
			}else if(winTop < boxTop){
				$(this).css({'top':'82px', 'bottom':'inherit'});
			}else if((winTop > boxTop + bHei) - sHei){
				$(this).css({'top':'inherit', 'bottom':'0'});
			}
		});
	});

}

// onload 함수
function onloadfunction() {
	// scroll
	$('#wrap').scroll(function(){
		var winTop = $('#wrap').scrollTop();
//			anker(winTop);
	});
	// resize
	$('#wrap').resize(function () {
		var wrap_width = $(this).width();
	});

}

// 보험상품 따라다니는 앵커 버튼
/*
function anker(winTop){
	$('.base_area .big_h2').each(function(){
		var boxTop = $(this).closest('.base_area').position().top;
		var top = (winTop - boxTop) + 82;
		var bHei = $(this).closest('.base_area').outerHeight();
		var sHei = $(this).outerHeight() + 82;

		if(winTop > boxTop && winTop < (boxTop + bHei) - sHei){
			//console.log('top = '+top);
			$(this).css({'top':top, 'bottom':'inherit'});
		}else if(winTop < boxTop){
			$(this).css({'top':'82px', 'bottom':'inherit'});
		}else if((winTop > boxTop + bHei) - sHei){
			$(this).css({'top':'inherit', 'bottom':'0'});
		}
	});
	$('.base_area800 .big_h2').each(function(){
		var boxTop = $(this).closest('.base_area800').offset().top;
		var top = (winTop - boxTop) + 82;
		var bHei = $(this).closest('.base_area800').outerHeight();
		var sHei = $(this).outerHeight() + 82;

		if(winTop > boxTop && winTop < (boxTop + bHei) - sHei){
			$(this).css({'top':top, 'bottom':'inherit'});
		}else if(winTop < boxTop){
			$(this).css({'top':'82px', 'bottom':'inherit'});
		}else if((winTop > boxTop + bHei) - sHei){
			$(this).css({'top':'inherit', 'bottom':'0'});
		}
	});
}
*/


$(document).ready(function(){
	/* 하단광고롤링 */
	var $cu_owl;
	try {
		$cu_owl = $('.custom1').owlCarousel({
			// animateIn: 'flipInX',
			// animateOut: 'flipOutX',
			items: 1,
			loop: true,
			mouseDrag: true,
			nav: false,
			dots: false,
			autoplay: true,
			autoplayHoverPause: true
		});
		$cu_owl.on('drag.owl.carousel', function (e) {
			// $cu_owl.trigger('next.owl.carousel');
		});
	} catch (e) {
		console.log("Prototype owlCarousel Load Error : web/common.js");
		console.log(e);
	}
	/* 보장내용 선택 특약 */
	$('body')
		.on('click', '.toggle_list_box.on .tlb_title > a', function(){
	//$('.toggle_list_box.on').on('click', '.tlb_title > a', function(){
		var element = $(this).parent().parent();
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find('ul').slideUp(300);
			element.find('.toggle_area').slideUp(300);
		}else{
			element.addClass("open");
			element.find('ul').slideDown(300);
			element.find('.toggle_area').slideDown(300);
		}
	});

	/* base toggle */
	$('.base_toggle').on('click', '.tg_on', function(){
		var element = $(this).parent();
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find('.tg_box').slideUp(300);
		}else{
			element.addClass("open");
			element.find('.tg_box').slideDown(300);
		}
	});

	/* 자주묻는 질문 아코디언 */
	$('.accodion_box li.active').addClass('open').children('div').show(); 
	$('.accodion_box').on('click', 'li.openbox > a', function(){

		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('div').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('div').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('div').slideUp(200);
		}
	});

	/* loading bar */
	$('.lds-ripple').append('<div></div><div></div>');
	$('.lds-ellipsis').append('<div></div><div></div><div></div>');

	/* gnb focus*/
	var all_menu = $('.nav_container > div > ul > li > div');
	var all_linebg = $('.nav_container > div > ul > li > div > ul > li');
	$('.nav_container > div > ul > li > a').on('focus',function(event){
		all_menu.removeClass('on');
		all_linebg.removeClass('on');
		all_menu.css('top','-999999px');
		$(this).next().addClass('on');
		$(this).parents('.has_dropdown').children('div').css('top','65px');
	});
	$('.nav_container > div > ul > li').on('mouseenter',function(event){
		all_menu.css('top','-999999px');
		$(this).children('div').css('top','65px');
	});
	$('.nav_container > div > ul > li').on('mouseleave',function(event){
		all_menu.css('top','-999999px');
	});
	$('.nav_container > div > ul > li > div a').on('focus',function(event){
		all_menu.removeClass('on');
		all_linebg.removeClass('on');
		all_menu.css('top','-999999px');
		$(this).parents('.has_dropdown').children('div').addClass('on');
		$(this).parent().parent().parent('li').addClass('on');
		$(this).parent('li').addClass('on');
		$(this).parents('.has_dropdown').children('div').css('top','65px');
	});
	$('.nav_container > div > ul > li > div a').on('mouseenter',function(event){
		all_menu.css('top','-999999px');
		$(this).parents('.has_dropdown').children('div').css('top','65px');
	});
	$('.nav_container > div > ul > li  a').on('click',function(event){
		all_menu.removeClass('on');
		all_linebg.removeClass('on');
		all_menu.css('top','-999999px');
	});
	$('.nav_container > div > ul > li  a[target="_blank"]').on('click',function(event){
		location.reload();
	});
	$('.logo a, div.po_r a').on('focus',function(event){
		all_menu.removeClass('on');
		all_linebg.removeClass('on');
		all_menu.css('top','-999999px');
	});
	/*
	$('.nav_container > div > ul > li  a[target="_blank"]').on('click',function(event){
		all_menu.removeClass('on').css('top','-999999px').off();
		all_linebg.removeClass('on');
		preventDefault();
		// delay(100000);
		// alert(1);
	});
	*/


	/*
	var _all_menu = $('.nav_dropdown');
	var _all_menu = $('.nav_dropdown > ul > li');
	$('.nav_menu > li > a').hover(
		function(event){
			_all_menu.removeClass('on');
			_all_menu.removeClass('on');
			$(this).next().addClass('on');
		},function(event){
			$(this).next().removeClass('on');
		}
	);
	*/
	$('.nav_dropdown a').on('click',function(event){
		//e.preventDefault();
		//console.log('aaaaaaaa');
		all_menu.removeClass('on');
		all_linebg.removeClass('on');
		$('.menu_item').removeClass('on');
		$('#container').focus();
	});

});

/* 사이트맵 스크립트 */
$(document).on('click', '.add_list', function() {
	var _this = $(this);
	if(!_this.hasClass('on')) {
		$('.add_list').removeClass('on');
		_this.addClass('on');
	}else{
		_this.removeClass('on');
	}
	if(_this.next().is(':hidden')) {
		$('.add_list_box').hide();
		_this.next().show();
	}else{
		_this.next().hide();
	}
});

$(document).on('click', '.add_list_cont', function() {
	$('.add_list_box').removeClass('on').hide();
	$('.add_list').removeClass('on');
});

/* 푸터 패미리사이트 이경민 2019-04-03 */
$(document).on('mouseleave','.link_list > li',function(){
	$('.add_list').removeClass('on');
	$('.add_list').next('.add_list_box').css('display','none');
});

var allmenuPopupFn;
function allmenuInit(popUpSelector) {
	if (!popUpSelector) {
		popUpSelector = '.popup_container';
	}
	if($(popUpSelector).height() % 2 == 1){
		$(popUpSelector).find(".popup_footer").css("border-top","1px solid #fff");
	}
	if (!allmenuPopupFn) {
		allmenuPopupFn = {
			openFn : function(ID, clickEle) {//팝업 열림
				var _thisObj = this, _popup = $("#"+ID);
				_popup.attr("tabindex", "0").show().focus();
				$(clickEle).addClass("openClickEle");
				var con_height = _popup.children().height();
				if(con_height % 2 == 1){_popup.children().find(".popup_footer").css("border-top","1px solid #fff");}
				// $("body").css("overflow","hidden");
			},
			closeFn : function(ID) {//팝업 닫힘
				var _popup = $("#"+ID);
				if(!_popup.is(":hidden")) {
					$(".openClickEle").focus().removeClass("openClickEle");
					_popup.hide();
					// $("body").css("overflow","auto");
				}
			},
		}
	}
	
	$('.am_bmenu li').off('click').on('click', function(){
		$('.am_bmenu li').removeClass('active');
		$(this).addClass('active');
		$('.allmenu_box .popup_body > div').hide();
		$('.allmenu_box .popup_body').find('.am_cont'+($(this).index()+1)).show();
	});
}

function tab1Init(){
	$(".tab_header.active li:nth-child(2) a").addClass("noline");
	$(".tab_header.active > li > a").on("click", function(e){
		$(this).parent().parent().find("li > a").removeClass("noline");
		$(this).parent().parent().find("li > a").removeClass("on");
		$(this).addClass("on");
		$(this).parent().next().find("a").addClass("noline");
		var idx = $(this).parent().index();
		$(this).parent().parent().siblings().children().removeClass("open");
		$(this).parent().parent().siblings().children().eq(idx).addClass("open");
	});
}

function accordion1Init(){
	var idx=null;
	$(".acc_group dt").click(function(){
		if($(this).find('a').hasClass("on")) {
			$(this).find('a').removeClass("on");
			$(this).find('span').removeClass("on");
			$(this).find('strong').removeClass("on");
			$(this).next().stop().slideUp();
		}
		else {
			$(this).find('a').addClass("on");
			$(this).find('span').addClass("on");
			$(this).find('strong').addClass("on");
			$(this).next().stop().slideDown();
		}
		return false;
	});
	$('.btn_close').click(function(){
		$(this).parent().parent().prev().find('a').removeClass('on');
		$(this).parent().parent().prev().find('span').removeClass('on');
		$(this).parent().parent().prev().find('strong').removeClass('on');
		$(this).parent().parent().slideUp();
		return false;
	});
}

function accordion2Init(){
	var idx=null;
	$(".acc_group2 dt").click(function(){
		if($(this).parent().parent().hasClass("onlyone") === true) {
			if($(this).find('a').hasClass("on")) {
				$(this).parent().parent().find('a').removeClass('on');
				$(this).parent().parent().find('span').removeClass('on');
				$(this).parent().parent().find('strong').removeClass('on');
				$(this).parent().parent().find('dd').slideUp();
			}
			else {
				$(this).parent().parent().find('a').removeClass('on');
				$(this).parent().parent().find('span').removeClass('on');
				$(this).parent().parent().find('strong').removeClass('on');
				$(this).parent().parent().find('dd').slideUp();

				$(this).find('a').toggleClass("on");
				$(this).find('span').toggleClass("on");
				$(this).find('strong').toggleClass("on");
				$(this).next().stop('true','true').slideDown();
			}
		}
		else {
			$(this).find('a').toggleClass("on");
			$(this).find('span').toggleClass("on");
			$(this).find('strong').toggleClass("on");
			$(this).next().stop('true','true').slideToggle();
		}		
	});
	$('.btn_close').click(function(){
		$(this).parent().parent().prev().find('a').removeClass('on');
		$(this).parent().parent().prev().find('span').removeClass('on');
		$(this).parent().parent().prev().find('strong').removeClass('on');
		$(this).parent().parent().slideUp();
	});
}

function box1Init(){
	var idx_1 = 0, idx_2 = 0, idx_3 = 0;
	$(".gp1").find('div').addClass("b1");
	$(".gp2").children().addClass("b2").addClass("base");
	$(".gp3").children().addClass("b3").addClass("base");
	$(".gp4").children().addClass("b4").addClass("base");
	$(".base").hide();
	$(".gp2 [class^=g0_],.gp3 [class^=g0_], .gp4 [class^=g0_]").show(); // 첫화면 선택하지 않을때 안내 문구
	$(".b1").click(function(){
		idx_1 = $(this).index()+1-$(this).prevAll('h4').length;
		$(".base").hide();$(this).parent().children().children().removeClass("on"); 
		$(".gp2 [class^=g"+idx_1+"_]").show();
		$(this).children().addClass("on");
	});
	$(".b2").click(function(){
		idx_2 = $(this).context.classList[0];
		$(".b3").hide();$(this).parent().children().children().removeClass("on"); 
		$(".gp3 [class^="+idx_2+"_]").show();
		$(this).children().addClass("on");
	});
	$(".b3").click(function(){
		idx_3 = $(this).context.classList[0];
		$(".b4").hide();$(this).parent().children().children().removeClass("on"); 
		$(".gp4 [class^="+idx_3+"]").show();
		$(this).children().addClass("on");
	});
	$(".b4").click(function(){
		$(this).parent().children().children().removeClass("on");
		$(this).children().addClass("on");
	});
}

function heightResize() {
	var maxHeight = -1;
	var maxHeight2 = -1;
	if ($('.heightResize').length > 0) { /* 회사소개 하나손해보험 가족의 li구조가 반응형에 따라 높이가 달라짐에 따라 일괄 맞춤 */
		$('.line_box').each(function() {
			$('.box_desc').each(function() {
				maxHeight = Math.max(maxHeight, $(this).removeAttr('style').height());
				$(this).parent().parent().find('.line_box > .box_desc').height(maxHeight);
			});
			
		});
	}
}

function btn_hover(){
	$(".btn_hover").click(function(e){
		e.preventDefault();
		var _this = $(this);
		if(_this.hasClass("active")) {
			_this.removeClass("active");
		}else{
			_this.addClass("active");
			_this.hover();
		}
	});
}

/* 인증 방법 갯수에 따른 css 처리 col+갯수를 추가한다*/
function certify_index(){
	$(".certify_area ul").each(function () {
		var _idx = $(this).children('li').length;
		$(this).parents('.certify_area').addClass('col'+ _idx)
	});
}

var layerPopupFn;
function popupInit(popUpSelector) {
	if (!popUpSelector) {
		popUpSelector = '.popup_container';
	}
	if($(popUpSelector).height() % 2 == 1){
		$(popUpSelector).find(".popup_body").css("border-bottom","1px solid #fff");
	}
	if (!layerPopupFn) {
		layerPopupFn = {
			openFn : function(ID, clickEle) {//팝업 열림
				var _thisObj = this,
				_popup = $("#"+ID);
				if(_popup.is(":hidden")) {
				}
				_popup.attr("tabindex", "0").show().focus();
				$(clickEle).addClass("openClickEle");
				var con_height = _popup.children().height();
				if(con_height % 2 == 1){_popup.children().find(".popup_body").css("border-bottom","1px solid #fff");}
				$('body').css('overflow','hidden');
			},
			closeFn : function(ID) {//팝업 닫힘
				var _popup = $("#"+ID);
				if(!_popup.is(":hidden")) {
					$(".openClickEle").focus().removeClass("openClickEle");
					_popup.hide();
					$('body').css('overflow','auto');
				}
			},
		}
	}
}

function popup2Init(popUpSelector) {
	if (!popUpSelector) {
		popUpSelector = '.popup_container';
	}
	if($(popUpSelector).height() % 2 == 1){
		$(popUpSelector).find(".popup_footer").css("border-top","1px solid #fff");
	}
	if (!layerPopupFn) {
		layerPopupFn = {
			openFn : function(ID, clickEle) {//팝업 열림
				var _thisObj = this,
				_popup = $("#"+ID);
				if(_popup.is(":hidden")) {
				}
				_popup.attr("tabindex", "0").show().focus();
				$(clickEle).addClass("openClickEle");
				var con_height = _popup.children().height();
				if(con_height % 2 == 1){_popup.children().find(".popup_footer").css("border-top","1px solid #fff");}
				// $("body").css("overflow","hidden");
			},
			closeFn : function(ID) {//팝업 닫힘
				var _popup = $("#"+ID);
				if(!_popup.is(":hidden")) {
					$(".openClickEle").focus().removeClass("openClickEle");
					_popup.hide();
					// $("body").css("overflow","auto");
				}
			},
		}
	}
}

/* 화면 확대 축소 */
var GlobalFunc , scale = 1;
if (!GlobalFunc) {
	GlobalFunc = {
		transZoomIn : function(){
			scale *= 1.2;
			GlobalFunc.transZoomExe(scale);
		},
		transZoomOut : function(){
			if(scale > 0.5){
				scale /= 1.2;
				GlobalFunc.transZoomExe(scale);
			}
		},
		transZoomExe : function(scale){
			if( scale == 1 ){
			}else{
			}
			$('body').css({
				"transform-origin":"top",
				"transform":"scale("+scale+")",

				"-ms-transform-origin":"top",
				"-ms-transform":"scale("+scale+")",

				"-webkit-transform-origin":"top",
				"-webkit-transform":"scale("+scale+")",

				"-moz-transform-origin":"top",
				"-moz-transform":"scale("+scale+")",
			});
		}
	};
}

/* indicator 고정 및 이벤트 */
function indibox(wh) {
	$('.indicator_box ul ul ul ul').off('mouseenter').on('mouseenter', function(event) {
		// var wh = $(window).height();
		var this_h = $(this).outerHeight();
		var this_p_index = $(this).parent().index();
		var this_p_p_index = $(this).parent().parent().parent().index();
		var com_h = 50 + 10 + 33 * this_p_p_index + 11 + 33 * this_p_index + this_h;
		var moving_h = wh - com_h;
		if(moving_h < 0) {
			$(this).css('top',moving_h+'px');
		}
	});
	$('.indicator_box ul ul ul ul').off('mouseleave').on('mouseleave', function(event) {
		$(this).css('top','0px');
	});

	var indi_txt = $('.indicator_box > div > ul:nth-child(2) > li > a').text();
	if(indi_txt == '회사소개' || indi_txt == '공시실' || indi_txt == '소비자보호' || indi_txt == '약관 및 정책') {
		$('.indicator_box > div > ul:nth-child(2) ul ul ul').css('width','205px');
		$('.indicator_box > div > ul:nth-child(3) ul ul').css('width','205px');
		$('.indicator_box > div > ul:nth-child(4)').css('min-width','205px');
	}
	// var indi_txt = $('.indicator_box > div > ul:nth-child(4) > li > a').text();
	// if(indi_txt == '여성') {
	// 	$('.indicator_box > div > ul:nth-child(4)').css('min-width','150px');
	// }

	var jpos = $("#container").position();
	if($('#wrap').scrollTop() > jpos.top-50) {
		$('.indicator_box').addClass('indi_fixed');
		$('.godirect_iopen').show();
	}
	$('#wrap').scroll(function(){
		jpos = $("#container").position();
		if($('#wrap').scrollTop() > jpos.top-50) {
			$('.indicator_box').addClass('indi_fixed');
			$('.godirect_iopen').show();
		}
		else {
			$('.indicator_box').removeClass('indi_fixed');
			$('.godirect_iopen').hide();
			$('.godirect_wrap').hide();
		}
	});

	var jbOffset = $(".indicator_box").offset();
	if($(document).scrollTop() > jbOffset.top-50) {
		$('.indicator_box').addClass('indi_fixed');
		$('.godirect_iopen').show();
	}
	$(window).scroll(function(){
		if($(document).scrollTop() > jbOffset.top-50) {
			$('.indicator_box').addClass('indi_fixed');
			$('.godirect_iopen').show();
		}
		else {
			$('.indicator_box').removeClass('indi_fixed');
			$('.godirect_iopen').hide();
			$('.godirect_wrap').hide();
		}
	});

	$('.indicator_box > div > ul > li > a').off('click').on('click', function(){
		if($(this).parent().hasClass('on')) {
			$(this).parent().removeClass('on');
			$(this).next().hide();
		}
		else {
			$('.indicator_box > div > ul > li').removeClass('on');
			$('.indicator_box > div > ul > li > ul').hide();

			$(this).parent().addClass('on');
			$(this).next().show();
		}
	});

	$('.indicator_box > div > ul > li').off('mouseleave').on('mouseleave', function(){
		$('.indicator_box > div > ul > li').removeClass('on');
		$('.indicator_box > div > ul > li > ul').hide();
	});
}

/* godirect */

function godirectInit(clickEle) {
	var go_height = 0;
	var wh = $('#wrap').scrollTop();
	$('.godirect_open').click(function(){
		if($('.hpopup_wrap').length > 0) {
			if($('.hpopup_wrap:visible').length > 0) {
				go_height = 199 - wh;
			}
			else {
				go_height = 57 - wh;
			}
		}
		else {
			go_height = 57 - wh;
		}
		$('.godirect_wrap .godirect_box .godirect').css('top',go_height+'px');
		$('.godirect_wrap').show();
		$('.godirect_ibox').hide();
		$('.godirect_box').attr("tabindex", "0").show().focus();
		$('body').css('overflow','hidden');
	});
	$('.godirect_iopen').click(function(){
		$('.godirect_wrap').show();
		$('.godirect_box').hide();
		$('.godirect_ibox').attr("tabindex", "0").show().focus();
		$('body').css('overflow','hidden');
	});
	$('.godirect > a').click(function(){
		$('.godirect_wrap').hide();
		$('.indicator_box').attr("tabindex", "0").focus();
		$('body').css('overflow','visible');
	});
	$('.godirect_ibox > .godirect > a').click(function(){
		$('.godirect_wrap').hide();
		$('#visual_box').attr("tabindex", "0").focus();
	});
	$(document).on('mouseup','.godirect_wrap', function(event) {
		var container = $('.godirect_wrap');
		if(container.has(event.target).length === 0) {
			container.hide();
			$(".godirect_open").attr("tabindex", "0").focus();
		}
	});
	$('#wrap').scroll(function(){
		$('.godirect_wrap').hide();
		wh = $('#wrap').scrollTop();
	});
}


function li_hover(){
	$(".half_r").mouseover(function(e){
		e.preventDefault();
		var _this = $(this);
		if(!_this.hasClass("hover")) {
			_this.addClass("hover").prev('.half_l').addClass("hover");
		}
	});
	$(".half_r").mouseout(function(e){
		e.preventDefault();
		var _this = $(this);
		if(_this.hasClass("hover")) {
			_this.removeClass("hover").prev('.half_l').removeClass("hover");
		}
	});
}


/*
function tab_mem_open(ID, clickEle) {
	// var _popup = $("#"+ID);
	var _thisObj = this,
	_popup = $("#"+ID);
	if(_popup.is(":hidden")) {
	}
	_popup.attr("tabindex", "0").show().focus();
	$(clickEle).addClass("openClickEle");

	// alert(1);
	// _popup.find('ul').children().children('a').attr("tabindex", "1").show().focus();
	// $(clickEle).addClass("openClickEle");
}
function tab_mem_close(ID) {
	var _popup = $("#"+ID);
	if(!_popup.is(":hidden")) {
		$(".openClickEle").focus().removeClass("openClickEle");
		_popup.hide();
	
	var _popup = $("#"+ID);
	if(!_popup.is(":hidden")) {
		$(".openClickEle").focus().removeClass("openClickEle");
		_popup.focus();
	}
}
*/

/* placeholder IE9버전 처리*/
/*	
 * --------------------------------
 * @ Checked Ver.IE Cross Browser
 * --------------------------------
 */
 /*
$(function(){

	var UA = navigator.userAgent.toLocaleLowerCase();
	if(UA.indexOf('msie') != -1 || UA.indexOf('trident')) {
		var version = 11;
		UA = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(UA);
		if(UA) version = parseInt(UA[1]);
	}
	
	var classNames = "";
	if(version <= 11) {
		classNames += ' ie';
		classNames += ' ie' + version;
	}
	
	for(var i = version + 1; i <= 11; i++) {
		classNames += ' lt-ie' + i;
	}
	
	document.getElementsByTagName('html')[0].className += classNames;

})
*/
	/*
 * --------------------------
 * @ placeholder IE9이하 체크
 * --------------------------
 */
/*
$(function(){
	
	var ieVerClass = $('html').attr('class');
	if(ieVerClass.indexOf('lt-ie10') > -1) {
		init();
	}
})

var $iePlaceholder = null;

function init() {
	$iePlaceholder = $('.placeholder');
	setPlaceholder();
}

function setPlaceholder () {
	$.each($iePlaceholder, function(idx) {
		var $self = $iePlaceholder.eq(idx);
		
		$self.on('focus blur', function(e){
			var $target = $(this),
					$label = $target.siblings('.lbn-in'),
					val = $target.val();
			
			if(e.type == 'focus') {
				$label.hide();
			} else {
				if(val.length > 0) return null;
				else {
					$label.show();
				}
			}
		})
	})
}

$ (function () {
	$('.ie9 input[type="text"]:not(.ie9 .login_box input[type="text"])[placeholder]').each(function () {
		$(this).val($(this).attr('placeholder'));
		$(this).css('outline':'1px solid #c64')
	});
	$('.login_box .lbn-in').hide();
	$('.ie9 .login_box .lbn-in').show();
	$('.ie9 .login_box .lbn-in:eq(0)').click(function() {
		if ($(this).css("display") == 'inline')
		{$(this).hide();
			$('.ie9 .login_box input[type="text"]').focus()}	 		
		else	
		{$(this).show()}
		
	});
	$('.ie9 .login_box .lbn-in:eq(1)').click(function() {
		if ($(this).css("display") == 'inline')
		{$(this).hide();
			$('.ie9 .login_box input[type="password"]').focus()}	 		
		else	
		{$(this).show()}
		
	});


	$('.ie9 input[type="text"]:not(.ie9 .login_box input[type="text"])[placeholder]').bind({
		'focus': function () {
			var placeholder = $(this).attr('placeholder');

			if ($(this).val( ) == placeholder) {
				$(this).val('');
			}
		},
		'blur' : function () {
			var placeholder = $(this).attr('placeholder');
			if ($(this).val() == '') {
				$(this)
				.val(placeholder)
			}
		}
	})

	

 });
 */

/* 퀵메뉴 */
function quick_menuint () {
	$('.menu_trigger').on('click',function(){
		//var _thisalt= $('.menu_trigger > span.btn_open > img').attr("alt");

		if(!$(this).parent('dt').hasClass('open')) {
			$(this).parent('dt').addClass('open');
			$(this).parent('dt').next('dd').show();
			$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_open','_closed')).attr('alt','빠른메뉴 하위메뉴 닫기');
		}else {
			$(this).parent('dt').removeClass('open');
			$(this).parent('dt').next('dd').hide();
			$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_closed','_open')).attr('alt','빠른메뉴 하위메뉴 열기');
		}
	});

	
	/*$('.quick_list li').hover(function(){
		$(this).find('.txt').css('display','block');
		//$(this).find('.ico_img img').attr('src',$(this).find('.ico_img img').attr('src').replace('_off','_on'));
	}, function(){
		$(this).find('.txt').css('display','none');
		//$(this).find('.ico_img img').attr('src',$(this).find('.ico_img img').attr('src').replace('_on','_off'));
	});
	$('.menu_trigger img').hover(function(){
		$(this).attr('src',$(this).attr('src').replace('_close_off','_close_hover'));
	}, function(){
		$(this).attr('src',$(this).attr('src').replace('_close_hover','_close_off'));
	});
	$('.menu_trigger img').hover(function(){
				$(this).attr('src',$(this).attr('src').replace('_open_off','_open_hover'));
			}, function(){
				$(this).attr('src',$(this).attr('src').replace('_open_hover','_open_off'));
			});*/
	
	var click = true;
	$('.btn_top').on('click',function(){
		if(click){
			$('#wrap').stop().animate({scrollTop:0}, 600);
			//console.log("클릭됨");
			click = false;
			setTimeout(function(){
				click = true;
			},1000)
			return true;
		}else{
			//console.log("중복됨");
			return false;
		}
	});
	$('body,#wrap').scroll(function(){
		if($(this).scrollTop()>113) {
			$('.quick_menu').stop().animate({'top':'200px'},500);
		} else {
			$('.quick_menu').stop().animate({'top':'311px'},500);
		}
	});
	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 1024){
			$('.quick_menu dd').css('display','none');
			$('.quick_menu dt img').attr('src',$('.quick_menu dt img').attr('src').replace('_closed','_open'));
		}else {
			$('.quick_menu dd').css('display','block');
			$('.quick_menu dt').removeClass('open');
		}
	});
	
};

