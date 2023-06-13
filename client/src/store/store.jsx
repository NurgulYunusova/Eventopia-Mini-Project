import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../components/slicers/dataSlice";
import filterSlice from "../components/slicers/filterSlice";

const store = configureStore({
    reducer: {
        data: dataSlice,
        filter: filterSlice,
    },
});

export default store;
