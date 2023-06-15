import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  location: {
    address: "",
    name: "",
  },
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
    setLocationAddress: (state, action) => {
      state.location.address = action.payload;
    },
    setLocationName: (state, action) => {
      state.location.name = action.payload;
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
  setLocationAddress,
  setLocationName,
  setStartDate,
  setEndDate,
} = filterSlice.actions;

export default filterSlice.reducer;
