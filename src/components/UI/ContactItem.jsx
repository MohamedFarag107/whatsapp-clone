import React from "react";
import Avatar from "./Avatar";

function ContactItem({ name, avatar, bio, id }) {
  const handleClick = () => {
    console.log(id);
  };
  return (
    <button onClick={handleClick} className="flex gap-4 items-center p-4 w-full transition-all hover:bg-light dark:hover:bg-dark">
      <Avatar name={name} img={avatar} />
      <div className="text-left">
        <h1 className="text-alt-dark dark:text-white font-bold">{name}</h1>
        <p className="text-alt-dark dark:text-white">{bio}</p>
      </div>
    </button>
  );
}

export default ContactItem;
