jQuery(function() {
	initSlickCarousel();
	initMobileNav();
	initAnchors();
	initAccordion();
	customSelect();
	radioButton();
	initStickyScrollBlock();
	initLoadMore();
	boxcount();
});

function radioButton() {
	$("input[name='guarantor']").click(function(){
		if($(this).val() === "yes")
			$(".guarantor-block").show();
		else
			$(".guarantor-block").hide();
	});
	$("input[name='borrower']").click(function(){
		if($(this).val() === "yes") {
			$(".citizen").show();
			$(".borrower-block").show();
		}
		else {
			$(".citizen").hide();
			$(".borrower-block").hide();
		}
	});


	$('#employment_time').on('input',function(e){
		var val = $(this).val();
		if ( val >= 2 || val == '' || val == null ) {
			$('.previous-block').addClass('hidden');
		}
		else {

			$('.previous-block').removeClass('hidden');
		}
	});

}


function boxcount() {
	$('#personal_income a').click(function() {
		var count = $('#personal_income .income-holder').length;
		if (count == 10 ) {
			$(this).hide();
		}
	});

	$('#personal_asset a').click(function() {
		var count = $('#personal_asset .row').length;
		if (count == 13 ) {
			$(this).hide();
		}
	});

	$('#businees_asset a').click(function() {
		var count = $('#businees_asset .row-holder .row').length;
		if (count == 8 ) {
			$(this).hide();
		}
	});

}




// load more init
function initLoadMore() {
	jQuery('.load-more-holder').loadMore({
		linkSelector: 'a.load-more',
		newContentTarget: '.form-box, .row-holder'
	});
}


// accordion menu init
function initAccordion() {
	ResponsiveHelper.addRange({
		'..767': {
			on: function() {
				jQuery('.tab-accordion').slideAccordion({
					opener: '.accordion-opener',
					slider: '.slide',
					animSpeed: 300
				});
			},
			off: function() {
				jQuery('.tab-accordion').slideAccordion('destroy');
			}
		}
	});

	jQuery('.accordion').slideAccordion({
		opener: '.opener',
		slider: '.slide',
		animSpeed: 300
	});
}


function customSelect() {
	jQuery('select').niceSelect();
}



// slick init
function initSlickCarousel() {
	jQuery('.carousel').slick({
		slidesToScroll: 1,
		rows: 0,
		prevArrow: '<button class="slick-prev">Previous</button>',
		nextArrow: '<button class="slick-next">Next</button>',
		dots: true,
		dotsClass: 'slick-dots',
		adaptiveHeight: true
	});
}

// mobile menu init
function initMobileNav() {
	jQuery('body').mobileNav({
		menuActiveClass: 'nav-active',
		menuOpener: '.nav-opener',
		hideOnClickOutside: true,
		menuDrop: '.nav-drop'
	});
	jQuery('body').mobileNav({
		menuActiveClass: 'finance-active',
		menuOpener: '.finance-opener',
		hideOnClickOutside: true,
		menuDrop: '.tab-form',
		onShow: function(self) {
			$('html, body').animate({
				scrollTop: $("#tab4").offset().top - $('.links').height()
			}, 2000);
		}
	});
}

// initialize smooth anchor links
function initAnchors() {
	new SmoothScroll({
		anchorLinks: '.back-to-top',
		extraOffset: 0,
		wheelBehavior: 'none'
	});
	new SmoothScroll({
		anchorLinks: '.scroll-btn',
		extraOffset: 0,
		activeClasses: 'parent',
		anchorActiveClass: 'active',
		wheelBehavior: 'none',
		extraOffset: function() {
			var totalHeight = 0;
			jQuery('.links').each(function() {
				var $box = jQuery(this);
				var stickyInstance = $box.data('StickyScrollBlock');
				if (stickyInstance) {
					stickyInstance.stickyFlag = false;
					stickyInstance.stickyOn();
					totalHeight += $box.outerHeight();
					stickyInstance.onResize();
				} else {
					totalHeight += $box.css('position') === 'fixed' ? $box.outerHeight() : 0;
				}
			});
			return totalHeight;
		}
	});
}


// initialize fixed blocks on scroll
function initStickyScrollBlock() {
	jQuery('.links').stickyScrollBlock({
		setBoxHeight: false,
		activeClass: 'fixed-position',
		positionType: 'fixed',
		extraTop: function() {
			var totalHeight = 0;
			jQuery('0').each(function() {
				totalHeight += jQuery(this).outerHeight();
			});
			return totalHeight;
		}
	});
}
