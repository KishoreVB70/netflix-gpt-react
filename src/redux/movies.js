import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: "movies",
    initialState: null,
    reducers: {
        addMovies: (state, action) => {
            return action.payload;
        }
    }
})

export const {addMovies} = movies.actions;
export default movies.reducer;