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

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
class Slider {
  constructor(page, slides, btns, btnPageOne) {
    this.page = document.querySelector(page);
    this.slides = document.querySelectorAll(slides);
    this.btns = document.querySelectorAll(btns);
    this.btnsPrev = document.querySelectorAll(btnPageOne);
    this.slidIndex = 1;
  }
  showSlides(n) {
    if (n > this.slides.length) {
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
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");




window.addEventListener("DOMContentLoaded", e => {
  const slider = new _modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"](".page", ".slide", ".next", ".previous");
  slider.render();
  const player = new _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__["default"](".play", ".overlay", ".close");
  player.init();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map