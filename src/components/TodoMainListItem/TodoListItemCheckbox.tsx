import ITodo from "@/interfaces/todo";
import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  isCompletedRef: any;
  todo: ITodo;
  handleUpdate: any;
  isCompleted: boolean;
}

export default function TodoListItemCheckbox({
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
    </label>
  );
}
