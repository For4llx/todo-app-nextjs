import styles from "./TodoFooter.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function TodoFooterParagraph({ children }: IProps) {
  return <p className={styles.paragraph}>{children}</p>;
}
