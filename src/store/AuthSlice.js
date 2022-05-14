import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isSignedIn: false,
    },
    reducers:{
        logIn(state, action){
            state.isSignedIn = true
        },
        logOut(state,action){
            state.isSignedIn = false
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;