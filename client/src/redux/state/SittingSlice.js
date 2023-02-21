import {createSlice} from "@reduxjs/toolkit";
import Loding from "../../components/layout/Loding";
export const settingsSlice=createSlice({
    name:'settings',
    initialState:{
        loader: null
    },
    reducers:{
        ShowLoader:(state)=>{
            state.loader= <Loding />
        },
        HideLoader:(state)=>{
            state.loader= null
        }
    }
})
export  const {ShowLoader,HideLoader}=settingsSlice.actions;
export default  settingsSlice.reducer;
