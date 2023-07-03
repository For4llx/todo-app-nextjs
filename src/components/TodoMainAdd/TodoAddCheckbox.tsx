import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  isCompletedRef: any;
}

export default function TodoAddCheckbox({ isCompletedRef }: IProps) {
  return (
    <label className={utilsStyles.customCheckbox}>
      <input ref={isCompletedRef} type="checkbox" />
      <span className={utilsStyles.checkmark}></span>
    </label>
  );
}
