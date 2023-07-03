"use client";

import styles from "./TodoAdd.module.scss";

interface IProps {
  children: any;
  formRef: any;
  handleCreate: any;
}

export default function TodoAddContainer({
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
