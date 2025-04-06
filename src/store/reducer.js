import { combineReducers } from "@reduxjs/toolkit";
import youtubeReducer from "./slice/youtubeSlice";
import menutoggelReducer from "./slice/menuSlice";
import commnetsReducer from "./slice/commentSlice";
const reducer=combineReducers({
    youtube:youtubeReducer,
    menutoggle:menutoggelReducer,
    commentsRed:commnetsReducer

})
export default reducer