import utilsStyles from "@/styles/Utils.module.scss";
import { LegacyRef } from "react";

interface IProps {
  isCompletedRef: LegacyRef<HTMLInputElement>;
}

export default function TodoMainAddCheckbox({ isCompletedRef }: IProps) {
  return (
    <label className={utilsStyles.customCheckbox}>
      <input ref={isCompletedRef} type="checkbox" />
      <span className={utilsStyles.checkmark}></span>
    </label>
  );
}
