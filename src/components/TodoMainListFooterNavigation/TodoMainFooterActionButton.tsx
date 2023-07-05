import styles from "./TodoMainFooterAction.module.scss";
interface IProps {
  children: any;
  onClick: any;
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
