//----------------------------- Root reducer -----------------------
import { combineReducers } from "redux";
import cartReducer from './cartReducer';

export const rootReducer = combineReducers({
    carts: cartReducer
})

export default rootReducer;