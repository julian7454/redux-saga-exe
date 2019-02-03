import React from "react";
import ReactDOM from "react-dom";

class Nav extends React.Component {
  render() {
    return <div>{this.props.navText}</div>;
  }
}

export default Nav;
