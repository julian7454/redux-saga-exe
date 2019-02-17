import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

import reducer from "./reducers";

import "./styles.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => action("INCREMENT")}
    onDecrement={() => action("DECREMENT")}
    onIncrementAsync={() => action("INCREMENT_ASYNC")}
  />,
  rootElement
);
