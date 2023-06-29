import { Controller } from "./controller/showTicketsController.js";
import { ShowTicketsView } from "./view/showTicketsView.js";

class ShowTickets extends HTMLElement {
  constructor() {
    super();
    this.view = new ShowTicketsView();
    this.controller = new Controller(this.view);
    this.appendChild(this.view);
  }
  connectedCallback() {
    this.controller.enable();
  }

  disconnectedCallback() {
    this.controller.disable();
  }
}

customElements.define("x-showview", ShowTickets);

export { ShowTickets };
