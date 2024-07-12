import React from "react";
import pay from "@/public/images/pay.jpg";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import Link from "next/link";

const Card = () => {
  return (
    <div className=" flex flex-col items-center gap-20 mt-24">
      <div className=" flex gap-4 w-fit p-2 text-xl">
        <div className=" flex">
          <Link
            href="/products/cart/shippingaddress"
            className="hover:text-blue-500"
          >
            <FaCheckCircle className=" inline mr-1" />
            shipping address
          </Link>
        </div>
        <div className=" border-b-2 w-14 mb-2"></div>
        <div className=" flex">
          <Link
            href="/products/cart/shippingaddress"
            className="hover:text-blue-500"
          >
            <FaCheckCircle className=" inline mr-1" />
            pay
          </Link>
        </div>
        <div className=" border-b-2 w-14  mb-2"></div>
        <div className=" flex">
          <Link
            href="/products/cart/shippingaddress"
            className="hover:text-blue-500"
          >
            <FaCheckCircle className=" inline mr-1" />
            Oder placed
          </Link>
        </div>
      </div>
      <div className=" flex flex-row w-1/2 ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col  p-5  gap-3 text-lg">
            <div className="border p-2  rounded-3xl bg-gray-100">
              <input type="radio" name="" id="cash" className="mr-1" />
              <label htmlFor="cash" className=" text-nowrap">
                cash on delivery
              </label>
            </div>
            <div className="border p-2 flex rounded-3xl bg-gray-100">
              <input type="radio" name="" id="cash" className="mr-1" />
              <label htmlFor="cash" className=" text-nowrap">
                pay with Debit/Credit
              </label>
            </div>
          </div>
          <button
            type="submit"
            className=" border rounded-3xl w-1/2 p-2 bg-black text-white text-lg"
          >
            pay
          </button>
        </div>
        <div id="image">
          <Image
            src={pay}
            className="w-full h-full  rounded-3xl text-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
