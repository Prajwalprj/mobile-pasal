"use client";
import { useEffect, useState } from "react";
import { useCart } from "../../../context/cartcontext";

const Home = () => {
  const [samsung, setMobiles] = useState([]);
  const { addToCart } = useCart();
  useEffect(() => {
    fetch("/api/samsungapi")
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Available Mobiles</h1>
      <div className="grid grid-cols-3 gap-6">
        {samsung.map((mobile) => (
          <div
            key={mobile.id}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <img
              src={mobile.image}
              alt={mobile.model}
              className="w-full h-100 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{mobile.model}</h2>
            <p className="text-gray-600">{mobile.storage}</p>
            <p className="text-gray-600">{mobile.ram}</p>
            <p className="text-green-600 font-bold">Rs. {mobile.price}</p>
            <button
              onClick={() => addToCart(mobile)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
