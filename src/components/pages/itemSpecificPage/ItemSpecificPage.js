import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Price from "../../itemPrice/itemPrice";
import Reviews from "../../itemReview/itemReview";
import "../itemSpecificPage/itemSpecificPage.css";
import AddToCartButton from "../../buttonComponents/addToCartButton/addToCartButton.js";
import NavigationButton from "../../buttonComponents/navigationButton/navigationButton";
import { useCart } from "../../cartContext/cartContext.js";

const ItemSpecificPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const { addToCart } = useCart();

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
      <NavigationButton buttonText="Go back" />{" "}
      {product ? (
        <>
          <div className="productContent">
            <div className="leftSide">
              {product.image.url && (
                <img
                  src={product.image.url}
                  alt={product.title}
                  className={"productImage"}
                />
              )}
            </div>
            <div className="rightSide">
              <div className="rightSideInfo">
                <h1> {product.title}</h1>
                <p className="description"> {product.description}</p>
                <Price
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                />
                <AddToCartButton
                  buttonText="Add to cart"
                  callback={() => addToCart(product)}
                />
              </div>
              <Reviews className="reviewBox" reviewsArray={product.reviews} />
            </div>
          </div>
        </>
      ) : (
        <p> Loading product details..</p>
      )}
    </div>
  );
};

export default ItemSpecificPage;
