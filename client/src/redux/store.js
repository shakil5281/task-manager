import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "./state/SittingSlice";
import { ShowLoader, HideLoader } from "./state/SittingSlice";


const store = configureStore({
    reducer: {settings:settingsReducer},
  })

  export {
    store,
    ShowLoader,
    HideLoader
}
