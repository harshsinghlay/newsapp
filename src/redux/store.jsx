import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./articleSlice";

const store = configureStore({
    reducer: articleSlice
})

export default store;