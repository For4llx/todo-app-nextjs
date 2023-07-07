import styles from "./TodoMainFooterAction.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function TodoMainFooterActionContainer({ children }: IProps) {
  return <div className={styles.container}>{children}</div>;
}
