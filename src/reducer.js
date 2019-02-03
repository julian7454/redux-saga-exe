import { UPDATE_NAV_TEXT } from "./actionTypes";

const state = {
  navText: "123"
};

function reducer(store = state, action) {
  switch (action.type) {
    case UPDATE_NAV_TEXT:
      return {
        ...store,
        navText: action.value
      };
    default:
      return store;
  }
}

export default reducer;
