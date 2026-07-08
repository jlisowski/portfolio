import API from "./services/API.js";
import Router from "./services/Router.js";

window.app = {
  store: {},
  router: Router,
};

async function loadData() {
  app.store = await API.fetchData();
}

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  Router.init();
});
