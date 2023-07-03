import TodoHeaderContainer from "./TodoHeaderContainer";
import TodoHeaderTheme from "./TodoHeaderTheme";
import TodoHeaderTitle from "./TodoHeaderTitle";

interface IProps {
  theme: "light" | "dark";
  setTheme: any;
}

export default function TodoHeader({ theme, setTheme }: IProps) {
  return (
    <TodoHeaderContainer>
      <TodoHeaderTitle>Todo</TodoHeaderTitle>
      <TodoHeaderTheme setTheme={setTheme} theme={theme} />
    </TodoHeaderContainer>
  );
}
