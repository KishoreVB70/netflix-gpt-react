import { createSlice } from "@reduxjs/toolkit";

const pageToggle = createSlice({
    name: "pageToggle",
    initialState: false,
    reducers: {
        togglePage: (state) => {
            state = !state
        }
    }
})

export const {togglePage} = pageToggle.actions;
export default pageToggle.reducer;