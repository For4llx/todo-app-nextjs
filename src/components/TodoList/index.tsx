import TodoListItem from "@/components/TodoListItem";
import ITodo from "@/interfaces/todo";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function TodoList({ todos, setTodos }: IProps) {
  const todoList = todos.map((todo) => (
    <li key={todo.id}>
      <TodoListItem setTodos={setTodos} todo={todo} />
    </li>
  ));

  return <ul>{todoList}</ul>;
}
