import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  duration: 500,
};

export const loadingSlice = createSlice({
  name: "loadig",
  initialState,
  reducers: {
    initLoading: (state) => {
      state.isLoading = true;
      state.duration = state.duration || initialState.duration;
    },
    finishLoading: (state) => {
      state = initialState;
    },
  },
});

export const  {initLoading, finishLoading} = loadingSlice.actions;

export default loadingSlice.reducer;
