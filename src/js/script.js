"use strict";

import Slider from "./modules/slider";
import VideoPlayer from "./modules/playVideo";

window.addEventListener("DOMContentLoaded", (e) => {
  const slider = new Slider(".page", ".slide", ".next", ".previous");
  slider.render();

  const player = new VideoPlayer(".play", ".overlay", ".close");
  player.init();
});
