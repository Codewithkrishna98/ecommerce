import { createSlice } from "@reduxjs/toolkit"

// step -1 
const initialState = {
  cartItems : []
}
// step-2
const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers:{
    addItemInCart(state,acton){
      state.cartItems.push(acton.payload)
    },
    removeItemfromCart(state,action){
     let copyCartItems = [...state.cartItems]
     copyCartItems = copyCartItems.filter(item=>item.id !== action.payload)
     state.cartItems = copyCartItems;
     return state
    }
   }
})
//  step- 3
export const {addItemInCart,removeItemfromCart}= cartSlice.actions;
export default cartSlice.reducer