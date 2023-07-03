import TodoHeaderContainer from "./TodoHeaderContainer";
import TodoHeaderTheme from "./TodoHeaderTheme";
import TodoHeaderTitle from "./TodoHeaderTitle";

export default function TodoHeader() {
  return (
    <TodoHeaderContainer>
      <TodoHeaderTitle>Todo</TodoHeaderTitle>
      <TodoHeaderTheme />
    </TodoHeaderContainer>
  );
}
