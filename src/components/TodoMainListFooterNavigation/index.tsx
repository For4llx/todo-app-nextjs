import TodoFooterActionContainer from "./TodoFooterActionContainer";
import { usePathname } from "next/navigation";
import TodoFooterNavigationAll from "./TodoFooterSortAll";
import TodoFooterNavigationActive from "./TodoFooterNavigationActive";
import TodoFooterNavigationCompleted from "./TodoFooterNavigationCompleted";

export default function TodoMainListFooterNavigation() {
  const pathname = usePathname();

  return (
    <TodoFooterActionContainer>
      <TodoFooterNavigationAll pathname={pathname} />
      <TodoFooterNavigationActive pathname={pathname} />
      <TodoFooterNavigationCompleted pathname={pathname} />
    </TodoFooterActionContainer>
  );
}
