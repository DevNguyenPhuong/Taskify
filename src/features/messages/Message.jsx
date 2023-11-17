import { formatTimestamp } from "../../utils/utils";
import { HiOutlineTrash } from "react-icons/hi2";
import { useDeleteMessage } from "./useDeleteMessage";

function Message({ message, userId }) {
  const {
    id,
    message: messageInfo,
    user: msgUser,
    avatar,
    fullName,
    created_at,
  } = message;

  const { isLoading, deleteMessage } = useDeleteMessage();

  if (msgUser === userId)
    return (
      <div className="ml-auto mt-2 flex items-center justify-end space-x-3 md:w-[40rem] md:max-w-[50rem]">
        <div className="flex flex-col">
          <p className="ml-auto text-[1.2rem]">{fullName}</p>

          <div className="group relative flex flex-col items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-white">
            <p className="relative z-10">{messageInfo}</p>
            <button
              className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2  transform opacity-0 transition duration-500 group-hover:opacity-100 [&_svg]:h-[3.2rem] [&_svg]:w-[3.2rem] [&_svg]:self-center [&_svg]:rounded-full [&_svg]:bg-red-300 [&_svg]:p-2 [&_svg]:text-center [&_svg]:text-red-500 [&_svg]:hover:bg-red-500 [&_svg]:hover:text-red-50"
              onClick={() => deleteMessage(id)}
              disabled={isLoading}
            >
              <HiOutlineTrash />
            </button>
          </div>

          <span className="ml-auto mt-3 text-sm leading-none text-gray-500">
            {formatTimestamp(created_at)}
          </span>
        </div>
        <img
          src={avatar}
          alt={`${fullName} avatar`}
          className="h-16 w-16 flex-shrink-0 rounded-full bg-gray-300"
        ></img>
      </div>
    );

  return (
    <div className="mt-2 flex  items-center space-x-3 md:w-[40rem] md:max-w-[50rem] ">
      <img
        src={avatar}
        alt={`${fullName} avatar`}
        className="h-16 w-16 flex-shrink-0 rounded-full bg-gray-300"
      ></img>
      <div className="flex flex-col">
        <p className="text-[1.2rem]">{fullName}</p>
        <div className="rounded-lg  bg-indigo-200 px-8 py-3">
          <p>{messageInfo}</p>
        </div>
        <span className="mt-3 text-sm leading-none text-gray-500">
          {formatTimestamp(created_at)}
        </span>
      </div>
    </div>
  );
}

export default Message;
