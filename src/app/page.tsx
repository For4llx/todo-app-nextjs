"use client";

import ITodo from "@/interfaces/todo";
import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState<ITodo[] | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!todos) return <p>No profile data</p>;

  return (
    <>
      <header>
        <h1>Todo</h1>
      </header>
      <main>
        <form>
          <input name="title" type="text" placeholder="Create a new todo..." />
          <input name="isCompleted" type="checkbox" />
          <button type="submit">sdqsdq</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <article>
                <form>
                  <input name="isCompleted" type="checkbox" />
                  <p>{todo.title}</p>
                </form>
              </article>
            </li>
          ))}
        </ul>
        <div>
          <p>5 items left</p>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <button>Clear Completed</button>
        </div>
      </main>
      <footer>
        <p>Drag and drop to reorder list</p>
      </footer>
    </>
  );
}

/* 
  const createTodo = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e.currentTarget);
    fetch("http://localhost:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "New Todo" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
*/
