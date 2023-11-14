import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteMesage as deleteMessageApi } from "../../services/apiMessages";

export function useDeleteMessage() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteMessage } = useMutation({
    mutationFn: deleteMessageApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteMessage };
}
