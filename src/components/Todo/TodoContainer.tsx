import { ThemeContext } from "@/app/provider/ThemeProvider";
import { useContext } from "react";

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
