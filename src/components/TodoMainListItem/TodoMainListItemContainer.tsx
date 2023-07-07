import ITodo from "@/interfaces/todo";
import { LegacyRef } from "react";
import styles from "./TodoMainListItem.module.scss";
interface IProps {
  todo: ITodo;
  TodoRef: LegacyRef<HTMLElement>;
  children: React.ReactNode;
}

export default function TodoMainListItemContainer({
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
