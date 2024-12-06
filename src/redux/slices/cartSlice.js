import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // actions
        // add items to cart
        addcartItems : (state,action)=>{
            state.push(action.payload)
        }
        ,
        // to delete items from cart
        removecartItems : (state,action)=>{
          return state.filter((item)=>item.id != action.payload)
        }
        ,
        // to empty the cart in checkout
        emptyCart : (state) =>{
            return state = []
        }
    }
})

export const { addcartItems , removecartItems , emptyCart }=cartSlice.actions

export default cartSlice.reducer
