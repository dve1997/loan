/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Forms; }
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/requests */ "./src/js/modules/services/requests.js");

class Forms {
  constructor() {
    let {
      forms,
      inputsEmail,
      inputsPhone
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.forms = document.querySelectorAll(forms);
    this.inputsEmail = document.querySelectorAll(inputsEmail);
    this.inputsPhone = document.querySelectorAll(inputsPhone);
    this.message = {
      loading: "Идет отправка данных...",
      loaded: "Данные успешно отправлены. Мы скорос с Вами свяжемся!",
      error: "Произошла ошибка, прошу повторить попытку отправки данных позже..."
    };
  }
  sendingForm() {
    this.forms.forEach(itemForm => {
      itemForm.addEventListener("submit", e => {
        e.preventDefault();
        const data = new FormData(itemForm);
        const infoBlock = document.createElement("div");
        infoBlock.textContent = `${this.message.loading}`;
        infoBlock.style.cssText = `
         color: black;
         font-weight: 900;
         padding-top: 20px;
         text-align: center;
         `;
        itemForm.append(infoBlock);
        (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__["default"])("assets/question.php", data).then(data => {
          console.log(data);
          infoBlock.textContent = `${this.message.loaded}`;
        }).catch(error => {
          console.log(error);
          infoBlock.textContent = `${this.message.error}`;
        }).finally(() => {
          itemForm.reset();
          setTimeout(() => infoBlock.remove(), 5000);
        });
      });
    });
  }
  inputEmail() {
    this.inputsEmail.forEach(input => {
      input.addEventListener("keypress", e => {
        if (e.key.match(/[^a-z 0-9 @]/gi)) {
          e.preventDefault();
        }
      });
    });
  }
  inputPhone(e) {
    let matrix = "+1 (___) __ ___",
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      i = 0;
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
    if (e.type === "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      let pos = this.value.length,
        elem = this;
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      }
    }
  }
  init() {
    this.sendingForm();
    this.inputEmail();
    this.inputsPhone.forEach(input => {
      input.addEventListener("focus", this.inputPhone);
      input.addEventListener("input", this.inputPhone);
      input.addEventListener("blur", this.inputPhone);
    });
  }
}

/***/ }),

/***/ "./src/js/modules/loadBlocks.js":
/*!**************************************!*\
  !*** ./src/js/modules/loadBlocks.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoadBlocks; }
/* harmony export */ });
class LoadBlocks {
  constructor() {
    let {
      oldOfficer,
      newOfficer,
      items
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.items = items;
    try {
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
    } catch (e) {}
    this.oldCount = 0;
    this.newCount = 0;
  }
  hideBlocks(items) {
    items.forEach((item, i) => {
      if (i != items.length - 1) {
        item.style.display = "none";
      }
    });
  }
  plusBlock(items, count) {
    items[items.length - 1].addEventListener("click", e => {
      if (count != items.length - 2) {
        items[count].style.display = "flex";
        count++;
      } else {
        items[count].style.display = "flex";
        items[count + 1].style.display = "none";
      }
    });
  }
  init() {
    try {
      this.hideBlocks(this.oldItems);
      this.hideBlocks(this.newItems);
      this.plusBlock(this.oldItems, this.oldCount);
      this.plusBlock(this.newItems, this.newCount);
    } catch (e) {}
  }
}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideoPlayer; }
/* harmony export */ });
class VideoPlayer {
  constructor(btns, player, close) {
    this.btns = document.querySelectorAll(btns);
    this.player = document.querySelector(player);
    this.close = document.querySelectorAll(close);
  }
  createPlayer(url) {
    this.playerY = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: `${url}`
    });
    this.player.style.display = "flex";
  }
  changeBtns() {
    this.btns.forEach(btn => {
      btn.addEventListener("click", e => {
        const url = btn.getAttribute("data-url");
        this.createPlayer(url);
      });
    });
  }
  changeCl() {
    this.close.forEach(cross => {
      cross.addEventListener("click", e => {
        this.player.style.display = "none";
        this.playerY.stopVideo();
      });
    });
  }
  init() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.changeBtns();
    this.changeCl();
  }
}

/***/ }),

/***/ "./src/js/modules/services/requests.js":
/*!*********************************************!*\
  !*** ./src/js/modules/services/requests.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const requset = async (url, data) => {
  let resp = await fetch(url, {
    method: "POST",
    body: data
  });
  return await resp.text();
};
/* harmony default export */ __webpack_exports__["default"] = (requset);

/***/ }),

/***/ "./src/js/modules/sliders/slider-main.js":
/*!***********************************************!*\
  !*** ./src/js/modules/sliders/slider-main.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SliderMain; }
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class SliderMain extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(slides, btns, btnsPrev, nextBtns, prevBtns) {
    super(slides, btns, btnsPrev, nextBtns, prevBtns);
  }
  showSlides(n) {
    if (n > this.slides.length) {
      this.slidIndex = 1;
    }
    if (n < 1) {
      n = this.slides.length;
    }
    try {
      if (this.slides.closest(".slide")) {
        if (n === 3) {
          setTimeout(() => {
            this.hanson.classList.add("animated");
            this.hanson.classList.add("slideInUp");
            this.hanson.style.opacity = "1";
          }, 3000);
        } else {
          this.hanson.classList.remove("slideInUp");
          this.hanson.style.opacity = "0";
        }
      }
    } catch (e) {}
    this.slides.forEach(slide => {
      slide.style.display = "none";
    });
    try {
      this.slides[this.slidIndex - 1].style.display = "block";
    } catch (e) {}
  }
  plusSlide(n) {
    this.showSlides(this.slidIndex += n);
  }
  render() {
    try {
      this.hanson = document.querySelector(".hanson");
      this.hanson.style.opacity = "0";
    } catch (e) {}
    this.showSlides();
    this.btns.forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        this.plusSlide(1);
      });
    });
    this.btnsPrev.forEach(btnP => {
      btnP.addEventListener("click", e => {
        e.preventDefault();
        this.slidIndex = 1;
        this.showSlides();
      });
    });
    this.nextBtns.forEach(next => {
      next.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        this.plusSlide(1);
      });
    });
    this.prevBtns.forEach(prev => {
      prev.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        this.plusSlide(-1);
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/sliders/slider-mini.js":
/*!***********************************************!*\
  !*** ./src/js/modules/sliders/slider-mini.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SliderMini; }
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class SliderMini extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, activeClass, auto) {
    super(container, next, prev, activeClass, auto);
  }
  addClassSlide() {
    for (let key of this.slides) {
      key.classList.remove(this.activeClass);
      if (key.closest(".card-one") || key.closest(".card-two")) {
        key.lastElementChild.style.opacity = "0.4";
        key.firstElementChild.lastElementChild.style.opacity = "0";
      }
    }
    this.slides[0].classList.add(this.activeClass);
    if (this.slides[0].closest(".card-one") || this.slides[0].closest(".card-two")) {
      this.slides[0].lastElementChild.style.opacity = "1";
      this.slides[0].firstElementChild.lastElementChild.style.opacity = "1";
    }
  }
  plusSlide() {
    this.container.append(this.slides[0]);
    this.addClassSlide();
  }
  switchSlides() {
    this.slides = this.container.children;
    this.addClassSlide();
    this.next.addEventListener("click", e => {
      this.plusSlide();
    });
    this.prev.addEventListener("click", e => {
      this.container.prepend(this.slides[this.slides.length - 1]);
      this.addClassSlide();
    });
  }
  init() {
    try {
      this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
      `;
      if (this.container.matches(".feed__slider-cont")) {
        this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
        width: 2000px;
      `;
      }
      this.switchSlides();
      if (this.auto) {
        setInterval(() => this.plusSlide(), 5000);
      }
    } catch (e) {}
  }
}

/***/ }),

/***/ "./src/js/modules/sliders/slider.js":
/*!******************************************!*\
  !*** ./src/js/modules/sliders/slider.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
class Slider {
  constructor() {
    let {
      container = null,
      slides = null,
      btns = null,
      btnPageOne = null,
      nextBtns = null,
      prevBtns = null,
      next = null,
      prev = null,
      activeClass = "",
      auto
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.container = document.querySelector(container);
    this.slides = document.querySelectorAll(slides);
    this.btns = document.querySelectorAll(btns);
    this.btnsPrev = document.querySelectorAll(btnPageOne);
    this.nextBtns = document.querySelectorAll(nextBtns);
    this.prevBtns = document.querySelectorAll(prevBtns);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.auto = auto;
    this.slidIndex = 1;
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliders_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders/slider-main */ "./src/js/modules/sliders/slider-main.js");
/* harmony import */ var _modules_sliders_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders/slider-mini */ "./src/js/modules/sliders/slider-mini.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_loadBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/loadBlocks */ "./src/js/modules/loadBlocks.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");







window.addEventListener("DOMContentLoaded", e => {
  const sliderMain = new _modules_sliders_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    slides: ".slide",
    btns: ".next",
    btnPageOne: ".previous"
  });
  sliderMain.render();
  const sliderMainModules = new _modules_sliders_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    slides: ".module",
    btns: ".next",
    btnPageOne: ".previous",
    nextBtns: ".nextmodule",
    nextBtns: ".prevmodule"
  });
  sliderMainModules.render();
  const sliderShowUp = new _modules_sliders_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: ".showup__content-slider",
    next: ".showup__next",
    prev: ".showup__prev",
    activeClass: "card-active"
  });
  sliderShowUp.init();
  const sliderModules = new _modules_sliders_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: ".modules__content-slider",
    next: ".modules__info-btns .slick-next",
    prev: ".modules__info-btns .slick-prev",
    activeClass: "card-active",
    auto: true
  });
  sliderModules.init();
  const sliderFeed = new _modules_sliders_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: ".feed__slider-cont",
    next: ".feed .slick-next",
    prev: ".feed .slick-prev",
    activeClass: "feed__item-active"
  });
  sliderFeed.init();
  new _modules_loadBlocks__WEBPACK_IMPORTED_MODULE_3__["default"]({
    oldOfficer: ".officerold",
    newOfficer: ".officernew",
    items: ".officer__card-item"
  }).init();
  new _modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"]({
    forms: "form",
    inputsEmail: ".email",
    inputsPhone: ".phone"
  }).init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"](".play", ".overlay", ".close").init();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map