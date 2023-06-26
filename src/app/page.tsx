import { prisma } from "./db";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Todos() {
  const todos = await getTodos();

  return (
    <div>
      {todos.map((todo) => (
        <div>{todo.name}</div>
      ))}
    </div>
  );
}
