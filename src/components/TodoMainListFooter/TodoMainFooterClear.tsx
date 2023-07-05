import styles from "./TodoMainListFooter.module.scss";

interface IProps {
  handleDeleteCompleted: any;
}

export default function TodoMainFooterClear({ handleDeleteCompleted }: IProps) {
  return (
    <button
      className={`${styles.paragraph} ${styles.button}`}
      onClick={handleDeleteCompleted}
    >
      Clear Completed
    </button>
  );
}
