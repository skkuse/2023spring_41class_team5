import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer";
import matchReducer from "./match";
const store = configureStore({
  reducer: {
    user: userReducer,
    match: matchReducer,
  },
});

export default store;
