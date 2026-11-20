
"use client";

import { useThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useThemeContext();

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className="theme-button"
    >
      {darkMode ? "☀️ Mode Terang" : "🌙 Mode Gelap"}
    </button>
  );
}
