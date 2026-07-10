const API = {
  url: new URL("../data/portfolio.json", import.meta.url).href,
  fetchData: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
