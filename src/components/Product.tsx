import React from "react";

function Product() {
  return (
    <div className=" bg-gray-400 flex items-center flex-col p-2">
      <img
        src="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UL480_QL65_.jpg"
        alt=""
        className="w-1/2"
      />
      <div className="w-full ml-3 mt-2">
        <h1 className="text-base font-semibold">Apple Airpods</h1>
        <h1>⭐⭐⭐⭐⭐⭐</h1>
        <p>229$</p>
      </div>
      <div className="w-full">
        <button className="py-1 px-2 bg-green-500">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
