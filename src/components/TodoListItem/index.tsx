"use client";

import ITodo from "@/interfaces/todo";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface IProps {
  todo: ITodo;
  setTodos: Function;
}

export default function TodoListItem({ todo, setTodos }: IProps) {
  const TodoRef = useRef<HTMLInputElement>(null);
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
  }

  async function handleDelete(e: React.MouseEvent<HTMLElement>) {
    const id = Number(TodoRef.current?.id);
    const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
      method: "DELETE",
    });
    const { deletedTodo } = await response.json();
    setTodos((previousTodos) => {
      return previousTodos.filter(
        (indexTodo) => indexTodo.id != deletedTodo.id
      );
    });
  }

  return (
    <article ref={TodoRef} id={todo.id.toString()}>
      {todo.isCompleted ? (
        <input
          ref={isCompletedRef}
          id={todo.id.toString()}
          onClick={handleUpdate}
          type="checkbox"
          defaultChecked
        />
      ) : (
        <input
          ref={isCompletedRef}
          id={todo.id.toString()}
          onClick={handleUpdate}
          type="checkbox"
        />
      )}
      <p>{todo.title}</p>
      <button onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </article>
  );
}
