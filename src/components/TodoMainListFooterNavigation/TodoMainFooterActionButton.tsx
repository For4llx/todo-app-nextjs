import { MouseEventHandler } from "react";
import styles from "./TodoMainFooterAction.module.scss";
interface IProps {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  pathname: string;
}

export default function TodoMainFooterActionButton({
  pathname,
  onClick,
  children,
}: IProps) {
  return (
    <>
      {pathname === "/active" ? (
        <button
          className={`${styles.button} ${styles.emphasis}`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button className={styles.button} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
}
