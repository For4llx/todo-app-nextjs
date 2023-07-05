"use client";

import styles from "./TodoMainAdd.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";

import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

interface IProps {
  titleRef: any;
}

export default function TodoMainAddField({ titleRef }: IProps) {
  return (
    <input
      className={`${josefinSans.className} ${styles.paragraph} ${utilsStyles.paragraph}`}
      ref={titleRef}
      type="text"
      placeholder="Create a new todo..."
    />
  );
}
