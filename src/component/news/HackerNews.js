import axios from "axios";
// import lodash from "lodash";
import React, { useEffect, useRef, useState } from "react";

// API search: https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
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
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  //handle
  const handFetchData = useRef({});
  handFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happened ${error}`);
    }
  };
  useEffect(() => {
    handFetchData.current();
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full p-2 rounded-md transition-all focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={query}
          // onChange={lodash.debounce((e) => {
          //   setQuery(e.target.value);
          // }, 500)}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          className="bg-red-400 text-white py-2 font-normal rounded-full px-4 flex-shrink-0 "
          onClick={() => {
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
          }}
        >
          Search
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-4 border-red-300 border-r-0 border-l-0 animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          errorMessage === "" &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={index} className="p-3 bg-gray-300 rounded-lg">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
