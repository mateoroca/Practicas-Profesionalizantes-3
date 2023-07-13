import { UpdateController } from "./controller/UpdateController.js";
import { UpdateContactView } from "./view/updateView.js";

class UpdateContact extends HTMLElement {
  constructor(innerModel = Model, innerView) {
    super();
    this.view = innerView;
    this.secondView = new UpdateContactView();
    this.model = new innerModel();
    this.controller = new UpdateController(
      this.view,
      this.model,
      this.secondView
    );
    this.appendChild(this.secondView);

    let style = document.createElement("style");
    style.innerText = `@import './web-components/UpdateContact/style/style.css'`;

    this.appendChild(style);
  }
  connectedCallback() {
    this.controller.enable();
  }
  disconnectedCallback() {
    this.controller.disable();
  }
}

customElements.define("x-updatecontact", UpdateContact);

export { UpdateContact };
