// index.js
import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document
import html from "./images/html.png"
// import css-pic from "./images/css.png"
// import js-pic from "./images/js.png"
// import react-pic from "./images/react.jpeg"


const subscribeWrapper = {
    background: '#c2e6f4', }

// JSX element, tech
const tech = <img src={html} alt="tree" />;

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
    {/* {subscribe} */}
    {/* {num3} */}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
