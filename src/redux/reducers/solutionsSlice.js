import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState = {
    data: []
};

const table = "solutions";

export const getAllSolutions = createAsyncThunk("getAllSolutions" , async () => {
    const response = await admin.get(`/${table}`);
    return response.data;
})

export const addSolution = createAsyncThunk("addSolution" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const editSolution = createAsyncThunk("editSolution" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data.data
    })
    return data;
})

export const removeSolution = createAsyncThunk("removeSolution" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const switchStatusSolution = createAsyncThunk("switchStatusSolution" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})

export const solutionsSlice = createSlice({
    name:'solutions',
    initialState: initialState,
    extraReducers: (builder) => {
        
        builder.addCase(getAllSolutions.fulfilled , (state , action) => {
            state.data = action.payload;  
        });

        builder.addCase(addSolution.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(editSolution.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = {...action.payload.data, id: action.payload.id};      
        });

        builder.addCase(removeSolution.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;        
        });

        builder.addCase(switchStatusSolution.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = action.payload; 
        });
    }
})

export default solutionsSlice.reducer;