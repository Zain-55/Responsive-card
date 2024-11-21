import Image from "next/image";

export default function Productcard() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen py-10">
      {/* Header */}
      <h1 className="text-center text-white font-extrabold bg-blue-500 p-4 text-xl sm:text-2xl lg:text-5xl md:text-4xl shadow-lg uppercase tracking-wide">
        Toyota Car Collection
      </h1>

      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {/* Card 1 */}
        <div className="transform hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl shadow-lg overflow-hidden">
          <div className="flex justify-center p-6">
            <Image src="/Car1.png" alt="Toyota Rivo" width={300} height={200} />
          </div>
          <h2 className="text-center text-white text-2xl font-bold">Toyota Rivo</h2>
          <p className="text-center text-yellow-300 text-xl font-semibold py-2">
            $50,000
          </p>
          <div className="flex justify-center py-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-md shadow-md transform hover:scale-110 transition duration-300 ease-in-out">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="transform hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl shadow-lg overflow-hidden">
          <div className="flex justify-center p-6">
            <Image src="/Car2.png" alt="Civic VTI" width={300} height={400} />
          </div>
          <h2 className="text-center text-white text-2xl font-bold">Civic VTI</h2>
          <p className="text-center text-yellow-300 text-xl font-semibold py-2">
            $40,000
          </p>
          <div className="flex justify-center py-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-md shadow-md transform hover:scale-110 transition duration-300 ease-in-out">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="transform hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl shadow-lg overflow-hidden">
          <div className="flex justify-center p-6">
            <Image src="/Car3.png" alt="Corolla XLI" width={300} height={300} />
          </div>
          <h2 className="text-center text-white text-2xl font-bold">Corolla XLI</h2>
          <p className="text-center text-yellow-300 text-xl font-semibold py-2">
            $30,000
          </p>
          <div className="flex justify-center py-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-md shadow-md transform hover:scale-110 transition duration-300 ease-in-out">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
