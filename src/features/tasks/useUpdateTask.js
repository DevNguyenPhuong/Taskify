import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateTask as updateTaskApi } from "../../services/apiTasks";
import { completed as completedTaskApi } from "../../services/apiTasks";

export function useUpdateTask() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateTask } = useMutation({
    mutationFn: updateTaskApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateTask };
}

export function useCompletedTask() {
  const queryClient = useQueryClient();

  const { isLoading: isCompleting, mutate: completed } = useMutation({
    mutationFn: completedTaskApi,
    onSuccess: () => {
      toast.success("Task completed !");
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCompleting, completed };
}
