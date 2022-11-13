import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/userSlice";
import usersSlice from "../reducers/usersSlice";
import positionsSlice from "../reducers/positionsSlice";
import teamMembersSlice from "../reducers/teamMembersSlice";
import solutionsSlice from "../reducers/solutionsSlice";
import projectCategoriesSlice from "../reducers/projectCategoriesSlice";
import projectsSlice from "../reducers/projectsSlice";
import contactSlice from "../reducers/contactSlice";
import mainSliderSlice from "../reducers/mainSliderSlice";
import shoppingCategoriesSlice from "../reducers/shoppingCategoriesSlice";
import shoppingProductsSlice from "../reducers/shoppingProductsSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        users: usersSlice,
        positions: positionsSlice,
        teamMembers: teamMembersSlice,
        solutions: solutionsSlice,
        projectCategories: projectCategoriesSlice,
        projects: projectsSlice,
        contact: contactSlice,
        mainSlider: mainSliderSlice,
        shoppingCategories: shoppingCategoriesSlice,
        shoppingProducts: shoppingProductsSlice
    },  
});