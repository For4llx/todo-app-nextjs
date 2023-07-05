import TodoMainFooterActionContainer from "./TodoMainFooterActionContainer";
import { usePathname } from "next/navigation";
import TodoMainFooterNavigationAll from "./TodoMainFooterSortAll";
import TodoMainFooterNavigationActive from "./TodoMainFooterNavigationActive";
import TodoMainFooterNavigationCompleted from "./TodoMainFooterNavigationCompleted";

export default function TodoMainListFooterNavigation() {
  const pathname = usePathname();

  return (
    <TodoMainFooterActionContainer>
      <TodoMainFooterNavigationAll pathname={pathname} />
      <TodoMainFooterNavigationActive pathname={pathname} />
      <TodoMainFooterNavigationCompleted pathname={pathname} />
    </TodoMainFooterActionContainer>
  );
}
