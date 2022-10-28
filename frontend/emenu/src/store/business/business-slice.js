import { createSlice } from "@reduxjs/toolkit";


const businessSlice = createSlice({
    name:'business',
    initialState:{
        businessList:[],
    },
    reducers:{
        setBusiness(state,action){
                // state.businessList = action.payload
                state.businessList = action.payload
                
               
        
        
        }
    }
})

export const businessActions = businessSlice.actions;
export default businessSlice;