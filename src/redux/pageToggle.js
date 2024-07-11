import { createSlice } from "@reduxjs/toolkit";

const pageToggle = createSlice({
    name: "pageToggle",
    initialState: {
        isGptPage: false
    },
    reducers: {
        togglePage: (state) => {
            state.isGptPage = !state.isGptPage
        }
    }
})

export const {togglePage} = pageToggle.actions;
export default pageToggle.reducer;