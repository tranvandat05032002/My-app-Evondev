import React from "react";
import withLoadingAdvenced from "./withLoadingAdvenced";

const FetchingData = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default withLoadingAdvenced(FetchingData);
