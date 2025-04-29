import { useEffect, useState } from "react";

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

export default useApi;
