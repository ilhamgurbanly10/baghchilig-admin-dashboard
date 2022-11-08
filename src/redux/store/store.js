import { configureStore } from "@reduxjs/toolkit";
import positionsSlice from "../reducers/positionsSlice";
import teamMembersSlice from "../reducers/teamMembersSlice";


export const store = configureStore({
    reducer: {
        positions: positionsSlice,
        teamMembers: teamMembersSlice,
    },  
});