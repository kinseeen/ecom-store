import React, { useEffect, useState } from "react";
import styles from "../apiComponents/fetchData.css";
import useApi from "../apiComponents/useApi";
import ProductSearch from "../components/searchBar/searchBar";

function App() {
  const { posts, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (isLoading) {
    return <div className="loadingPost"> Loading posts</div>;
  }

  if (isError) {
    return <div className="ErrorMessage"> Error loading data</div>;
  }

  return (
    <div className="postItemBox">
      {posts.map((post, index) => (
        <div key={index} className="postItems">
          <h2 className="postTitle">{post.title}</h2>
          {post.image.url && (
            <img
              src={post.image.url}
              alt={post.title}
              className={"postImage"}
            />
          )}
          <p className="PostItem">{post.body}</p>
          <p className="PostItem">{post.description}</p>
          <p className="PostItem">Price: {post.price}</p>
          <p className="PostItem"> On sale: {post.discountedPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
