"use client";

import ITodo from "@/interfaces/todo";
import { useState } from "react";
import TodoHeader from "../TodoHeader";
import TodoLayout from "../TodoLayout";
import TodoMain from "../TodoMain.tsx";

interface IProps {
  todos: ITodo[];
}

export default function Todo({ todos: todosInital }: IProps) {
  const [todos, setTodos] = useState(todosInital);
  return (
    <TodoLayout>
      <TodoHeader />
      <TodoMain todos={todos} setTodos={setTodos} />
    </TodoLayout>
  );
}
