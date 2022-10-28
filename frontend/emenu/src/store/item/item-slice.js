import { createSlice } from "@reduxjs/toolkit";


const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    
  },
  reducers: {

    setGettingItemsToQuantity1(state,action){
        //on initial Setting Items quantity to 1
            state.items.map(item=> item.quantity = 1)

    },

    setItemData(state,action){
        state.items = action.payload
       

    },

    
    
  },
});




export const itemActions = itemSlice.actions;
export default itemSlice;
