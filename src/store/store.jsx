import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";
import contactSlice from "./contactSlice";
const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    contacts: contactSlice,
  },
});

export default store;
