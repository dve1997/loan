export default class Download {
  constructor(btn) {
    this.btn = document.querySelectorAll(btn);
    this.href = "assets/img/mainbg.jpg";
  }

  createElem() {
    const link = document.createElement("a");

    link.setAttribute("href", this.href);
    link.setAttribute("download", "nice_picture");
    link.style.display = "none";
    document.body.append(link);
    link.click();
    link.remove(link);
  }

  downloadFile() {
    this.btn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.createElem();
      });
    });
  }

  init() {
    this.downloadFile();
  }
}
