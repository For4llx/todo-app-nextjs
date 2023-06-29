import ITodo from "@/interfaces/todo";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function TodoFooter({ todos, setTodos }: IProps) {
  async function handleDeleteIsCompleted(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/todo`, {
      method: "DELETE",
    });
    setTodos((previousTodos: ITodo[]) => {
      return previousTodos.filter((indexTodo) => indexTodo.isCompleted != true);
    });
  }

  return (
    <footer>
      <p>{todos.length} items left</p>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button onClick={handleDeleteIsCompleted}>Clear Completed</button>
    </footer>
  );
}
