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
      const request = await fetch("/components/Footer.css");
      const css = await request.text();
      styles.textContent = css;
    }

    loadCSS();
  }

  connectedCallback() {
    const template = document.getElementById("footer-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("appviewchange", () => {
      this.render();
    });

    this.render();
  }

  render() {
    const certElement = this.root.querySelector("#certificates");
    // const bioAElement = this.root.querySelector("#bio-a");
    // const bioBElement = this.root.querySelector("#bio-b");
    // const nameElement = this.root.querySelector("#name");
    // const emailElement = this.root.querySelector("#email");
    // const githubElement = this.root.querySelector("#github");
    // const linkedinElement = this.root.querySelector("#linkedin");
    if (app.store.data) {
      const certData = app.store.data.portfolio.footer.certificates;
      for (let site in certData) {
        const certSite = document.createElement("li");
        certElement.appendChild(certSite);
      }
      //   bioAElement.textContent = aboutData.bioA;
      //   bioBElement.textContent = aboutData.bioB;
      //   nameElement.textContent = aboutData.name;
      //   emailElement.href = socials.email;
      //   githubElement.href = socials.github;
      //   linkedinElement.href = socials.linkedin;
    } else {
      certElement.textContent = "Loading...";
    }
  }
}

customElements.define("footer-page", FooterPage);
