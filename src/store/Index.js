import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import themeColorSlice from "./GlobalColorSlice";

const store = configureStore({
    reducer: {auth : authSlice.reducer, themeColors: themeColorSlice.reducer}
})

export default store;