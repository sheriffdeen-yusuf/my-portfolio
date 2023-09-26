import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Sun className="block h-5 w-5 dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
    </button>
  );
}

export default ThemeToggle;
