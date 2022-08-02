import React, { useState } from "react";
import Chat from "./Chat";
import Contact from "./Contact";
import Search from "./UI/Search";

const Wrapper = () => {
  const [search, setSearch] = useState("");
  const value = (searchValue) => {
    setSearch(searchValue);
  };
  return (
    <div className="grid grid-cols-5 grid-rows-[auto_minmax(0px_,1fr)] gap-4 pt-4">
      <Search value={value} />
      <div className="col-span-4" />
      <Contact search={search} />
      <Chat />
    </div>
  );
};

export default Wrapper;
