import React from "react";
import useHackerNews from "../hooks/useHackerNews";

// API search: https://hn.algolia.com/api/v1/search?query=react

const HackerNewsCustomerHook = () => {
  const { data, query, setQuery, setUrl, loading, errorMessage } =
    useHackerNews(
      { hits: [] },
      `https://hn.algolia.com/api/v1/search?query=''`
    );
  console.log(data);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full p-2 rounded-md transition-all focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        <button
          className="bg-red-400 text-white py-2 font-normal rounded-full px-4 flex-shrink-0 "
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
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
          data.hits.length > 0 &&
          data.hits.map((item, index) => {
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

export default HackerNewsCustomerHook;
