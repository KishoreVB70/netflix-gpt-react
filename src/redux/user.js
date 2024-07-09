import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",

    initialState: null,
    
    reducers: {
        setUser: (state, action) => {
            return {
                ...action.payload
            }
        },

        removeUser: () => null
    }
})

export const {setUser} = user.actions;
export default user.reducer;
