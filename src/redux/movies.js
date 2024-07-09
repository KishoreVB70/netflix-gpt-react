import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
        addMovies: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {addMovies} = movies.actions;
export default movies.reducer;