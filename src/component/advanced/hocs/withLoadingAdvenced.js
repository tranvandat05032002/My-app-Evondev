import React from "react";
import { useState } from "react";

const withLoadingAdvenced = (Component) => {
  return (props) => {
    const [data, setData] = useState([1, 2, 3, 4]);
    if (!data || data.length === 0) return <div>Loading....</div>;
    return <Component data={data} {...props}></Component>;
  };
};

export default withLoadingAdvenced;
