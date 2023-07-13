import { BackView } from "./view/backView.js";
import { BackController } from "./controller/backController.js";

class Back extends HTMLElement {
  constructor() {
    super();
    this.view = new BackView();
    this.controller = new BackController(this.view);
    const style = document.createElement("style");
    style.innerText = `@import './web-components/back/style/style.css'`;
    this.appendChild(style);
    this.appendChild(this.view);
  }

  connectedCallback() {
    this.controller.enable();
  }
  disconnectedCallback() {
    this.controller.disable();
  }
}

customElements.define("x-back", Back);
export { Back };
