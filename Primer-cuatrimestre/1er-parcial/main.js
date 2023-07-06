class ButtonStateModel {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value = this.value + 1;
  }

  read() {
    return this.value;
  }
}

class ButtonSecondStateModel {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value = this.value + 2;
  }
  incrementOne() {
    this.value = this.value + 1;
  }

  read() {
    return this.value;
  }
}

class ButtonStateController {
  constructor(model, view) {
    this.innerModel = model;
    this.innerView = view;
  }

  init() {
    this.innerView.setValue(this.innerModel.read());
  }

  onclick() {
    if (this.innerModel.value < 254) {
      this.innerModel.increment();
      this.changeColor();
      this.innerView.setValue(this.innerModel.read());
    }
    if (this.innerModel.value == 254) {
      this.innerModel.incrementOne();
      this.innerView.setValue(this.innerModel.read());
    }
  }
  changeColor() {
    let currentColor = getComputedStyle(
      this.innerView.customButton
    ).backgroundColor;
    let currentRGB = currentColor.match(/\d+/g);
    let darkerColor =
      "rgb(" +
      (currentRGB[0] - 2) +
      "," +
      (currentRGB[1] - 2) +
      "," +
      (currentRGB[2] - 2) +
      ")";
    this.innerView.customButton.style.backgroundColor = darkerColor;
  }
}

class ButtonStateView extends HTMLElement {
  constructor(modelConstructor = Model) {
    super();

    this.innerModel = new modelConstructor();
    this.innerController = new ButtonStateController(this.innerModel, this);

    this.customButton = document.createElement("button");
    this.customButton.style.backgroundColor = "red";
    this.appendChild(this.customButton);
  }

  connectedCallback() {
    this.customButton.onclick = () => this.innerController.onclick();
    this.innerController.init();
  }

  setValue(value) {
    this.customButton.innerText = value.toString();
  }
}

customElements.define("x-button", ButtonStateView);

function main() {
  let testButton = new ButtonStateView(ButtonSecondStateModel);
  document.body.appendChild(testButton);
}

window.onload = main;
