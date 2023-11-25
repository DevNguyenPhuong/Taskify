import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateMesage as recallMessage } from "../../services/apiMessages";

export function useUpdateMessage() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateMesage } = useMutation({
    mutationFn: recallMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateMesage };
}
