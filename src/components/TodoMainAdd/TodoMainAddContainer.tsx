"use client";

import { FormEventHandler, LegacyRef } from "react";
import styles from "./TodoMainAdd.module.scss";

interface IProps {
  children: React.ReactNode;
  formRef: LegacyRef<HTMLFormElement>;
  handleCreate: FormEventHandler<HTMLFormElement>;
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
