import TodoListItem from "@/components/TodoListItem";
import ITodo from "@/interfaces/todo";
import TodoListContainer from "./TodoListContainer";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function TodoList({ todos, setTodos }: IProps) {
  const todoList = todos.map((todo, index) => (
    <li key={todo.id}>
      <TodoListItem index={index} setTodos={setTodos} todo={todo} />
    </li>
  ));

  return <TodoListContainer>{todoList}</TodoListContainer>;
}
