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
  switch (action.type) {
    case "UPDATE_NAV_TEXT":
      store.navText = action.value;
      break;
    default:
  }
  notifyAll();
};
