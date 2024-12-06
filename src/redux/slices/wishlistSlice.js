import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice =createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // actions
        // to add items to the state
        addWishlistItems : (state,action)=>{
            state.push(action.payload)
        }
        ,
        // /removeWishlist
        removeWishlistItems : (state,action)=>{
          return state.filter((item)=>item.id != action.payload)
        }
    }
})

export const {addWishlistItems,removeWishlistItems} = wishlistSlice.actions

export default wishlistSlice.reducer