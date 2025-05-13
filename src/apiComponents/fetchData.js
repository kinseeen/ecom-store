import React, { useEffect, useState } from "react";
import styles from "../apiComponents/fetchData.css";
import useApi from "../apiComponents/useApi";
import ProductSearch from "../components/searchBar/searchBar";
import AddToCartButton from "../components/buttonComponents/addToCartButton/addToCartButton.js";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import StandardButton from "../components/buttonComponents/standardButton/standardButton";
import { useCart } from "../components/cartContext/cartContext.js";

function FetchProducts() {
  const { posts, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );
}

function App() {
  const { posts, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (isLoading) return <div className="loadingPost"> Loading posts </div>;
  if (isError) return <div className="ErrorMessage"> Error loading data</div>;

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewItem = (id) => {
    navigate(`product/${id}`);
  };

  return (
    <>
      <ProductSearch search={search} setSearch={setSearch} />
      <div className="postItemBox">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="postItems">
              <h2 className="postTitle">{post.title}</h2>
              {post.image.url && (
                <img
                  src={post.image.url}
                  alt={post.title}
                  className={"postImage"}
                />
              )}
              <p className="PostItem">{post.body}</p>
              <p className="PostItem">Price: {post.price}</p>
              <p>
                {post.discountedPrice !== post.price && (
                  <p className="PostItem"> on sale: {post.discountedPrice}</p>
                )}
              </p>
              <div className="itemButtons">
                <StandardButton
                  buttonText="View item"
                  callback={() => handleViewItem(post.id)}
                />
                <AddToCartButton
                  buttonText="Add to cart"
                  callback={() => addToCart(post)}
                />
              </div>
            </div>
          ))
        ) : (
          <div> No items found </div>
        )}
      </div>
    </>
  );
}

export default App;
