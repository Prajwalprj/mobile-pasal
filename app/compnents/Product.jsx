import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { SiSamsung, SiOppo, SiVivo, SiXiaomi } from "react-icons/si";

const Product = () => {
  return (
    <div className="w-full min-h-screen px-4 md:px-12 py-4">
      {/* Title */}
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl md:text-5xl text-center font-bold border-b-4 border-gray-500 pb-2">
          Choose a Product
        </h2>
      </div>

      {/* Product Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {/* Apple */}
        <Link href="/Mobile/apple">
          <div className="flex justify-center items-center h-32 border border-gray-400 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all duration-200 active:scale-105">
            <FaApple size={60} className="md:size-28" />
          </div>
        </Link>

        {/* Samsung */}
        <Link href="/Mobile/samsung">
          <div className="flex justify-center items-center h-32 border border-gray-400 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all duration-200 active:scale-105">
            <SiSamsung size={60} className="md:size-24" />
          </div>
        </Link>

        {/* Oppo */}
        <Link href="/Oppo">
          <div className="flex justify-center items-center h-32 border border-gray-400 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all duration-200 active:scale-105">
            <SiOppo size={60} className="md:size-24" />
          </div>
        </Link>

        {/* Vivo */}
        <Link href="/vivo">
          <div className="flex justify-center items-center h-32 border border-gray-400 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all duration-200 active:scale-105">
            <SiVivo size={60} className="md:size-24" />
          </div>
        </Link>

        {/* Xiaomi */}
        <Link href="/Xiaomi">
          <div className="flex justify-center items-center h-32 border border-gray-400 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all duration-200 active:scale-105">
            <SiXiaomi size={50} className="md:size-24" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
