export default class Slider {
  constructor({
    container = null,
    slides = null,
    btns = null,
    btnPageOne = null,
    nextBtns = null,
    prevBtns = null,
    next = null,
    prev = null,
    activeClass = "",
    auto,
  } = {}) {
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
