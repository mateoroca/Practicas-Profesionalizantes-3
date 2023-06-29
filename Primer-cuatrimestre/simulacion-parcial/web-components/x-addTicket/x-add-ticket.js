import { AddTicketView } from "./view/addTicket-View.js";
import { Controller } from "./controller/controller.js";

class AddTicket extends HTMLElement {
  constructor() {
    super();
    this.view = new AddTicketView();
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

customElements.define("x-addticket", AddTicket);

export { AddTicket };
