import ITodo from "@/interfaces/todo";
import styles from "./TodoListItem.module.scss";

interface IProps {
  todo: ITodo;
}

export default function TodoListItemTitle({ todo }: IProps) {
  return <p className={styles.title}>{todo.title}</p>;
}
