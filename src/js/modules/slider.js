export default class Slider {
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

    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });

    this.slides[this.slidIndex - 1].style.display = "block";
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
  }
}
