"use client";

import ITodo from "@/interfaces/todo";
import { useContext, useState } from "react";
import TodoHeader from "../TodoHeader";
import TodoContainer from "./TodoContainer";
import TodoMain from "../TodoMain.tsx";
import TodoFooter from "../TodoFooter";
import { ThemeContext } from "@/app/provider/ThemeProvider";

interface IProps {
  todos: ITodo[];
}

export default function Todo({ todos: todosInital }: IProps) {
  const [todos, setTodos] = useState(todosInital);

  return (
    <TodoContainer>
      <TodoHeader />
      <TodoMain todos={todos} setTodos={setTodos} />
      <TodoFooter />
    </TodoContainer>
  );
}
