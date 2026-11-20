
"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: ThemeContextType;
}) {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext harus digunakan di dalam ThemeProvider."
    );
  }

  return context;
}
