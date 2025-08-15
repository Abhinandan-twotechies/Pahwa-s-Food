import { configureStore } from "@reduxjs/toolkit";
import cartReducers from '../features/CART/cartSlice'

export const store = configureStore({
    reducer:cartReducers
})