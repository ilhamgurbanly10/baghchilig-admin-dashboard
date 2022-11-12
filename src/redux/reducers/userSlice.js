import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState = {
    data: [],
    isLoggedIn: false
};

const table = "users";

export const getUser = createAsyncThunk("getUser" , async (token) => {
    const response = await admin.get(`/${table}?token=${token}&status=true`);
    return response.data;
})

export const loginUser = createAsyncThunk("loginUser" , async (values) => {
    const response = await admin.get(
        `/${table}?password=${values.password}&email=${values.email}&status=true`
    );
    return {data: response.data, remember: values.remember};
})

export const removeUser= createAsyncThunk("removeUser" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const userSlice = createSlice({
    name:'user',
    initialState: initialState,
    reducers: {
        logOutUser: (state, action) => {
            state.data = []; 
            state.isLoggedIn = false; 
            localStorage.removeItem('access_token');
            sessionStorage.removeItem('access_token');
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getUser.fulfilled , (state , action) => {
            if (action.payload.length > 0) {
                state.data = action.payload; 
                state.isLoggedIn = true; 
            }    
        });

        builder.addCase(loginUser.fulfilled , (state , action) => {    
            if (action.payload.data.length > 0) { 
                state.data = action.payload.data; 
                state.isLoggedIn = true; 
                if(action.payload.remember) localStorage.setItem('access_token' , action.payload.data[0].token)
                else sessionStorage.setItem('access_token' ,  action.payload.data[0].token)
            }  
        });

        builder.addCase(removeUser.fulfilled , (state , action) => {
            state.data = []; 
            state.isLoggedIn = false; 
            localStorage.removeItem('access_token');
            sessionStorage.removeItem('access_token');      
        });

    }
})

export const {
    logOutUser,
  } = userSlice.actions;

export default userSlice.reducer;