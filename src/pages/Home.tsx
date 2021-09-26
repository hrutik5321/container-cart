import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import SearchInput from "../components/SearchInput";

function Home() {
  return (
    <div>
      <Header />
      <SearchInput />
      <div className="w-full flex justify-center">
        <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 w-9/12 ml-3">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
