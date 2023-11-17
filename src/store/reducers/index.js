"use client";
import { combineReducers } from "redux";
import customizationReducer from "./customizationReducer";
import notifierReducer from "./notifier.reducers";
import userReducer from "./user.reducers";

const rootReducer = combineReducers({
  customization: customizationReducer,
  notifier: notifierReducer,
  user: userReducer,
});

export default rootReducer;
