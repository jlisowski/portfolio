export class FooterPage extends HTMLElement {
  constructor() {
    super();

    //create shadow dom
    this.root = this.attachShadow({ mode: "open" });

    //insert css style element in shadowDOM
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    // function to fetch css and apply to the shadow dom's style element
    async function loadCSS() {
      const request = await fetch("./components/FooterPage.css");
      const css = await request.text();
      styles.textContent = css;
    }

    loadCSS();
  }

  connectedCallback() {
    //clone template
    const template = document.getElementById("footer-template");
    const content = template.content.cloneNode(true);

    const contactPage = document.createElement("contact-page");
    content.querySelector("#contact").appendChild(contactPage);

    //append to shadowDOM
    this.root.appendChild(content);

    this.render();
  }

  render() {}
}

customElements.define("footer-page", FooterPage);
