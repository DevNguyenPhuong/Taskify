import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { CreateTask } from "../../services/apiTasks";

export function useCreateTask(onCloseModal, reset) {
  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading: isCreating } = useMutation({
    mutationFn: CreateTask,
    onSuccess: () => {
      toast.success("Task successfully created");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      reset();
      onCloseModal();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createTask };
}
