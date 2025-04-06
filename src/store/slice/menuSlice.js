import { createSlice } from "@reduxjs/toolkit";

const initialState={
    istoggelopen:true
}
const menuSlice=createSlice({
    name:"menu",
    initialState,
    reducers:{
        toggleMenu:(state)=>{
            state.istoggelopen=!state.istoggelopen
        }
    }
  
})
export const {toggleMenu}=menuSlice.actions 
export default menuSlice.reducer