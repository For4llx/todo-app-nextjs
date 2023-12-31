import styles from "./TodoMainListFooter.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function TodoMainFooterCount({ children }: IProps) {
  return <p className={styles.paragraph}>{children}</p>;
}
