import React from "react";
import ReactDOM from "react-dom";

const name = "Georgios";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
