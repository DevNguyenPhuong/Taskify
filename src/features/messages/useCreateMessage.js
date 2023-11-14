import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { CreateMessage } from "../../services/apiMessages";

export function useCreateMessage() {
  const queryClient = useQueryClient();

  const { mutate: createMessage, isLoading: isCreating } = useMutation({
    mutationFn: CreateMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createMessage };
}
