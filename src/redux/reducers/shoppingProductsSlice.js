import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState = {
    data: [],
    categories: []
};

const table = "shopping-products";

export const getAllShoppingProducts = createAsyncThunk("getAllShoppingProducts" , async () => {
    const response = await admin.get(`/${table}`);
    const categories = await admin.get(`/shopping-categories?status=true`);
    return {data: response.data, categories: categories.data};
})

export const addShoppingProduct = createAsyncThunk("addShoppingProduct" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const editShoppingProduct = createAsyncThunk("editShoppingProduct" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data.data
    })
    return data;
})

export const removeShoppingProduct = createAsyncThunk("removeShoppingProduct" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const switchStatusShoppingProduct = createAsyncThunk("switchStatusShoppingProduct" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})


export const shoppingProductsSlice = createSlice({
    name:'shopping-products',
    initialState: initialState,
    extraReducers: (builder) => {
        
        builder.addCase(getAllShoppingProducts.fulfilled , (state , action) => {
            state.data = action.payload.data; 
            state.categories = action.payload.categories;  
        });

        builder.addCase(addShoppingProduct.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            console.log(nextId + "-" + action.payload);
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(editShoppingProduct.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = {...action.payload.data, id: action.payload.id};      
        });

        builder.addCase(removeShoppingProduct.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;        
        });

        builder.addCase(switchStatusShoppingProduct.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = action.payload; 
        });

        
    }
})

export default shoppingProductsSlice.reducer;