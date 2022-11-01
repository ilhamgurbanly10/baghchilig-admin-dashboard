import { createSlice } from "@reduxjs/toolkit";
import Images from '../../components/files/Images';

const initialState = [
    {   
        id: 1,
        name: "Aysu Gurbanly",
        title: "Great One",
        place: "BAKU, AZE",
        stars: 5,
        img: Images.userImg01,
        comment: "Thank you for your professional advice and approach to the job. You provided an efficient and courteous service throughout."
    },
    {   
        id: 2,
        name: "Aysel Gurbanly",
        title: "Very Good",
        place: "BAKU, AZE",
        stars: 5,
        img: Images.userImg02,
        comment: "Thank you for your professional advice and approach to the job. You provided an efficient and courteous service throughout."
    },
    {   
        id: 3,
        name: "Ayan Gurbanly",
        title: "Excellent Work",
        place: "BAKU, AZE",
        stars: 5,
        img: Images.userImg03,
        comment: "Thank you for your professional advice and approach to the job. You provided an efficient and courteous service throughout."
    },
    {   
        id: 4,
        name: "Sema Gurbanly",
        title: "Experienced Crew",
        place: "BAKU, AZE",
        stars: 5,
        img: Images.userImg04,
        comment: "Thank you for your professional advice and approach to the job. You provided an efficient and courteous service throughout."
    }
];

export const testimonialsSlice = createSlice({
    name:'testimonials',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
          
        },
        remove: (state, action) => {
           
        },
        changeStatus: (state, action) => {
            
        },
        edit: (state, action) => {
            
        },
    }
})


export const {
    add,
    changeStatus,
    remove,
    edit,
  } = testimonialsSlice.actions;
  
  export default testimonialsSlice.reducer;