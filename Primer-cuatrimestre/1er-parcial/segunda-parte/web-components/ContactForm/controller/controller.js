class Controller {
  constructor(innerView, innerModel) {
    this.view = innerView;
    this.model = innerModel;
  }

  enable() {
    this.view.btnAdd.addEventListener("click", (e) => {
      e.preventDefault();
      this.onAdd();
    });
  }

  disable() {
    this.view.btnAdd.removeEventListener("click", this.onAdd);
  }

  onAdd() {
    try {
      const name = this.view.nameInput.value;
      const phoneNumber = this.view.phoneNumberInput.value;
      const relationship = this.view.relationshipSelect.value;

      if (!name || !phoneNumber || !relationship) {
        throw new Error("Todos los campos deben ser completados");
      }

      const DATA = {
        name: name,
        phoneNumber: phoneNumber,
        relationship: relationship,
      };

      this.model.saveData(DATA);
      const event = new CustomEvent("trigger-showAll");
      dispatchEvent(event);
    } catch (err) {
      console.log(err);
    }
  }
}

export { Controller };
