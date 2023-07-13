class BackView extends HTMLElement {
  constructor() {
    super();

    this.button = document.createElement("button");
    this.button.setAttribute("type", "button");
    this.button.classList.add("btn", "cube", "cube-hover");

    this.bgTop = document.createElement("div");
    this.bgTop.classList.add("bg-top");
    this.bgTopInner = document.createElement("div");
    this.bgTopInner.classList.add("bg-inner");
    this.bgTop.appendChild(this.bgTopInner);

    this.bgRight = document.createElement("div");
    this.bgRight.classList.add("bg-right");
    this.bgRightInner = document.createElement("div");
    this.bgRightInner.classList.add("bg-inner");
    this.bgRight.appendChild(this.bgRightInner);

    this.bg = document.createElement("div");
    this.bg.classList.add("bg");
    this.bgInner = document.createElement("div");
    this.bgInner.classList.add("bg-inner");
    this.bg.appendChild(this.bgInner);

    this.text = document.createElement("div");
    this.text.classList.add("text");
    this.text.textContent = "Back";

    this.button.appendChild(this.bgTop);
    this.button.appendChild(this.bgRight);
    this.button.appendChild(this.bg);
    this.button.appendChild(this.text);

    this.appendChild(this.button);
  }
}

customElements.define("x-backview", BackView);

export { BackView };
