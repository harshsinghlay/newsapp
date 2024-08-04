const apiKey = "xlQcHfAxU_JbL1qXBsEzfJM-np-Co_HJJ3u2FyqelGQJc3-M";
const apiBaseurl = "https://api.currentsapi.services/v1";

const fetchCategories = async () => {
  const url = `${apiBaseurl}/available/categories`;

  const queryParams = {
    apiKey: apiKey,
  };

  const queryString = new URLSearchParams(queryParams).toString();
  const fullUrl = `${url}?${queryString}`;
  const response = await fetch(fullUrl);
  const data = await response.json();
  console.log("FetchedCategories are ", data);
  return data;
};


const fetchNews = async (category = "") => {
  const url = `${apiBaseurl}/latest-news`;

  const queryParams = {
    language : "en",
    category : category,
    apiKey: apiKey,
  };

  const queryString = new URLSearchParams(queryParams).toString();
  const fullUrl = `${url}?${queryString}`;
  const response = await fetch(fullUrl);
  const data = await response.json();
  console.log("FetchedNews are ", data);
  return data;
};



export {fetchCategories, fetchNews};
