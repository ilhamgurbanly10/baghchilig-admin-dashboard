import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState1 = {
    data: []
};

const table = "project-categories";

export const getAllProjectCategories = createAsyncThunk("getAllProjectCategories" , async () => {
    const response = await admin.get(`/${table}`);
    return response.data;
})

export const addProjectCategory = createAsyncThunk("addProjectCategory" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const editProjectCategory = createAsyncThunk("editProjectCategory" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data.data
    })
    return data;
})

export const removeProjectCategory = createAsyncThunk("removeProjectCategory" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const switchStatusProjectCategory = createAsyncThunk("switchStatusProjectCategory" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})

export const projectCategoriesSlice = createSlice({
    name:'project-categories',
    initialState: initialState1,
    extraReducers: (builder) => {
        
        builder.addCase(getAllProjectCategories.fulfilled , (state , action) => {
            state.data = action.payload;  
        });

        builder.addCase(addProjectCategory.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(editProjectCategory.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = {...action.payload.data, id: action.payload.id};      
        });

        builder.addCase(removeProjectCategory.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;        
        });

        builder.addCase(switchStatusProjectCategory.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = action.payload; 
        });
    }
})

export default projectCategoriesSlice.reducer;