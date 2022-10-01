import * as Actions from "../themeAction";
import { lightTheme } from "../../theme";

const initialState = {
  theme: lightTheme,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return Object.assign({}, { theme: action.payload });
    default:
      return state;
  }
};
