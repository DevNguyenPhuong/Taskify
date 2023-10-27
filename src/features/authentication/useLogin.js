import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { loginWithGit as loginWithGitAPI } from "../../services/apiAuth";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success(`Welcome ${user.user.email.split("@")[0]}`);
      navigate("/tasks", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password is incorrect");
    },
  });
  return { login, isLoading };
}

export function useLoginWithGit() {
  const { mutate: loginWithGit, isLoading: isLoadingGitLogin } = useMutation({
    mutationFn: loginWithGitAPI,
  });
  return { loginWithGit, isLoadingGitLogin };
}
