import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState = {
    data: []
};

const table = "shopping-categories";

export const getAllShoppingCategories = createAsyncThunk("getAllShoppingCategories" , async () => {
    const response = await admin.get(`/${table}`);
    return response.data;
})

export const addShoppingCategory = createAsyncThunk("addShoppingCategory" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const editShoppingCategory = createAsyncThunk("editShoppingCategory" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data.data
    })
    return data;
})

export const removeShoppingCategory = createAsyncThunk("removeShoppingCategory" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const switchStatusShoppingCategory = createAsyncThunk("switchStatusShoppingCategory" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})

export const shoppingCategoriesSlice = createSlice({
    name:'shopping-categories',
    initialState: initialState,
    extraReducers: (builder) => {
        
        builder.addCase(getAllShoppingCategories.fulfilled , (state , action) => {
            state.data = action.payload;  
        });

        builder.addCase(addShoppingCategory.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(editShoppingCategory.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = {...action.payload.data, id: action.payload.id};      
        });

        builder.addCase(removeShoppingCategory.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;        
        });

        builder.addCase(switchStatusShoppingCategory.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = action.payload; 
        });
    }
})

export default shoppingCategoriesSlice.reducer;