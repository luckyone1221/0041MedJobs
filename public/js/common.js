"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	modalCall: function modalCall() {
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
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			},
			beforeLoad: function beforeLoad() {
				document.querySelector("html").classList.add("fixed");
			},
			afterClose: function afterClose() {
				document.querySelector("html").classList.remove("fixed");
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		var linkModal = document.querySelectorAll('.link-modal');

		function addData() {
			linkModal.forEach(function (element) {
				element.addEventListener('click', function () {
					var modal = document.querySelector(element.getAttribute("href"));
					var data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							var el = modal.querySelector(elem);
							el.tagName == "INPUT" ? el.value = val : el.innerHTML = val; // console.log(modal.querySelector(elem).tagName)
						}
					}

					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				});
			});
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
	inputMask: function inputMask() {
		// mask for input
		var InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	sendForm: function sendForm() {
		var gets = function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");

			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}

			return b;
		}(); // form


		$(document).on('submit', "form", function (e) {
			e.preventDefault();
			var th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data
			}).done(function (data) {
				$.fancybox.close();
				$.fancybox.open({
					src: '#modal-thanks',
					type: 'inline'
				}); // window.location.replace("/thanks.html");

				setTimeout(function () {
					// Done Functions
					th.trigger("reset"); // $.magnificPopup.close();
					// ym(53383120, 'reachGoal', 'zakaz');
					// yaCounter55828534.reachGoal('zakaz');
				}, 4000);
			}).fail(function () {});
		});
	},
	heightwindow: function heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

		document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

		window.addEventListener('resize', function () {
			// We execute the same script as before
			var vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
		}, {
			passive: true
		});
	},
	animateScroll: function animateScroll() {
		$(document).on('click', ".scroll-link", function () {
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html, body').animate({
				scrollTop: destination
			}, 1100);
			return false;
		});
	},
	getCurrentYear: function getCurrentYear(el) {
		var now = new Date();
		var currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	}
};
var $ = jQuery;

function eventHandler() {
	var _defaultSl, _Swiper;

	JSCCommon.ifie();
	JSCCommon.modalCall(); //JSCCommon.tabscostume('tabs');

	JSCCommon.inputMask();
	JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.animateScroll(); // JSCCommon.CustomInputFile(); 

	var x = window.location.host;
	var screenName;
	screenName = '021-768.png';

	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", "<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>"));
	}

	var topH = document.querySelector(".top-nav");

	function scrollHandler() {
		if (topH) {
			if ($(window).scrollTop() > topH.offsetHeight) {
				topH.classList.add('fixed');
			} else {
				topH.classList.remove('fixed');
			}
		}
	}

	window.addEventListener('scroll', function () {
		scrollHandler();
	}, {
		passive: true
	});
	scrollHandler();
	var defaultSl = (_defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true
		},
		watchOverflow: true
	}, _defineProperty(_defaultSl, "spaceBetween", 0), _defineProperty(_defaultSl, "loop", true), _defineProperty(_defaultSl, "navigation", {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}), _defineProperty(_defaultSl, "pagination", {
		el: ' .swiper-pagination',
		type: 'bullets',
		clickable: true // renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// }

	}), _defaultSl);
	var swiper4 = new Swiper('.sBanners__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true
	})); // modal window
	//luckyone js

	$('.burger-js').click(function () {
		$('.burger-js, .mm--js').toggleClass('active');
		$('body').toggleClass('fixed2');
	});
	window.addEventListener('resize', function () {
		if (window.matchMedia("(min-width: 1200px)").matches) {
			//menu
			$('.burger-js, .mm--js').removeClass('active');
			$('body').removeClass('fixed2'); //filter remove
			// $('.f-btn-js').removeClass('active');
			// $('.filter--js').slideUp(function (){
			// 	$(this).removeClass('active');
			// });
		}
	}, {
		passive: true
	}); //accordion

	$('.dd-head-js').click(function () {
		$(this.parentElement).toggleClass('active');
		$(this.parentElement).find('.dd-content-js').slideToggle(250, function () {
			$(this).toggleClass('active');
		});
	}); //filter dd

	$('.f-btn-js').click(function () {
		$(this).toggleClass('active');
		$('.filter--js').slideToggle(250, function () {
			$(this).toggleClass('active');
		});
	});
	document.body.addEventListener('click', function () {//write filter missclick
	}); //show more

	$('.show-more-js').click(function () {
		$(this).removeClass('active');
		$(this).closest('.f-item-js').find('.shm-cont-js').fadeIn(function () {
			$(this).addClass('active');
		});
	}); //

	$('.toggle-pass-inp-js').click(function () {
		var inp = this.parentElement.querySelector('input');
		if (!inp) return;

		if (this.classList.contains('pass-visiable')) {
			inp.setAttribute('type', 'password');
		} else {
			inp.setAttribute('type', 'text');
		}

		this.classList.toggle('pass-visiable');
	}); //select2

	$('.soc-select2-js').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "soc-select2",
		templateResult: formatState,
		templateSelection: formatState
	});

	function formatState(state) {
		if (!state.id) {
			return state.text;
		} // let host = window.location.host;
		// if (host.includes("localhost:30")){
		// 	host = '';
		// }


		var baseUrl = "img/svg/";
		var $state = $('<span class="select2-results__img">' + '<img src="' + baseUrl + state.element.getAttribute('data-icon') + '.svg" alt="' + state.text + '"/>' + '</span>');
		return $state;
	} //multiple select2


	$('.skill-slect2-js').select2({
		maximumSelectionLength: 30,
		dropdownCssClass: "soc-select2"
	}); //

	$('.resp-tabs-js').easyResponsiveTabs({
		activate: function activate() {}
	}); //scroll top js

	$('.scroll-top-js').click(function () {
		window.scrollTo(0, 0);
	}); //020 page +
	//020 page +
	//020 page +

	$('.mvp-burger-js').click(function () {
		document.body.removeEventListener('click', nMenuMissClick);
		$(this).toggleClass('active');
		event.stopPropagation();
		$('.mvp-menu--js').toggleClass('active');
		document.body.addEventListener('click', nMenuMissClick);
	});

	function nMenuMissClick() {
		if (!event.target.closest('.mvp-menu--js')) {
			document.body.removeEventListener('click', nMenuMissClick);
			$('.mvp-menu--js').removeClass('active');
		}
	} //


	var sidebarSlider = new Swiper('.sidebar-slider-js', (_Swiper = {
		slidesPerView: 'auto',
		spaceBetween: 12
	}, _defineProperty(_Swiper, "slidesPerView", 'auto'), _defineProperty(_Swiper, "freeMode", true), _Swiper)); //headerAlt

	$('.search-inp-js').focus(function () {
		$(this.parentElement).find('.search-btn-js').addClass('active');
	}).blur(function () {
		$(this.parentElement).find('.search-btn-js').removeClass('active');
	}); //new footem items

	$('.fl-icon-js').click(function () {
		$(this).toggleClass('active');
	});
	$('.bell-js').click(function () {
		document.body.removeEventListener('click', bellPPMissClick);
		$('.bell-dd--js').toggleClass('active');
		event.stopPropagation();
		document.body.addEventListener('click', bellPPMissClick);
	});

	function bellPPMissClick() {
		if (!event.target.closest('.bell-dd--js')) {
			document.body.removeEventListener('click', nMenuMissClick);
			$('.bell-dd--js').removeClass('active');
		}
	} //


	$('.default-select-js').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "default-select2"
	}); //from jetbrains animation

	$('.sidebar-trakcer-js').mousemove(function () {
		if (!this.parentElement.classList.contains('active')) return; // let top = event.offsetY;
		// let left = event.offsetX;

		var balls = this.parentElement.querySelectorAll('.sidebar-ball-js');

		var _iterator = _createForOfIteratorHelper(balls),
				_step;

		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var ball = _step.value;
				ball.setAttribute("style", "top: ".concat(event.offsetY, "px; left: ").concat(event.offsetX, "px;"));
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
	}); //end luckyone js
	//todo New
	//2 kill ui kit
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}