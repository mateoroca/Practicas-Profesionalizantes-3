class MenuView extends HTMLElement {
  constructor() {
    super();

    this.container = document.createElement("div");
    this.container.classList.add("form");

    this.container0 = document.createElement("div");
    this.container0.classList.add("separeteDiv");

    this.Title = document.createElement("h2");
    this.Title.textContent = "Contact Menu";
    this.Title.classList.add("title-2");
    this.container0.appendChild(this.Title);

    this.container.appendChild(this.container0);

    this.container1 = document.createElement("div");
    this.container1.classList.add("separeteDiv");

    this.btnNew = document.createElement("button");
    this.btnNew.textContent = "New";
    this.btnNew.classList.add("submit");
    this.container.appendChild(this.btnNew);

    this.btnShowContacts = document.createElement("button");
    this.btnShowContacts.textContent = "Show Contacts";
    this.btnShowContacts.classList.add("submit");
    this.container1.appendChild(this.btnShowContacts);

    this.container.appendChild(this.container1);

    let style = document.createElement("style");
    style.innerText = `@import './web-components/menu/style/style.css'`;

    this.appendChild(style);
    this.appendChild(this.container);
  }
}
customElements.define("menu-view", MenuView);

export { MenuView };
