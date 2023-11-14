import MessagesList from "../features/messages/MessagesList";

function Messages() {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-indigo-600">
        My Chat
      </h1>
      <MessagesList />
    </div>
  );
}

export default Messages;
