import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Nav from "./nav";
import { updateNavText } from "./actions";

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
            this.props.updateNav(Math.random());
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNav: text => {
      dispatch(updateNavText(text));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
