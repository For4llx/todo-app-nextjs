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
}

export default function TodoListItem({ todo, setTodos }: IProps) {
  const TodoRef = useRef<HTMLInputElement>(null);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const isCompletedRef = useRef<HTMLInputElement>(null);

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
    <TodoListItemContainer todo={todo} TodoRef={TodoRef}>
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
