import { AddTicket } from "./web-components/x-addTicket/x-add-ticket.js";
import { ShowTickets } from "./web-components/show-tickets/x-ShowTickets.js";
function main() {
  let addTiicket = new AddTicket();
  let showtickets = new ShowTickets();

  document.body.appendChild(addTiicket);
  window.addEventListener("trigger-x-tickets", () => {
    document.body.removeChild(addTiicket);
    document.body.appendChild(showtickets);
  });
}

window.addEventListener("load", main);
