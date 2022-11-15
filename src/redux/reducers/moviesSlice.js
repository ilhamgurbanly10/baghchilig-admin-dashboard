import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState = {
    data: [],
    watchedData: [],
};

const table = "movies";

export const getAllMovies = createAsyncThunk("getAllMovies" , async () => {
    const response = await admin.get(`/${table}?watched=false`);
    return response.data;
})

export const getWatchedMovies = createAsyncThunk("getWatchedMovies" , async () => {
    const response = await admin.get(`/${table}?watched=true`);
    return response.data;
})

export const addMovie = createAsyncThunk("addMovie" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const removeMovie = createAsyncThunk("removeMovie" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const addToWatched = createAsyncThunk("addToWatched" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})

export const moviesSlice = createSlice({
    name:'movies',
    initialState: initialState,
    extraReducers: (builder) => {
        
        builder.addCase(getAllMovies.fulfilled , (state , action) => {
            state.data = action.payload;  
        });

        builder.addCase(getWatchedMovies.fulfilled , (state , action) => {
            state.watchedData = action.payload;  
        });

        builder.addCase(addMovie.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(removeMovie.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;    
            const newData2 = state.watchedData.filter((data) => data.id !== action.payload);
            state.watchedData = newData2;    
        });

        builder.addCase(addToWatched.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload.id);
            state.data = newData;
            state.watchedData.push(action.payload); 
        });
    }
})

export default moviesSlice.reducer;