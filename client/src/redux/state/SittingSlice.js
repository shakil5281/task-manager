import {createSlice} from "@reduxjs/toolkit";
export const settingsSlice=createSlice({
    name:'settings',
    initialState:{
        loader: 'loading'
    },
    reducers:{
        ShowLoader:(state)=>{
            state.loader= null
        },
        HideLoader:(state)=>{
            state.loader='loading'
        }
    }
})
export  const {ShowLoader,HideLoader}=settingsSlice.actions;
export default  settingsSlice.reducer;
