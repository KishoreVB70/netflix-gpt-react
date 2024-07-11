import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import movies from "./movies";
import pageToggle from "./pageToggle";

const store = configureStore({
    reducer: {
        user: user,
        movies: movies,
        pageToggle: pageToggle
    }
})

export default store