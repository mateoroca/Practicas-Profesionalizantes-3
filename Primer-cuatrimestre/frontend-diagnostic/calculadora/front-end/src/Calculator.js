import { Controller } from "./controller/controller.js";
import { View } from "./view/view.js";
import { Model } from "./model/modelDefault.js";

class CalculatorComponent extends HTMLElement {
  constructor(modelConstructor = Model) {
    super();
    this.attachShadow({ mode: "open" });

    this.view = new View();
    this.model = new modelConstructor();
    this.controller = new Controller(this.view, this.model);

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./public/style.css";

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(this.view);
  }
  connectedCallback() {
    this.controller.enable();
  }

  disconnectedCallback() {
    this.controller.disable();
  }

  adoptedCallback() {
    //Not yet
  }

  attributeChangedCallback(newValue, oldValue) {}

  static get observedAttributes() {
    return [];
  }
}

customElements.define("x-calculator", CalculatorComponent);

export { CalculatorComponent };
