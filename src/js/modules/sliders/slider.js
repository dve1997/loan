export default class Slider {
  constructor({
    page = "",
    slides = "",
    btns = "",
    btnPageOne = "",
    next = "",
    prev = "",
  } = {}) {
    this.page = document.querySelector(page);
    this.slides = document.querySelectorAll(slides);
    this.btns = document.querySelectorAll(btns);
    this.btnsPrev = document.querySelectorAll(btnPageOne);
    this.slidIndex = 1;
  }
}
