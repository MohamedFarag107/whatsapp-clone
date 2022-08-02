import React from "react";
import Toggle from "./UI/Toggle";
import logo from "../assets/imgs/logo.png";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img className="w-16" src={logo} alt="logo" />
        <h1 className="font-bold text-xl text-alt-dark dark:text-light">
          Whatsapp
        </h1>
      </div>
      <Toggle />
    </header>
  );
}

export default Header;
