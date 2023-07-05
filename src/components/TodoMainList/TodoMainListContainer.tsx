import styles from "./TodoMainList.module.scss";

interface IProps {
  children: any;
}

export default function TodoMainListContainer({ children }: IProps) {
  return <ul className={styles.container}>{children}</ul>;
}
