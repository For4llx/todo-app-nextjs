interface IProps {
  children: any;
}

export default function TodoListContainer({ children }: IProps) {
  return <ul>{children}</ul>;
}
