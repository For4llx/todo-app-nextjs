import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  children: any;
}

export default function TodoMainContainer({ children }: IProps) {
  return <main className={utilsStyles.container}>{children}</main>;
}
