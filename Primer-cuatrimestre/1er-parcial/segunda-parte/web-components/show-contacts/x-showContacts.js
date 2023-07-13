import { ContactsView } from "./view/showContactsView.js";

class ShowContantacts extends HTMLElement {
  constructor(innerModel = Model, innerController) {
    super();
    this.view = new ContactsView();
    this.model = new innerModel();
    this.controller = new innerController(this.view, this.model);
    this.appendChild(this.view);

    let style = document.createElement("style");
    style.innerText = `@import './web-components/show-contacts/style/style.css'`;

    this.appendChild(style);
  }
  connectedCallback() {
    this.controller.enable();
  }
  disconnectedCallback() {
    this.controller.disable();
  }
}

customElements.define("x-showcontacts", ShowContantacts);

export { ShowContantacts };
