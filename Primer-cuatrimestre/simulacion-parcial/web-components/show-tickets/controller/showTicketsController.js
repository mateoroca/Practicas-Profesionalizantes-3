class Controller {
  constructor(viewReference) {
    this.view = viewReference;
  }
  enable() {
    this.addTicketToTheView();
  }
  disable() {}

  addTicketToTheView() {
    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

    let content = document.createElement("div");
    content.setAttribute("class", "content");

    tickets.forEach((ticket) => {
      let ticketDiv = document.createElement("div");
      ticketDiv.setAttribute("class", "ticket");

      let tipoP = document.createElement("p");
      tipoP.textContent = `Tipo: ${ticket.tipo}`;

      let prioridadP = document.createElement("div");
      this.setColor(ticket.prioridad, prioridadP);
      prioridadP.textContent = `Prioridad: ${ticket.prioridad}`;

      let descripcionP = document.createElement("p");
      descripcionP.textContent = `Descripción: ${ticket.descripcion}`;

      ticketDiv.appendChild(tipoP);
      ticketDiv.appendChild(prioridadP);
      ticketDiv.appendChild(descripcionP);

      content.appendChild(ticketDiv);
      this.view.wrapper.appendChild(content);
    });
  }
  setColor(priority, element) {
    if (priority == "urgente") {
      element.style.backgroundColor = "red";
    }
    if (priority == "media") {
      element.style.backgroundColor = "yellow";
    }
    if (priority == "baja") {
      element.style.backgroundColor = "green";
    }
  }
}

export { Controller };
