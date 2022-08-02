import React from "react";
import { useSelector } from "react-redux";

import ContactItem from "./UI/ContactItem";

function searchForUser(contacts, search) {
  return contacts
    .filter((user) =>
      user.name
        .toLowerCase()
        .includes(search)
    )
    .map((user) => (
      <li key={user.id}>
        <ContactItem
          id={user.id}
          avatar={user.avatar}
          name={user.name}
          bio={user.bio}
        />
      </li>
    ));
}
function transformUsers(contacts) {
  return contacts.map((user) => (
    <li key={user.id}>
      <ContactItem
        id={user.id}
        avatar={user.avatar}
        name={user.name}
        bio={user.bio}
      />
    </li>
  ));
}

const Contact = ({ search }) => {
  const { contacts } = useSelector((state) => state.contacts);
  return (
    <div className="rounded-3xl bg-white dark:bg-alt-dark overflow-y-auto">
      <ul className="select-none divide-y overflow-y-auto">
        {search.trim().length > 0
          ? searchForUser(contacts, search)
          : transformUsers(contacts)}
      </ul>
    </div>
  );
};

export default Contact;
