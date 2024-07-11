import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import movies from "./movies";
import pageToggle from "./pageToggle";
import config from "./config";

const store = configureStore({
    reducer: {
        user: user,
        movies: movies,
        pageToggle: pageToggle,
        config: config
    }
})

export default store