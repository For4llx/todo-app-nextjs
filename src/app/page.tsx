"use client";

import Todo from "@/components/Todo";
import { TodoContext } from "@/provider/TodoProvider";
import { useContext, useEffect } from "react";

export default function Todos() {
  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    fetch(`./api/todo`, { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => setTodos(data.todos));
  }, []);

  return <Todo todos={todos} setTodos={setTodos} />;
}
