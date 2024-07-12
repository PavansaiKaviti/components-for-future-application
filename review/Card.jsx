import React from "react";
import Pavansai from "@/public/images/profile.jpeg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const Card = () => {
  return (
    <div>
      <form className="flex justify-center gap-4">
        <div className=" text-lg mt-2">write a review</div>
        <input
          type="text"
          className=" h-10 px-3 bg-gray-200 rounded-xl border-2  border-black-200"
          placeholder="write"
        />
        <select
          name="rating"
          className=" h-10 px-3 w-20 bg-gray-200 rounded-xl border-2  border-black-200"
        >
          <option value="1">1</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="2.5">2.5</option>
          <option value="3">3</option>
          <option value="3.5">3.5</option>
          <option value="4">4</option>
          <option value="4.5">4.5</option>
          <option value="5">5</option>
        </select>

        <button className=" bg-blue-500 rounded-xl border-2 w-20  border-black-200 p-2 text-white">
          post
        </button>
      </form>
      <div className="text-xl font-medium">REVIEWS</div>
      <div className=" grid grid-cols-2 gap-4">
        <div className="  bg-gray-200 p-2 rounded-3xl flex flex-col gap-2 ">
          <div className=" p-2 flex flex-row gap-3 w-fit">
            <div>
              <Image
                src={Pavansai}
                width={80}
                height={10}
                alt="sai"
                className="rounded-full w-14 h-14  "
              />
            </div>
            <div className="mt-2">
              <strong>pavansai Kaviti</strong>
              <p>PavansaiKaviti@gmail.com</p>
              <span className="flex flex-row mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className=" p-2 w-fit">
            <p className=" text-wrap">
              Think of the PS5 as one of your main choices when it comes to
              playing modern video games, alongside PC or an Xbox Series X|S.
            </p>
          </div>
          <div className=" flex flex-row gap-5 justify-center">
            <div className=" w-3/4 flex justify-around">
              <button className=" rounded-lg bg-blue-500  hover:text-black w-32 px-3 h-8 text-white">
                edit
              </button>
              <button className=" rounded-lg bg-blue-500  hover:text-black w-32 px-3 h-8 text-white">
                delete
              </button>
            </div>
          </div>
        </div>
        <div className="  bg-gray-200 p-2 rounded-3xl flex flex-col gap-2 ">
          <div className=" p-2 flex flex-row gap-3 w-fit">
            <div>
              <Image
                src={Pavansai}
                width={80}
                height={10}
                alt="sai"
                className="rounded-full w-14 h-14  "
              />
            </div>
            <div className="mt-2">
              <strong>pavansai Kaviti</strong>
              <p>PavansaiKaviti@gmail.com</p>
              <span className="flex flex-row mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className=" p-2 w-fit">
            <p className=" text-wrap">
              Think of the PS5 as one of your main choices when it comes to
              playing modern video games, alongside PC or an Xbox Series X|S.
            </p>
          </div>
          <div className=" flex flex-row gap-5 justify-center">
            <div className=" w-3/4 flex justify-around">
              <button className=" rounded-lg bg-blue-500  hover:text-black w-32 px-3 h-8 text-white">
                edit
              </button>
              <button className=" rounded-lg bg-blue-500  hover:text-black w-32 px-3 h-8 text-white">
                delete
              </button>
            </div>
          </div>
        </div>
        <div className="  bg-gray-200 p-2 rounded-3xl flex flex-col gap-2 ">
          <div className=" p-2 flex flex-row gap-3 w-fit">
            <div>
              <Image
                src={Pavansai}
                width={80}
                height={10}
                alt="sai"
                className="rounded-full w-14 h-14  "
              />
            </div>
            <div className="mt-2">
              <strong>pavansai Kaviti</strong>
              <p>PavansaiKaviti@gmail.com</p>
              <span className="flex flex-row mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className=" p-2 w-fit">
            <p className=" text-wrap">
              Think of the PS5 as one of your main choices when it comes to
              playing modern video games, alongside PC or an Xbox Series X|S.
            </p>
          </div>
          <div className=" flex flex-row gap-5 justify-center">
            <div className=" w-3/4 flex justify-around">
              <button className=" rounded-lg bg-blue-500  hover:text-black w-32 px-3 h-8 text-white">
                edit
              </button>
              <button className=" rounded-lg bg-blue-500  hover:text-black w-32 px-3 h-8 text-white">
                delete
              </button>
            </div>
          </div>
        </div>
        <div className="  bg-gray-200 p-2 rounded-3xl flex flex-col gap-2 ">
          <div className=" p-2 flex flex-row gap-3 w-fit">
            <div>
              <Image
                src={Pavansai}
                width={80}
                height={10}
                alt="sai"
                className="rounded-full w-14 h-14  "
              />
            </div>
            <div className="mt-2">
              <strong>pavansai Kaviti</strong>
              <p>PavansaiKaviti@gmail.com</p>
              <span className="flex flex-row mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className=" p-2 w-fit">
            <p className=" text-wrap">
              Think of the PS5 as one of your main choices when it comes to
              playing modern video games, alongside PC or an Xbox Series X|S.
            </p>
          </div>
          <div className=" flex flex-row gap-5 justify-center">
            <div className=" w-3/4 flex justify-around">
              <button className=" rounded-lg bg-blue-500  hover:text-black w-32 px-3 h-8 text-white">
                edit
              </button>
              <button className=" rounded-lg bg-blue-500  hover:text-black w-32 px-3 h-8 text-white">
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// <div className="border  bg-gray-200   p-2 rounded-lg flex flex-col gap-2 ">
// <div className="border p-2 flex flex-row gap-3 w-fit">
//   <div>
//     <Image
//       src={Pavansai}
//       width={80}
//       height={10}
//       alt="sai"
//       className="rounded-full w-14 h-14  "
//     />
//   </div>
//   <div className="mt-3">
//     <strong>pavansai Kaviti</strong>
//     <p>PavansaiKaviti@gmail.com</p>
//   </div>
// </div>
// <div className="border p-2 w-fit">
//   <p className=" text-wrap">
//     Think of the PS5 as one of your main choices when it comes to
//     playing modern video games
//   </p>
// </div>
// </div>
