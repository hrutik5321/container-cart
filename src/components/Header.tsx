import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full items-center bg-gray-300 flex py-3 justify-between">
      <Link to="/" className="text-xl font-semibold text-gray-700 ml-3">
        Container App
      </Link>
      <Link to="/cart" className="py-2 px-4 rounded-md bg-pink-300 mr-3">
        Cart <span className="text-lg font-semibold ml-4">0</span>
      </Link>
    </div>
  );
}

export default Header;
