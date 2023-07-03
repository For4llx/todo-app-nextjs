import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function TodoContainer({ children }: IProps) {
  return <div>{children}</div>;
}
