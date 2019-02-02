import { UPDATE_NAV_TEXT } from "./actionTypes";

const callbacks = [];
let store = {
  navText: ""
};

function notifyAll() {
  callbacks.forEach((cb, i) => {
    callbacks[i](store);
  });
}
export const subscribe = cb => {
  callbacks.push(cb);
};

export const dispatch = action => {
  store = reducer(store, action);
  notifyAll();
};

function reducer(store, action) {
  switch (action.type) {
    case UPDATE_NAV_TEXT:
      return {
        ...store,
        navText: action.value
      };
    default:
      return store;
  }
  notifyAll();
}
