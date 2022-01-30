import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="food-img"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=980:*"
        alt="bacon"
      />
      <img
        className="food-img"
        src="https://m.media-amazon.com/images/I/71lNrnbMXsL.jpg"
        alt="jamon"
      />
      <img
        className="food-img"
        src="https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19-e1609271249794.jpg"
        alt="noodles"
      />
    </div>
  </div>,
  document.getElementById("root")
);
