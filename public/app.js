import API from "./services/API.js";
import Router from "./services/Router.js";
import proxiedStore from "./services/Store.js";

import { AboutPage } from "./components/AboutPage.js";
import { CertPage } from "./components/CertPage.js";
import { FooterPage } from "./components/FooterPage.js";
import { ContactPage } from "./components/ContactPage.js";
import { ProjectsPage } from "./components/ProjectsPage.js";
window.app = {
  store: proxiedStore,
  router: Router,
};

async function loadData() {
  app.store.data = await API.fetchData();
}

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  Router.init();
});
