import styles from "./TodoMainListFooter.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function TodoMainFooterContainer({ children }: IProps) {
  return <footer className={styles.container}>{children}</footer>;
}
