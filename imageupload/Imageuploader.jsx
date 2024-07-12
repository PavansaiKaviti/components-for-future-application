import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaEdit, FaBoxOpen, FaSignOutAlt } from "react-icons/fa";
import Profile from "@/public/images/profile.jpeg";
import Cover from "@/public/images/cover.jpeg";

const Card = () => {
  return (
    <form className="flex  justify-around items-center mt-44">
      <div className="flex flex-col gap-2 self-center  h-fit w-fit">
        <Link
          href="/"
          className=" text-black hover:text-white hover:bg-black border rounded-xl shadow-md p-3"
        >
          <FaUser className="inline mr-1" /> profile
        </Link>
        <Link
          href="/"
          className=" text-black hover:text-white hover:bg-black border rounded-xl  shadow-md p-3"
        >
          <FaEdit className="inline mr-1" />
          update Image
        </Link>
        {/* <Link
          href="/"
          className=" text-black hover:text-white hover:bg-black border rounded-xl shadow-md  p-3"
        >
          <FaEdit className="inline mr-1" />
          update password
        </Link> */}
        <Link
          href="/"
          className=" text-black hover:text-white hover:bg-black border rounded-xl shadow-md  p-3"
        >
          <FaBoxOpen className="inline mr-1" /> oders
        </Link>
        <Link
          href="/"
          className=" text-black hover:text-white hover:bg-black border rounded-xl shadow-md p-3"
        >
          <FaSignOutAlt className="inline mr-1" />
          logout
        </Link>
      </div>
      <div className=" flex  justify-center items-center flex-row gap-66 h-96 w-1/2 md:mr-24">
        <div className=" w-fit h-1/2 flex flex-col items-start justify-around p-2 gap-2 rounded-xl shadow-md">
          <div className=" p-2 text-xl">
            <label htmlFor="">Upload cover image</label>
          </div>
          <div className="border rounded-xl  p-2">
            <input type="file" />
          </div>
          <div className=" flex justify-center text-xl w-full ">
            <div className=" p-2  bg-black text-white rounded-xl">
              <button>upload</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Card;
