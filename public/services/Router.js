const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    // Event Handler of URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    // Check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}: history: ${history.length}`);

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let aboutElement = null;
    let footerElement = null;
    let certsElement = null;
    let projectsElement = null;

    switch (route) {
      case "/":
        aboutElement = document.createElement("about-page");
        footerElement = document.createElement("footer-page");
        certsElement = document.createElement("cert-page");
        projectsElement = document.createElement("projects-page");
        break;
      default:
        aboutElement = document.createElement("about-page");
        certsElement = document.createElement("cert-page");
        footerElement = document.createElement("footer-page");
        projectsElement = document.createElement("projects-page");
    }
    if (aboutElement && footerElement && certsElement && projectsElement) {
      const mainCache = document.querySelector("main");
      mainCache.querySelector("#about").appendChild(aboutElement);
      mainCache.querySelector("#projects").appendChild(projectsElement);
      mainCache.querySelector("#certs").appendChild(certsElement);
      document.querySelector("footer").appendChild(footerElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
