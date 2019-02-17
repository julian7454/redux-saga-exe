import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "./sagas";

import reducer from "./reducers";

import "./styles.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(helloSaga);

const action = type => store.dispatch({ type });

function App() {
  return <div className="App" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
