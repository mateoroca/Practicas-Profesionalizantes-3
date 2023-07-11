class Controller {
  constructor(innerView, innerModel) {
    this.view = innerView;
    this.model = innerModel;
  }
  enable() {
    this.view.btnNew.addEventListener("click", () => {
      this.onBtnAddClick();
    });
    this.view.btnShowContacts.addEventListener("click", () => {
      this.onBtnShowAllClick();
    });
  }
  disable() {
    this.view.btnNew.removeEventListener("click", this.onAdd);
  }

  onBtnAddClick() {
    let event = new CustomEvent("trigger-ADD");
    dispatchEvent(event);
  }
  onBtnShowAllClick() {
    let event = new CustomEvent("trigger-showAll");
    dispatchEvent(event);
  }
}
export { Controller };
