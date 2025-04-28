import React, { useState, useEffect } from "react";
import fetchProducts from "../../apiComponents/fetchData";

const ProductSearch = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(
    () =>
      async function getData() {
        const data = await fetchProducts();
        setProducts(data);
      },
    []
  );

  const filterChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 0) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(value ? results : []);
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
