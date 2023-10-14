import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import {
  deleteTask as deleteTaskApi,
  deleteTaskAll as deleteTaskAllApi,
} from "../../services/apiTasks";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTask } = useMutation({
    mutationFn: deleteTaskApi,
    onSuccess: () => {
      toast.success("Task deleted");
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteTask };
}

export function useDeleteAllTask() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTaskAll } = useMutation({
    mutationFn: deleteTaskAllApi,
    onSuccess: () => {
      toast.success("Tasks deleted");
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteTaskAll };
}
