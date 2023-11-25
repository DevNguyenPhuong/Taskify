import supabase from "../../services/supabase";
import { getMessages } from "../../services/apiMessages";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

export function useMessages(user) {
  const {
    isLoading,
    data: messages,
    error,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const channels = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Messages" },
        async (payload) => {
          // console.log(payload);
          payload.eventType === "DELETE" &&
            toast.error("Someone unsent a message !");

          payload.eventType === "UPDATE" &&
            toast.error("Someone recalled a message !");

          if (payload.eventType === "INSERT")
            if (user.id !== payload.new.user)
              toast.success("New message received !");
            else toast.success("sent");

          queryClient.refetchQueries({ queryKey: "messages" });
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channels);
    };
  }, [user.id, queryClient]);

  return { isLoading, messages, error };
}
