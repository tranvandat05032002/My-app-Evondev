import React from "react";

const LoadingSkeleton = ({ width, height, radius }) => {
  return (
    <div
      className="skeleton"
      style={{
        width: width || "100%",
        height: height,
        borderRadius: radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
