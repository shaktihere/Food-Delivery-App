import React from "react"; //used to get React from node modules inside react folder
import ReactDOM from "react-dom/client";

//JSX - html like or xml like syntax
const Title = () => <h1 id="heading">Welcome to JSX World!</h1>;

//React functional component
//In below line return is missing because we are returing in just one line, so we can escape return. It is perfectly fine.
const h = "Rendering JS varaible";

const Fn = () => (
  <div id="parent">
    <Title />
    <h1 id="container">{h} Hey there, Mr. Functional component.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Fn />);
