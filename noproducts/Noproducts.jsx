import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import noItem from "@/public/images/noitems.jpg";

const Profilepage = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div>
        <Image
          src={noItem}
          alt="no items"
          height={300}
          className=" my-12"
          priority={true}
        />
      </div>
      <div className="text-2xl">Cart is Empty....</div>
      <div className="border rounded-xl bg-black hover:bg-blue-500 ">
        <Link href="/" className="p-3 text-white">
          <FaArrowLeft className="inline m-1" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Profilepage;
