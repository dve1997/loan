"use strict";

import SliderMain from "./modules/sliders/slider-main";
import VideoPlayer from "./modules/playVideo";

window.addEventListener("DOMContentLoaded", (e) => {
  const slider = new SliderMain({
    page: ".page",
    slides: ".slide",
    btns: ".next",
    btnPageOne: ".previous",
  });
  slider.render();

  const player = new VideoPlayer(".play", ".overlay", ".close");
  player.init();
});
