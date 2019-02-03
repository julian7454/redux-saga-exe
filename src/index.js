import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import navReducer from "./reducer";

import App from "./app";

import "./styles.css";

export const reducers = combineReducers({
  nav: navReducer
});

const store = createStore(reducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
