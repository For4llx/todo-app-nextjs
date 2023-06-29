import ITodo from "@/interfaces/todo";

interface IProps {
  todos: ITodo[];
}

export default function TodoFooter({ todos }: IProps) {
  return (
    <footer>
      <p>{todos.length} items left</p>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear Completed</button>
    </footer>
  );
}
