import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: "movies",
    initialState: {
        nowStreaming: null,
        trailerMovieId: null,
        allMoviesList: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowStreaming = action.payload;
        },
        addTrailerMovie: (state, action) => {
            state.trailerMovieId = action.payload;
        },
        addAllMoviesList: (state, action) => {
            state.allMoviesList = action.payload;
        }
    }
})

export const {addMovies, addTrailerMovie, addAllMoviesList} = movies.actions;
export default movies.reducer;