import styles from "./TodoMain.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  children: any;
}

export default function TodoMainContainer({ children }: IProps) {
  return (
    <main className={`${styles.container} ${utilsStyles.container}`}>
      {children}
    </main>
  );
}
