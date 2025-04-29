import React, { useState, useEffect } from "react";
import products from "../../apiComponents/fetchData";

const ProductSearch = ({ products }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState("");

  const filterChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 0) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search.."
        value={search}
        onChange={filterChange}
      />
      {filtered.length > 0 && (
        <ul className="searchListItem">
          {filtered.map((product) => (
            <li key={product.id} className="SearchItemId">
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSearch;
