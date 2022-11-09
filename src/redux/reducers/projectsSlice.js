import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState = {
    data: [],
    categories: []
};

const table = "projects";

export const getAllProjects = createAsyncThunk("getAllProjects" , async () => {
    const response = await admin.get(`/${table}`);
    const categories = await admin.get(`/project-categories?status=true`);
    return {data: response.data, categories: categories.data};
})

export const addProject = createAsyncThunk("addProject" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const editProject = createAsyncThunk("editProject" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data.data
    })
    return data;
})

export const removeProject = createAsyncThunk("removeProject" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const switchStatusProject = createAsyncThunk("switchStatusProject" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})


export const projectsSlice = createSlice({
    name:'projects',
    initialState: initialState,
    extraReducers: (builder) => {
        
        builder.addCase(getAllProjects.fulfilled , (state , action) => {
            state.data = action.payload.data; 
            state.categories = action.payload.categories;  
        });

        builder.addCase(addProject.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            console.log(nextId + "-" + action.payload);
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(editProject.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = {...action.payload.data, id: action.payload.id};      
        });

        builder.addCase(removeProject.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;        
        });

        builder.addCase(switchStatusProject.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = action.payload; 
        });

        
    }
})

export default projectsSlice.reducer;