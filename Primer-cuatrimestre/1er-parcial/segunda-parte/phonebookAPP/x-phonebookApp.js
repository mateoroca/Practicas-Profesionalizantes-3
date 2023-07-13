import { AddContact } from "../web-components/ContactForm/x-AddContact.js";
import { Model } from "../web-components/model/model.js";
import { Menu } from "../web-components/menu/x-menu.js";
import { ShowContantacts } from "../web-components/show-contacts/x-showContacts.js";
import { Controller } from "../web-components/show-contacts/controller/controller.js";
import { UpdateContact } from "../web-components/UpdateContact/x-updateContact.js";
import { Back } from "../web-components/back/x-back.js";
import { StateApplicationHandler } from "./controller/controllerApp.js";

class PhoneBookApp extends HTMLElement {
  constructor() {
    super();
    this.controller = new StateApplicationHandler();

    this.states = {
      Menu: "trigger-menu",
      AddContact: "trigger-ADD",
      ShowContacts: "trigger-showAll",
      UpdateContact: "trigger-update",
      Back: "trigger-back",
    };

    const style = document.createElement("style");
    style.innerText = `@import './phonebookAPP/style/style.css'`;
    this.appendChild(style);
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const menu = new Menu(Model);
    const back = new Back();
    this.appendChild(back);
    this.controller.changeState(menu);
    this.controller.historyState.push(menu);
  }

  setupEventListeners() {
    let contactform = new AddContact(Model);
    let showcontacts = new ShowContantacts(Model, Controller);

    window.addEventListener(this.states.AddContact, () => {
      this.controller.historyState.push(contactform);
      this.controller.changeState(contactform);
    });

    window.addEventListener(this.states.ShowContacts, () => {
      this.controller.historyState.push(showcontacts);
      this.controller.changeState(showcontacts);
    });

    window.addEventListener(this.states.UpdateContact, () => {
      let update = new UpdateContact(Model, showcontacts.view);

      this.controller.historyState.push(update);
      this.controller.changeState(update);
    });

    window.addEventListener(this.states.Menu, () => {
      this.render();
    });

    window.addEventListener(this.states.Back, () => {
      this.handleBackEvent();
    });
  }

  handleBackEvent() {
    if (this.controller.historyState.length > 1) {
      this.controller.historyState.pop(); // Eliminar el estado actual del historial
      const previousState =
        this.controller.historyState[this.controller.historyState.length - 1];
      this.controller.changeState(previousState); // Cambiar al estado anterior
    }
  }
}

customElements.define("x-phonebookapps", PhoneBookApp);

export { PhoneBookApp };
