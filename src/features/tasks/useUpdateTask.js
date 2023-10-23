import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateTask as updateTaskApi } from "../../services/apiTasks";

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
