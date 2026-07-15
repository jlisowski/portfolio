import API from "./API.js";

export async function loadData() {
  app.store.data = await API.fetchData();
}
