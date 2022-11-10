import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState = {
    data: []
};

const table = "contact";

export const getAllContacts = createAsyncThunk("getAllContacts" , async () => {
    const response = await admin.get(`/${table}`);
    return response.data;
})

export const addContact = createAsyncThunk("addContact" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const editContact = createAsyncThunk("editContact" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data.data
    })
    return data;
})

export const removeContact = createAsyncThunk("removeContact" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const switchStatusContact = createAsyncThunk("switchStatusContact" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})

export const contactSlice = createSlice({
    name:'contact',
    initialState: initialState,
    extraReducers: (builder) => {
        
        builder.addCase(getAllContacts.fulfilled , (state , action) => {
            state.data = action.payload;  
        });

        builder.addCase(addContact.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(editContact.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = {...action.payload.data, id: action.payload.id};      
        });

        builder.addCase(removeContact.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;        
        });

        builder.addCase(switchStatusContact.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = action.payload; 
        });
    }
})

export default contactSlice.reducer;