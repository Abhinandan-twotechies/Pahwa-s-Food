import {
    createSlice,
    nanoid
} from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    totalprice: 0
    // console.log(carts);
}




export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = {
                ...action.payload,
                quantity: 1
            }
            // console.log(item);

            state.carts.push(item);
        },
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter((item) => {
                return item.id !== action.payload
            })
        },
        updateQuantity: (state, action) => {
            const {
                id,
                type
            } = action.payload;

            const item = state.carts.find((item) => item.id === id);

            if (item) {
                if (type === 'increase') {
                    item.quantity += 1;
                } else if (type === 'decrease' && item.quantity > 1) {
                    item.quantity -= 1;
                }
            }
        },
        updateTotalPrice: (state, action) => {
            state.totalprice = action.payload
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    updateTotalPrice
} = cartSlice.actions;
export default cartSlice.reducer;