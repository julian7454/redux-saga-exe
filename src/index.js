import React from "react";
import ReactDOM from "react-dom";
import { setState } from "./store";
import Nav from "./nav";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Nav />
        <button
          onClick={() => {
            //states.navText = 123
            setState({
              navText: Math.random()
            });
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
