import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: "movies",
    initialState: {
        nowStreaming: null,
        trailerMovieId: null,
        allMoviesList: null,
        gptMovies: null,
        aboutMovieTrailer: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowStreaming = action.payload;
        },
        addTrailerMovie: (state, action) => {
            state.trailerMovieId = action.payload;
        },
        addaboutMovieTrailer: (state, action) => {
            state.aboutMovieTrailer = action.payload;
        },
        addAllMoviesList: (state, action) => {
            state.allMoviesList = action.payload;
        },
        addGptMovies: (state, action) => {
            state.gptMovies = action.payload;
        }
    }
})

export const {addMovies, addTrailerMovie, addAllMoviesList, addGptMovies} = movies.actions;
export default movies.reducer;