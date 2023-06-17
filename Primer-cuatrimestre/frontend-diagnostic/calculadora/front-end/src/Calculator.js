import { Controller } from "./controller/controller.js";
import { View } from "./view/view.js";
import { calculatorDefaultModel } from "./model/defaulModel.js";

class CalculatorComponent extends HTMLElement {
  constructor(modelConstructor = calculatorDefaultModel) {
    super();
    this.attachShadow({ mode: "open" });

    this.view = new View();
    this.model = new modelConstructor();
    this.controller = new Controller(this.view, this.model);

    let style = document.createElement("style");
    style.innerText = `
    .calculator{
      background-color: #ccc;
      margin-top: 2%;
      margin-left: 35%;
      width: 300px;
      padding: 20px;
      border-radius: 5%;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }
   
    .equal {
      background-color: #ff9900;
      color: #fff;
      text-shadow: 0px 5px 10px#bc7203;
      box-shadow: 0px 6px 0px #bc7203;
    }
    
    .equal:hover {
      background-color: #f2f2f2;
      cursor: pointer;
      color: black;
    }
    
    .delete {
      background-color: #ff3300;
      color: #fff;
      text-shadow: 0px 5px 10px#a52e10;
      box-shadow: 0px 6px 0px #a52e10;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      height: 50px;
      margin: 5px;
      width: calc(100% - 10px);
      transition: all 0.1s ease-in-out;
      text-align: center;
    
    }
    
    .delete:hover {
      background-color: #f2f2f2;
      cursor: pointer;
      color: black;
    }
    
    .display {
      width: 99%;
      font-size: xx-large;
    
    }
    
    .display::placeholder {
      font-size: xx-large;
    }
    
    .display {
      background-color: #f2f2f2;
      border-radius: 5px;
      height: 50px;
      margin-bottom: 10px;
      padding: 5px;
      text-align: right;
    }
    
    .display p {
      font-size: 24px;
      margin: 0;
    }
    
    
    .keys {
      display: flex;
      flex-wrap: wrap;
    }
    
    .keys button {
      border: none;
      border-radius: 5px;
      font-size: 18px;
      height: 50px;
      margin: 5px;
      width: calc(25% - 10px);
      transition: all 0.1s ease-in-out;
    }
    
    .keys button:hover {
      background-color: #f2f2f2;
      cursor: pointer;
      color: black;
    
    
    }
    
    .number-blue {
      background-color: #0077ff;
      color: #fff;
      text-shadow: 0px 5px 10px#0755ae;
      box-shadow: 0px 6px 0px #0755ae;
    }
    
    .operation-green {
      background-color: #00cc44;
      color: #fff;
      text-shadow: 0px 5px 10px #0ba43e;
      box-shadow: 0px 6px 0px #0ba43e;
    }
    
    
    .keys button:active {
      box-shadow: none;
      transform: translateY(3px);
    }
    
    }`;

    this.shadowRoot.appendChild(style);
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
