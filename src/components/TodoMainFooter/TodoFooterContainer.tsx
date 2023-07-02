import styles from "./TodoFooter.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function TodoFooterContainer({ children }: IProps) {
  return <footer className={styles.container}>{children}</footer>;
}
