import Image from 'next/image';

function Page() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 grid gap-10  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div
          className="bg-white text-red-500  p-6 rounded-xl text-xl font-semibold 
                     hover:bg-blue-700 hover:scale-105 
                      duration-300"
        >
          Card 1
        </div>

        <div
          className="bg-white  text-red-500 p-6 rounded-xl text-xl font-semibold
                       hover:bg-blue-700 hover:scale-105
                      duration-300"
        >
          Card 2
        </div>

        <div
          className="bg-white p-6 rounded-xl text-xl font-semibold text-red-500
                        hover:bg-blue-700 hover:scale-105
                       duration-300 "
        >
          Card 3
        </div>

        <div
          className="bg-white p-6 rounded-xl text-xl font-semibold text-red-500
                        hover:bg-blue-700 hover:scale-105
                      duration-300 "
        >
          Card 4
        </div>

        <div
          className="bg-white p-6 rounded-xl text-xl font-semibold text-red-500
                       hover:bg-blue-700 hover:scale-105
                       duration-300"
        >
          Card 5
        </div>

        <div
          className="bg-white p-6 rounded-xl text-xl font-semibold  text-red-500
                       hover:bg-blue-700 hover:scale-105
                       duration-300"
        >
          Card 6
        </div>
      </div>
      <div className="">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-3xl shadow-lg flex item-center space-x-4  hover:bg-blue-700 hover:scale-105 sm:grid-cols-2 duration-300">
          <div className="">
            <Image
              className="h-12 w-13"
              src="data:image/jpeg;base64,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"
              alt="L from Death Note"
              width={72}
              height={16}
            />
          </div>
          <div className="text-red-500">
            <div>Tailwind CSS</div>
            <p>By Jay Kaklotar</p>
          </div>
        </div>
      </div>
      <button className="bg-sky-500 text-center text-white p-3 text-base rounded-lg  hover:bg-sky-800/80 hover:text-blue-100 duration-300 mt-6 mx-auto block">
        Buy Now
      </button>
    </>
  );
}

export default Page;
