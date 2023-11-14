import supabase from "../../services/supabase";
import { getTasks } from "../../services/apiTasks";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function useTasks(userId) {
  const {
    isLoading,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks({ userId }),
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const channels = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Task" },
        async (payload) => {
          queryClient.refetchQueries({ queryKey: "tasks" });
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channels);
    };
  }, [userId, queryClient]);

  return { isLoading, tasks, error };
}
