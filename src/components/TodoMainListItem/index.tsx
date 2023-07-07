"use client";

import ITodo from "@/interfaces/todo";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import TodoMainListItemCheckbox from "./TodoMainListItemCheckbox";
import TodoMainListItemContainer from "./TodoMainListItemContainer";
import TodoMainListItemDelete from "./TodoMainListItemDelete";

interface IProps {
  todo: ITodo;
  setTodos: Function;
}

export default function TodoMainListItem({ todo, setTodos }: IProps) {
  const TodoRef = useRef<HTMLInputElement>(null);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const isCompletedRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  async function handleUpdate(e: React.MouseEvent<HTMLInputElement>) {
    const id = Number(TodoRef.current?.id);
    const isCompleted = isCompletedRef.current?.checked;

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isCompleted,
      }),
    });

    router.refresh();
  }

  async function handleDelete(e: React.MouseEvent<HTMLElement>) {
    const id = Number(TodoRef.current?.id);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/todo/${id}`,
      {
        method: "DELETE",
      }
    );
    const { deletedTodo } = await response.json();
    setTodos((previousTodos: ITodo[]) => {
      return previousTodos.filter(
        (indexTodo) => indexTodo.id != deletedTodo.id
      );
    });
    router.refresh();
  }

  return (
    <TodoMainListItemContainer todo={todo} TodoRef={TodoRef}>
      <TodoMainListItemCheckbox
        isCompletedRef={isCompletedRef}
        todo={todo}
        handleUpdate={handleUpdate}
        isCompleted={isCompleted}
      />
      <TodoMainListItemDelete handleDelete={handleDelete} />
    </TodoMainListItemContainer>
  );
}
