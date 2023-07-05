import Link from "next/link";
import styles from "./TodoMainFooterAction.module.scss";
interface IProps {
  pathname: string;
}

export default function TodoMainFooterNavigationCompleted({
  pathname,
}: IProps) {
  return (
    <>
      {pathname === "/completed" ? (
        <Link
          className={`${styles.button} ${styles.emphasis}`}
          href={"./completed"}
        >
          {" "}
          Completed
        </Link>
      ) : (
        <Link className={styles.button} href={"./completed"}>
          Completed
        </Link>
      )}
    </>
  );
}
