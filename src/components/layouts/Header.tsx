import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="fixed  left-0 top-0 flex h-8 w-full items-center justify-between bg-stone-300/40  px-14 py-8 backdrop-blur-md dark:bg-stone-700/40 md:py-10">
      <p className="font-semibold tracking-widest text-stone-800  dark:text-stone-200">
        Lekenz 🚀️
      </p>
      <ThemeToggle />
    </header>
  );
}

export default Header;
