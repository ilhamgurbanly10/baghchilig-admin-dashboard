import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState = {
    data: []
};

const table = "main-slider";

export const getAllMainSliders = createAsyncThunk("getAllMainSliders" , async () => {
    const response = await admin.get(`/${table}`);
    return response.data;
})

export const addMainSlider = createAsyncThunk("addMainSlider" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const editMainSlider = createAsyncThunk("editMainSlider" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data.data
    })
    return data;
})

export const removeMainSlider = createAsyncThunk("removeMainSlider" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const switchStatusMainSlider = createAsyncThunk("switchStatusMainSlider" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})


export const mainSliderSlice = createSlice({
    name:'main-slider',
    initialState: initialState,
    extraReducers: (builder) => {
        
        builder.addCase(getAllMainSliders.fulfilled , (state , action) => {
            state.data = action.payload; 
        });

        builder.addCase(addMainSlider.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(editMainSlider.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = {...action.payload.data, id: action.payload.id};      
        });

        builder.addCase(removeMainSlider.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;        
        });

        builder.addCase(switchStatusMainSlider.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = action.payload; 
        });

        
    }
})

export default mainSliderSlice.reducer;