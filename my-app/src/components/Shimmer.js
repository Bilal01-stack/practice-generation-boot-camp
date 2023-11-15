import React from "react";

export default function Shimmer() {
  return (
    <div className="restaurants-lsit">
      {Array(10)
        .fill(" ")
        .map((e,index) => (
          <div className="shimmer-list" key={index}></div>
        ))}
    </div>
  );
}
