"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isIE11 = Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject;

if (isIE11) {
	document.body.classList.remove("loaded_hiding");
	$(".s404--borser").removeClass("d-none");
}

var div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px'; // мы должны вставить элемент в документ, иначе размеры будут равны 0

if (!isIE11) {
	document.body.append(div);
}

var scrollWidth = div.offsetWidth - div.clientWidth;

if (!isIE11) {
	div.remove();
}

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
	tabscostume: function tabscostume(tab) {
		var tabs = {
			Btn: [].slice.call(document.querySelectorAll(".".concat(tab, "__btn"))),
			BtnParent: [].slice.call(document.querySelectorAll(".".concat(tab, "__caption"))),
			Content: [].slice.call(document.querySelectorAll(".".concat(tab, "__content")))
		};
		tabs.Btn.forEach(function (element, index) {
			element.addEventListener('click', function () {
				if (!element.classList.contains('active')) {
					//turn off old
					var oldActiveEl = element.closest(".".concat(tab)).querySelector(".".concat(tab, "__btn.active"));
					var oldActiveContent = tabs.Content[index].closest(".".concat(tab)).querySelector(".".concat(tab, "__content.active"));
					oldActiveEl.classList.remove('active');
					oldActiveContent.classList.remove('active'); //turn on new(cklicked el)

					element.classList.add('active');
					tabs.Content[index].classList.add('active');
				}
			});
		});
	},
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
		var header = document.querySelector("#headerAlt");
		$(document).on('click', '.scroll-link, .aside-menu-js > ul > li > a', function () {
			event.preventDefault();
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top - header.offsetHeight - 20; //$('html, body').animate({ scrollTop: destination }, 1100);

			window.scrollTo({
				top: destination,
				behavior: "smooth"
			});
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
	JSCCommon.modalCall();
	JSCCommon.tabscostume('c-tabs');
	JSCCommon.inputMask();
	JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.animateScroll(); // JSCCommon.CustomInputFile(); 

	var x = window.location.host;
	var screenName;
	screenName = '025-1.png';

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
	}); //
	//
	//from jetbrains animation

	$('.sidebar-trakcer-js').mousemove(function () {
		if (!this.parentElement.classList.contains('active')) return;
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
	}).mouseenter(function () {
		var balls = this.parentElement.querySelectorAll('.sidebar-ball-js');
		$(balls).addClass('has-transition');
		window.setTimeout(function () {
			$(balls).removeClass('has-transition');
		}, 300);
	}); //aside menu js

	var sidebarItems = document.querySelectorAll('.sidebar-box-js');
	var sidebarLinks = document.querySelectorAll('.aside-menu-js > ul > li > a');
	var sideBarItemsMiddle = [];

	function setSBItemMiddle() {
		var _iterator2 = _createForOfIteratorHelper(sidebarItems),
				_step2;

		try {
			for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
				var item = _step2.value;
				sideBarItemsMiddle.push(item.getBoundingClientRect().top + item.offsetHeight / 2);
			}
		} catch (err) {
			_iterator2.e(err);
		} finally {
			_iterator2.f();
		}
	}

	if (sidebarLinks.length > 0 && sidebarItems.length > 0) {
		window.addEventListener('resize', function () {
			setSBItemMiddle();
		}, {
			passive: true
		});
		setSBItemMiddle();
	}

	document.addEventListener('scroll', function () {
		var scrollTop = window.scrollY;

		for (var _i = 0, _Object$entries = Object.entries(sideBarItemsMiddle); _i < _Object$entries.length; _i++) {
			var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
					index = _Object$entries$_i[0],
					middle = _Object$entries$_i[1];

			var prev = void 0;

			if (index == 0) {
				prev = 0;
			} else {
				prev = sideBarItemsMiddle[index - 1];
			}

			if (scrollTop < middle && scrollTop > prev) {
				$(sidebarLinks).removeClass('active');
				sidebarLinks[index].classList.add('active');
			}
		}
	}, {
		passive: true
	}); //.lc-cont-js

	$('.lc-cont-js').click(function () {
		document.body.removeEventListener('click', lcPPMissClick);
		$('.lc-dd--js').toggleClass('active');
		window.setTimeout(function () {
			document.body.addEventListener('click', lcPPMissClick);
		}, 10);
	});

	function lcPPMissClick() {
		if (!event.target.closest('.lc-dd--js')) {
			document.body.removeEventListener('click', lcPPMissClick);
			$('.lc-dd--js').removeClass('active');
		}
	} //dd js


	$('.bell-js').click(function () {
		document.body.removeEventListener('click', bellPPMissClick);
		$('.bell-dd--js').toggleClass('active');
		window.setTimeout(function () {
			document.body.addEventListener('click', bellPPMissClick);
		}, 10);
	});

	function bellPPMissClick() {
		if (!event.target.closest('.bell-dd--js')) {
			document.body.removeEventListener('click', bellPPMissClick);
			$('.bell-dd--js').removeClass('active');
		}
	} //020 menu


	$('.mvp-burger-js').click(function () {
		document.body.removeEventListener('click', nMenuMissClick);
		$(this).toggleClass('active');
		$('.mvp-menu--js').toggleClass('active');
		window.setTimeout(function () {
			document.body.addEventListener('click', nMenuMissClick);
		}, 10);
	});

	function nMenuMissClick() {
		if (!event.target.closest('.mvp-menu--js')) {
			document.body.removeEventListener('click', nMenuMissClick);
			$('.mvp-menu--js, .mvp-burger-js').removeClass('active');
		}
	} //css vars


	var header = document.querySelector("#headerAlt");
	document.documentElement.style.setProperty('--scroll-width', "".concat(scrollWidth, "px"));

	function calcCssVars() {
		document.documentElement.style.setProperty('--header-h', "".concat(header.offsetHeight, "px"));
	}

	if (header) {
		window.addEventListener('resize', calcCssVars, {
			passive: true
		});
		window.addEventListener('scroll', calcCssVars, {
			passive: true
		});
		calcCssVars();
	} //custom modal


	$('.custom-modal-link-js').click(function () {
		var id = this.getAttribute('href');
		var modal = document.querySelector(id);
		$('body').addClass('fixed3');
		$(modal).addClass('active');
	});
	$('.close-cm-js').click(function () {
		$(this).closest('.custom-modal--js').removeClass('active');
		$('body').removeClass('fixed3');
	}); //repeator js

	$('.repeator-js').each(function () {
		var firtsItem = this.querySelector('.r-item-js');
		var content = firtsItem.innerHTML; //console.log(content);

		var addBtn = this.querySelector('.r-add-btn-js');
		addBtn.addEventListener('click', duplicateRItem.bind(addBtn, this, content));
	}); //delegation of remove btn

	$('.repeator-js').click(function () {
		var thisRepeator = this;
		var target = event.target;

		if (target.closest('.r-remove-item-js')) {
			var item = target.closest('.r-item-js');
			$(item).slideUp(function () {
				$(item).addClass('d-none');
				item.remove();
				checkRemoveBtn(thisRepeator);
			});
		}
	});

	function duplicateRItem(parent, content) {
		var btnParent = this.parentNode;
		var newItem = document.createElement('div');
		newItem.classList.add('custom-modal__r-item', 'r-item-js', 'd-none-no-important');
		newItem.innerHTML = content;
		btnParent.insertBefore(newItem, this);
		addSelect2ToNewItems(newItem);
		$(newItem).slideDown(function () {
			$(this).removeClass('d-none-no-important');
		});
		checkRemoveBtn(parent);
	} //


	function checkRemoveBtn(repeatorBl) {
		var items = repeatorBl.querySelectorAll('.r-item-js'); //case 1

		if (items.length > 1) {
			var _iterator3 = _createForOfIteratorHelper(items),
					_step3;

			try {
				for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
					var item = _step3.value;
					var thisRemoveBtn = item.querySelector('.r-remove-item-js');

					if (!thisRemoveBtn) {
						var removeBtn = createRemoveBtn();
						$(removeBtn).addClass('d-none-no-important');
						item.appendChild(removeBtn);
						$(removeBtn).slideDown(function () {
							$(this).removeClass('d-none-no-important');
						});
					}
				}
			} catch (err) {
				_iterator3.e(err);
			} finally {
				_iterator3.f();
			}
		} //case 2
		else {
				var _removeBtn = items[0].querySelector('.r-remove-item-js');

				_removeBtn.classList.add('pointer-events-none');

				$(_removeBtn).slideUp(function () {
					$(_removeBtn).addClass('d-none');

					_removeBtn.remove();
				});
			}
	}

	function createRemoveBtn() {
		var removeBtn = document.createElement('div');
		var content = document.querySelector('.r-remove-item-js').innerHTML;
		removeBtn.classList.add('form-wrap__remove-item', 'r-remove-item-js');
		removeBtn.innerHTML = content;
		return removeBtn;
	} // need timeout to properly extract conntent of repeator
	// it will become useless if u get some innerHtml into another way


	window.setTimeout(function () {
		$('.default-select-js').select2({
			minimumResultsForSearch: Infinity,
			dropdownCssClass: "default-select2"
		});
		$('.prof-slect2-js').select2({
			tags: true,
			maximumSelectionLength: 30,
			dropdownCssClass: "default-select2"
		});
	}, 10); // .repeator-js
	// .r-item-js
	// .r-remove-item-js
	// .r-add-btn-js
	//fixed btn

	$('.scroll-top-btn--js, .scroll-top-js').click(function () {
		event.preventDefault();
		window.scrollTo(0, 0);
	});
	var fixedScrollTopBtn = document.querySelector('.scroll-top-btn--js');
	var footerN = document.querySelector('.footerN--js');

	if (fixedScrollTopBtn) {
		document.addEventListener('scroll', function () {
			console.log(footerN.getBoundingClientRect().top + $(window)['scrollTop'](), window.scrollY + vh(100));
			var footerTop = footerN.getBoundingClientRect().top + $(window)['scrollTop']();

			if (window.scrollY > vh(50) && footerTop > window.scrollY + vh(100)) {
				fixedScrollTopBtn.classList.add('active');
			} else {
				fixedScrollTopBtn.classList.remove('active');
			}
		}, {
			passive: true
		});
	}

	function vh(v) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return v * h / 100;
	} //
	//end luckyone js
	//todo New
	//2 kill ui kit

}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

function addSelect2ToNewItems(htmlNode) {
	$(htmlNode).find('.default-select-js').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "default-select2"
	});
	$(htmlNode).find('.prof-slect2-js').select2({
		tags: true,
		//maximumSelectionLength: 30,
		dropdownCssClass: "default-select2"
	});
}