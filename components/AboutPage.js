export class AboutPage extends HTMLElement {
  constructor() {
    super();

    //create shadow dom
    this.root = this.attachShadow({ mode: open });

    //insert css style element in shadowDOM
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    // function to fetch css and apply to the shadow dom's style element
    async function loadCSS() {
      const request = await fetch("/components/AboutPage.css");
      const css = await request.text();
      styles.textContent = css;
    }

    loadCSS();
  }
}
