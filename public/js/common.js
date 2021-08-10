"use strict";

var isIE11 = Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject;

if (isIE11) {
	document.body.classList.remove("loaded_hiding");
	$(".s404--borser").removeClass("d-none");
}

let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px'; // мы должны вставить элемент в документ, иначе размеры будут равны 0

if (!isIE11) {
	document.body.append(div);
}

let scrollWidth = div.offsetWidth - div.clientWidth;

if (!isIE11) {
	div.remove();
}

document.documentElement.style.setProperty('--scroll-width', "".concat(scrollWidth, "px"));
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
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			},
			beforeLoad: function () {
				document.querySelector("html").classList.add("fixed");
			},
			afterClose: function () {
				document.querySelector("html").classList.remove("fixed");
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		const linkModal = document.querySelectorAll('.link-modal');

		function addData() {
			linkModal.forEach(element => {
				element.addEventListener('click', () => {
					let modal = document.querySelector(element.getAttribute("href"));
					const data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							const el = modal.querySelector(elem);
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

	tabscostume(tab) {
		let tabs = {
			Btn: [].slice.call(document.querySelectorAll(".".concat(tab, "__btn"))),
			BtnParent: [].slice.call(document.querySelectorAll(".".concat(tab, "__caption"))),
			Content: [].slice.call(document.querySelectorAll(".".concat(tab, "__content")))
		};
		tabs.Btn.forEach((element, index) => {
			element.addEventListener('click', () => {
				if (!element.classList.contains('active')) {
					//turn off old
					let oldActiveEl = element.closest(".".concat(tab)).querySelector(".".concat(tab, "__btn.active"));
					let oldActiveContent = tabs.Content[index].closest(".".concat(tab)).querySelector(".".concat(tab, "__content.active"));
					oldActiveEl.classList.remove('active');
					oldActiveContent.classList.remove('active'); //turn on new(cklicked el)

					element.classList.add('active');
					tabs.Content[index].classList.add('active');
				}
			});
		});
	},

	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
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

	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

		document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
		}, {
			passive: true
		});
	},

	animateScroll() {
		let header = document.querySelector("#headerAlt");
		$(document).on('click', '.scroll-link, .aside-menu-js > ul > li > a', function () {
			event.preventDefault();
			const elementClick = $(this).attr("href");
			const destination = $(elementClick).offset().top - header.offsetHeight - 20; //$('html, body').animate({ scrollTop: destination }, 1100);

			window.scrollTo({
				top: destination,
				behavior: "smooth"
			});
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
	JSCCommon.tabscostume('c-tabs');
	JSCCommon.inputMask();
	JSCCommon.heightwindow();
	JSCCommon.animateScroll(); // JSCCommon.CustomInputFile();

	var x = window.location.host;
	let screenName;
	screenName = '048-2.png';

	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", "<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>"));
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
	}, {
		passive: true
	});
	scrollHandler(); // modal window
	//luckyone js
	//css vars

	let header = document.querySelector("#headerAlt");
	let headerH;
	document.documentElement.style.setProperty('--scroll-width', "".concat(scrollWidth, "px"));

	function calcCssVars() {
		document.documentElement.style.setProperty('--header-h', "".concat(header.offsetHeight, "px"));
		headerH = header.offsetHeight;
	}

	if (header) {
		window.addEventListener('resize', calcCssVars, {
			passive: true
		});
		window.addEventListener('scroll', calcCssVars, {
			passive: true
		});
		calcCssVars();
	} //alert line


	let alertLine = document.querySelector('.alert-line--js');

	function calcAlertLineHeight() {
		if (!alertLine) return;
		document.documentElement.style.setProperty('--top-nav-top', "".concat(alertLine.offsetHeight, "px"));
	}

	if (alertLine) {
		window.addEventListener('resize', calcAlertLineHeight, {
			passive: true
		});
		window.addEventListener('scroll', calcAlertLineHeight, {
			passive: true
		});
		calcAlertLineHeight();
		window.setTimeout(calcAlertLineHeight, 30);
		let alertLineSlider = new Swiper('.alert-line-slider-js', {
			slidesPerView: 'auto',
			freeMode: true,
			loopFillGroupWithBlank: true,
			touchRatio: 0.2,
			slideToClickedSlide: true,
			freeModeMomentum: true
		});
	}

	$('.burger-js').click(function () {
		$('.burger-js, .mm--js, .top-nav').toggleClass('active');
		$('body').toggleClass('fixed2');
		$('.alert-line--js').toggleClass('active');
	});
	window.addEventListener('resize', function () {
		if (window.matchMedia("(min-width: 1200px)").matches) {
			//menu
			$('.burger-js, .mm--js, .top-nav').removeClass('active');
			$('body').removeClass('fixed2');
			$('.alert-line--js').addClass('active');
		}
	}, {
		passive: true
	});
	document.addEventListener('click', function () {
		if (!event.target.closest('.top-nav') && !event.target.closest('.mm--js')) {
			$('.burger-js, .mm--js, .top-nav').removeClass('active');
			$('body').removeClass('fixed2');
			$('.alert-line--js').addClass('active');
		}
	}); //accordion

	$('.dd-head-js').click(function () {
		$(this.parentElement).toggleClass('active');
		$(this.parentElement).find('.dd-content-js').slideToggle(450, function () {
			$(this).toggleClass('active');
		});
	}); //filter dd

	$('.f-btn-js').click(function () {
		$(this).toggleClass('active');
		$('.filter--js').slideToggle(450, function () {
			$(this).toggleClass('active');
		});
	}); //show more

	$('.show-more-js').click(function () {
		$(this).removeClass('active');
		$(this).closest('.f-item-js').find('.shm-cont-js').fadeIn(function () {
			$(this).addClass('active');
		});
	}); //

	$('.toggle-pass-inp-js').click(function () {
		let inp = this.parentElement.querySelector('input');
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


		let baseUrl = "img/svg/";
		let $state = $('<span class="select2-results__img">' + '<img src="' + baseUrl + state.element.getAttribute('data-icon') + '.svg" alt="' + state.text + '"/>' + '</span>');
		return $state;
	} //multiple select2


	$('.skill-slect2-js').select2({
		maximumSelectionLength: 30,
		dropdownCssClass: "soc-select2"
	}); //

	$('.resp-tabs-js').easyResponsiveTabs({
		activate: function () {}
	}); //scroll top js

	$('.scroll-top-js').click(function () {
		window.scrollTo(0, 0);
	}); //020 page +
	//020 page +
	//020 page +

	let sidebarSlider = new Swiper('.sidebar-slider-js', {
		slidesPerView: 'auto',
		spaceBetween: 12,
		slidesPerView: 'auto',
		freeMode: true //freeModeMomentum: true,

	}); //headerAlt

	$('.search-inp-js').focus(function () {
		$(this.parentElement).find('.search-btn-js').addClass('active');
	}).blur(function () {
		$(this.parentElement).find('.search-btn-js').removeClass('active');
	}); //serch-type dd

	$('.headerAlt-st-txt-js').click(function () {
		document.body.removeEventListener('click', headerAltStMissClick);
		$('.headerAlt-st-txt-js, .headerAlt-st-dd-js').toggleClass('active');
		window.setTimeout(function () {
			document.body.addEventListener('click', headerAltStMissClick);
		}, 10);
	});

	function headerAltStMissClick() {
		if (!event.target.closest('.lc-dd--js')) {
			document.body.removeEventListener('click', headerAltStMissClick);
			$('.headerAlt-st-txt-js, .headerAlt-st-dd-js').removeClass('active');
		}
	}

	$('.headerAlt-st-item-js').click(function () {
		$('.headerAlt-st-item-js').each(function () {
			$(this).removeClass('current');
		});
		$(this).addClass('current');
		let stTxt = document.querySelector('.headerAlt-st-txt-js');
		stTxt.innerHTML = this.innerHTML;
		let input = document.querySelector('.search-inp-js');
		input.setAttribute('placeholder', this.getAttribute('data-inp-placeholder'));
		let hiddenInput = document.querySelector('.headerAlt-st-hidden-inp-js');
		hiddenInput.value = this.getAttribute('data-inp-placeholder');
	}); //new footem items

	$('.fl-icon-js').click(function () {
		$(this).toggleClass('active');
	}); //
	//from jetbrains animation

	$('.sidebar-trakcer-js').mousemove(function () {
		if (!this.parentElement.classList.contains('active')) return;
		let balls = this.parentElement.querySelectorAll('.sidebar-ball-js');

		for (let ball of balls) {
			ball.setAttribute("style", "top: ".concat(event.offsetY, "px; left: ").concat(event.offsetX, "px;"));
		}
	}).mouseenter(function () {
		let balls = this.parentElement.querySelectorAll('.sidebar-ball-js');
		$(balls).addClass('has-transition');
		window.setTimeout(function () {
			$(balls).removeClass('has-transition');
		}, 300);
	}); //aside menu js

	let sidebarItems = document.querySelectorAll('.sidebar-box-js');
	let sidebarLinks = document.querySelectorAll('.aside-menu-js > ul > li > a');

	function setSidebarAncorsWork() {
		let scrollTop = window.scrollY;
		let distance = [];

		for (let item of sidebarItems) {
			let itemTop = item.getBoundingClientRect().top;
			distance.push(Math.abs(itemTop));
		}

		console.log('end func');
		let min = distance[0];
		let minIndex = 0;
		$(distance).each(function () {
			if (this < min) {
				min = this;
				minIndex = $(distance).index(this);
			}
		});
		$(sidebarLinks).removeClass('active');
		$(sidebarLinks[minIndex]).addClass('active');
	}

	if (sidebarLinks.length > 0 && sidebarItems.length > 0) {
		setSidebarAncorsWork();
		document.addEventListener('scroll', setSidebarAncorsWork, {
			passive: true
		});
		document.addEventListener('resize', setSidebarAncorsWork, {
			passive: true
		});
	} //.lc-cont-js


	$('.lc-cont-js').click(function () {
		document.body.removeEventListener('click', lcPPMissClick);
		$('.lc-dd--js').toggleClass('active');
		$('.lc-dd-btn-js').toggleClass('active');
		window.setTimeout(function () {
			document.body.addEventListener('click', lcPPMissClick);
		}, 10);
	});

	function lcPPMissClick() {
		if (!event.target.closest('.lc-dd--js')) {
			document.body.removeEventListener('click', lcPPMissClick);
			$('.lc-dd--js').removeClass('active');
			$('.lc-dd-btn-js').removeClass('active');
		}
	} //colookerBtn


	let colookerBtn = document.querySelector('.colooker-dd-btn-js'); //console.log(colookerBtn);

	$(colookerBtn).click(function () {
		$(colookerBtn).toggleClass('active');
		$('.colooker-dd--js').toggleClass('active');
	}); //

	if (colookerBtn) {
		document.addEventListener('click', function () {
			if (!event.target.closest('.colooker-dd-btn-js') && !event.target.closest('.colooker-dd--js')) {
				$('.colooker-dd-btn-js').removeClass('active');
				$('.colooker-dd--js').removeClass('active');
			}
		});
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
	} //custom modal


	$('.custom-modal-link-js').click(function () {
		let id = this.getAttribute('href');
		let modal = document.querySelector(id);
		$('body').addClass('fixed3');
		$(modal).addClass('active');
	});
	$('.close-cm-js').click(function () {
		$(this).closest('.custom-modal--js').removeClass('active');
		$('body').removeClass('fixed3');
	}); //repeator js

	$('.repeator-js').each(function () {
		let firtsItem = this.querySelector('.r-item-js');
		if (!firtsItem) return;
		let content = firtsItem.innerHTML;
		let addBtn = this.querySelector('.r-add-btn-js');
		addBtn.addEventListener('click', duplicateRItem.bind(addBtn, this, content));
	}); //delegation of remove btn

	$('.repeator-js').click(function () {
		let thisRepeator = this;
		let target = event.target;

		if (target.closest('.r-remove-item-js')) {
			let item = target.closest('.r-item-js');
			$(item).slideUp(function () {
				$(item).addClass('d-none');
				item.remove();
				checkRemoveBtn(thisRepeator);
				checkHint(thisRepeator);
			});
		}
	});

	function duplicateRItem(parent, content) {
		let btnParent = this.parentNode;
		let newItem = document.createElement('div');
		newItem.classList.add('custom-modal__r-item', 'r-item-js', 'd-none-no-important');
		newItem.innerHTML = content;
		btnParent.insertBefore(newItem, this);
		addSelect2ToNewItems(newItem);
		$(newItem).slideDown(function () {
			//was here
			$(this).removeClass('d-none-no-important');
			let index = $(this).index();
			let names = newItem.querySelectorAll('[name]');
			names.forEach(function (el) {
				let oldName = el.getAttribute('name').split("][");
				let number = el.getAttribute('name').split("][").pop().split(']').shift();
				el.setAttribute("name", " ".concat(oldName[0], "][").concat(index, "]"));
				let newName = el.getAttribute('name'); //console.log(newName);
			});
		});
		checkRemoveBtn(parent);
		checkHint(parent);
	} //


	function checkHint(repeatorBl) {
		let hint = repeatorBl.querySelectorAll('.r-hint-js');
		let items = repeatorBl.querySelectorAll('.r-item-js');
		if (!hint) return;

		if (items.length > 0) {
			$(hint).slideUp(function () {
				$(this).removeClass('active');
			});
		} else {
			$(hint).slideDown(function () {
				$(this).addClass('active');
			});
		}
	}

	function checkRemoveBtn(repeatorBl) {
		let items = repeatorBl.querySelectorAll('.r-item-js'); //case 1

		if (items.length > 1 || repeatorBl.classList.contains('empty-content-js')) {
			for (let item of items) {
				let thisRemoveBtn = item.querySelector('.r-remove-item-js');

				if (!thisRemoveBtn) {
					let removeBtn = createRemoveBtn();
					$(removeBtn).addClass('d-none-no-important');
					item.appendChild(removeBtn);
					$(removeBtn).slideDown(function () {
						$(this).removeClass('d-none-no-important');
					});
				}
			}
		} //case 2
		else {
				let removeBtn = items[0].querySelector('.r-remove-item-js');
				removeBtn.classList.add('pointer-events-none');
				$(removeBtn).slideUp(function () {
					$(removeBtn).addClass('d-none');
					removeBtn.remove();
				});
			}
	}

	function createRemoveBtn() {
		let removeBtn = document.createElement('div');
		let content = document.querySelector('.r-remove-item-js').innerHTML;
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
	//hack remove content

	$('.empty-content-js').each(function () {
		let removeBtn = this.querySelector('.r-remove-item-js');
		removeBtn.click();
	}); //

	$(document).on("click", ".bnt", function () {
		newInput.attr("name", ' nameNew');
	}); //fixed btn

	$('.scroll-top-btn--js, .scroll-top-js').click(function () {
		event.preventDefault();
		window.scrollTo(0, 0);
	});
	let fixedScrollTopBtn = document.querySelector('.scroll-top-btn--js');
	let footerN = document.querySelector('.footerN--js');

	if (fixedScrollTopBtn) {
		document.addEventListener('scroll', function () {
			// console.log(footerN.getBoundingClientRect().top + $(window)['scrollTop'](), window.scrollY + vh(100));
			if (!footerN) return;
			let footerTop = footerN.getBoundingClientRect().top + $(window)['scrollTop']();

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
	} //sCompilation js
	//item regular


	$('.item-regular-js .sComp-btn-js').click(function () {
		let col = this.closest('.sComp-col-js');

		if (window.matchMedia("(min-width: 768px)").matches) {
			$(col).fadeOut(function () {});
		} else {
			$(col).slideUp(function () {});
		}
	}); //item like/dislike

	$('.bb-cont-js').click(function () {
		$(this).fadeOut();
	}); //like

	$('.item-like-js .sComp-dislike-btn-js').click(function () {
		let col = this.closest('.sComp-col-js');

		if (window.matchMedia("(min-width: 768px)").matches) {
			$(col).fadeOut(function () {});
		} else {
			$(col).slideUp(function () {});
		}
	});
	$('.item-like-js .sComp-like-btn-js').click(function () {
		$(this).closest('.sComp-col-js').find('.bb-cont-js').fadeIn();
	}); //dislike

	$('.item-dislike-js .sComp-like-btn-js').click(function () {
		let col = this.closest('.sComp-col-js');

		if (window.matchMedia("(min-width: 768px)").matches) {
			$(col).fadeOut(function () {});
		} else {
			$(col).slideUp(function () {});
		}
	});
	$('.item-dislike-js .sComp-dislike-btn-js').click(function () {
		$(this).closest('.sComp-col-js').find('.bb-cont-js').fadeIn();
	}); //.myCab-close-alert-js

	$('.myCab-close-alert-js').click(function () {
		$(this).closest('.myCab-alert-js').slideUp();
	}); //

	$('.free-dd-head-js').click(function () {
		$(this.parentElement).toggleClass('active');
		$(this.parentElement).find('.free-dd-content-js').slideToggle(function () {
			$(this).toggleClass('active');
		});
	}); //end luckyone js

	$('.sBaner-input-js').focus(function () {
		$('.sBaner-search-row-js, .sBaner-sub-row-js').addClass('active');
	}).blur(function () {
		$('.sBaner-search-row-js, .sBaner-sub-row-js').removeClass('active');
	}); //.reg-btn--js

	let regBtn = document.querySelector('.reg-btn--js');
	let mainWrapper = document.querySelector('.main-wrapper');

	if (regBtn && mainWrapper) {
		window.addEventListener('wheel', function (evt) {
			//evt.deltaY < 0 && evt.deltaY < regBtn.offsetHeight  &&
			//console.log(mainWrapper.offsetHeight, window.scrollY);
			if (window.scrollY > window.innerHeight * 1.2 && mainWrapper.offsetHeight > window.scrollY + 500 + window.innerHeight) {
				regBtn.classList.add("active");
			} else {
				regBtn.classList.remove("active");
			}
		}, {
			passive: true
		});
	} //


	$('.sVacPage-like-btn-js').click(function () {
		event.preventDefault();
		$(this).toggleClass('active');
	}); //mainpage selects

	$('.main-page-select2-js').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "mainpage-select2"
	}); //

	$('.inp-str-input-js').focus(function () {
		$('.inp-str--js').addClass('active');
	}).blur(function () {
		$('.inp-str--js').removeClass('active');
	}); //

	$('.sLogoes-btn-js').click(function () {
		$(this).toggleClass('active');
		$('.sLogoes__col:nth-child(n+7)').slideToggle(function () {
			$(this).toggleClass('active');
		});
	}); //sReg

	let regHeader = document.querySelector(".sReg-header-js");

	function calcRegHeaderH() {
		document.documentElement.style.setProperty('--sReg-header-h', "".concat(regHeader.offsetHeight, "px"));
	}

	if (regHeader) {
		window.addEventListener('resize', calcRegHeaderH, {
			passive: true
		});
		window.addEventListener('scroll', calcRegHeaderH, {
			passive: true
		});
		calcRegHeaderH();
	} //sReg


	let StepsSlider = new Swiper('.sReg-step-slider-js', {
		slidesPerView: 'auto',
		breakpoints: {
			0: {
				spaceBetween: 24
			},
			1200: {
				spaceBetween: 48
			}
		},
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true
	}); //

	$('.sReg-portrait-inp-js').change(function () {
		let tmppath = URL.createObjectURL(event.target.files[0]);
		let img = document.querySelector('.sReg-portrait-js img');
		img.setAttribute('src', tmppath);
	}); //045-main ++

	let sTitleSlider = new Swiper('.sTitle-slider-js', {
		watchOverflow: true,
		slidesPerView: 'auto',
		spaceBetween: 12,
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev'
		}
	}); //

	let inpNav = document.querySelector(".inv-nav-js");

	function calcInpNavW() {
		document.documentElement.style.setProperty('--inp-nav-w', "".concat(inpNav.offsetWidth + 12, "px"));
	}

	if (inpNav) {
		window.addEventListener('resize', calcInpNavW, {
			passive: true
		});
		window.addEventListener('scroll', calcInpNavW, {
			passive: true
		});
		calcInpNavW();
	} //


	let sDayVacSlider = new Swiper('.sDayVac-slider-js', {
		slidesPerView: 'auto',
		spaceBetween: 24
	}); //

	let sUsefullSlider = new Swiper('.sUsefull-slider-js', {
		slidesPerView: 'auto',
		breakpoints: {
			0: {
				spaceBetween: 30
			},
			768: {
				spaceBetween: 24
			}
		},
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev'
		},
		pagination: {
			el: ' .swiper-pagination'
		}
	});
	$('.toggle-btn-js').click(function () {
		$(this).toggleClass('active');
		$(this).closest('.toggle-box-js').find('.toggle-content-js').slideToggle(function () {
			$(this).toggleClass('active');
		});
	}); //.sCatalog-dd
	//using this twice in sCatalog

	$('.sCatalog-dd-head-js').click(function () {
		document.body.removeEventListener('click', sCatalogDDMissClick);
		let thisHeader = this; //close all except this

		$('.sCatalog-dd-head-js').each(function () {
			if (thisHeader !== this) {
				$(this).removeClass('active').parent().find('.sCatalog-dd-content-js').removeClass('active');
				let currentHeader = this;
				window.setTimeout(function () {
					$(currentHeader).parent().find('.sCatalog-dd-content-js').removeClass('close-alt-effect');
				}, 300);
			}
		}); //toggle this

		$(this).toggleClass('active');
		$(this.parentElement).find('.sCatalog-dd-content-js').toggleClass('active');
		let currentHeader = this;
		window.setTimeout(function () {
			$(currentHeader).parent().find('.sCatalog-dd-content-js').addClass('close-alt-effect');
		}, 300);
		window.setTimeout(function () {
			document.body.addEventListener('click', sCatalogDDMissClick);
		}, 10);
	});

	function sCatalogDDMissClick() {
		//if (event.target.closest('.sCatalog-dd-content-js')) return
		document.body.removeEventListener('click', sCatalogDDMissClick); //close all

		$('.sCatalog-dd-head-js').each(function () {
			$(this).removeClass('active').parent().find('.sCatalog-dd-content-js').removeClass('active');
			let currentHeader = this;
			window.setTimeout(function () {
				$(currentHeader).parent().find('.sCatalog-dd-content-js').removeClass('close-alt-effect');
			}, 300);
		});
	} //radio txt into html


	$('.sCatalog-dd-content-js input[type="radio"]').change(function () {
		this.closest('.sCatalog-dd-js').querySelector('.sCatalog-dd-head-js').innerHTML = this.parentElement.querySelector('.txt-js').innerHTML;
	}); //new filter

	$('.chb-items-toggle-js').click(function () {
		$(this).toggleClass('active').closest('.chb-items-js').find('.chb-items-hidden-js').slideToggle(function () {
			$(this).toggleClass('active');
		});
	}); //fixed filter

	$('.cat-filter-toggle-js').click(function () {
		$('.cat-filter--js').toggleClass('active');
		$('body').toggleClass('fixed4');
	});
	let sCatalogItems = document.querySelector('.sCatalog-js');

	if (sCatalogItems) {
		document.addEventListener('scroll', function () {
			let scrollTop = window.scrollY;
			let itemBottom = sCatalogItems.offsetHeight + getCoords(sCatalogItems).top;
			let scolledOverCatItems = scrollTop + document.documentElement.clientHeight > itemBottom;
			let scolledTopCatItems = window.scrollY > getCoords(sCatalogItems).top;

			if (scolledTopCatItems && !scolledOverCatItems) {
				$('.cat-filter-toggle-js').addClass('active');
			} else {
				$('.cat-filter-toggle-js').removeClass('active');
			}
		});
	}

	function getCoords(elem) {
		// crossbrowser version
		var box = elem.getBoundingClientRect();
		var body = document.body;
		var docEl = document.documentElement;
		var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
		var clientTop = docEl.clientTop || body.clientTop || 0;
		var clientLeft = docEl.clientLeft || body.clientLeft || 0;
		var top = box.top + scrollTop - clientTop;
		var left = box.left + scrollLeft - clientLeft;
		return {
			top: Math.round(top),
			left: Math.round(left)
		};
	} //


	$('.toggle-active-on-click-js').click(function () {
		event.preventDefault();
		$(this).toggleClass('active');
	}); //

	let sVacCardStrip = document.querySelector('.sVacCard-fixed-strip-js');
	let FamiliarItems = document.querySelector('.sVacCard-familiar-js');

	if (sVacCardStrip && FamiliarItems) {
		//console.log('ok');
		document.addEventListener('scroll', function () {
			let scrollTop = window.scrollY;
			let FamiliarTop = getCoords(FamiliarItems).top;
			let scolledOverFamiliar = scrollTop + document.documentElement.clientHeight > FamiliarTop;

			if (scolledOverFamiliar) {
				$(sVacCardStrip).removeClass('active');
			} else {
				$(sVacCardStrip).addClass('active');
			}
		});
	} //


	let newSearchInput = document.querySelector('.sBaner-input-js');

	if (newSearchInput) {
		window.addEventListener('resize', changenewSearchInputPh, {
			passive: true
		});
		changenewSearchInputPh();
	}

	function changenewSearchInputPh() {
		if (!newSearchInput.getAttribute('data-placeholder-up-lg')) {
			return;
		}

		if (window.matchMedia("(min-width: 992px)").matches) {
			newSearchInput.setAttribute('placeholder', newSearchInput.getAttribute('data-placeholder-up-lg'));
		} else {
			newSearchInput.setAttribute('placeholder', newSearchInput.getAttribute('data-placeholder-down-lg'));
		}
	} //
	//yandex lazy
	//fix here put into pug afterwards
	// window.setTimeout(function (){
	// 	let yandexScript = document.createElement('script');
	// 	yandexScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=ef0b1dde-1d01-4d5b-9636-c00e2adbee98');
	// 	yandexScript.setAttribute('type', 'text/javascript');
	//
	// 	document.body.appendChild(yandexScript);
	// 	//console.log(yandexScript);
	// 	window.setTimeout(function (){
	// 		ymaps.ready(function () {
	// 			var myMap = new ymaps.Map('map', {
	// 					center: [59.939300861371185,30.213698854492115],
	// 					zoom: 16
	// 				}, {
	// 					searchControlProvider: 'yandex#search'
	// 				}),
	//
	// 				// Создаём макет содержимого.
	// 				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	// 					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
	// 				),
	//
	// 				myPlacemark = new ymaps.Placemark([59.939338387243374,30.214020719573902], {
	// 					hintContent: 'ООО Лаборатория Гемотест',
	// 					balloonContent: 'г. Москва'
	// 				}, {
	// 					// Опции.
	// 					// Необходимо указать данный тип макета.
	// 					iconLayout: 'default#image',
	// 					// Своё изображение иконки метки.
	// 					iconImageHref: 'img/svg/blue-mark.svg',
	// 					// Размеры метки.
	// 					iconImageSize: [38.5, 55],
	// 					// Смещение левого верхнего угла иконки относительно
	// 					// её "ножки" (точки привязки).
	// 					//iconImageOffset: [-5, -38]
	// 					iconImageOffset: [30, -30]
	// 				});
	//
	// 			myMap.geoObjects
	// 				.add(myPlacemark);
	// 		});
	// 	}, 1000);
	//
	// }, 2000);
	//show body


	window.setTimeout(function () {
		document.body.style.opacity = '1';
	}, 250); //

	$('.tells-input-row-js').each(function () {
		let tellInputs = this.querySelectorAll('input');
		$(tellInputs).keyup(function () {
			if (event.key === "Delete" || event.key === "Backspace" || event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
				return;
			}

			if (this.getAttribute('pattern') && checkPattern(this)) {
				let index = $(tellInputs).index(this);

				if (tellInputs[index + 1]) {
					tellInputs[index + 1].focus();
				} else {
					this.blur();
				}
			}
		});
	});

	function checkPattern(elem) {
		return new RegExp(elem.getAttribute("pattern")).test(elem.value);
	} //???


	$('.number-mask-js').each(function () {
		Inputmask(this.getAttribute('data-mask')).mask(this);
	});
	$('.chb-dd-head-js').click(function () {
		//avoid label doublecall and chb click toggle
		if (event.target.tagName === 'INPUT' || event.target.closest('label')) {
			return;
		}

		let content;
		$(this.parentElement.childNodes).each(function () {
			if ($(this).hasClass('chb-dd-content-js')) {
				content = this;
			}
		});
		$(content.parentElement).toggleClass('active');
		$(content).slideToggle(function () {
			$(this).toggleClass('active');
		});
	}); //.c-item-js

	$('.c-item-js').click(function () {
		$(this).slideUp(function () {
			$(this).removeClass('active');
		});
	});
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