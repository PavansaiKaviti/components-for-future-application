import { FaCheckCircle } from "react-icons/fa";
import Shipping from "@/public/images/shippingaddress.jpg";
import Image from "next/image";
import Link from "next/link";

const shippingaddress = () => {
  return (
    <form action="">
      <div className="flex flex-col items-center min-h-screen gap-20 mt-20  ">
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
        <div className="flex  w-3/4 p-5 mt-22">
          <div className="flex flex-col justify-center w-1/2 gap-2 ">
            <div className=" gap-2 mb-2">
              <p className="text-3xl">Shipping Address: </p>
            </div>
            <div className=" gap-2">
              <input
                type="text"
                className="w-full h-12 rounded-xl p-2 border bg-gray-100"
                placeholder="Address"
              />
            </div>
            <div className=" flex gap-2">
              <input
                type="text"
                className="w-1/2 h-12 rounded-xl p-2 border  bg-gray-100"
                placeholder="phone"
              />
              <input
                type="text"
                className="w-1/2 h-12  rounded-xl p-2 border  bg-gray-100"
                placeholder="city"
              />
            </div>
            <div className=" flex  gap-2">
              <input
                type="text"
                className="w-1/2 h-12  rounded-xl p-2 border  bg-gray-100"
                placeholder="state"
              />
              <input
                type="text"
                className="w-1/2 h-12  rounded-xl p-2 border  bg-gray-100"
                placeholder="Zipcode"
              />
            </div>
            <div className=" flex mt-2  gap-2 justify-center">
              <button className="border p-2 rounded-xl bg-black text-white">
                submit
              </button>
            </div>
          </div>
          <div className=" w-1/2">
            <Image
              src={Shipping}
              width={0}
              height={0}
              sizes="100 h-full w-full"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default shippingaddress;
