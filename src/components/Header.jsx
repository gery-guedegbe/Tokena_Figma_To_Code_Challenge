import { useState } from "react";
import { Wallet, ChevronsUpDown, Menu } from "lucide-react";
import SidebarModal from "../Modals/SideBarModal";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container flex flex-col items-center ">
      <div className="w-full flex items-center justify-between ">
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <button
            className="flex p-1 xl:hidden border border-tokena-dark-gray text-tokena-dark-gray rounded-md shadow-md z-50 dark:text-white dark:border-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-5 h-5 " />
          </button>
          <div className="flex flex-col items-start justify-center gap-0 text-left">
            <h2 className="text-tokena-dark text-sm lg:text-base font-semibold dark:text-tokena-light-gray ">
              Dashboard
            </h2>
            <p className="text-tokena-dark-gray text-xs lg:text-sm font-medium dark:text-tokena-gray ">
              Welcome back, Jonh Doe !
            </p>
          </div>
          <button className="hidden md:flex items-center justify-center gap-2 ml-6 bg-tokena-blue hover:bg-tokena-blue/80 text-sm text-white font-medium  px-4 py-2.5 rounded-xl flex-shrink-0">
            <Wallet className="w-5 h-5" />
            <span>Connect wallet</span>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 lg:gap-8">
          <button className="px-1 py-2 lg:px-2 lg:py-2 flex items-center justify-center gap-2 border border-tokena-dark-gray rounded-xl">
            <span className="text-tokena-dark-gray text-sm font-medium dark:text-tokena-light-gray">
              USD
            </span>{" "}
            <ChevronsUpDown className="w-5 h-5 text-tokena-dark-gray dark:text-tokena-light-gray" />
          </button>
          <ThemeToggle />
        </div>
      </div>
      <SidebarModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      ></SidebarModal>
    </div>
  );
};

export default Header;
