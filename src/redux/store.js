import { configureStore } from "@reduxjs/toolkit";
import  wishlistSlice  from "./slices/wishlistSlice";
import cartSlice  from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        wishlist:wishlistSlice,
        cartList:cartSlice
    }
})

export default store