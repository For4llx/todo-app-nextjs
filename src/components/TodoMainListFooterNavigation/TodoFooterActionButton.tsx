import styles from "./TodoFooterAction.module.scss";
interface IProps {
  children: any;
  onClick: any;
  pathname: string;
}

export default function TodoFooterActionButton({
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
