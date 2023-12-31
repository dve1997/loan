import Slider from "./slider";

export default class SliderMain extends Slider {
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

    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });

    try {
      this.slides[this.slidIndex - 1].style.display = "block";
    } catch (e) {}
  }

  plusSlide(n) {
    this.showSlides((this.slidIndex += n));
  }

  render() {
    try {
      this.hanson = document.querySelector(".hanson");

      this.hanson.style.opacity = "0";
    } catch (e) {}

    this.showSlides();

    this.btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        this.plusSlide(1);
      });
    });

    this.btnsPrev.forEach((btnP) => {
      btnP.addEventListener("click", (e) => {
        e.preventDefault();

        this.slidIndex = 1;
        this.showSlides();
      });
    });

    this.nextBtns.forEach((next) => {
      next.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.plusSlide(1);
      });
    });

    this.prevBtns.forEach((prev) => {
      prev.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.plusSlide(-1);
      });
    });
  }
}
