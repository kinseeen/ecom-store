import React from "react";
import ProductSearch from "../../searchBar/searchBar";
import Product from "../../../apiComponents/fetchData";

const homePage = () => {
  return (
    <div>
      <ProductSearch /> <Product />{" "}
    </div>
  );
};

export default homePage;
