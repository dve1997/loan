"use strict";

import Slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", (e) => {
  const slider = new Slider(".page", ".slide", ".next", ".previous");
  slider.render();
});
