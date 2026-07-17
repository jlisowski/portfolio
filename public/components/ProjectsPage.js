export class ProjectsPage extends HTMLElement {
  constructor() {
    super();

    //create shadowDOM
    this.root = this.attachShadow({ mode: "open" });

    //generate css element for shadowDOM
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    const loadCSS = async () => {
      const request = await fetch("./components/ProjectsPage.css");
      const css = await request.text();
      styles.textContent = css;
    };
    loadCSS();
  }

  connectedCallback() {
    const template = document.getElementById("projects-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    addEventListener("appviewchange", () => {
      this.render();
    });

    this.render();
  }

  render() {
  }
}

customElements.define("projects-page", ProjectsPage);
