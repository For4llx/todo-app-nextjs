"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

export default function TodoCreate() {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const isCompletedRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  async function handleCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = titleRef.current?.value;
    const isCompleted = isCompletedRef.current?.checked;
    await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        isCompleted,
      }),
    });
    formRef.current?.reset();
    router.refresh();
  }
  return (
    <form ref={formRef} onSubmit={handleCreate}>
      <input ref={titleRef} type="text" placeholder="Create a new todo..." />
      <input ref={isCompletedRef} type="checkbox" />
    </form>
  );
}
