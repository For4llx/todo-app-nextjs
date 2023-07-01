"use client";

import TodoAdd from "@/components/TodoAdd";
import TodoFooter from "@/components/TodoFooter";
import TodoList from "@/components/TodoList";
import ITodo from "@/interfaces/todo";
import { useState } from "react";

interface IProps {
  todos: ITodo[];
}

export default function Todo({ todos: todosInital }: IProps) {
  const [todos, setTodos] = useState(todosInital);
  return (
    <>
      <TodoAdd setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
      <TodoFooter setTodos={setTodos} todos={todos} />
    </>
  );
}
