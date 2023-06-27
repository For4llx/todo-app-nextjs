"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

export default function TodoCreate() {
  const titleRef = useRef<HTMLInputElement>(null);
  const isCompletedRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  async function create(e: FormEvent) {
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
    router.refresh();
  }
  return (
    <form onSubmit={create}>
      <input ref={titleRef} type="text" placeholder="Create a new todo..." />
      <input ref={isCompletedRef} type="checkbox" />
    </form>
  );
}
