class Controller {
  constructor(innerView, innerModel) {
    this.view = innerView;
    this.model = innerModel;
    this.view.btnClicked = [];
    this.updateButtons = [];
    this.deleteButtons = [];
  }

  enable() {
    this.updateView();
    this.setLiseners();
  }
  disable() {}

  updateView() {
    let contacts = this.model.getData();

    contacts.forEach((contact) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.classList.add("form-title");
      nameCell.textContent = contact.name;
      row.appendChild(nameCell);

      const phoneNumberCell = document.createElement("td");
      phoneNumberCell.textContent = contact.phoneNumber;
      phoneNumberCell.classList.add("form-title");
      row.appendChild(phoneNumberCell);

      const friendshipCell = document.createElement("td");
      friendshipCell.textContent = contact.relationship;
      friendshipCell.classList.add("form-title");
      this.setColorRelationship(contact.relationship, friendshipCell);
      row.appendChild(friendshipCell);

      const btnDelete = document.createElement("button");
      btnDelete.classList.add("tooltip");
      btnDelete.setAttribute("data-contact-id", contact.id);

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("fill", "none");
      svg.setAttribute("viewBox", "0 0 20 20");
      svg.setAttribute("height", "25");
      svg.setAttribute("width", "25");

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("fill", "#6361D9");
      path.setAttribute(
        "d",
        "M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z"
      );
      path.setAttribute("clip-rule", "evenodd");
      path.setAttribute("fill-rule", "evenodd");

      svg.appendChild(path);

      const span = document.createElement("span");
      span.classList.add("tooltiptext");
      span.textContent = "remove";

      btnDelete.appendChild(svg);
      btnDelete.appendChild(span);
      row.appendChild(btnDelete);

      const container = document.createElement("div");
      container.classList.add("background-button");

      const btnUpdate = document.createElement("button");
      btnUpdate.classList.add("button1");
      btnUpdate.textContent = "UPDATE!!";
      btnUpdate.setAttribute("data-contact-id", contact.id);

      container.appendChild(btnUpdate);
      row.appendChild(container);

      this.view.tbody.appendChild(row);

      this.updateButtons.push(btnUpdate);
      this.deleteButtons.push(btnDelete);
    });
  }

  setLiseners() {
    this.updateButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.view.btnClicked.push(btn);
        let event = new CustomEvent("trigger-update");
        dispatchEvent(event);
      });
    });

    this.deleteButtons.forEach((btn1) => {
      btn1.addEventListener("click", () => {
        const contactId = btn1.getAttribute("data-contact-id");
        this.model.deleteContactById(contactId);
        location.reload();
      });
    });
  }
  setColorRelationship(relationship, element) {
    if (relationship == "friend") {
      element.style.backgroundColor = "green";
    }
    if (relationship == "work") {
      element.style.backgroundColor = "blue";
    }
    if (relationship == "study") {
      element.style.backgroundColor = "orange";
    }
    if (relationship == "family") {
      element.style.backgroundColor = "red";
    }
    if (relationship == "favorites") {
      element.style.backgroundColor = "gold";
    }
    if (relationship == "services") {
      element.style.backgroundColor = "purple";
    }
  }
}

export { Controller };
