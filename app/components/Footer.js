import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 w-full p-2 mt-10">
      <div className="text-center text-white">
        <p className="">❤️ Made With Love ❤️</p>
        <Link
          href={"https://github.com/AnsariBushra"}
          target="_blank"
          className="text-sm hover:border-b border-white duration-150"
        >
          &copy;bushraansari.0517@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;
