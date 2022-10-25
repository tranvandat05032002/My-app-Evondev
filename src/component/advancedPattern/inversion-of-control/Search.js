import React from "react";

const Search = ({ inputPlaceholder, onChange, ...props }) => {
  return (
    <div className="p-1">
      <input
        type="text"
        placeholder={inputPlaceholder}
        className="w-full px-2 py-3 border border-gray-300 outline-none "
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
