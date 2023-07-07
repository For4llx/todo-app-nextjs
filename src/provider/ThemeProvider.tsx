"use client";

import { createContext, useState } from "react";

interface IContext {
  theme: "light" | "dark";
  setTheme: Function;
}

export const ThemeContext = createContext<IContext>({} as IContext);

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
