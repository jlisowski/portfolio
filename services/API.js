const API = {
  url: "/portfolio/data/portfolio.json",
  fetchData: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
