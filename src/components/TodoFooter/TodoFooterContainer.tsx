import styles from "./TodoFooter.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function TodoFooterContainer({ children }: IProps) {
  return (
    <footer className={`${styles.container} ${utilsStyles.container}`}>
      {children}
    </footer>
  );
}
