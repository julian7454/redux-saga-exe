import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Nav from "./nav";

const NavContainer = props => {
  return <Nav {...props} />;
};

const mapStateToProps = state => {
  return {
    navText: state.nav.navText
  };
};
export default connect(mapStateToProps)(NavContainer);
