var isIE11 = Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject;

if (isIE11) {
	document.body.classList.remove("loaded_hiding");
	$(".s404--borser").removeClass("d-none");
}

let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
// мы должны вставить элемент в документ, иначе размеры будут равны 0
if (!isIE11) {
	document.body.append(div);
}
let scrollWidth = div.offsetWidth - div.clientWidth;
if (!isIE11) {
	div.remove();
}

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
	tabscostume(tab) {
		let tabs = {
			Btn: [].slice.call(document.querySelectorAll(`.${tab}__btn`)),
			BtnParent: [].slice.call(document.querySelectorAll(`.${tab}__caption`)),
			Content: [].slice.call(document.querySelectorAll(`.${tab}__content`)),
		}
		tabs.Btn.forEach((element, index) => {
			element.addEventListener('click', () => {
				if (!element.classList.contains('active')) {
					//turn off old
					let oldActiveEl = element.closest(`.${tab}`).querySelector(`.${tab}__btn.active`);
					let oldActiveContent = tabs.Content[index].closest(`.${tab}`).querySelector(`.${tab}__content.active`);

					oldActiveEl.classList.remove('active');
					oldActiveContent.classList.remove('active')

					//turn on new(cklicked el)
					element.classList.add('active');
					tabs.Content[index].classList.add('active');
				}
			})
		})
	},

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
		let header = document.querySelector("#headerAlt");
		$(document).on('click', '.scroll-link, .aside-menu-js > ul > li > a', function () {
			event.preventDefault();
			const elementClick = $(this).attr("href");
			const destination = $(elementClick).offset().top - header.offsetHeight - 20;

			//$('html, body').animate({ scrollTop: destination }, 1100);
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
	JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.animateScroll();

	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	let screenName;
	screenName = '027-576.png';
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

	//020 page +
	//020 page +
	//020 page +
	let sidebarSlider = new Swiper('.sidebar-slider-js', {
		slidesPerView: 'auto',
		spaceBetween: 12,

		slidesPerView: 'auto',
		freeMode: true,
		//freeModeMomentum: true,
	});
	//headerAlt
	$('.search-inp-js').focus(function (){
		$(this.parentElement).find('.search-btn-js').addClass('active');
	}).blur(function (){
		$(this.parentElement).find('.search-btn-js').removeClass('active');
	});

	//new footem items
	$('.fl-icon-js').click(function (){
		$(this).toggleClass('active');
	})

	//

	//

	//from jetbrains animation
	$('.sidebar-trakcer-js').mousemove(function (){
		if (!this.parentElement.classList.contains('active')) return;

		let balls = this.parentElement.querySelectorAll('.sidebar-ball-js');
		for (let ball of balls){
			ball.setAttribute("style", `top: ${event.offsetY}px; left: ${event.offsetX}px;`);
		}
	}).mouseenter(function (){
		let balls = this.parentElement.querySelectorAll('.sidebar-ball-js');
		$(balls).addClass('has-transition');
		window.setTimeout(function (){
			$(balls).removeClass('has-transition');
		}, 300)
	});
	//aside menu js
	let sidebarItems = document.querySelectorAll('.sidebar-box-js');
	let sidebarLinks = document.querySelectorAll('.aside-menu-js > ul > li > a');
	let sideBarItemsMiddle = [];

	function setSBItemMiddle(){
		for(let item of sidebarItems){
			sideBarItemsMiddle.push(item.getBoundingClientRect().top + item.offsetHeight / 2);
		}
	}

	if (sidebarLinks.length > 0 && sidebarItems.length > 0){
		window.addEventListener('resize', function (){
			setSBItemMiddle();
		}, {passive: true});

		setSBItemMiddle();
	}

	document.addEventListener('scroll', function (){
		let scrollTop = window.scrollY;
		for(let [index, middle] of Object.entries(sideBarItemsMiddle)){
			let prev;
			if (index == 0){
				prev = 0;
			}
			else{
				prev = sideBarItemsMiddle[index - 1];
			}

			if (scrollTop < middle && scrollTop > prev){
				$(sidebarLinks).removeClass('active');
				sidebarLinks[index].classList.add('active');
			}
		}
	}, {passive: true});

	//.lc-cont-js
	$('.lc-cont-js').click(function (){
		document.body.removeEventListener('click', lcPPMissClick);
		$('.lc-dd--js').toggleClass('active');
		window.setTimeout(function (){
			document.body.addEventListener('click', lcPPMissClick);
		}, 10);
	});
	function lcPPMissClick(){
		if (!event.target.closest('.lc-dd--js')){
			document.body.removeEventListener('click', lcPPMissClick);
			$('.lc-dd--js').removeClass('active');
		}
	}
	//dd js
	$('.bell-js').click(function (){
		document.body.removeEventListener('click', bellPPMissClick);
		$('.bell-dd--js').toggleClass('active');
		window.setTimeout(function (){
			document.body.addEventListener('click', bellPPMissClick);
		}, 10);
	})
	function bellPPMissClick(){
		if (!event.target.closest('.bell-dd--js')){
			document.body.removeEventListener('click', bellPPMissClick);
			$('.bell-dd--js').removeClass('active');
		}
	}
	//020 menu
	$('.mvp-burger-js').click(function (){
		document.body.removeEventListener('click', nMenuMissClick);
		$(this).toggleClass('active');
		$('.mvp-menu--js').toggleClass('active');
		window.setTimeout(function (){
			document.body.addEventListener('click', nMenuMissClick);
		}, 10);
	});

	function nMenuMissClick(){
		if (!event.target.closest('.mvp-menu--js')){
			document.body.removeEventListener('click', nMenuMissClick);
			$('.mvp-menu--js, .mvp-burger-js').removeClass('active');
		}
	}
	//css vars
	let header = document.querySelector("#headerAlt");
	document.documentElement.style.setProperty('--scroll-width', `${scrollWidth}px`);
	function calcCssVars() {
		document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`);
	}
	if (header){
		window.addEventListener('resize', calcCssVars, { passive: true });
		window.addEventListener('scroll', calcCssVars, { passive: true });
		calcCssVars();
	}
	//custom modal
	$('.custom-modal-link-js').click(function (){
		let id = this.getAttribute('href');
		let modal = document.querySelector(id);
		$('body').addClass('fixed3');

		$(modal).addClass('active');
	});
	$('.close-cm-js').click(function (){
		$(this).closest('.custom-modal--js').removeClass('active');
		$('body').removeClass('fixed3');
	});

	//repeator js
	$('.repeator-js').each(function (){
		let firtsItem = this.querySelector('.r-item-js');
		let content = firtsItem.innerHTML;
		//console.log(content);

		let addBtn = this.querySelector('.r-add-btn-js');
		addBtn.addEventListener('click', duplicateRItem.bind(addBtn, this, content));
	});

	//delegation of remove btn
	$('.repeator-js').click(function (){
		let thisRepeator = this;
		let target = event.target;
		if (target.closest('.r-remove-item-js')){
			let item = target.closest('.r-item-js');

			$(item).slideUp(function (){
				$(item).addClass('d-none');
				item.remove();
				checkRemoveBtn(thisRepeator);
			});

		}
	})

	function duplicateRItem(parent, content){
		let btnParent = this.parentNode;
		let newItem = document.createElement('div');
		newItem.classList.add('custom-modal__r-item', 'r-item-js', 'd-none-no-important');
		newItem.innerHTML = content;

		btnParent.insertBefore(newItem, this);
		addSelect2ToNewItems(newItem);

		$(newItem).slideDown(function (){
			$(this).removeClass('d-none-no-important');
		});
		checkRemoveBtn(parent);
	}

	//
	function checkRemoveBtn(repeatorBl){
		let items = repeatorBl.querySelectorAll('.r-item-js');

		//case 1
		if (items.length > 1){
			for (let item of items){
				let thisRemoveBtn = item.querySelector('.r-remove-item-js');
				if (!thisRemoveBtn){
					let removeBtn = createRemoveBtn();
					$(removeBtn).addClass('d-none-no-important');
					item.appendChild(removeBtn);

					$(removeBtn).slideDown(function (){
						$(this).removeClass('d-none-no-important');
					})

				}
			}
		}

		//case 2
		else{
			let removeBtn = items[0].querySelector('.r-remove-item-js');
			removeBtn.classList.add('pointer-events-none');

			$(removeBtn).slideUp(function (){
				$(removeBtn).addClass('d-none');
				removeBtn.remove();
			});
		}
	}
	function createRemoveBtn(){
		let removeBtn = document.createElement('div');
		let content = document.querySelector('.r-remove-item-js').innerHTML;

		removeBtn.classList.add('form-wrap__remove-item', 'r-remove-item-js');
		removeBtn.innerHTML = content;

		return removeBtn;
	}

	// need timeout to properly extract conntent of repeator
	// it will become useless if u get some innerHtml into another way
	window.setTimeout(function (){
		$('.default-select-js').select2({
			minimumResultsForSearch: Infinity,
			dropdownCssClass: "default-select2",
		});
		$('.prof-slect2-js').select2({
			tags: true,
			maximumSelectionLength: 30,
			dropdownCssClass: "default-select2",
		});
	}, 10);
	// .repeator-js
	// .r-item-js
	// .r-remove-item-js
	// .r-add-btn-js


	//fixed btn
	$('.scroll-top-btn--js, .scroll-top-js').click(function (){
		event.preventDefault();
		window.scrollTo(0,0);
	})

	let fixedScrollTopBtn = document.querySelector('.scroll-top-btn--js');
	let footerN = document.querySelector('.footerN--js');
	if (fixedScrollTopBtn){
		document.addEventListener('scroll', function (){
			console.log(footerN.getBoundingClientRect().top + $(window)['scrollTop'](), window.scrollY + vh(100));
			let footerTop = footerN.getBoundingClientRect().top + $(window)['scrollTop']();

			if (window.scrollY > vh(50) && footerTop > window.scrollY + vh(100)){
				fixedScrollTopBtn.classList.add('active');
			}
			else{
				fixedScrollTopBtn.classList.remove('active');
			}
		}, {passive: true})
	}
	function vh(v) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return (v * h) / 100;
	}

	//sCompilation js

	//item regular
	$('.item-regular-js .sComp-btn-js').click(function (){
		let col = this.closest('.sComp-col-js');

		if (window.matchMedia("(min-width: 768px)").matches){
			$(col).fadeOut(function (){});
		}
		else{
			$(col).slideUp(function (){});
		}
	});
	//item like/dislike
	$('.bb-cont-js').click(function (){
		$(this).fadeOut();
	});
	//like
	$('.item-like-js .sComp-dislike-btn-js').click(function (){
		let col = this.closest('.sComp-col-js');

		if (window.matchMedia("(min-width: 768px)").matches){
			$(col).fadeOut(function (){});
		}
		else{
			$(col).slideUp(function (){});
		}
	});
	$('.item-like-js .sComp-like-btn-js').click(function (){
		$(this).closest('.sComp-col-js').find('.bb-cont-js').fadeIn();
	});
	//dislike
	$('.item-dislike-js .sComp-like-btn-js').click(function (){
		let col = this.closest('.sComp-col-js');

		if (window.matchMedia("(min-width: 768px)").matches){
			$(col).fadeOut(function (){});
		}
		else{
			$(col).slideUp(function (){});
		}
	});
	$('.item-dislike-js .sComp-dislike-btn-js').click(function (){
		$(this).closest('.sComp-col-js').find('.bb-cont-js').fadeIn();
	});
	//.myCab-close-alert-js
	$('.myCab-close-alert-js').click(function (){
		$(this).closest('.myCab-alert-js').slideUp();
	})

	//end luckyone js

	//todo New
	//2 kill ui kit



};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

function addSelect2ToNewItems(htmlNode){
	$(htmlNode).find('.default-select-js').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "default-select2",
	});
	$(htmlNode).find('.prof-slect2-js').select2({
		tags: true,
		//maximumSelectionLength: 30,
		dropdownCssClass: "default-select2",
	});
}

