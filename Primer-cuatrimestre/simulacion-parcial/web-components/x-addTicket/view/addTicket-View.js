class AddTicketView extends HTMLElement {
  constructor() {
    super();

    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("class", "add-ticket-wrapper");

    this.form = document.createElement("form");

    this.tipoLabel = document.createElement("label");
    this.tipoLabel.textContent = "Tipo de Ticket:";
    this.tipoSelect = document.createElement("select");
    this.tipoSelect.setAttribute("name", "tipo");
    this.tipoOption1 = document.createElement("option");
    this.tipoOption1.setAttribute("value", "falla");
    this.tipoOption1.textContent = "Falla";
    this.tipoOption2 = document.createElement("option");
    this.tipoOption2.setAttribute("value", "nuevo_requerimiento");
    this.tipoOption2.textContent = "Nuevo Requerimiento";

    this.prioridadLabel = document.createElement("label");
    this.prioridadLabel.textContent = "Prioridad:";
    this.prioridadSelect = document.createElement("select");
    this.prioridadSelect.setAttribute("name", "prioridad");
    this.prioridadOption1 = document.createElement("option");
    this.prioridadOption1.setAttribute("value", "urgente");
    this.prioridadOption1.textContent = "Urgente";
    this.prioridadOption2 = document.createElement("option");
    this.prioridadOption2.setAttribute("value", "media");
    this.prioridadOption2.textContent = "Media";
    this.prioridadOption3 = document.createElement("option");
    this.prioridadOption3.setAttribute("value", "baja");
    this.prioridadOption3.textContent = "Baja";

    this.descripcionLabel = document.createElement("label");
    this.descripcionLabel.textContent = "Descripción del Ticket:";
    this.descripcionTextarea = document.createElement("textarea");
    this.descripcionTextarea.setAttribute("name", "descripcion");

    this.btnAdd = document.createElement("button");
    this.btnAdd.textContent = "Agregar";

    this.tipoLabel.appendChild(this.tipoSelect);
    this.tipoSelect.appendChild(this.tipoOption1);
    this.tipoSelect.appendChild(this.tipoOption2);
    this.prioridadLabel.appendChild(this.prioridadSelect);
    this.prioridadSelect.appendChild(this.prioridadOption1);
    this.prioridadSelect.appendChild(this.prioridadOption2);
    this.prioridadSelect.appendChild(this.prioridadOption3);
    this.descripcionLabel.appendChild(this.descripcionTextarea);
    this.form.appendChild(this.tipoLabel);
    this.form.appendChild(this.prioridadLabel);
    this.form.appendChild(this.descripcionLabel);
    this.form.appendChild(this.btnAdd);
    this.wrapper.appendChild(this.form);

    let styles = document.createElement("style");
    styles.textContent = `@import './web-components/x-addTicket/style/style.css'`;

    this.appendChild(styles);

    this.appendChild(this.wrapper);
  }
}

customElements.define("x-addticketview", AddTicketView);

export { AddTicketView };
