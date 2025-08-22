import {
    createSlice,
    nanoid
} from "@reduxjs/toolkit";
import { menuData } from '../../menu';

const initialState = {
    carts: [],
    totalprice: 0,
    quantity: 0,
    recent_visited_category: Object.keys(menuData)[0]
    
    // console.log(carts);
}




export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let data = action.payload;
            let isHalf = data?.isHalf || false;
            const existingItemIndex = state.carts.findIndex(
                (item) => (item.product_id === action.payload.id && item.isHalf == isHalf)
            );
            if (existingItemIndex !== -1) {
                state.carts[existingItemIndex].quantity = data?.currentQty || 1;
            } else {
                const newItem = {
                    id: nanoid(),
                    price: isHalf ? parseFloat(data?.half) : parseFloat(data?.full),
                    image: data?.image,
                    quantity:  data?.currentQty || 1,
                    product_id: action.payload.id,
                    title: data?.item,
                    isHalf: isHalf
                };
                state.carts.push(newItem);
            }
        },
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter((item) => {
                return item.id !== action.payload
            })
        },
        updateQuantity: (state, action) => {
            const {
                id,
                type,

            } = action.payload;

            const item = state.carts.find((item) => item.id === id);
            
            if (item) {
                if (type === 'increase') {
                    item.quantity += 1;
                } else if (type === 'decrease' && item.quantity > 0) {
                    item.quantity -= 1;
                }
            }
        },
        updateTotalPrice: (state, action) => {
            state.totalprice = action.payload
        },
        updateRecentVisitedCategory: (state, action) => {
            // console.log(action.payload);
            
            state.recent_visited_category = action.payload
            // console.log(state.recent_visited_category);
            
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    updateTotalPrice,
    updateRecentVisitedCategory
} = cartSlice.actions;
export default cartSlice.reducer;



















//   addToCart: (state, action) => {
//             const existingItemIndex = state.carts.findIndex(
//                 (item) => item.id === action.payload.id
//             );
//             if (existingItemIndex !== -1) {
//                 state.carts[existingItemIndex].quantity += 1;
//             } else {
//                 const newItem = {
//                     ...action.payload,
//                     quantity: 1
//                 };
//                 state.carts.push(newItem);
//             }
//         },