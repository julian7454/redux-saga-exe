import React from "react";
import ReactDOM from "react-dom";
import { dispatch } from "./store";
import Nav from "./nav";
import { updateNavText } from "./actions";

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
            dispatch(updateNavText(Math.random()));
            // dispatch({
            //   type: UPDATE_NAV_TEXT,
            //   value: Math.random()
            // });
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
