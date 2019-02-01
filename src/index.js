import React from "react";
import ReactDOM from "react-dom";
import { subscribe, setState } from "./store";

import "./styles.css";

class Nav extends React.Component {
  state = {
    navText: "init"
  };
  componentDidMount() {
    subscribe(this.updateState);
  }
  updateState = store => {
    this.setState(store);
  };
  render() {
    return <div>{this.state.navText}</div>;
  }
}

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
