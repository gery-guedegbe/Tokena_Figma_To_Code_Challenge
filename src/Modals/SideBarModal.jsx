import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import profil_image from "../assets/images/profil-avatar.png";

import {
  House,
  ChartNoAxesColumn,
  Newspaper,
  CreditCard,
  ClipboardList,
  Bell,
  Wallet,
  SquareDashedBottom,
  Headphones,
  Settings,
  ChevronDown,
} from "lucide-react";

const sideLinks = [
  { id: 1, path: "/", name: "Dashboard", icon: <House className="w-4 h-4" /> },
  {
    id: 2,
    path: "/news",
    name: "News",
    icon: <Newspaper className="w-4 h-4" />,
  },
  {
    id: 3,
    path: "/activities",
    name: "Activities",
    icon: <ChartNoAxesColumn className="w-4 h-4" />,
  },
  {
    id: 4,
    path: "/card",
    name: "Card",
    icon: <CreditCard className="w-4 h-4" />,
  },
  {
    id: 5,
    path: "/reports",
    name: "Reports",
    icon: <ClipboardList className="w-4 h-4" />,
  },
  {
    id: 6,
    path: "/notifications",
    name: "Notifications",
    icon: <Bell className="w-4 h-4" />,
  },
  {
    id: 7,
    path: "/billing",
    name: "Billing",
    icon: <Wallet className="w-4 h-4" />,
  },
  {
    id: 8,
    path: "/invoices",
    name: "Invoices",
    icon: <SquareDashedBottom className="w-4 h-4" />,
  },
  {
    id: 9,
    path: "/help-center",
    name: "Help center",
    icon: <Headphones className="w-4 h-4" />,
  },
  {
    id: 10,
    path: "/settings",
    name: "Settings",
    icon: <Settings className="w-4 h-4" />,
  },
];

const modalVariants = {
  hidden: { opacity: 0, x: -50, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -50, y: 0 },
};

const SidebarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex xl:hidden bg-black bg-opacity-50 z-50 ">
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="w-1/2 h-full bg-white py-4 px-2 flex flex-col items-start justify-between dark:bg-tokena-dark-blue-1"
      >
        {/* Logo */}
        <div className="w-full">
          <div className="p-2 flex items-center justify-start gap-3 bg-tokena-blue/20 rounded-lg">
            <img src={Logo} alt="Logo" width={25} height={10} />
            <div className="flex flex-col items-start justify-start gap-0 text-left">
              <h3 className="text-tokena-blue text-[12px] font-semibold">
                Tokena
              </h3>
              <span className="text-tokena-blue text-[10px] font-medium">
                Finance app
              </span>
            </div>
          </div>
          {/* Logo */}

          {/* Bouton pour fermer le modal */}

          {/* Navigation Links */}
          <ul className="space-y-1 mt-6">
            <h3 className="pb-3 text-tokena-dark-gray text-sm font-medium dark:text-tokena-light-gray">
              Menu
            </h3>
            {sideLinks.map((link, index) => (
              <li key={index} className="font-medium text-[11px] flex-shrink-0">
                {link.path === "/" || link.path === "/news" ? (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "px-2 py-2 flex items-center justify-start space-x-2 text-white bg-tokena-blue rounded-md dark:text-tokena-light-gray"
                        : "px-2 py-2 flex items-center justify-start space-x-2 text-tokena-dark hover:text-tokena-blue hover:bg-tokena-dark-gray/15 rounded-md dark:text-tokena-light-gray"
                    }
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </NavLink>
                ) : (
                  <div className="px-2 py-2 flex items-center justify-start space-x-2 text-tokena-dark-gray cursor-not-allowed dark:text-tokena-light-gray">
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {/* Navigation Links */}
        </div>

        {/* Profil Section */}
        <div className="mb-4 w-full flex items-center justify-between dark:px-2 dark:py-2 dark:bg-tokena-dark-blue-2 dark:rounded-md">
          <div className="flex items-c12    qenter justify-start gap-1">
            <img
              src={profil_image}
              alt="profil_image"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col items-start justify-start gap-0 text-left">
              <h3 className="text-[10px] text-tokena-dark font-semibold dark:text-white">
                Jonh Doe
              </h3>
              <span className="text-[9px] text-tokena-dark-gray font-medium truncate dark:text-tokena-light-gray">
                jonhdoe@gmail.com
              </span>
            </div>
          </div>
          <ChevronDown size={12} className="dark:text-tokena-light-gray" />
        </div>
      </motion.div>
      <div onClick={onClose} className="w-1/2 h-full"></div>
    </div>
  );
};

export default SidebarModal;
