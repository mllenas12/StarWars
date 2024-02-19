import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: null,
        userEmail: null,
    },
    reducers: {
        login: (state, action) => {
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
        },
        logout: (state) => {
            state.userName = null;
            state.userEmail = null;
        },
    },
})

export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer