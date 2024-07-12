import React from "react";

const paymethod = () => {
  return (
    <div className=" flex flex-col items-center gap-20 mt-24">
      <div className=" flex gap-4 w-fit p-2 text-xl">
        <div className=" flex">
          <Link
            href="/products/cart/shippingaddress"
            className="hover:text-blue-500"
          >
            <FaCheckCircle className=" inline mr-1  text-green-500" />
            shipping address
          </Link>
        </div>
        <div className=" border-b-2 w-14 mb-2"></div>
        <div className=" flex">
          <Link
            href="/products/cart/shippingaddress"
            className="hover:text-blue-500"
          >
            <FaCheckCircle className=" inline mr-1  text-green-500" />
            pay
          </Link>
        </div>
        <div className=" border-b-2 w-14  mb-2"></div>
        <div className=" flex">
          <Link
            href="/products/cart/shippingaddress"
            className="hover:text-blue-500"
          >
            <FaCheckCircle className=" inline mr-1  text-green-500" />
            Oder placed
          </Link>
        </div>
      </div>
      <div className="border flex flex-col w-1/2">
        <div className="border">oder placed #16336393</div>
        <div className="border">oder details</div>
        <div className="border">oder details</div>
      </div>
    </div>
  );
};

export default paymethod;
