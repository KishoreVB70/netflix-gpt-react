import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: {
        uid: null,
        displayName: null,
        email: null,
        emailVerified: false
    },
    reducers: {
        setUser: (state, action) => {
            const {uid, email, emailVerified, displayName} = action.payload;
            state.uid = uid;
            state.email = email;
            state.emailVerified = emailVerified;
            state.displayName = displayName;
        }
    }
})

export const {setUser} = user.actions;
export default user.reducer;
