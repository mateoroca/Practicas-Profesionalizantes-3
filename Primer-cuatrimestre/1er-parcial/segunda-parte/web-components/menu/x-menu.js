import { MenuView } from "./view/menuView.js";
import { Controller } from "./controller/controller.js";

class Menu extends HTMLElement {
  constructor(innerModel = Model) {
    super();
    this.view = new MenuView();
    this.model = new innerModel();
    this.controller = new Controller(this.view, this.model);
    this.appendChild(this.view);
  }
  connectedCallback() {
    this.controller.enable();
  }
  disconnectedCallback() {
    this.controller.disable();
  }
}

customElements.define("x-menu", Menu);

export { Menu };
