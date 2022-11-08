import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState1 = {
    data: []
};

const table = "positions";

export const getAll = createAsyncThunk("getAll" , async () => {
    const response = await admin.get(`/${table}`);
    return response.data;
})

export const add = createAsyncThunk("add" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const edit = createAsyncThunk("edit" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data.data
    })
    return data;
})

export const remove = createAsyncThunk("remove" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const switchStatus = createAsyncThunk("switchStatus" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})

export const positionsSlice = createSlice({
    name:'positions',
    initialState: initialState1,
    extraReducers: (builder) => {
        
        builder.addCase(getAll.fulfilled , (state , action) => {
            state.data = action.payload;  
        });

        builder.addCase(add.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(edit.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = {...action.payload.data, id: action.payload.id};      
        });

        builder.addCase(remove.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;        
        });

        builder.addCase(switchStatus.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = action.payload; 
        });
    }
})

export default positionsSlice.reducer;