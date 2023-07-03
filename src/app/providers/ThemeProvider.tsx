"use client";

import { useState } from "react";
import { createContext } from "react";
interface IProps {
  children: React.ReactNode;
}
const ThemeContext = createContext("light");
export default function ThemeProvider({ children }: IProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return <div data-theme={theme}>{children}</div>;
}
