import Link from "next/link";
import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="bg-gray-800 py-3">
        <div className="py-2 flex justify-between items-center sm:px-6 lg:px-8">
          <div className="flex-shrink-0 text-white text-2xl cursor-pointer">
            <Link href={"/"}>Products Page</Link>
          </div>
          <div className="hidden sm:flex sm:ml-6">
            <div className="flex space-x-4">
              {/* <a
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
              </a> */}
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6"></div>
        </div>
      </nav>
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Navbar;
