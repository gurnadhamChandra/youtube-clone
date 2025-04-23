import { createSlice } from "@reduxjs/toolkit"

const initialState={
    searchResults:[],
    searchTerm:'',
    suggestions: [],
}

const searchSlice=createSlice({
    name:"search",
    initialState,
    reducers:{
        setSuggestions:(state,action)=>{
            state.suggestions=action.payload
        },
        setSearchResults:(state,action)=>{
            state.searchResults=action.payload
        },
        setSearchTerm:(state,action)=>{
            state.searchTerm=action.payload
        }
    }
})
export const {setSearchResults,setSearchTerm,setSuggestions}=searchSlice.actions
export default searchSlice.reducer