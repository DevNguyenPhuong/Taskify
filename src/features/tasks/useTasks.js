import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/apiTasks";

export function useTasks() {
  const {
    isLoading,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  return { isLoading, tasks, error };
}
