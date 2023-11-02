export default class LoadBlocks {
  constructor({ oldOfficer, newOfficer, items } = {}) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.items = items;
    this.oldItems = this.oldOfficer.querySelectorAll(items);
    this.newItems = this.newOfficer.querySelectorAll(items);
    this.oldCount = 0;
    this.newCount = 0;
  }

  hideBlocks(items) {
    items.forEach((item, i) => {
      if (i != items.length - 1) {
        item.style.display = "none";
      }
    });
  }

  plusBlock(items, count) {
    items[items.length - 1].addEventListener("click", (e) => {
      if (count != items.length - 2) {
        items[count].style.display = "flex";
        count++;
      } else {
        items[count].style.display = "flex";
        items[count + 1].style.display = "none";
      }
    });
  }

  init() {
    this.hideBlocks(this.oldItems);
    this.hideBlocks(this.newItems);

    this.plusBlock(this.oldItems, this.oldCount);
    this.plusBlock(this.newItems, this.newCount);
  }
}
