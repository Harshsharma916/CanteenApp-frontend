// import { combineReducers } from "redux";

export const initialState = {
  loginData: [],
  signupData: [],
  collegeList: [],
  canteenData: [],
  selectedCanteen: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return { ...state, loginData: action.data };
    case "signup":
      return { ...state, signupData: action.data };
    case "collegelist":
      return { ...state, collegeList: action.data };
    case "canteenData":
      return { ...state, canteenData: action.data };
    case "selectedCanteen":
      return {...state, selectedCanteen: action.data};
    default:
      return state;
  }
};

export default reducer;
