import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogged: false,
        token: ''
    },
    reducers: {
        loginSuccess: (state, action) => {
            state = { isLogged: true, token: action.payload.body.token };
            return state;
        },
        loginFail: (state, action) => {
            state = { isLogged: false, token: null, error: action.payload };
            return state;
        },
        logout: (state) => {
            state = { isLogged: false, token: null };
            return state;
        }
    }
});
export const { loginSuccess, loginFail, logout } = loginSlice.actions;

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        success: false,
        firstName: '',
        lastName: ''
    },
    reducers: {
        profileSuccess: (state, action) => { },
        profileUpdate: (state, action) => { },
        profileFail: (state, action) => { },
        profileReset: (state, action) => { }
    }
});
export const { profileSuccess, profileUpdate, profileFail, profileReset } = profileSlice.actions;

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        profile: profileSlice.reducer
    }
});