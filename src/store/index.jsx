import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
const store=configureStore({
    reducer,
    devTools:true
})
const persister='Free'

export {store, persister};