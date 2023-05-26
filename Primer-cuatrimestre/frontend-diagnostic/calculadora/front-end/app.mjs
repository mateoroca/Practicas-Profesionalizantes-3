import Controller from "./src/controller/controller.js";
import View from "./src/view/view.js";

class calculator {
  constructor() {
    this.view = new View();
    this.controller = new Controller(this.view, this.model);
  }
}

function startApplication() {
  let myCalculator = new calculator();

  document.body.appendChild(myCalculator.view.calculatorDiv);
}

window.addEventListener("load", startApplication);
