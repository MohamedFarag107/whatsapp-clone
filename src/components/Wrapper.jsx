import React from "react";
import Chat from "./Chat";
import Contact from "./Contact";
import Search from "./UI/Search";

const Wrapper = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-[auto_minmax(0px_,1fr)] gap-4 pt-4">
      <Search />
      <div className="col-span-4" />
      <Contact />
      <Chat />
    </div>
  );
};

export default Wrapper;
