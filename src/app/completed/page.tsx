"use client";

import Todo from "@/components/Todo";
import { TodoContext } from "@/provider/TodoProvider";
import { useContext, useEffect } from "react";

export default function Todos() {
  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todo/completed`, {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => setTodos(data.todos));
  }, []);

  return <Todo todos={todos} setTodos={setTodos} />;
}
