//Import config
import { configureStore } from "@reduxjs/toolkit";
//Import slices
import loadingSlice from "./features/loadingSlice";

export const store = () => {
  return configureStore({
    reducer: {
        loadingSlice
    },
  });
};
