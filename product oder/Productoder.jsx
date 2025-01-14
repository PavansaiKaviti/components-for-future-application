const Productoder = () => {
  // div seperate 2 divs
  return (
    <>
      {/* <div className="flex flex-row">
            <div className=" text-black-500  ">
              <FaArrowLeft className="inline text-sm m-1" />
              <Link href="/products">Back</Link>
            </div>
          </div> */}
      {/* div seperate 2 divs */}
      <div className="flex mx-10 my-14  md:flex-row gap-10 flex-col  justify-around">
        {/* product items  */}
        <div className=" basis-1/2 ">
          <div className="flex flex-col gap-6 xl:my-12">
            <div className="flex flex-row">
              <span className=" text-3xl">Items</span>
            </div>
            {/* product 1 */}
            <div className=" flex flex-row border rounded-lg justify-between shadow-md ">
              <div id="image" className="felx-none">
                <Image
                  src={ipad}
                  height={70}
                  width={70}
                  alt="image"
                  className="border rounded-lg m-2"
                />
              </div>
              <div className="flex-none m-4">
                <Link href="/" className="underline text-blue-500">
                  Ipad M2 chip
                </Link>
              </div>
              <div className="flex-none m-4">
                <span className=" text-xl">1</span>
                <span className="font-bold text-sm"> v</span>
              </div>
              <div className="flex-none m-4 ">$399.99</div>
            </div>
            {/* product 2 */}
            <div className=" flex flex-row border rounded-lg justify-between shadow-md ">
              <div id="image" className="felx-none">
                <Image
                  src={iphone}
                  height={70}
                  width={70}
                  className="border rounded-lg m-2"
                  alt="image"
                />
              </div>
              <div className="flex-none m-4">
                <Link href="/" className="underline text-blue-500">
                  Iphone pro Max
                </Link>
              </div>
              <div className="flex-none m-4">
                <span className=" text-xl">2</span>
                <span className="font-bold text-sm"> v</span>
              </div>
              <div className="flex-none m-4">$599.99</div>
            </div>
            {/* product 3 */}
            <div className=" flex flex-row border rounded-lg justify-between shadow-md ">
              <div id="image" className="felx-none">
                <Image
                  src={airpods}
                  height={70}
                  width={70}
                  className="border rounded-lg m-2"
                  alt="image"
                />
              </div>
              <div className="flex-none m-4">
                <Link href="/" className="underline text-blue-500">
                  airpods pro 2G
                </Link>
              </div>
              <div className="flex-none m-4">
                <span className=" text-xl">1</span>
                <span className="font-bold text-sm"> v</span>
              </div>
              <div className="flex-none m-4">$199.99</div>
            </div>
          </div>
        </div>
        {/* subtotal */}
        <div className=" basis-1/4 border rounded-2xl shadow-md">
          <div className="flex text-gray-500 m-4">
            <p className="text-xl text-black font-bold">Summary</p>
          </div>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex m-4 justify-between">
            <p className="text-xl text-gray-500 font-bold">items :</p>
            <span className=" text-md font-bold">$1197</span>
          </div>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex m-4 justify-between">
            <p className="text-xl text-gray-500 font-bold">Taxes :</p>
            <span className="text-md font-bold">$11.23</span>
          </div>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex  m-4 justify-between">
            <p className="text-xl text-gray-500 font-bold">Delivery Fee :</p>
            <span className=" text-md font-bold ">$0.0</span>
          </div>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex m-4 justify-between">
            <p className="text-xl text-gray-500 font-bold">Total :</p>
            <span className=" text-md font-bold ">$1197</span>
          </div>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex m-4 justify-around">
            <button className="border p-2 rounded-lg bg-black text-white hover:bg-blue-500">
              place oder
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productoder;
