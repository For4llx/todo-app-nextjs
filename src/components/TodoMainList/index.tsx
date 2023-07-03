import TodoMainListItem from "@/components/TodoMainListItem";
import ITodo from "@/interfaces/todo";
import TodoMainListFooter from "../TodoMainListFooter";
import TodoListContainer from "./TodoListContainer";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function TodoList({ todos, setTodos }: IProps) {
  const todoList = todos.map((todo, index) => (
    <li key={todo.id}>
      <TodoMainListItem index={index} setTodos={setTodos} todo={todo} />
    </li>
  ));

  return (
    <TodoListContainer>
      {todoList}
      <TodoMainListFooter todos={todos} setTodos={setTodos} />
    </TodoListContainer>
  );
}
