import ITodo from "@/interfaces/todo";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function TodoFooter({ todos, setTodos }: IProps) {
  async function handleDeleteCompleted(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/todo/completed`, {
      method: "DELETE",
    });
    setTodos((previousTodos: ITodo[]) => {
      return previousTodos.filter((indexTodo) => indexTodo.isCompleted != true);
    });
  }

  async function handleGetCompleted(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/todo/completed");
    const { todos } = await response.json();
    setTodos(todos);
  }

  async function handleGetActive(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/todo/active");
    const { todos } = await response.json();
    setTodos(todos);
  }

  async function handleGetAll(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/todo");
    const { todos } = await response.json();
    setTodos(todos);
  }

  return (
    <footer>
      <p>{todos.length} items left</p>
      <div>
        <button onClick={handleGetAll}>All</button>
        <button onClick={handleGetActive}>Active</button>
        <button onClick={handleGetCompleted}>Completed</button>
      </div>
      <button onClick={handleDeleteCompleted}>Clear Completed</button>
    </footer>
  );
}
