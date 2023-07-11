class Controller2 {
  constructor(innerView, innerModel) {
    this.view = innerView;
    this.model = innerModel;
    this.updateButtons = [];
  }

  enable() {
    this.showContacts();
    this.setLiseners();
  }
  disable() {}

  showContacts() {
    let contacts = this.model.getData();

    contacts.forEach((contact) => {
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

      this.view.tbody.appendChild(row);

      this.updateButtons.push(btnUpdate);
    });
  }
  setLiseners() {
    this.updateButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const contactId = btn.getAttribute("data-contact-id");
        try {
          let DATA = {
            name: this.nameInput.value,
            phoneNumber: this.phoneInput.value,
            relationship: this.relationshipSelect.value,
          };
          this.model.editContactById(contactId, DATA);
          let event = new CustomEvent("trigger-showAll");
          dispatchEvent(event);
        } catch (err) {
          console.log(err);
        }
      });
    });
  }
}

export { Controller2 };
