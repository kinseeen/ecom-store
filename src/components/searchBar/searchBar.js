import React, { useState, useEffect } from "react";
import products from "../../apiComponents/fetchData";

const ProductSearch = ({ search, setSearch }) => {
  const filterChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search.."
        value={search}
        onChange={filterChange}
      />
    </div>
  );
};

export default ProductSearch;
