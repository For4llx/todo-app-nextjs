import Link from "next/link";
import styles from "./TodoMainFooterAction.module.scss";
interface IProps {
  pathname: string;
}

export default function TodoMainFooterNavigationActive({ pathname }: IProps) {
  return (
    <>
      {pathname === "/active" ? (
        <Link
          className={`${styles.button} ${styles.emphasis}`}
          href={"./active"}
        >
          Active
        </Link>
      ) : (
        <Link className={styles.button} href={"./active"}>
          Active
        </Link>
      )}
    </>
  );
}
