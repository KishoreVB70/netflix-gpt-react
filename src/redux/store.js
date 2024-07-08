import { configureStore } from "@reduxjs/toolkit";
import bot from "./botSlice";

const store = configureStore({
    reducer: {
        bot: bot
    }
})

export default store