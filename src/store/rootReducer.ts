import { combineReducers } from "@reduxjs/toolkit";
import { reducer as vesselReducer } from "src/slices/vessel";

const rootReducer = combineReducers({
  vessels: vesselReducer,
});

export default rootReducer;
