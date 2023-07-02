import styles from "./TodoHeader.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function TodoHeaderContainer({ children }: IProps) {
  return (
    <header className={`${styles.container} ${utilsStyles.container}`}>
      {children}
    </header>
  );
}
