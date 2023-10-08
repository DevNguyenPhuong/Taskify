import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/apiTasks";

export function useTasks(userId) {
  const {
    isLoading,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks({ userId }),
  });

  return { isLoading, tasks, error };
}
