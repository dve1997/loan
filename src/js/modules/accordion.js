export default class Accordion {
  constructor(btn, block) {
    this.btn = document.querySelectorAll(btn);
  }

  showBlock() {
    this.btn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.block = btn.closest(".module__info-show").nextElementSibling;

        this.block.classList.add("animated");

        if (window.getComputedStyle(this.block, null).display == "none") {
          this.block.style.display = "block";
          this.block.classList.add("fadeInUp");
        } else {
          this.block.style.display = "none";
          this.block.classList.remove("fadeInUp");
        }
      });
    });
  }

  init() {
    this.showBlock();
  }
}
