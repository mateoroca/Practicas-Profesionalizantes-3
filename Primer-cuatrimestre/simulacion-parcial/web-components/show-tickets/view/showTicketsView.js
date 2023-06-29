class ShowTicketsView extends HTMLElement {
  constructor() {
    super();

    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("class", "show-tickets-wrapper");

    let styles = document.createElement("style");
    styles.textContent = `@import './web-components/show-tickets/style/style.css'`;

    this.appendChild(styles);

    this.appendChild(this.wrapper);
  }
}

customElements.define("show-tickets-view", ShowTicketsView);

export { ShowTicketsView };
