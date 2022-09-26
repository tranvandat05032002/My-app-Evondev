import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      <div className="youtube-item">
        <div className="youtube-image">
          <img src={props.image} alt="#" />
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="#" className="youtube-avatar" />
          <div className="youtube-info">
            <h3 className="title">{props.title}</h3>
            <h4>{props.author}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
