import { useEffect, useState } from "react";
import { fetchCryptoData } from "../utils/api";
import { ArrowUp, ArrowDown } from "lucide-react";

const TrendingCrypto = () => {
  const [trendingCryptos, setTrendingCryptos] = useState([]);

  useEffect(() => {
    fetchCryptoData("usd", 2, 1)
      .then((response) => {
        setTrendingCryptos(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des cryptos tendances:",
          error
        );
      });
  }, []);

  return (
    <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-4">
      <div className="w-full xl:max-w-sm p-4 flex flex-col items-start justify-between gap-2 border rounded-lg shadow-sm transition-transform transform hover:scale-105 border-tokena-gray dark:border-tokena-dark-gray">
        <h3 className="text-tokena-dark/90 text-sm xl:text-lg font-semibold dark:text-tokena-light-gray">
          Balance
        </h3>
        <div className="w-full flex items-start justify-between gap-8">
          <span className="text-sm xl:text-lg font-semibold text-tokena-dark/90 dark:text-tokena-light-gray">
            $63,755,200
          </span>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 bg-tokena-green/20 text-tokena-green text-xs font-semibold rounded-full">
              +2,3%
            </span>
            <span className="text-sm text-tokena-dark-gray font-medium dark:text-tokena-gray">
              vs last month
            </span>
          </div>
        </div>
        <div className="w-full mt-1 flex items-center justify-between gap-2">
          <button className="w-full flex items-center justify-center gap-1 px-4 py-2 bg-tokena-blue/20 hover:bg-tokena-blue/30 rounded-lg">
            <ArrowUp className="w-6 h-6 text-tokena-blue font-bold" />
            <span className="text-sm text-tokena-blue font-medium ">
              Deposit
            </span>
          </button>
          <button className="w-full flex items-center justify-center gap-1 px-4 py-2 bg-tokena-blue/20 hover:bg-tokena-blue/30 rounded-lg">
            <ArrowDown className="w-6 h-6 text-tokena-blue font-bold" />
            <span className="text-sm text-tokena-blue font-medium ">
              Withdraw
            </span>
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {trendingCryptos.map((crypto) => (
          <div
            key={crypto.id}
            className="w-full p-4 border border-tokena-gray dark:border-tokena-dark-gray rounded-lg shadow-sm flex flex-col justify-between space-y-9  transition-transform transform hover:scale-105"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={crypto.image} alt={crypto.name} className="w-8 h-8" />
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-tokena-light-gray">
                    {crypto.name}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase dark:text-tokena-light-gray">
                    {crypto.symbol}
                  </p>
                </div>
              </div>
              <span
                className={`${
                  crypto.price_change_percentage_24h > 0
                    ? "text-tokena-green  bg-tokena-green/20"
                    : "text-tokena-red bg-tokena-red/20"
                } p-2 rounded-full text-xs font-medium`}
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-700 dark:text-tokena-light-gray">
                ${crypto.current_price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 dark:text-tokena-light-gray">
                ${crypto.total_volume.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCrypto;
