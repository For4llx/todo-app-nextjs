"use client";

import ITodo from "@/interfaces/todo";
import { FormEvent, useRef } from "react";
import TodoAddCheckbox from "./TodoMainAddCheckbox";
import TodoAddContainer from "./TodoMainAddContainer";
import TodoAddField from "./TodoMainAddField";

interface IProps {
  setTodos: Function;
}

export default function TodoMainAdd({ setTodos }: IProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const isCompletedRef = useRef<HTMLInputElement>(null);

  async function handleCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = titleRef.current?.value;
    const isCompleted = isCompletedRef.current?.checked;
    const response = await fetch(`./api/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        isCompleted,
      }),
    });
    const { createdTodo } = await response.json();
    setTodos((prev: ITodo[]) => [...prev, createdTodo]);
    formRef.current?.reset();
  }
  return (
    <TodoAddContainer formRef={formRef} handleCreate={handleCreate}>
      <TodoAddCheckbox isCompletedRef={isCompletedRef} />
      <TodoAddField titleRef={titleRef} />
    </TodoAddContainer>
  );
}
