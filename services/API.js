const API = {
<<<<<<< HEAD
  url: new URL("../data/portfolio.json", import.meta.url).href,
=======
  url: "/data/portfolio.json",
>>>>>>> refs/remotes/origin/main
  fetchData: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
