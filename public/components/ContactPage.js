export class ContactPage extends HTMLElement {
  constructor() {
    super();

    //create shadowDOM
    this.root = this.attachShadow({ mode: "open" });

    //generate css element for shadowDOM
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    const loadCSS = async () => {
      const request = await fetch("./components/ContactPage.css");
      const css = await request.text();
      styles.textContent = css;
    };
    loadCSS();
  }

  connectedCallback() {
    const template = document.getElementById("contact-page-template");
    template.setAttribute("exportparts", "icon-list");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    // this.root.querySelector("#icon-list").setAttribute("parts", "icon-list");

    addEventListener("appviewchange", () => {
      this.render();
    });

    this.render();
  }

  render() {
    const emailElement = this.root.querySelector("#email");
    const githubElement = this.root.querySelector("#github");
    const linkedinElement = this.root.querySelector("#linkedin");
    if (app.store.data) {
      const contactData = app.store.data.portfolio.about.socials;
      console.log(contactData);
      emailElement.href = contactData.email;
      githubElement.href = contactData.github;
      linkedinElement.href = contactData.linkedin;
    }
  }
}

customElements.define("contact-page", ContactPage);
