import TodoCreate from "@/components/TodoCreate";
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
              <article>
                <form>
                  {todo.isCompleted ? (
                    <input name="isCompleted" type="checkbox" defaultChecked />
                  ) : (
                    <input name="isCompleted" type="checkbox" />
                  )}
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
