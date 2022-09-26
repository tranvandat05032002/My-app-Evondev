import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNews(initialData, initialUrl) {
  // result problem to unmounted data
  const isMounted = useRef(true);

  useEffect(() => {
    // current empty
    // do something
    return () => {
      isMounted.current = false;
    };
  }, []);

  //hook
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(initialUrl);
  //   `https://hn.algolia.com/api/v1/search?query=${query}`
  //handle
  const handFetchData = useRef({});
  handFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happened ${error}`);
    }
  };
  useEffect(() => {
    handFetchData.current();
  }, [url]);
  // Transmit the customer hook to the outside
  return {
    data,
    query,
    setQuery,
    setUrl,
    loading,
    errorMessage,
  };
}
