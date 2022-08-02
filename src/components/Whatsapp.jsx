import React from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";

const Whatsapp = () => {
  return (
    <div className="w-full h-full grid grid-rows-[auto_minmax(0px_,1fr)] p-4 bg-light dark:bg-dark rounded-md">
        <Header />
        <Wrapper />
      </div>
  );
};

export default Whatsapp;
