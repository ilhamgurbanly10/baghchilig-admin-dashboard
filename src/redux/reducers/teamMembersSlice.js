import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {admin} from '../../api/admin';

const initialState = {
    data: [],
    positions: []
};

const table = "team-members";

export const getAllMembers = createAsyncThunk("getAllMembers" , async () => {
    const response = await admin.get(`/${table}`);
    const positions = await admin.get(`/positions?status=true`);
    return {data: response.data, positions: positions.data};
})

export const addMember = createAsyncThunk("addMember" , async (data) => {
    await  admin.post(`/${table}` , {
        ...data
    })
    return data;
})

export const editMember = createAsyncThunk("editMember" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data.data
    })
    return data;
})

export const removeMember = createAsyncThunk("removeMember" , async (id) => {
    await  admin.delete(`/${table}/${id}`)
    return id;
})

export const switchStatusMember = createAsyncThunk("switchStatusMember" , async (data) => {
    await  admin.put(`/${table}/${data.id}` , {
        ...data
    })
    return data;
})


export const teamMembersSlice = createSlice({
    name:'team-members',
    initialState: initialState,
    extraReducers: (builder) => {
        
        builder.addCase(getAllMembers.fulfilled , (state , action) => {
            state.data = action.payload.data; 
            state.positions = action.payload.positions;  
        });

        builder.addCase(addMember.fulfilled , (state , action) => {
            const nextId = state.data[state.data.length - 1].id + 1;
            console.log(nextId + "-" + action.payload);
            state.data.push({...action.payload, id: nextId}); 
        });

        builder.addCase(editMember.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = {...action.payload.data, id: action.payload.id};      
        });

        builder.addCase(removeMember.fulfilled , (state , action) => {
            const newData = state.data.filter((data) => data.id !== action.payload);
            state.data = newData;        
        });

        builder.addCase(switchStatusMember.fulfilled , (state , action) => {
            let i = state.data.findIndex((data) => data.id === action.payload.id);
            state.data[i] = action.payload; 
        });

        
    }
})

export default teamMembersSlice.reducer;