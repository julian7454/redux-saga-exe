import { UPDATE_NAV_TEXT } from "./actionTypes";

export const updateNavText = text => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: UPDATE_NAV_TEXT,
        value: text
      });
    });
  };
};
