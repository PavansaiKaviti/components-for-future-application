import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaEdit, FaBoxOpen, FaSignOutAlt } from "react-icons/fa";
import Profile from "@/public/images/profile.jpeg";
import Cover from "@/public/images/cover.jpeg";

const Card = () => {
  return (
    <div className="flex  justify-around items-center mt-44">
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
          update details
        </Link>
        <Link
          href="/"
          className=" text-black hover:text-white hover:bg-black border rounded-xl shadow-md  p-3"
        >
          <FaEdit className="inline mr-1" />
          update password
        </Link>
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
      <div className=" flex flex-col gap-6 h-96 w-1/2">
        <div className="relative h-3/4 w-full">
          <Image
            src={Cover}
            alt="cover"
            className=" object-cover w-full h-full rounded-3xl"
          />
          <div className="absolute bottom-0  left-0 h-32 w-32">
            <Image src={Profile} alt="profile" className=" w-full h-full " />
          </div>
        </div>
        <div className="flex border shadow-md justify-around flex-row w-full p-4 rounded-3xl ">
          <div>
            <p>
              name:<span> pavansai Kaviti</span>
            </p>
          </div>
          <div>
            <p>
              Email:<span> pavansaiKaviti@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
