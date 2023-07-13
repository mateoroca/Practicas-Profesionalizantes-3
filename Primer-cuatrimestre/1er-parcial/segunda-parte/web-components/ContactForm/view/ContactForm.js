class AddContactView extends HTMLElement {
  constructor() {
    super();

    this.maindiv = document.createElement("button");
    this.maindiv.classList.add("form");
    this.form = document.createElement("form");

    this.nameInput = document.createElement("input");
    this.nameInput.setAttribute("type", "text");
    this.nameInput.setAttribute("placeholder", "Nombre");
    this.nameInput.classList.add("input");
    this.form.appendChild(this.nameInput);

    this.phoneNumberInput = document.createElement("input");
    this.phoneNumberInput.setAttribute("type", "text");
    this.phoneNumberInput.setAttribute("placeholder", "PhoneNumber");
    this.phoneNumberInput.classList.add("input");
    this.form.appendChild(this.phoneNumberInput);

    this.relationshipSelect = document.createElement("select");
    this.relationshipSelect.classList.add("input");
    let relationshipOptions = [
      "friend",
      "work",
      "study",
      "family",
      "favorites",
      "services",
    ];
    relationshipOptions.forEach((option) => {
      relationshipOptions = document.createElement("option");
      relationshipOptions.setAttribute("value", option);
      relationshipOptions.textContent = option;
      relationshipOptions.style.backgroundColor = "#2a118e";
      relationshipOptions.style.color = "white";
      this.relationshipSelect.appendChild(relationshipOptions);
    });

    this.separeteDiv = document.createElement("div");
    this.separeteDiv.classList.add("separeteDiv");

    this.separeteDiv1 = document.createElement("div");
    this.separeteDiv1.classList.add("separeteDiv");

    this.separeteDiv3 = document.createElement("div");
    this.separeteDiv3.classList.add("separeteDiv");

    this.btnAdd = document.createElement("button");
    this.btnAdd.innerText = "Add";
    this.btnAdd.classList.add("BTN");

    let style = document.createElement("style");
    style.innerText = `@import './web-components/ContactForm/style/style.css'`;

    this.separeteDiv3.appendChild(this.phoneNumberInput);
    this.separeteDiv1.appendChild(this.relationshipSelect);
    this.form.appendChild(this.separeteDiv3);
    this.form.appendChild(this.separeteDiv1);
    this.separeteDiv.appendChild(this.btnAdd);
    this.form.appendChild(this.separeteDiv);
    this.maindiv.appendChild(this.form);
    this.appendChild(style);
    this.appendChild(this.maindiv);
  }
}

customElements.define("contact-form", AddContactView);

export { AddContactView };
