import ITodo from "@/interfaces/todo";
import TodoAdd from "../TodoAdd";
import TodoFooter from "../TodoFooterAction";
import TodoList from "../TodoList";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function TodoMain({ setTodos, todos }: IProps) {
  return (
    <main>
      <TodoAdd setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
      <TodoFooter setTodos={setTodos} />
    </main>
  );
}
