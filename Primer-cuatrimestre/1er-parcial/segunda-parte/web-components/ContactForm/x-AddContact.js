import { AddContactView } from "./view/ContactForm.js";
import { Controller } from "./controller/controller.js";

class AddContact extends HTMLElement {
  constructor(innerModel = Model) {
    super();

    this.view = new AddContactView();
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

customElements.define("x-addcontact", AddContact);

export { AddContact };
