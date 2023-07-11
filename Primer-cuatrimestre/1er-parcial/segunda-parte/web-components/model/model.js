class Model {
  constructor() {}

  saveData(DATA) {
    try {
      let data = {
        id: this.generateUUID(),
        name: DATA.name,
        phoneNumber: DATA.phoneNumber,
        relationship: DATA.relationship,
      };

      let datosContactos =
        JSON.parse(localStorage.getItem("datosContacto")) || [];
      datosContactos = Array.isArray(datosContactos) ? datosContactos : [];
      datosContactos.push(data);
      localStorage.setItem("datosContacto", JSON.stringify(datosContactos));
    } catch (err) {
      console.log(err);
    }
  }
  getData() {
    const jsonData = localStorage.getItem("datosContacto");

    if (jsonData && jsonData.length > 0) {
      try {
        const data = JSON.parse(jsonData);
        return data;
      } catch (error) {
        console.error("Error parsing JSON data:", error);
        return null;
      }
    } else {
      console.log("No data found");
      return null;
    }
  }
  deleteContactById(contactId) {
    let contacts = localStorage.getItem("datosContacto");
    contacts = JSON.parse(contacts);

    if (contacts) {
      const index = contacts.findIndex((contact) => contact.id === contactId);
      contacts.splice(index, 1);
      localStorage.setItem("datosContacto", JSON.stringify(contacts));
    }
  }

  generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  editContactById(contactId, updatedData) {
    let contacts = localStorage.getItem("datosContacto");
    contacts = JSON.parse(contacts);

    if (contacts) {
      const index = contacts.findIndex((contact) => contact.id === contactId);
      if (index !== -1) {
        contacts[index] = { ...contacts[index], ...updatedData };
        localStorage.setItem("datosContacto", JSON.stringify(contacts));
      }
    }
  }

  getContactById(contactId) {
    let contacts = localStorage.getItem("datosContacto");
    contacts = JSON.parse(contacts);

    if (contacts) {
      const contact = contacts.find((contact) => contact.id === contactId);

      return contact;
    }

    return null;
  }
}

export { Model };
