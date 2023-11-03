import Slider from "./slider";

export default class SliderMini extends Slider {
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

    if (
      this.slides[0].closest(".card-one") ||
      this.slides[0].closest(".card-two")
    ) {
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

    this.next.addEventListener("click", (e) => {
      this.plusSlide();
    });

    this.prev.addEventListener("click", (e) => {
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

    if (this.auto) {
      setInterval(() => this.plusSlide(), 5000);
    }
  }
}
