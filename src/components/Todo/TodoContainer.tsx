interface IProps {
  children: React.ReactNode;
  theme: "light" | "dark";
}

export default function TodoContainer({ children, theme }: IProps) {
  return <div data-theme={theme}>{children}</div>;
}
