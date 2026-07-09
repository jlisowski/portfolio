export class CertPage extends HTMLElement {
  constructor() {
    super();

    // create shadow dom
    this.root = this.attachShadow({ mode: "open" });

    // insert css style element in shadowDOM
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    this.certificatesList = document.createElement("ul");
    this.certificatesList.className = "certlist";
    this.root.appendChild(this.certificatesList);

    const loadCSS = async () => {
      const request = await fetch("/components/CertPage.css");
      const css = await request.text();
      styles.textContent = css;
      console.log(styles);
    };

    loadCSS();
  }

  connectedCallback() {
    window.addEventListener("appviewchange", () => {
      this.render();
    });

    this.render();
  }

  render() {
    if (!this.certificatesList) {
      console.warn("CertPage: certificates list not found");
      return;
    }

    if (app.store.data) {
      this.certificatesList.innerHTML = "";
      const certData = app.store.data.portfolio.certificates;
      for (let site in certData) {
        const siteElement = document.createElement("li");
        siteElement.id = site;
        siteElement.className = "title";

        const certListElement = document.createElement("ul");
        certListElement.className = "certlist";
        if (site === "coursera") {
          for (let cert in certData[site].certs) {
            const certElement = document.createElement("li");
            const certLinkElement = document.createElement("a");
            certLinkElement.textContent = certData[site].certs[cert].name;
            certLinkElement.className = "certificate";
            certLinkElement.href = certData[site].certs[cert].url;
            certElement.appendChild(certLinkElement);
            certListElement.appendChild(certElement);
          }
          siteElement.textContent = `${certData[site].name}`;
          siteElement.appendChild(certListElement);
        } else {
          const profileElement = document.createElement("li");
          const profileLinkElement = document.createElement("a");
          profileLinkElement.href = certData[site].profile;
          profileLinkElement.textContent = "View Profile";
          profileLinkElement.className = "certificate";
          profileElement.appendChild(profileLinkElement);
          certListElement.appendChild(profileElement);

          siteElement.textContent = `${certData[site].name}`;
          siteElement.appendChild(certListElement);
        }
        this.certificatesList.appendChild(siteElement);
      }
    } else {
      this.certificatesList.textContent = "Loading...";
    }
  }
}

customElements.define("cert-page", CertPage);
