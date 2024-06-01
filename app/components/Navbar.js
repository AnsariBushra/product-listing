import React from "react";
import Search from "./Search";

const Navbar = (props) => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="py-2 flex justify-between items-center sm:px-6 lg:px-8">
          <div className="flex-shrink-0 text-white text-xl cursor-pointer">
            Products Page
          </div>
          <div className="flex items-center sm:hidden">
            <Search />
          </div>
          <div className="hidden sm:flex sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
              >
                Electronics
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
              >
                Jewellery
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
              >
                Men's Clothing
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
              >
                Women's Clothing
              </a>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Search />
          </div>
        </div>
      </nav>
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Navbar;
