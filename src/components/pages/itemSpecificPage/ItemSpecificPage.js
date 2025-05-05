import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Price from "../../itemPrice/itemPrice";
import Reviews from "../../itemReview/itemReview";

const ItemSpecificPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const result = await fetch(
          `https://v2.api.noroff.dev/online-shop/${productId}`
        );
        const json = await result.json();
        setProduct(json.data);
      } catch (error) {
        setError("Could not fetch product");
      }
    }
    fetchProduct();
  }, [productId]);

  if (error) return <div> {error}</div>;

  return (
    <div className="singleProductPage">
      {" "}
      {product ? (
        <>
          <h1> {product.title}</h1>
          <p> {product.description}</p>
          {product.image.url && (
            <img
              src={product.image.url}
              alt={product.title}
              className={"productImage"}
            />
          )}
          <Price
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
          <Reviews productId={productId} />
        </>
      ) : (
        <p> Loading product details..</p>
      )}
    </div>
  );
};

export default ItemSpecificPage;
// 1. Create a separate function for fetching data from the API
// 2. Call endpoint with productID as parameter
// 3. Use the data from said function, and return it here

//må kunne ta inn verdi i form av id evt.
