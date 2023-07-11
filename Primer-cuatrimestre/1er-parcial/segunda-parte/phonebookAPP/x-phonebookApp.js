import { AddContact } from "../web-components/ContactForm/x-AddContact.js";
import { Model } from "../web-components/model/model.js";
import { Menu } from "../web-components/menu/x-menu.js";
import { ShowContantacts } from "../web-components/show-contacts/x-showContacts.js";
import { Controller2 } from "../web-components/mutations/Controller2.js";
import { Controller } from "../web-components/show-contacts/controller/controller.js";

class PhoneBookApp extends HTMLElement {
  constructor(AppControllerReference = controller) {
    super();
    this.stateHandler = new AppControllerReference();
    this.states = [
      { AddContact: "trigger-ADD" },
      { ShowContacts: "trigger-showAll" },
      { UpdateConract: "trigger-update" },
    ];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const menu = new Menu(Model);
    this.stateHandler.changeState(menu);
  }

  setupEventListeners() {
    window.addEventListener(this.states[0].AddContact, () => {
      let contactform = new AddContact(Model);
      this.stateHandler.changeState(contactform);
    });

    window.addEventListener(this.states[1].ShowContacts, () => {
      let showcontacts = new ShowContantacts(Model, Controller);
      this.stateHandler.changeState(showcontacts);
    });
    window.addEventListener(this.states[2].UpdateConract, () => {
      let update = new ShowContantacts(Model, Controller2);
      this.stateHandler.changeState(update);
    });
  }
}

customElements.define("x-phonebookapps", PhoneBookApp);

export { PhoneBookApp };
