
import { useEffect, useState } from "react";

export function useTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const temaTersimpan = localStorage.getItem("rps-tema");
    setDarkMode(temaTersimpan === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "rps-tema",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return {
    darkMode,
    setDarkMode,
  };
}
