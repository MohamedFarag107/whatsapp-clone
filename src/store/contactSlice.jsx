import { createSlice } from "@reduxjs/toolkit";
import avatar1 from "../assets/imgs/contact-images/Layer 1.png";
import avatar2 from "../assets/imgs/contact-images/Layer 2.png";
import avatar3 from "../assets/imgs/contact-images/Layer 3.png";
import avatar4 from "../assets/imgs/contact-images/Layer 4.png";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [
    {
      name: "Admin",
      avatar: avatar1,
      bio: "React Group",
      id: 1,
      color: "#97b3dd",
    },
    {
      name: "Olivia William ",
      avatar: avatar2,
      bio: "UI & UX",
      id: 2,
      color: "#6bb6d7",
    },
    {
      name: "Mohamed Farag",
      avatar: avatar3,
      bio: "React Developer",
      id: 3,
      color: "#43507f",
    },
    {
      name: "Emma James ",
      avatar: avatar4,
      bio: "Tester",
      id: 4,
      color: "#6b76aa",
    },
  ],
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    updateContacts(state) {
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
  },
});

export const contactsActions = contactsSlice.actions;

export default contactsSlice.reducer;
