import ITodo from "@/interfaces/todo";
import utilsStyles from "@/styles/Utils.module.scss";
import { LegacyRef, MouseEventHandler } from "react";

interface IProps {
  isCompletedRef: LegacyRef<HTMLInputElement>;
  todo: ITodo;
  handleUpdate: MouseEventHandler<HTMLInputElement>;
  isCompleted: boolean;
}

export default function TodoMainListItemCheckbox({
  todo,
  isCompleted,
  isCompletedRef,
  handleUpdate,
}: IProps) {
  return (
    <label className={utilsStyles.customCheckbox}>
      {isCompleted ? (
        <input
          ref={isCompletedRef}
          id={todo.id.toString()}
          onClick={handleUpdate}
          type="checkbox"
          defaultChecked
        />
      ) : (
        <input
          ref={isCompletedRef}
          id={todo.id.toString()}
          onClick={handleUpdate}
          type="checkbox"
        />
      )}
      <span className={utilsStyles.checkmark}></span>
      <p className={utilsStyles.title}>{todo.title}</p>
    </label>
  );
}
