import { createSlice } from "@reduxjs/toolkit";

const pageToggle = createSlice({
    name: "pageToggle",
    initialState: false,
    reducers: {
        togglePage: (state) => {
            state = true
        }
    }
})

export const {togglePage} = pageToggle.actions;
export default pageToggle.reducer;