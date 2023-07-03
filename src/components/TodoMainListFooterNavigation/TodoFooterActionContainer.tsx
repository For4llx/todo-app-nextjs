import styles from "./TodoFooterAction.module.scss";

interface IProps {
  children: any;
}

export default function TodoFooterActionContainer({ children }: IProps) {
  return <div className={styles.container}>{children}</div>;
}
