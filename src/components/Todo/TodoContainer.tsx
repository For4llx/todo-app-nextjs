import { ThemeContext } from "@/provider/ThemeProvider";
import { useContext } from "react";
import { Interface } from "readline";

interface IProps {
  children: React.ReactNode;
}

export default function TodoContainer({ children }: IProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="page" data-theme={theme}>
      {children}
    </div>
  );
}
