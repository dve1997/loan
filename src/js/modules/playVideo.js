export default class VideoPlayer {
  constructor(btns, player, close) {
    this.btns = document.querySelectorAll(btns);
    this.player = document.querySelector(player);
    this.close = document.querySelectorAll(close);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  createPlayer(url) {
    this.playerY = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: `${url}`,
      events: {
        onStateChange: this.onPlayerStateChange,
      },
    });

    this.player.style.display = "flex";
  }

  changeBtns() {
    this.btns.forEach((btn, i) => {
      if (i % 2 == 0) {
        btn.setAttribute("data-disabled", "false");
      }

      if (btn.getAttribute("data-disabled") === "false") {
        btn.addEventListener("click", (e) => {
          this.btn = btn;
          if (document.querySelector("iframe#frame")) {
            this.player.style.display = "flex";

            if (this.url !== btn.getAttribute("data-url")) {
              this.url = btn.getAttribute("data-url");
              this.playerY.loadVideoById(this.url);
            }
          } else {
            this.url = btn.getAttribute("data-url");
            this.createPlayer(this.url);
          }
        });
      }
    });
  }

  onPlayerStateChange(events) {
    try {
      const blockElem = this.btn.closest(
          ".module__video-item"
        ).nextElementSibling,
        playCircle = this.btn.querySelector(".play__circle").cloneNode(true),
        playText = this.btn.querySelector(".play__text").textContent;

      if (events.data === 0) {
        if (
          blockElem.querySelector(".play__circle").classList.contains("closed")
        ) {
          blockElem.querySelector(".play__circle").remove();
          blockElem.querySelector(".play").prepend(playCircle);
          blockElem.querySelector(".play__text").classList.remove("attention");
          blockElem.querySelector(".play__text").textContent = `${playText}`;
          blockElem.style.filter = "none";
          blockElem.style.opacity = "1";

          blockElem
            .querySelector(".play")
            .setAttribute("data-disabled", "false");

          this.changeBtns();
        }
      }
    } catch (e) {}
  }

  changeCl() {
    this.close.forEach((cross) => {
      cross.addEventListener("click", (e) => {
        this.player.style.display = "none";
        try {
          this.playerY.stopVideo();
        } catch (e) {}
      });
    });
  }

  init() {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.changeBtns();
    this.changeCl();
  }
}
