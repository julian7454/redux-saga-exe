import React from "react";
import ReactDOM from "react-dom";
import { subscribe } from "./store";
import { connect } from "react-redux";

class Nav extends React.Component {
  render() {
    return <div>{this.props.navText}</div>;
  }
}

const mapStateToProps = state => {
  return {
    navText: state.nav.navText
  };
};
export default connect(mapStateToProps)(Nav);
