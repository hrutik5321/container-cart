import React from "react";

function SearchInput() {
  return (
    <div className="w-1/2 mt-2 mb-2 ml-3">
      <input
        type="text"
        placeholder="Search items Here"
        className="p-1 outline-none border-b border-gray-400"
      />
    </div>
  );
}

export default SearchInput;
