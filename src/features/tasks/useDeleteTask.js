import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteTask as deleteTaskApi } from "../../services/apiTasks";

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
