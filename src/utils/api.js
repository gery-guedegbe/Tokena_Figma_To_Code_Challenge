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

export const fetchCryptoNews = async (page = 1, pageSize = 10) => {
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const API = axios.create({
    baseURL: "https://newsapi.org/v2",
  });

  try {
    const response = await API.get("/everything", {
      params: {
        q: "cryptocurrency OR crypto OR bitcoin OR ethereum", // Termes de recherche
        pageSize: pageSize, // Nombre d'articles par page
        page: page, // Numéro de la page
        apiKey: API_KEY, // Clé API
        sortBy: "publishedAt", // Trier par date de publication
      },
    });
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des actualités :", error);
    return { articles: [] };
  }
};

export default API;
