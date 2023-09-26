import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="fixed left-0 top-0 flex h-8 w-full items-center justify-between bg-stone-700 px-14 px-4 py-6">
      <p className="tracking-widest text-stone-200">Lekenz 🚀️</p>
      <ThemeToggle />
    </header>
  );
}

export default Header;
