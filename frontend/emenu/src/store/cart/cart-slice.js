import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemsList:[],
        totalQuantity:0,
        showCart:false,
        seat:null,
    },
    reducers:{
        addToCart(state, action) {
            const newItem = action.payload;
            //if item exist increase qty
            const existingItem = state.itemsList.find(
              (item) => item.id === newItem.id
            );
            if (existingItem) {
              existingItem.quantity += 1;
              existingItem.totalPrice += newItem.price;
            } else {
              state.itemsList.push({
                id: newItem.id,
                image: newItem.image,
                quantity: 1,
                price:newItem.price,
                totalPrice: newItem.price,
                name: newItem.name,
                recipes:newItem.recipes
              });
              state.totalQuantity += 1;
            }
          },
          removeFromCart(state, action) {
            const getItem = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === getItem.id);
            if(existingItem.quantity === 1){
              state.itemsList = state.itemsList.filter(item=>item.id !== getItem.id)
              state.totalQuantity -=1
            }else {
              existingItem.quantity -=1
              existingItem.totalPrice -=existingItem.price
            }
      
            
          },
        setShowCart(state,action){
            state.showCart = !state.showCart
        },
        setSeat(state,action){
          console.log(action.payload,"Seat Payload")
          state.seat = action.payload
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice