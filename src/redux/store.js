import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer, // Took whole day to identify the bug, It should be CartSlice.reducer!
    },
});