import { configureStore } from "@reduxjs/toolkit";
import positionsSlice from "../reducers/positionsSlice";
import teamMembersSlice from "../reducers/teamMembersSlice";
import solutionsSlice from "../reducers/solutionsSlice";
import projectCategoriesSlice from "../reducers/projectCategoriesSlice";
import projectsSlice from "../reducers/projectsSlice";


export const store = configureStore({
    reducer: {
        positions: positionsSlice,
        teamMembers: teamMembersSlice,
        solutions: solutionsSlice,
        projectCategories: projectCategoriesSlice,
        projects: projectsSlice,
    },  
});