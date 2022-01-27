import React from "react";
import ReactDOM from "react-dom";

const fname = "Georgios";
const lname = "Oiko";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`} !</h1>
    <p>Your lucky number is {luckyNumber}</p>
    <p>Your new lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
