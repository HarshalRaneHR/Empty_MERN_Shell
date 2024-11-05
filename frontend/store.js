/** @format */

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./src/service";

/* Creating a store with the rootReducer. */
const store = configureStore({
  reducer: rootReducer,
});

export default store;
