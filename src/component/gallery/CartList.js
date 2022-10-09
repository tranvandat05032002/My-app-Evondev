import React from "react";
import { useGallery } from "../../contexts/gallery-context";

const CartList = () => {
  const { cardItems, removeCart } = useGallery();
  return (
    <div>
      <p>Cart</p>
      <div className="flex flex-col items-start gap-5 px-5 py-10">
        {cardItems.length > 0 &&
          cardItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-x-5"
            >
              <p>Card {item.id}</p>
              <img
                src={item.url}
                alt=""
                className="object-cover w-10 h-10 rounded-full"
              />
              <button
                className="px-3 py-2 text-sm font-semibold text-white bg-red-400 rounded-full"
                onClick={() => removeCart(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartList;
