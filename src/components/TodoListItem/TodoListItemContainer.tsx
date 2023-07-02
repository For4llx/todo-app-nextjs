import ITodo from "@/interfaces/todo";
import styles from "./TodoListItem.module.scss";
interface IProps {
  todo: ITodo;
  index: number;
  HandleOnDragEnd: any;
  draggedOverItem: any;
  draggedItem: any;
  TodoRef: any;
  children: any;
}

export default function TodoListItemContainer({
  children,
  todo,
  index,
  HandleOnDragEnd,
  draggedOverItem,
  draggedItem,
  TodoRef,
}: IProps) {
  return (
    <article
      className={styles.container}
      ref={TodoRef}
      id={todo.id.toString()}
      draggable
      onDragStart={(e) => (draggedItem.current = index)}
      onDragEnter={(e) => (draggedOverItem.current = index)}
      onDragEnd={(e) => HandleOnDragEnd(e, index)}
    >
      {children}
    </article>
  );
}
