import ITodo from "@/interfaces/todo";
import styles from "./TodoListItem.module.scss";
interface IProps {
  todo: ITodo;
  TodoRef: any;
  children: React.ReactNode;
}

export default function TodoListItemContainer({
  children,
  todo,
  TodoRef,
}: IProps) {
  return (
    <article className={styles.container} ref={TodoRef} id={todo.id.toString()}>
      {children}
    </article>
  );
}
