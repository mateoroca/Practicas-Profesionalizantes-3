class Controller {
  constructor(viewReference) {
    this.view = viewReference;
  }
  enable() {
    this.view.btnAdd.addEventListener("click", (e) => {
      e.preventDefault();
      this.onBtnAddTicketClick();
    });
  }
  disable() {
    this.view.btnAdd = null;
  }

  onBtnAddTicketClick() {
    const ticket = {
      tipo: this.view.tipoSelect.value,
      prioridad: this.view.prioridadSelect.value,
      descripcion: this.view.descripcionTextarea.value,
    };
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(ticket);
    localStorage.setItem("tickets", JSON.stringify(tickets));

    let event = new CustomEvent("trigger-x-tickets");
    dispatchEvent(event);
  }
}

export { Controller };
