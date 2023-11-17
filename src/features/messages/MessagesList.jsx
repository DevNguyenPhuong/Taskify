import React, { useEffect, useRef } from "react";
import Loader from "../../ui/Loader";
import CreateMessageForm from "./CreateMessageForm";
import Message from "./Message";
import { useMessages } from "./useMessages";
import { useUser } from "../authentication/useUser";

function MessagesList() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  const { isLoading, messages } = useMessages(user);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (isLoading) return <Loader />;
  return (
    <div className="mt-4 flex h-[70vh] w-full flex-grow flex-col overflow-hidden rounded-lg bg-white text-[1rem] md:h-[70vh] md:w-full md:text-2xl">
      <div className="flex  flex-grow flex-col gap-10 overflow-auto  p-8 md:gap-12 md:overflow-auto md:p-10">
        {messages.map((message) => (
          <Message key={message.id} message={message} userId={user.id} />
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      <CreateMessageForm fullName={fullName} avatar={avatar} userId={user.id} />
    </div>
  );
}

export default MessagesList;
