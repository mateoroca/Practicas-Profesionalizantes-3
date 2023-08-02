import { Controller } from "./controller/controller.js";
import { View } from "./view/view.js";
import { calculatorDefaultModel } from "./model/defaulModel.js";

class CalculatorComponent extends HTMLElement {
  constructor(modelConstructor = calculatorDefaultModel) {
    super();

    this.view = new View();
    this.model = new modelConstructor();
    this.controller = new Controller(this.view, this.model);

    let style = document.createElement("style");
    style.innerText = `@import './src/public/style.css'`;

    this.appendChild(style);
    this.appendChild(this.view);
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
