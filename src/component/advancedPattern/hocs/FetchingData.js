import React from "react";
import withAPIHackerNews from "./withAPIHackerNews";

const FetchingData = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div key={item.objectID}> {item.title}</div>
      ))}
    </div>
  );
};

export default withAPIHackerNews(
  FetchingData,
  `https://hn.algolia.com/api/v1/search?query=react`
);
