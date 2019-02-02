import React from "react";
import ReactDOM from "react-dom";
import { subscribe } from "./store";

class Nav extends React.Component {
  render() {
    return <div>{this.props.navText}</div>;
  }
}

function connect(Comp) {
  class Wrapper extends React.Component {
    componentDidMount() {
      subscribe(this.updateState);
    }
    updateState = store => {
      this.setState(store);
    };
    render() {
      return <Comp {...this.state} />;
    }
  }
  return Wrapper;
}

export default connect(Nav);
