import { createSlice } from "@reduxjs/toolkit";

const petSlice = createSlice({
    name:"pets",
    initialState: {
        pets:[],
        numberOfResults:0,
        startIndex:0,
        endIndex:0,
        hasNext:false,
    },
    reducers:{
        addPets: (state,action) => {
            // console.log('payload',action.payload);
            state.pets=[...action.payload.pets];
        },
    
    }
});

export const {addPets} = petSlice.actions;

export default petSlice.reducer;