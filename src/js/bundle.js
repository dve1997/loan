/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  constructor(slides, btns, btnsPrev) {
    super(slides, btns, btnsPrev);
  }
  showSlides(n) {
    if (n > this.slides.length - 1) {
      this.slidIndex = 1;
    }
    if (n < 1) {
      n = this.slides.length;
    }
    try {
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
    } catch (e) {}
    this.slides.forEach(slide => {
      slide.style.display = "none";
    });
    this.slides[this.slidIndex - 1].style.display = "block";
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
    setInterval(() => this.plusSlide(), 5000);
  }

  // showSlides(n) {
  //   if (n > this.slides.length) {
  //     this.slidIndex = 1;
  //   }
  //   if (n < 1) {
  //     this.slidIndex = this.slides.length;
  //   }

  //   this.conteiner.style.overflow = "hidden";

  //   this.conteinerCh.style.display = "flex";

  //   if (this.slides[0].closest(".card-one")) {
  //     this.conteinerCh.style.minWidth = "2600px";

  //     this.slides.forEach((slide) => {
  //       slide.lastElementChild.style.opacity = "0";
  //       slide.firstElementChild.lastElementChild.style.opacity = "0";
  //       slide.style.minWidth = "300px";
  //     });

  //     this.slides[this.slidIndex - 1].lastElementChild.style.opacity = "1";
  //     this.slides[
  //       this.slidIndex - 1
  //     ].firstElementChild.lastElementChild.style.opacity = "1";
  //   } else if (this.slides[0].closest(".card-two")) {
  //     this.conteinerCh.style.minWidth = "2600px";

  //     this.slides.forEach((slide) => {
  //       slide.querySelectorAll(
  //         ".card__title, .card__description"
  //       )[0].style.opacity = "0";
  //       slide.querySelectorAll(
  //         ".card__title, .card__description"
  //       )[1].style.opacity = "0";
  //       slide.firstElementChild.lastElementChild.style.opacity = "0";
  //       slide.style.minWidth = "300px";
  //     });

  //     this.slides[this.slidIndex - 1].querySelectorAll(
  //       ".card__title, .card__description"
  //     )[0].style.opacity = "1";
  //     this.slides[this.slidIndex - 1].querySelectorAll(
  //       ".card__title, .card__description"
  //     )[1].style.opacity = "1";
  //     this.slides[
  //       this.slidIndex - 1
  //     ].firstElementChild.lastElementChild.style.opacity = "1";
  //   } else {
  //     this.conteinerCh.style.width = "100%";

  //     this.slides.forEach((slide) => {
  //       slide.classList.remove("feed__item-active");
  //       slide.style.maxHeight = "341px";
  //       slide.style.minHeight = "";
  //     });

  //     this.slides[this.slidIndex - 1].classList.add("feed__item-active");
  //     this.slides[this.slidIndex - 1].style.minHeight = "420px";
  //     this.slides[this.slidIndex - 1].style.maxHeight = "";
  //   }

  //   this.conteinerCh.style.transform = `translate(${
  //     -12.5 * (this.slidIndex - 1)
  //   }%, 0)`;
  // }

  // plusSlide(n) {
  //   this.showSlides((this.slidIndex += n));
  // }

  // render() {
  //   this.showSlides();

  //   this.next.forEach((next) => {
  //     next.addEventListener("click", (e) => {
  //       this.plusSlide(1);
  //     });
  //   });

  //   this.prev.forEach((prev) => {
  //     prev.addEventListener("click", (e) => {
  //       this.plusSlide(1);
  //     });
  //   });
  // }
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
      next = null,
      prev = null,
      activeClass = "",
      auto
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.container = document.querySelector(container);
    this.slides = document.querySelectorAll(slides);
    this.btns = document.querySelectorAll(btns);
    this.btnsPrev = document.querySelectorAll(btnPageOne);
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





window.addEventListener("DOMContentLoaded", e => {
  const sliderMain = new _modules_sliders_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    slides: ".slide",
    btns: ".next",
    btnPageOne: ".previous"
  });
  sliderMain.render();
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
    activeClass: "card-active"
  });
  sliderModules.init();
  const sliderFeed = new _modules_sliders_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: ".feed__slider-cont",
    next: ".feed .slick-next",
    prev: ".feed .slick-prev",
    activeClass: "feed__item-active"
  });
  sliderFeed.init();
  const player = new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"](".play", ".overlay", ".close");
  player.init();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map