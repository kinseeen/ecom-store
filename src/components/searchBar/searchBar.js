import React, { useState } from "react";

const products = [
  { id: 1, name: "random" },
  { id: 2, name: "whatever" },
  { id: 3, name: "test123" },
];

const ProductSearch = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState("");

  const filterChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 0) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
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
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSearch;
