import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const test = {
  teste: 'asd',
  test1: ''
}

const App = () => (
  <div className="container">
    <div>Name: hytag-template</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
