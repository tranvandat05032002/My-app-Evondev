import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  //   console.log(props);
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={index}
          image={item.image}
          avatar={item.avatar || item.notImage}
          title={item.title}
          author={item.author}
        />
      ))}

      {/* {children} */}
    </div>
  );
};

export default YoutubeList;
