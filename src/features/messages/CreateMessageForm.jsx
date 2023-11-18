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
    <form
      className="flex flex-col items-center gap-6 md:flex-row  md:gap-0"
      onSubmit={handleSubmit}
    >
      <input
        className="flex h-14 w-full items-center rounded border-2 border-solid border-indigo-400 px-4 text-xl focus:outline-none md:h-20 md:px-8 md:text-2xl "
        type="text"
        placeholder="Type your message…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className=" border-none focus:outline-none [&_svg]:ml-[0rem] [&_svg]:h-[2rem] [&_svg]:w-[2rem] [&_svg]:text-indigo-600 [&_svg]:transition-all [&_svg]:duration-300 [&_svg]:hover:scale-[1.1] [&_svg]:active:scale-95 md:[&_svg]:ml-[-5rem] md:[&_svg]:h-[3.2rem] md:[&_svg]:w-[3.2rem]">
        <HiOutlinePaperAirplane />
      </button>
    </form>
  );
}

export default CreateMessageForm;
