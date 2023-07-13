class UpdateContactView extends HTMLElement {
  constructor() {
    super();

    this.container = document.createElement("div");
    this.container.classList.add("form");
    this.Title = document.createElement("h1");
    this.Title.innerText = "Contacts";
    this.Title.classList.add("title-2");

    this.container.appendChild(this.Title);

    this.table = document.createElement("table");

    this.headers = ["Name", "Phone Number", "Friendship"];
    this.thead = document.createElement("thead");
    this.headerRow = document.createElement("tr");
    this.headers.forEach((header) => {
      this.th = document.createElement("th");
      this.th.classList.add("form-title");
      this.th.textContent = header;
      this.headerRow.appendChild(this.th);
    });
    this.thead.appendChild(this.headerRow);
    this.table.appendChild(this.thead);

    this.tbody = document.createElement("tbody");

    this.table.appendChild(this.tbody);
    this.container.appendChild(this.table);

    this.appendChild(this.container);
  }
}

customElements.define("x-updatecontactview", UpdateContactView);

export { UpdateContactView };
