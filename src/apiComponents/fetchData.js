import React, { useEffect, useState } from "react";

function useApi(url) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setPosts(json.data || []);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { posts, isLoading, isError };
}

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
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{post.description}</p>
          <p>"Price":{post.price}</p>
          <p> "On sale": {post.discountedPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
