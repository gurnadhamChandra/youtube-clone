import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import youtubeService from "../../services/youtubeService";

const initialState={
    videos:[],
    selectedVideo:null,
    searchTerm:"",
    isLoading:false,
}

export const getAllPopularVideos=createAsyncThunk(
    "youtube/getAllPopularVideos",
    async ()=>{
        const res=await youtubeService.getAllPopularVideos()
        
        return res?.data
    }
)
const youtubeSlice=createSlice({
    name:"youtube",
    initialState,
    reducers:{
        setVideos:(state,action)=>{
            state.videos=action.payload
            state.selectedVideo=action.payload[0]
        },
        
    },
    extraReducers:(builder)=>{
       builder.addCase(getAllPopularVideos.fulfilled,(state,action)=>{
            state.videos=action.payload.items
            state.selectedVideo=action.payload.items[0]
        })
        builder.addCase(getAllPopularVideos.pending,(state,action)=>{
            state.videos=[]
            state.isLoading=true
        })
        builder.addCase(getAllPopularVideos.rejected,(state,action)=>{
            state.videos=[]
            state.isLoading=false
        })
    }

})
export const {setVideos}=youtubeSlice.actions
export default youtubeSlice.reducer