import axios from "axios";

// Configurer Axios avec la baseURL CoinGecko
const API = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const fetchCryptoData = (currency = "usd", perPage = 10, page = 1) => {
  return API.get("/coins/markets", {
    params: {
      vs_currency: currency, // Devise de référence (USD dans ce cas)
      order: "market_cap_desc", // Trié par capitalisation boursière décroissante
      per_page: perPage, // Nombre de résultats par page
      page: page, // Numéro de la page
      sparkline: true, // Inclure les données de la courbe des 7 derniers jours
      price_change_percentage: "24h",
    },
  });
};

// Fonction pour récupérer les cryptos en tendance
// utils/api.js
export const fetchTrendingCryptos = async () => {
  try {
    const response = await API.get("/search/trending");
    return response.data.coins || [];
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des cryptos en tendance :",
      error
    );
    return [];
  }
};

// newsApi.js
import NewsAPI from "newsapi";

const newsapi = new NewsAPI("2c7eaa6b102748399669ec670415f257");

export const fetchCryptoNews = async (page = 1, pageSize = 10) => {
  try {
    const response = await newsapi.v2.everything({
      q: "cryptocurrency OR crypto OR bitcoin OR ethereum",
      language: "en",
      sortBy: "publishedAt",
      pageSize: pageSize,
      page: page,
    });

    console.log("API Response:", response);
    return response;
  } catch (error) {
    console.error("Erreur lors de la récupération des actualités :", error);
    return { articles: [] };
  }
};

export default API;
