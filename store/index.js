import { configureStore } from "@reduxjs/toolkit";
import testsSlice from "../features/testsSlice";

export default configureStore({
  reducer: {
   test: testsSlice
  },
});
