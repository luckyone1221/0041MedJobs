
const JSCCommon = {
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),

	modalCall() {

		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
			beforeLoad: function () {
				document.querySelector("html").classList.add("fixed")
			},
			afterClose: function () {
				document.querySelector("html").classList.remove("fixed")
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
		const linkModal = document.querySelectorAll('.link-modal');
		function addData() {
			linkModal.forEach(element => {
				element.addEventListener('click', () => {
					let modal = document.querySelector(element.getAttribute("href"));
					const data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							const el = modal.querySelector(elem)
							el.tagName == "INPUT"
								? el.value = val
								: el.innerHTML = val;
							// console.log(modal.querySelector(elem).tagName)
						}
					}
					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				})
			})
		}
		if (linkModal) addData();
	},
	// tabs  .
	// tabscostume(tab) {
	// 	let tabs = {
	// 		Btn: [].slice.call(document.querySelectorAll(`.${tab}__btn`)),
	// 		BtnParent: [].slice.call(document.querySelectorAll(`.${tab}__caption`)),
	// 		Content: [].slice.call(document.querySelectorAll(`.${tab}__content`)),
	// 	}
	// 	tabs.Btn.forEach((element, index) => {
	// 		element.addEventListener('click', () => {
	// 			if (!element.classList.contains('active')) {
	// 				//turn off old
	// 				let oldActiveEl = element.closest(`.${tab}`).querySelector(`.${tab}__btn.active`);
	// 				let oldActiveContent = tabs.Content[index].closest(`.${tab}`).querySelector(`.${tab}__content.active`);
	//
	// 				oldActiveEl.classList.remove('active');
	// 				oldActiveContent.classList.remove('active')
	//
	// 				//turn on new(cklicked el)
	// 				element.classList.add('active');
	// 				tabs.Content[index].classList.add('active');
	// 			}
	// 		})
	// 	})
	// },
	// /tabs

	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}")
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	sendForm() {
		var gets = (function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");
			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}
			return b;
		})();
		// form
		$(document).on('submit', "form", function (e) {
			e.preventDefault();
			const th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data,
			}).done(function (data) {

				$.fancybox.close();
				$.fancybox.open({
					src: '#modal-thanks',
					type: 'inline'
				});
				// window.location.replace("/thanks.html");
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
					// $.magnificPopup.close();
					// ym(53383120, 'reachGoal', 'zakaz');
					// yaCounter55828534.reachGoal('zakaz');
				}, 4000);
			}).fail(function () { });

		});
	},
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},
	animateScroll() {

		$(document).on('click', ".scroll-link", function () {
			const elementClick = $(this).attr("href");
			const destination = $(elementClick).offset().top;

			$('html, body').animate({ scrollTop: destination }, 1100);

			return false;
		});
	},
	getCurrentYear(el) {
		let now = new Date();
		let currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	}
};
const $ = jQuery;

function eventHandler() {
	JSCCommon.ifie();
	JSCCommon.modalCall();
	//JSCCommon.tabscostume('tabs');
	JSCCommon.inputMask();
	JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.animateScroll();

	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	let screenName;
	screenName = '00.png';
	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	}


	let topH = document.querySelector(".top-nav");
	function scrollHandler() {
		if (topH) {
			if ($(window).scrollTop() > topH.offsetHeight) {
				topH.classList.add('fixed');
			} else {
				topH.classList.remove('fixed');
			}
		}
		
	}

	window.addEventListener('scroll', () => {
		scrollHandler();
	}, { passive: true });
	scrollHandler();


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	const swiper4 = new Swiper('.sBanners__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,

	});
	// modal window

	//luckyone js

	$('.burger-js').click(function (){
		$('.burger-js, .mm--js').toggleClass('active');
		$('body').toggleClass('fixed2');
	});
	window.addEventListener('resize', function (){
		if(window.matchMedia("(min-width: 1200px)").matches){
			//menu
			$('.burger-js, .mm--js').removeClass('active');
			$('body').removeClass('fixed2');

			//filter remove
			// $('.f-btn-js').removeClass('active');
			// $('.filter--js').slideUp(function (){
			// 	$(this).removeClass('active');
			// });
		}
	}, {passive: true})
	//accordion
	$('.dd-head-js').click(function (){
		$(this.parentElement).toggleClass('active');
		$(this.parentElement).find('.dd-content-js').slideToggle(250,function (){
			$(this).toggleClass('active');
		});
	});

	//filter dd
	$('.f-btn-js').click(function (){
		$(this).toggleClass('active');
		$('.filter--js').slideToggle(250,function (){
			$(this).toggleClass('active');
		});
	});

	document.body.addEventListener('click', function (){
		//write filter missclick
	});

	//show more
	$('.show-more-js').click(function (){
		$(this).removeClass('active');

		$(this).closest('.f-item-js').find('.shm-cont-js').fadeIn(function (){
			$(this).addClass('active');
		})
	})
	//
	$('.toggle-pass-inp-js').click(function () {
		let inp = this.parentElement.querySelector('input');
		if (!inp) return

		if (this.classList.contains('pass-visiable')){
			inp.setAttribute('type', 'password');
		}
		else{
			inp.setAttribute('type', 'text');
		}

		this.classList.toggle('pass-visiable');
	});

	//select2
	$('.soc-select2-js').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "soc-select2",
		templateResult: formatState,
		templateSelection: formatState,
	});
	function formatState(state){
		if (!state.id) {
			return state.text;
		}
		// let host = window.location.host;
		// if (host.includes("localhost:30")){
		// 	host = '';
		// }
		let baseUrl = "img/svg/";

		let $state = $(
			'<span class="select2-results__img">' +
				'<img src="' + baseUrl + state.element.getAttribute('data-icon') + '.svg" alt="'+ state.text + '"/>' +
			'</span>'
		);
		return $state;
	}
	//multiple select2
	$('.skill-slect2-js').select2({
		maximumSelectionLength: 30,
		dropdownCssClass: "soc-select2",
	});
	//
	$('.resp-tabs-js').easyResponsiveTabs({
		activate: function () {}
	});
	//scroll top js
	$('.scroll-top-js').click(function (){
		window.scrollTo(0,0);
	});


	//end luckyone js

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}