"use client";

import ITodo from "@/interfaces/todo";
import { FormEvent, useRef } from "react";
import TodoAddCheckbox from "./TodoAddCheckbox";
import TodoAddContainer from "./TodoAddContainer";
import TodoAddField from "./TodoAddField";

interface IProps {
  setTodos: Function;
}

export default function TodoAdd({ setTodos }: IProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const isCompletedRef = useRef<HTMLInputElement>(null);

  async function handleCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = titleRef.current?.value;
    const isCompleted = isCompletedRef.current?.checked;
    const response = await fetch("http://localhost:3000/api/todo", {
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
