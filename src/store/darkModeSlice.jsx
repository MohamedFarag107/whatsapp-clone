import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    darkMode: false
}
const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode(state){
            state.darkMode = !state.darkMode
        }
    }
})

export const darkModeActions = darkModeSlice.actions

export default darkModeSlice.reducer