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
    let pageElement = null;
    let footerElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("about-page");
        footerElement = document.createElement("footer-page");
        //pageElement.textContent = "Menu";
        break;
      default:
        pageElement = document.createElement("about-page");
        footerElement = document.createElement("footer-page");
    }
    if (pageElement && footerElement) {
      // document.querySelector("main").children[0].remove();
      const cache = document.querySelector("main");
      cache.innerHTML = "";
      cache.appendChild(pageElement);
      cache.appendChild(footerElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
