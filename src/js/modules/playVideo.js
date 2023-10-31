export default class VideoPlayer {
  constructor(btns, player, close) {
    this.btns = document.querySelectorAll(btns);
    this.player = document.querySelector(player);
    this.close = document.querySelectorAll(close);
  }

  createPlayer(url) {
    this.playerY = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: `${url}`,
    });

    this.player.style.display = "flex";
  }

  changeBtns() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const url = btn.getAttribute("data-url");
        this.createPlayer(url);
      });
    });
  }

  changeCl() {
    this.close.forEach((cross) => {
      cross.addEventListener("click", (e) => {
        this.player.style.display = "none";
        this.playerY.stopVideo();
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
