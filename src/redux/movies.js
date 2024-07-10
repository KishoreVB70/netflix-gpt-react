import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: "movies",
    initialState: {
        nowStreaming: null,
        trailerMovieId: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowStreaming = action.payload;
        },
        addTrailerMovie: (state, action) => {
            state.trailerMovieId = action.payload;
        }
    }
})

export const {addMovies, addTrailerMovie} = movies.actions;
export default movies.reducer;