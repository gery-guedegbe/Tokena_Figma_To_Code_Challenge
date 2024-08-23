import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div className="min-h-screen w-full dark:bg-tokena-dark-blue-1">
      <div className="flex">
        <SideBar />
        <div className="w-full ml-0 md:ml-0 xl:ml-64 px-4 lg:px-4 py-3 space-y-8 overflow-x-hidden">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layouts;
