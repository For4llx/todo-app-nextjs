import TodoFooterActionButton from "./TodoFooterActionButton";
import TodoFooterActionContainer from "./TodoFooterActionContainer";

interface IProps {
  setTodos: Function;
}

export default function TodoMainListFooterSort({ setTodos }: IProps) {
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
    <TodoFooterActionContainer>
      <TodoFooterActionButton onClick={handleGetAll}>
        All
      </TodoFooterActionButton>
      <TodoFooterActionButton onClick={handleGetActive}>
        Active
      </TodoFooterActionButton>
      <TodoFooterActionButton onClick={handleGetCompleted}>
        Completed
      </TodoFooterActionButton>
    </TodoFooterActionContainer>
  );
}
