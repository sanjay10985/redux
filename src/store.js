import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./reducers/textReducer";


export default configureStore({
    reducer: {
        text: textReducer
    },
})