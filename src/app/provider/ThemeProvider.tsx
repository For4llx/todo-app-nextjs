"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext({});

interface IProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: IProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
