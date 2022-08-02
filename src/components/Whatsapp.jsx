import React from "react";
import logo from "../assets/imgs/logo.png";
import Toggle from "./UI/Toggle";

const Whatsapp = () => {
  return (
    <div className="w-full h-full p-20 lg:p-24">
      <div className="w-full h-full bg-light dark:bg-dark rounded-md">
        <header className="flex justify-between items-center p-4">
          <div className="flex gap-2 items-center">
            <img className="w-16" src={logo} alt="logo" />
            <h1 className="font-bold text-xl text-alt-dark dark:text-light">Whatsapp</h1>
          </div>
          <Toggle />
        </header>
      </div>
    </div>
  );
};

export default Whatsapp;
