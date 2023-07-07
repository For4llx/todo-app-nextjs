"use client";

import ITodo from "@/interfaces/todo";
import { createContext, useState } from "react";

interface IContext {
  todos: ITodo[];
  setTodos: Function;
}

export const TodoContext = createContext<IContext>({} as IContext);

interface IProps {
  children: React.ReactNode;
}

export default function TodoProvider({ children }: IProps) {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
