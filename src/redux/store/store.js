import { configureStore } from "@reduxjs/toolkit";
import testimonialsReducer from "../reducers/testimonialsSlice";


export const store = configureStore({
    reducer: {
        testimonials: testimonialsReducer,
    },  
});