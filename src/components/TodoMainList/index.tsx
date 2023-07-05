import TodoMainListItem from "@/components/TodoMainListItem";
import ITodo from "@/interfaces/todo";
import { useRef } from "react";
import TodoMainListFooter from "../TodoMainListFooter";
import TodoListContainer from "./TodoListContainer";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function TodoList({ todos, setTodos }: IProps) {
  const draggedItem = useRef<any>(null);
  const draggedOverItem = useRef<any>(null);

  function handleSort() {
    setTodos((previousTodos: ITodo[]) => {
      let todos = [...previousTodos];
      const draggedItemContent = todos.splice(draggedItem.current, 1)[0];

      //switch the position
      todos.splice(draggedOverItem.current, 0, draggedItemContent);

      //reset the position ref
      draggedItem.current = null;
      draggedOverItem.current = null;
      return todos;
    });
  }

  function HandleOnDragEnd(e: React.DragEvent<HTMLElement>, index: number) {
    handleSort();
  }

  const todoList = todos.map((todo, index) => (
    <li
      key={todo.id}
      draggable
      onDragStart={(e) => (draggedItem.current = index)}
      onDragEnter={(e) => (draggedOverItem.current = index)}
      onDragEnd={(e) => HandleOnDragEnd(e, index)}
    >
      <TodoMainListItem setTodos={setTodos} todo={todo} />
    </li>
  ));

  return (
    <TodoListContainer>
      {todoList}
      <TodoMainListFooter todos={todos} setTodos={setTodos} />
    </TodoListContainer>
  );
}
