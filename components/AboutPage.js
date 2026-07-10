export class AboutPage extends HTMLElement {
  constructor() {
    super();

    //create shadow dom
    this.root = this.attachShadow({ mode: "open" });

    //insert css style element in shadowDOM
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    // function to fetch css and apply to the shadow dom's style element
    async function loadCSS() {
      const request = await fetch("./components/AboutPage.css");
      const css = await request.text();
      styles.textContent = css;
    }

    loadCSS();
  }

  connectedCallback() {
    const template = document.getElementById("about-page-template");
    const content = template.content.cloneNode(true);

    const contacts = document.createElement("contact-page");
    content.querySelector("#icons").appendChild(contacts);

    this.root.appendChild(content);

    window.addEventListener("appviewchange", () => {
      this.render();
    });

    this.render();
  }

  render() {
    const positionElement = this.root.querySelector("#position");
    const bioAElement = this.root.querySelector("#bio-a");
    const bioBElement = this.root.querySelector("#bio-b");
    const nameElement = this.root.querySelector("#name");
    if (app.store.data) {
      const aboutData = app.store.data.portfolio.about;
      positionElement.textContent = aboutData.position;
      bioAElement.textContent = aboutData.bioA;
      bioBElement.textContent = aboutData.bioB;
      nameElement.textContent = aboutData.name;
    } else {
      positionElement.textContent = "Loading...";
    }
  }
}

customElements.define("about-page", AboutPage);
