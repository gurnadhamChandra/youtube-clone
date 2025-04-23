import { combineReducers } from "@reduxjs/toolkit";
import youtubeReducer from "./slice/youtubeSlice";
import menutoggelReducer from "./slice/menuSlice";
import commnetsReducer from "./slice/commentSlice";
import searchReducer from "./slice/searchSlice";
const reducer=combineReducers({
    youtube:youtubeReducer,
    menutoggle:menutoggelReducer,
    commentsRed:commnetsReducer,
    searchRe:searchReducer

})
export default reducer