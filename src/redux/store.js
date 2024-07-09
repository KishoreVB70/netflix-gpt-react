import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import movies from "./movies";

const store = configureStore({
    reducer: {
        user: user,
        movies: movies
    }
})

export default store