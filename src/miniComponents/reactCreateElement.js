import React from "react";
import ReactDOM from "react-dom";

const title = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    { className: "red" },
    "My first React.createElement"
  ),
  React.createElement("ul", {}, [
    React.createElement("li", {}, "Houstan we had a problem"),
    React.createElement("li", {}, "How far people could code like this???"),
  ])
);

ReactDOM.render(title, document.getElementById("magic"));
