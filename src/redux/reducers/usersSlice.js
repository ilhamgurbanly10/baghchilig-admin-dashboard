import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState = {
    data: []
};

const table = "users";

export const getAllUsers = createAsyncThunk("getAllUsers" , async () => {
    const response = await admin.get(`/${table}`);
    return response.data;
})

export const addOtherUser = createAsyncThunk("addOtherUser" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const editOtherUser = createAsyncThunk("editOtherUser" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data.data
    })
    return data;
})

export const removeOtherUser = createAsyncThunk("removeOtherUser" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const switchStatusOtherUser = createAsyncThunk("switchStatusOtherUser" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})

export const usersSlice = createSlice({
    name:'users',
    initialState: initialState,
    extraReducers: (builder) => {
        
        builder.addCase(getAllUsers.fulfilled , (state , action) => {
            state.data = action.payload;  
        });

        builder.addCase(addOtherUser.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(editOtherUser.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = {...action.payload.data, id: action.payload.id};      
        });

        builder.addCase(removeOtherUser.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;        
        });

        builder.addCase(switchStatusOtherUser.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = action.payload; 
        });
    }
})

export default usersSlice.reducer;