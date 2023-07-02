"use client";

import ITodo from "@/interfaces/todo";
import { useRef, useState } from "react";
import TodoListItemCheckbox from "./TodoListItemCheckbox";
import TodoListItemContainer from "./TodoListItemContainer";
import TodoListItemDelete from "./TodoListItemDelete";
import TodoListItemTitle from "./TodoListItemTitle";

interface IProps {
  todo: ITodo;
  setTodos: Function;
  index: number;
}

export default function TodoListItem({ todo, setTodos, index }: IProps) {
  const TodoRef = useRef<HTMLInputElement>(null);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const isCompletedRef = useRef<HTMLInputElement>(null);
  const draggedItem = useRef<any>(null);
  const draggedOverItem = useRef<any>(null);

  async function handleUpdate(e: React.MouseEvent<HTMLInputElement>) {
    const id = Number(TodoRef.current?.id);
    const isCompleted = isCompletedRef.current?.checked;
    const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isCompleted,
      }),
    });
    setIsCompleted((value) => !value);
    setTodos((previousTodos: ITodo[]) => {
      return previousTodos.map((previousTodo: ITodo) => {
        if (previousTodo.id == todo.id) {
          previousTodo.isCompleted = isCompleted;
          return previousTodo;
        }
        return previousTodo;
      });
    });
  }

  function handleSort() {
    setTodos((previousTodos: ITodo[]) => {
      let todos = [...previousTodos];
      const draggedItemContent = todos.splice(draggedItem.current, 1)[0];

      //switch the position
      todos.splice(draggedOverItem.current, 0, draggedItemContent);
      console.log(todos);

      //reset the position ref
      draggedItem.current = null;
      draggedOverItem.current = null;
      return todos;
    });
  }

  function HandleOnDragEnd(e: React.DragEvent<HTMLElement>, index: number) {
    handleSort();
  }

  async function handleDelete(e: React.MouseEvent<HTMLElement>) {
    const id = Number(TodoRef.current?.id);
    const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
      method: "DELETE",
    });
    const { deletedTodo } = await response.json();
    setTodos((previousTodos: ITodo[]) => {
      return previousTodos.filter(
        (indexTodo) => indexTodo.id != deletedTodo.id
      );
    });
  }

  return (
    <TodoListItemContainer
      todo={todo}
      index={index}
      HandleOnDragEnd={HandleOnDragEnd}
      draggedOverItem={draggedOverItem}
      draggedItem={draggedItem}
      TodoRef={TodoRef}
    >
      <TodoListItemCheckbox
        isCompletedRef={isCompletedRef}
        todo={todo}
        handleUpdate={handleUpdate}
        isCompleted={isCompleted}
      />
      <TodoListItemTitle todo={todo} />
      <TodoListItemDelete handleDelete={handleDelete} />
    </TodoListItemContainer>
  );
}
