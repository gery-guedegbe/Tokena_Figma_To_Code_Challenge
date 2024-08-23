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
  ChevronRight,
  Delete,
  BellOff,
  CircleUserRound,
  LogOut,
} from "lucide-react";
import { useState } from "react";

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

const SideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="hidden xl:flex flex-col justify-between w-16 h-screen lg:w-1/5 fixed left-0 top-0 p-4   border-r border-tokena-dark-gray bg-white shadow-md dark:bg-tokena-dark-blue-1">
      {/* Logo */}
      <div className="">
        <div className="p-2 flex items-center justify-start gap-3 bg-tokena-blue/20 rounded-lg">
          <img src={Logo} alt="Logo" width={30} height={10} />
          <div className="flex flex-col items-start justify-start gap-0 text-left">
            <h3 className="text-tokena-blue text-sm font-bold">Tokena</h3>
            <span className="text-tokena-blue text-xs font-medium">
              Finance app
            </span>
          </div>
        </div>
        {/* Logo */}

        {/* Navigation Links */}
        <ul className="mt-6 space-y-1">
          <h3 className="pb-1 text-tokena-dark-gray text font-medium dark:text-tokena-light-gray">
            Menu
          </h3>
          {sideLinks.map((link, index) => (
            <li key={index} className="font-medium text-xs flex-shrink-0">
              {link.path === "/" || link.path === "/news" ? (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "px-2 py-2 flex items-center justify-start space-x-1 text-white bg-tokena-blue rounded-md dark:text-tokena-light-gray"
                      : "px-2 py-2 flex items-center justify-start space-x-1 text-tokena-dark hover:text-tokena-blue hover:bg-tokena-dark-gray/15 rounded-md dark:text-tokena-light-gray"
                  }
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </NavLink>
              ) : (
                <div className="px-2 py-2 flex items-center justify-start space-x-1 text-tokena-dark-gray cursor-not-allowed dark:text-tokena-light-gray">
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
      <div
        onClick={toggleModal}
        className="mt-6 relative flex items-center justify-between dark:mt-2 dark:px-2 dark:py-2 dark:bg-tokena-dark-blue-2 dark:rounded-md cursor-pointer"
      >
        <div className="flex items-center justify-start gap-2">
          <img
            src={profil_image}
            alt="profil_image"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col items-start justify-start gap-0 text-left">
            <h3 className="text-xs text-tokena-dark font-medium dark:text-white">
              Jonh Doe
            </h3>
            <span className="text-[10px] xl:text-xs text-tokena-dark-gray font-normal">
              jonhdoe@gmail.com
            </span>
          </div>
        </div>
        <ChevronRight size={16} className="dark:text-tokena-light-gray" />

        {/* Profil Modal */}
        {isModalOpen && (
          <div className="fixed hidden xl:flex -left-52 -bottom-20 w-full h-screen items-center justify-center z-50">
            <div className="w-80 py-4 flex flex-col items-start gap-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
              <div className="px-4 flex items-center gap-3">
                <img
                  src={profil_image}
                  alt="profil_image"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-lg text-tokena-dark font-semibold  dark:text-white">
                    Jonh Doe
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-tokena-green rounded-full"></div>
                    <span className="text-sm text-tokena-dark-gray font-medium font-fontJetBrainsMono dark:text-tokena-light-gray">
                      Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mt-5 flex flex-col items-start gap-0.5">
                <div className="w-full p-2 flex items-center justify-between hover:bg-tokena-dark-gray/15 rounded-md">
                  <div className=" flex items-center gap-2">
                    <Delete className="w-5 h-5 text-tokena-dark dark:text-tokena-light-gray" />
                    <span className="text-sm font-semibold text-tokena-dark dark:text-tokena-gray">
                      Account settings
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-tokena-dark dark:text-tokena-light-gray" />
                </div>
                <div className="w-full p-2  flex items-center justify-between hover:bg-tokena-dark-gray/15 rounded-md">
                  <div className="flex items-center gap-2">
                    <BellOff className="w-5 h-5 text-tokena-dark dark:text-tokena-light-gray" />
                    <span className="text-sm font-semibold text-tokena-dark dark:text-tokena-gray">
                      Pause notifications
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-tokena-dark dark:text-tokena-light-gray" />
                </div>
              </div>
              <div className="w-full h-[0.5px] mt-2 bg-tokena-gray"></div>
              <div className="w-full px-4 mt-2 flex flex-col items-start gap-0.5">
                <div className="w-full p-2 flex items-center justify-between hover:bg-tokena-dark-gray/15 rounded-md">
                  <div className=" flex items-center gap-2">
                    <CircleUserRound className="w-5 h-5 text-tokena-dark dark:text-tokena-light-gray" />
                    <span className="text-sm font-semibold text-tokena-dark dark:text-tokena-gray">
                      Profile
                    </span>
                  </div>
                </div>
                <div className="w-full p-2  flex items-center justify-between hover:bg-tokena-dark-gray/15 rounded-md">
                  <div className="flex items-center gap-2">
                    <Delete className="w-5 h-5 text-tokena-dark dark:text-tokena-light-gray" />
                    <span className="text-sm font-semibold text-tokena-dark dark:text-tokena-gray">
                      Account settings
                    </span>
                  </div>
                </div>
                <div className="w-full p-2  flex items-center justify-between hover:bg-tokena-dark-gray/15 rounded-md">
                  <div className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-tokena-dark dark:text-tokena-light-gray" />
                    <span className="text-sm font-semibold text-tokena-dark dark:text-tokena-gray">
                      Notification Settings
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full h-[0.5px] mt-2 bg-tokena-gray"></div>
              <div className="w-full px-4 mt-4 flex flex-col items-start gap-0.5">
                <div className="w-full p-2 flex items-center justify-between hover:bg-tokena-dark-gray/15 rounded-md">
                  <div className=" flex items-center gap-2">
                    <LogOut className="w-5 h-5 text-tokena-dark dark:text-tokena-light-gray" />
                    <span className="text-sm font-semibold text-tokena-dark dark:text-tokena-gray">
                      Sign Out
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Profil Modal */}
      </div>
    </div>
  );
};

export default SideBar;
