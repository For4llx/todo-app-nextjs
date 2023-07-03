import styles from "./TodoHeader.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function TodoHeaderTitle({ children }: IProps) {
  return <h1 className={styles.title}>{children}</h1>;
}
