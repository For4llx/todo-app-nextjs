import Todo from "@/components/Todo";
async function getTodos() {
  const response = await fetch(`${process.env.BASE_URL}/api/todo`, {
    cache: "no-cache",
  });
  const { todos } = await response.json();
  return todos;
}

export default async function Todos() {
  const todos = await getTodos();
  return <Todo todos={todos} />;
}
