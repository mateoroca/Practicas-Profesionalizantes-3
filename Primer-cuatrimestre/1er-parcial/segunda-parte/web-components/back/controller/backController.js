class BackController {
  constructor(innerView) {
    this.view = innerView;
  }
  enable() {
    this.onBtnBackClick();
  }
  disable() {}

  onBtnBackClick() {
    this.view.button.addEventListener("click", () => {
      let event = new CustomEvent("trigger-back");
      dispatchEvent(event);
    });
  }
}

export { BackController };
