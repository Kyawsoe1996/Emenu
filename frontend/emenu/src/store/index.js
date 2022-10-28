
import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./business/business-slice";
import cartSlice from "./cart/cart-slice";
import categorySlice from "./category/category-slice";
import itemSlice from "./item/item-slice";




const store = configureStore({
  reducer:{
    business: businessSlice.reducer,
    category:categorySlice.reducer,
    item:itemSlice.reducer,
    cart:cartSlice.reducer,
    
  }
  
  
});
export default store;
