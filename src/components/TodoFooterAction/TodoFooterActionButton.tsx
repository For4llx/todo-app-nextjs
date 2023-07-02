import ITodo from "@/interfaces/todo";
import styles from "./TodoFooterAction.module.scss";
interface IProps {
  children: any;
  onClick: any;
}

export default function TodoFooterActionButton({ onClick, children }: IProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
