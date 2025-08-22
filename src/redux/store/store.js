import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../reducer/index.js'
import rootSaga from '../saga/index.js'


export const store = configureStore({
    reducer: rootReducer
})