import { motion } from "framer-motion";
import Logo from "../assets/images/logo.png";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-tokena-blue/20 rounded-lg">
      <motion.div
        className="p-4 rounded-lg bg-white shadow-lg dark:bg-tokena-dark-blue-2"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Logo"
            width={30}
            height={30}
            className="animate-pulse"
          />
          <div className="flex flex-col">
            <h3 className="text-tokena-blue text-sm font-bold dark:text-tokena-light-gray">
              Tokena
            </h3>
            <span className="text-tokena-blue text-xs font-medium dark:text-tokena-light-gray">
              Finance app
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Loading;
