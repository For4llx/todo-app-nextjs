import ITodo from "@/interfaces/todo";
import TodoMainListFooterSort from "../TodoMainListFooterSort";
import TodoFooterClear from "./TodoFooterClear";
import TodoFooterContainer from "./TodoFooterContainer";
import TodoFooterCount from "./TodoFooterCount";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function TodoMainListFooter({ todos, setTodos }: IProps) {
  async function handleDeleteCompleted(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/todo/completed`, {
      method: "DELETE",
    });
    setTodos((previousTodos: ITodo[]) => {
      return previousTodos.filter((indexTodo) => indexTodo.isCompleted != true);
    });
  }

  return (
    <TodoFooterContainer>
      <TodoFooterCount>{todos.length} items left</TodoFooterCount>
      <TodoMainListFooterSort setTodos={setTodos} />
      <TodoFooterClear handleDeleteCompleted={handleDeleteCompleted} />
    </TodoFooterContainer>
  );
}
