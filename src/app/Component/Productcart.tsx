import { Clicker_Script } from "next/font/google";
import Image from "next/image";

export default function Productcard() {
  return (
    <main>
    <h1 className="text-center text-white p-3 font-extrabold text-1xl bg-blue-300 shadow-lg sm:text-sm whitespace-nowrap lg:text-4xl md:text-3xl">
  TOYOTA CAR COLLECTION
</h1>
      
      <div className="lg:flex justify-around m-4 md:w-full">
        <div className=" lg:w-1/4 border bg-gradient-to-r from-cyan-500 to-blue-400 rounded-2xl my-4 shadow-2xl">
          <div className=" flex justify-center m-5">
            <Image src="/Car1.png" alt="" width={300} height={200} />
          </div>

          <h1 className="text-center py-2 text-3xl">Toyota Rivo</h1>
          <p className="text-center py-2 text-3xl text-red-500">$.50,000</p>

          <div className="flex justify-center py-5 ">
            <button className="bg-yellow-400   py-2 px-5 rounded-md shadow-lg text-3xl">
              Buy Now
            </button>
          </div>
        </div>

        <div className="lg:w-1/4 border bg-gradient-to-r from-cyan-500 to-blue-400 rounded-2xl my-4 shadow-2xl">
          <div className="flex justify-center m-5">
            <Image src="/Car2.png" alt="" width={300} height={400} />
          </div>

          <p className="text-center py-2 text-3xl">Civic VTI</p>
          <p className="text-center py-2 text-3xl text-red-500">$.40,000</p>

          <div className="flex justify-center py-5">
            <button className="bg-yellow-400 py-2 px-5 rounded-md shadow-lg text-3xl">
              Buy Now
            </button>
          </div>
        </div>

        <div className=" lg:w-1/4 border bg-gradient-to-r from-cyan-500 to-blue-400 rounded-2xl my-4 shadow-2xl">
          <div className="flex justify-center m-5">
            <Image
              src="/Car3.png"
              alt=""
              width={300}
              height={300}
              loading="lazy"
            />
          </div>

          <p className="text-center py-2 text-3xl">Corolla XLI</p>
          <p className="text-center py-2 text-3xl text-red-500">$.30,000</p>

          <div className="flex justify-center py-5">
            <button className="bg-yellow-400 py-2 px-5 rounded-md shadow-lg text-3xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
        
    </main>
  );
}
