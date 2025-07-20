"use client";
import { useCart } from "../../context/cartcontext";

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow bg-white flex flex-col items-center"
            >
              <img src={item.image} alt={item.model} className="w-32 h-32 object-cover mb-2" />
              <h2 className="font-semibold">{item.model}</h2>
              <p>Rs. {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
