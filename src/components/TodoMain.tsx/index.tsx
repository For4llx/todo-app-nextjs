import ITodo from "@/interfaces/todo";
import TodoAdd from "../TodoMainAdd";
import TodoMainFooter from "../TodoMainFooter";
import TodoList from "../TodoMainList";
import TodoMainContainer from "./TodoMainContainer";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function TodoMain({ setTodos, todos }: IProps) {
  return (
    <TodoMainContainer>
      <TodoAdd setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
      <TodoMainFooter todos={todos} setTodos={setTodos} />
    </TodoMainContainer>
  );
}
