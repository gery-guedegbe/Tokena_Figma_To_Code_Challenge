import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const CryptoModal = ({ isOpen, onClose, crypto }) => {
  if (!isOpen) return null;

  // Configuration de l'animation avec Framer Motion
  const modalVariants = {
    hidden: { opacity: 0, y: 50, x: 0 },
    visible: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: 50, x: 0 },
  };

  const largeScreenVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-end sm:items-end bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        className="p-6 w-full sm:w-full sm:h-3/4 lg:h-full lg:w-2/5 xl:w-2/5 relative flex flex-col items-center justify-between xl:justify-center bg-white rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tr-none xl:rounded-tr-none shadow-lg dark:bg-tokena-dark-blue-1" // Dark background
        onClick={(e) => e.stopPropagation()}
        variants={
          window.innerWidth < 1024 ? modalVariants : largeScreenVariants
        } // Choix de l'animation selon la taille de l'écran
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-300 font-bold"
        >
          <X size={30} />
        </button>

        <div className="mt-6 h-full w-full mx-auto flex items-center justify-center">
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
              // scales: {
              //   x: {
              //     display: true,
              //     grid: {
              //       color: "#D1D5DB", // Couleur du cadrillage en dark mode
              //     },
              //   },
              //   y: {
              //     display: true,
              //     grid: {
              //       color: "#D1D5DB", // Couleur du cadrillage en dark mode
              //     },
              //     beginAtZero: true,
              //   },
              // },
              elements: {
                point: { radius: 0 },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            width={100}
            height={50}
          />
        </div>
        <div className="mt-2 flex flex-col items-start gap-2">
          <h2 className="text-xl font-semibold mb-2 flex items-center dark:text-white">
            <img
              src={crypto.image}
              alt={crypto.name}
              className="w-6 h-6 mr-2"
            />
            {crypto.name} ({crypto.symbol.toUpperCase()})
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-base lg:text-lg text-tokena-dark dark:text-white font-medium">
              ${crypto.current_price}
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-base lg:text-lg text-tokena-dark dark:text-white font-medium">
              Market Cap
            </span>
            <span className="text-sm lg:text-base text-tokena-dark-gray dark:text-gray-400 font-medium">
              ${crypto.market_cap.toLocaleString()}
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-base lg:text-lg text-tokena-dark dark:text-white font-medium">
              24h Volume
            </span>
            <span className="text-sm lg:text-base text-tokena-dark-gray dark:text-gray-400 font-medium">
              ${crypto.total_volume.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <h3 className="mt-1 text-sm lg:text-base text-tokena-dark dark:text-white font-medium">
              Description
            </h3>
            <p className="text-tokena-dark-gray dark:text-gray-400 text-sm break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              labore libero laborum vitae et doloribus! Perferendis, numquam,
              accusamus earum exercitationem, eveniet aliquam amet provident
              sint atque repudiandae eius possimus adipisci!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CryptoModal;
