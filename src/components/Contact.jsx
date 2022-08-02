import React from "react";
import { useSelector } from "react-redux";

import ContactItem from "./UI/ContactItem";

const Contact = () => {
  const { contacts } = useSelector((state) => state.contacts);
  return (
    <div className="rounded-3xl bg-white dark:bg-alt-dark overflow-y-auto">
      <ul className="select-none divide-y overflow-y-auto">
        {contacts.map((user) => (
          <li key={user.id}>
            <ContactItem
              id={user.id}
              avatar={user.avatar}
              name={user.name}
              bio={user.bio}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
