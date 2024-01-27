import React from "react"; //used to get React from node modules inside react folder
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I'm a H1 Tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
