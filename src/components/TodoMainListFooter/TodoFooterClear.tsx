import ITodo from "@/interfaces/todo";
import TodoFooterCount from "./TodoFooterCount";

import styles from "./TodoMainListFooter.module.scss";

interface IProps {
  handleDeleteCompleted: any;
}

export default function TodoFooterClear({ handleDeleteCompleted }: IProps) {
  return (
    <button
      className={`${styles.paragraph} ${styles.button}`}
      onClick={handleDeleteCompleted}
    >
      Clear Completed
    </button>
  );
}
