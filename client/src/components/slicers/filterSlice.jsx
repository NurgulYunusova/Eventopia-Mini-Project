// filterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  location: "",
  place: "",
  startDate: "",
  endDate: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setPlace: (state, action) => {
      state.place = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const {
  setCategory,
  setLocation,
  setPlace,
  setStartDate,
  setEndDate,
} = filterSlice.actions;

export default filterSlice.reducer;
