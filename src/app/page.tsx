import TodoCreate from "@/components/TodoCreate";
import TodoItem from "@/components/TodoItem";
import { prisma } from "./db";

async function getTodos() {
  return prisma.todo.findMany();
}

export default async function Todos() {
  const todos = await getTodos();
  return (
    <>
      <header>
        <h1>Todo</h1>
      </header>
      <main>
        <TodoCreate />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
        <div>
          <p>{todos.length} items left</p>
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
