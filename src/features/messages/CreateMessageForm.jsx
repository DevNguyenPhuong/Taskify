import { useState } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { useCreateMessage } from "./useCreateMessage";

function CreateMessageForm({ fullName, avatar, userId }) {
  const [message, setMessage] = useState("");
  const { createMessage } = useCreateMessage();
  function handleSubmit(e) {
    e.preventDefault();
    if (!message) return;
    createMessage({
      message,
      user: userId,
      avatar,
      fullName,
    });
    setMessage("");
  }
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        className="flex h-20 w-full items-center rounded border-2 border-solid border-indigo-400 px-8 text-2xl focus:outline-none "
        type="text"
        placeholder="Type your message…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="border-none focus:outline-none [&_svg]:ml-[-5rem] [&_svg]:h-[3.2rem] [&_svg]:w-[3.2rem] [&_svg]:text-indigo-600 [&_svg]:transition-all [&_svg]:duration-300 [&_svg]:hover:scale-[1.1] [&_svg]:active:scale-95">
        <HiOutlinePaperAirplane />
      </button>
    </form>
  );
}

export default CreateMessageForm;
