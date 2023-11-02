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
