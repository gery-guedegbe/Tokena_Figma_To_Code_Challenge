import { useEffect, useState } from "react";
import { fetchCryptoData } from "../utils/api";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { EllipsisVertical } from "lucide-react";
import CryptoModal from "../Modals/CryptoModal";
import Loading from "./Loading";

const CryptoTable = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCryptoClick = (crypto) => {
    setSelectedCrypto(crypto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCrypto(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCryptos = cryptos.filter((crypto) => {
    return (
      searchTerm === "" ||
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    // Appel à l'API pour récupérer les données de crypto-monnaies
    fetchCryptoData("usd", 10, 1)
      .then((response) => {
        setCryptos(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2500); // Délai de 2 secondes avant d'afficher les données
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id]
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <form className="lg:max-w-md mb-4 md:mb-0 w-full">
          <input
            type="search"
            id="default-search"
            className="block w-full py-3 px-4 text-sm font-medium text-tokena-dark border border-tokena-gray rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:text-tokena-light-gray dark:bg-transparent dark:border-tokena-dark-gray"
            placeholder="Search crypto..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>

        <form className="lg:max-w-sm w-full mb-4 md:mb-0">
          <select
            id="categories"
            className="py-3 px-4 w-full text-sm font-medium text-tokena-gray border border-tokena-gray rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:text-tokena-light-gray dark:bg-transparent dark:border-tokena-dark-gray"
          >
            <option
              selected
              className="text-tokena-gray text-sm dark:text-tokena-light-gray"
            >
              Categories
            </option>
            <option
              className="dark:border dark:border-tokena-gray dark:text-tokena-light-gray dark:bg-black"
              value=""
            ></option>
          </select>
        </form>
      </div>

      <div className="w-full mt-6 p-2 flex items-center justify-between border-t border-r border-l border-tokena-gray rounded-tl-lg rounded-tr-lg shadow-sm dark:border-tokena-dark-gray">
        <h2 className="text-tokena-dark text-lg font-semibold dark:text-tokena-light-gray">
          Market
        </h2>
        <button className="px-1 py-1 sm:mt-0 border border-tokena-gray text-tokena-dark font-medium rounded-lg shadow-sm dark:border-tokena-dark-gray dark:text-tokena-light-gray">
          <EllipsisVertical />
        </button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="border border-tokena-gray bg-white w-full table-auto dark:border-tokena-dark-gray dark:bg-tokena-dark-blue-1">
          <thead className="font-fontJetBrainsMono bg-tokena-gray/30 text-tokena-dark text-sm font-bold dark:text-tokena-light-gray">
            <tr>
              <th className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray"></th>
              <th className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                #
              </th>
              <th className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                Crypto
              </th>
              <th className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                Prix
              </th>
              <th className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                24h %
              </th>
              <th className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                24h Volume
              </th>
              <th className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                Market Cap
              </th>
              <th className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                Last 7 Days
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCryptos.length > 0 ? (
              filteredCryptos.map((crypto, index) => (
                <tr
                  key={crypto.id}
                  className="h-auto text-sm text-tokena-dark font-medium dark:text-tokena-light-gray"
                >
                  <td className="py-2 px-4 border-b text-center flex-shrink-0 dark:border-tokena-dark-gray">
                    <button onClick={() => toggleFavorite(crypto.id)}>
                      {favorites.includes(crypto.id) ? (
                        <span className="text-yellow-500 text-2xl">★</span>
                      ) : (
                        <span className="text-gray-300 text-2xl">☆</span>
                      )}
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b border-tokena-gray h-[80px] flex items-center dark:border-tokena-dark-gray">
                    <button
                      onClick={() => handleCryptoClick(crypto)}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={crypto.image}
                        alt={crypto.name}
                        className="w-6 h-6 mr-2"
                      />
                      <span className="truncate">{crypto.name}</span>-
                      <span className="truncate">
                        {crypto.symbol.toUpperCase()}
                      </span>
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                    ${crypto.current_price}
                  </td>
                  <td className="py-2 px-4 border-b flex-shrink-0 border-tokena-gray dark:border-tokena-dark-gray">
                    <span
                      className={`${
                        crypto.price_change_percentage_24h > 0
                          ? "text-tokena-green bg-tokena-green/20 rounded-full p-2 font-medium"
                          : "text-tokena-red bg-tokena-red/20 rounded-full p-2 font-medium"
                      }`}
                    >
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                    ${crypto.total_volume.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                    ${crypto.market_cap.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b border-tokena-gray dark:border-tokena-dark-gray">
                    <Line
                      data={{
                        labels: crypto.sparkline_in_7d.price.map((_, i) => i),
                        datasets: [
                          {
                            data: crypto.sparkline_in_7d.price,
                            borderColor:
                              crypto.price_change_percentage_24h > 0
                                ? "#01B130"
                                : "#CB0101",
                            fill: false,
                            tension: 0.1,
                          },
                        ],
                      }}
                      options={{
                        scales: {
                          x: { display: false },
                          y: { display: false },
                        },
                        elements: {
                          point: { radius: 0 },
                        },
                        plugins: {
                          legend: { display: false },
                        },
                      }}
                      className="max-w-full"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-4 text-sm text-tokena-dark dark:text-tokena-light-gray"
                >
                  Aucune crypto-monnaie trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && selectedCrypto && (
        <CryptoModal
          crypto={selectedCrypto}
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default CryptoTable;
