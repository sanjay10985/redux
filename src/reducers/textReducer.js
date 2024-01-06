import {createSlice} from '@reduxjs/toolkit'

export const textReducer = createSlice({
    name: 'text',
    initialState:{
        text: "",
    },
    reducers:{
        setInputText: (state,action) =>{
            state.text = action.payload;
        }
    }
})

export const {setInputText} = textReducer.actions;

export default textReducer.reducer