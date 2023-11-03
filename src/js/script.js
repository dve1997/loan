"use strict";

import SliderMain from "./modules/sliders/slider-main";
import SliderMini from "./modules/sliders/slider-mini";
import VideoPlayer from "./modules/playVideo";
import LoadBlocks from "./modules/loadBlocks";
import Forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", (e) => {
  const forms = new Forms({
    forms: "form",
    inputsEmail: ".email",
    inputsPhone: ".phone",
  });
  forms.init();

  const loadBlocks = new LoadBlocks({
    oldOfficer: ".officerold",
    newOfficer: ".officernew",
    items: ".officer__card-item",
  });
  loadBlocks.init();

  const sliderMain = new SliderMain({
    slides: ".slide",
    btns: ".next",
    btnPageOne: ".previous",
  });
  sliderMain.render();

  const sliderShowUp = new SliderMini({
    container: ".showup__content-slider",
    next: ".showup__next",
    prev: ".showup__prev",
    activeClass: "card-active",
  });
  sliderShowUp.init();

  const sliderModules = new SliderMini({
    container: ".modules__content-slider",
    next: ".modules__info-btns .slick-next",
    prev: ".modules__info-btns .slick-prev",
    activeClass: "card-active",
    auto: true,
  });
  sliderModules.init();

  const sliderFeed = new SliderMini({
    container: ".feed__slider-cont",
    next: ".feed .slick-next",
    prev: ".feed .slick-prev",
    activeClass: "feed__item-active",
  });
  sliderFeed.init();

  const player = new VideoPlayer(".play", ".overlay", ".close");
  player.init();
});
