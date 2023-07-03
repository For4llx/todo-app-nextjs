import Link from "next/link";
import styles from "./TodoFooterAction.module.scss";
interface IProps {
  pathname: string;
}

export default function TodoFooterNavigationAll({ pathname }: IProps) {
  return (
    <>
      {pathname === "/" ? (
        <Link className={`${styles.button} ${styles.emphasis}`} href={"/"}>
          All
        </Link>
      ) : (
        <Link className={styles.button} href={"/"}>
          All
        </Link>
      )}
    </>
  );
}
