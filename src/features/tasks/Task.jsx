import { timeLeft } from "../../utils/utils";
import { HiCheck, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";

function Task({ task }) {
  const { task: taskName, priority, created_at, duration } = task;
  return (
    <li className="flex h-[25rem] w-[26rem] flex-col shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">
      <h3
        className={`${
          priority === "high"
            ? "bg-red-400"
            : priority === "medium"
            ? "bg-blue-400"
            : "bg-yellow-400"
        } py-3 text-center font-bold uppercase text-neutral-100`}
      >
        {priority}
      </h3>
      <div className="h-[9rem] p-8">
        <h1 className="text-center font-bold">{taskName}</h1>
      </div>

      <div className="px-4 pt-4">
        <p className="text-lg font-semibold uppercase">{`${
          timeLeft(created_at, duration)
            ? timeLeft(created_at, duration)
            : "time out"
        }`}</p>
        <progress
          max={50}
          value={20}
          className="w-full shadow-lg  [&::-webkit-progress-bar]:bg-gray-100 [&::-webkit-progress-value]:bg-green-300 "
        />
      </div>

      <div className="mt-auto flex justify-between px-[6.4rem] py-4">
        <button className="rounded-full p-2 hover:bg-red-200 [&_svg]:text-4xl [&_svg]:text-red-700">
          <HiOutlineTrash />
        </button>
        <button className="rounded-full p-2 hover:bg-green-200 [&_svg]:text-4xl [&_svg]:text-indigo-700">
          <HiOutlinePencil />
        </button>
        <button className="rounded-full p-2 hover:bg-green-200 [&_svg]:text-4xl [&_svg]:text-green-700">
          <HiCheck />
        </button>
      </div>
    </li>
  );
}

export default Task;
