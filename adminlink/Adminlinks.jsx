import Link from "next/link";
import React from "react";
import { FaUsers, FaCubes, FaPlus } from "react-icons/fa";

const Adminlinks = () => {
  return (
    <div
      id="navbaradmin"
      className="flex w-full md:w-1/2 justify-around  md:gap-2 p-4  "
    >
      <Link
        href="/"
        className="text-black hover:text-white hover:bg-black border rounded-xl shadow-md p-3"
      >
        Products
      </Link>
      <Link
        href="/users"
        className="text-black hover:text-white hover:bg-black border rounded-xl shadow-md p-3"
      >
        Users
      </Link>
      <Link
        href="/"
        className="text-black hover:text-white hover:bg-black border rounded-xl shadow-md p-3"
      >
        oders
      </Link>

      <Link
        href="/"
        className="text-black text-nowrap hover:text-white hover:bg-black border rounded-xl shadow-md p-3"
      >
        Add product
      </Link>
    </div>
  );
};

export default Adminlinks;
