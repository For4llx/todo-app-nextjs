import ITodo from "@/interfaces/todo";
import TodoHeader from "../TodoHeader";
import TodoContainer from "./TodoContainer";
import TodoMain from "../TodoMain";
import TodoFooter from "../TodoFooter";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function Todo({ todos, setTodos }: IProps) {
  return (
    <TodoContainer>
      <TodoHeader />
      <TodoMain todos={todos} setTodos={setTodos} />
      <TodoFooter />
    </TodoContainer>
  );
}
