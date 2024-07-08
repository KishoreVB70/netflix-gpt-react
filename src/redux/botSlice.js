import { createSlice } from "@reduxjs/toolkit";

const bot = createSlice({
    name: "bot",
    initialState: [],
    reducers: {
        function1: (state, action) => {state.push(action)}
    }
})

export const {function1} = bot.actions;
export default bot.reducer;
