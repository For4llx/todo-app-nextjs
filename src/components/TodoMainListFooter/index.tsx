import ITodo from "@/interfaces/todo";
import TodoMainListFooterNavigation from "../TodoMainListFooterNavigation";
import TodoMainFooterClear from "./TodoMainFooterClear";
import TodoMainFooterContainer from "./TodoMainFooterContainer";
import TodoMainFooterCount from "./TodoMainFooterCount";

interface IProps {
  todos: ITodo[];
  setTodos: Function;
}

export default function TodoMainListFooter({ todos, setTodos }: IProps) {
  async function handleDeleteCompleted(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const response = await fetch(`./api/todo/completed`, {
      method: "DELETE",
    });
    setTodos((previousTodos: ITodo[]) => {
      return previousTodos.filter((indexTodo) => indexTodo.isCompleted != true);
    });
  }

  return (
    <TodoMainFooterContainer>
      <TodoMainFooterCount>{todos.length} items left</TodoMainFooterCount>
      <TodoMainListFooterNavigation />
      <TodoMainFooterClear handleDeleteCompleted={handleDeleteCompleted} />
    </TodoMainFooterContainer>
  );
}
