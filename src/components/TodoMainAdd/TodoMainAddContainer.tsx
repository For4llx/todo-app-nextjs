"use client";

import styles from "./TodoMainAdd.module.scss";

interface IProps {
  children: any;
  formRef: any;
  handleCreate: any;
}

export default function TodoMainAddContainer({
  children,
  formRef,
  handleCreate,
}: IProps) {
  return (
    <form className={styles.container} ref={formRef} onSubmit={handleCreate}>
      {children}
    </form>
  );
}
