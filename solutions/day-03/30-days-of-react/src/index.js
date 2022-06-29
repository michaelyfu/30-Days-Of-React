// index.js
import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document
import tree from "./images/tree.jpeg";
import frontend from "./images/frontend_technologies.png";

// Styling
const subscribeWrapper = {
    background: '#c2e6f4', }

// JSX element, tech
const tech = <img src={frontend} alt="tree" />;

const subscribe = (
  <div style={subscribeWrapper}>
    <h1>Subscribe</h1>
    <h2>Sign up with your email address to recieve news and updates</h2>
    <button>First name</button>
    <button>Last name</button>
    <button>Email</button>
    <button>Subscribe</button>
  </div>
);

// JSX element, app
const app = (
  <div className="app">
    {tech}
    {subscribe}
    {/* {num3} */}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
