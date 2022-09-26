import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";

const initialValue = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};
const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      // {...state} in return, it is a copy of const newState = JSON.parse(JSON.stringify(state))
      // --> create a copy of state previous
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
    default:
      break;
  }
};

const HackerNewsWithUseReducer = () => {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialValue);
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: `The error happened ${error}`,
      });
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="w-2/4 bg-white shadow-md rounded-lg mx-auto mt-5 p-5">
      <div className="flex gap-x-5 mb-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md transition-all focus:border-blue-400 px-2"
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />

        <button
          className="bg-red-400 text-white font-normal py-2 px-5 rounded-full"
          disabled={state.loading}
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
          onClick={() => {
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            });
          }}
        >
          Search
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-4 border-red-300 border-r-0 border-l-0 animate-spin"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {state.errorMessage === "" &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3
                key={index}
                className="bg-red-400 text-white p-3 rounded-full"
              >
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithUseReducer;
