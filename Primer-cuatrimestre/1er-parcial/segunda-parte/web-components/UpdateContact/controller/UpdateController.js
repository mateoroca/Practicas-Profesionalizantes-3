class UpdateController {
  constructor(innerView, innerModel, secondView) {
    this.view = innerView;
    this.model = innerModel;
    this.SecondView = secondView;
    this.updateButtons = [];
  }

  enable() {
    this.showContacts();
    this.setLiseners();
  }
  disable() {}

  showContacts() {
    const contactID =
      this.view.btnClicked[this.view.btnClicked.length - 1].getAttribute(
        "data-contact-id"
      );
    const contact = this.model.getContactById(contactID);
    console.log(contactID);

    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    this.nameInput = document.createElement("input");
    this.nameInput.classList.add("input");
    this.nameInput.value = contact.name;

    nameCell.appendChild(this.nameInput);
    row.appendChild(nameCell);

    const phoneNumberCell = document.createElement("td");
    this.phoneInput = document.createElement("input");
    this.phoneInput.classList.add("input");
    this.phoneInput.value = contact.phoneNumber;
    phoneNumberCell.appendChild(this.phoneInput);
    row.appendChild(phoneNumberCell);

    const friendshipCell = document.createElement("td");

    this.relationshipSelect = document.createElement("select");
    this.relationshipSelect.classList.add("select");

    const option1 = document.createElement("option");
    option1.value = "friend";
    option1.textContent = "Friend";
    option1.style.backgroundColor = "#2a118e";
    option1.style.color = "white";
    this.relationshipSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "work";
    option2.textContent = "Work";
    option2.style.backgroundColor = "#2a118e";
    option2.style.color = "white";
    this.relationshipSelect.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = "study";
    option3.textContent = "Study";
    option3.style.backgroundColor = "#2a118e";
    option3.style.color = "white";
    this.relationshipSelect.appendChild(option3);

    const option4 = document.createElement("option");
    option4.value = "family";
    option4.textContent = "Family";
    option4.style.backgroundColor = "#2a118e";
    option4.style.color = "white";
    this.relationshipSelect.appendChild(option4);

    const option5 = document.createElement("option");
    option5.value = "favorites";
    option5.textContent = "Favorites";
    option5.style.backgroundColor = "#2a118e";
    option5.style.color = "white";
    this.relationshipSelect.appendChild(option5);

    const option6 = document.createElement("option");
    option6.value = "services";
    option6.textContent = "Services";
    option6.style.backgroundColor = "#2a118e";
    option6.style.color = "white";
    this.relationshipSelect.appendChild(option6);

    friendshipCell.appendChild(this.relationshipSelect);
    row.appendChild(friendshipCell);

    const container = document.createElement("div");
    container.classList.add("background-button");

    const btnUpdate = document.createElement("button");
    btnUpdate.classList.add("button1");
    btnUpdate.textContent = "UPDATE!!";
    btnUpdate.setAttribute("data-contact-id", contact.id);

    container.appendChild(btnUpdate);
    row.appendChild(container);

    this.SecondView.tbody.appendChild(row);

    this.updateButtons.push(btnUpdate);
  }
  setLiseners() {
    this.updateButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const contactId = btn.getAttribute("data-contact-id");
        try {
          let name = this.nameInput.value;
          let phoneNumber = this.phoneInput.value;
          let relationship = this.relationshipSelect.value;

          if (!name || !phoneNumber || !relationship) {
            throw new Error("Todos los campos deben estar completos");
          }

          let DATA = {
            name: name,
            phoneNumber: phoneNumber,
            relationship: relationship,
          };

          this.model.editContactById(contactId, DATA);
          location.reload();
        } catch (err) {
          console.log(err);
        }
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

export { UpdateController };
