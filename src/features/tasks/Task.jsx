import {
  HiOutlineTrash,
  HiOutlineCheck,
  HiOutlinePlay,
  HiOutlineArrowPath,
} from "react-icons/hi2";
import TaskProgress from "./TaskProgress";
import { useDeleteTask } from "./useDeleteTask";
import { timeLeft } from "../../utils/utils";
import { useUpdateTask } from "./useUpdateTask";

function Task({ task }) {
  const {
    task: taskName,
    priority,
    duration,
    id,
    status,
    description,
    start_at,
  } = task;

  const { deleteTask, isDeleting } = useDeleteTask();
  const { updateTask, isUpdating } = useUpdateTask();
  const timeLeftTask = timeLeft(start_at, duration);

  return (
    <li className="flex h-[30rem] w-[30rem] flex-col shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">
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
        <h1 className="text-center font-bold text-indigo-600">{taskName}</h1>
        <div
          className={`${
            status === "not started"
              ? "text-red-400"
              : status === "completed"
              ? "text-green-400"
              : "text-yellow-400"
          } text-md py-3 text-center font-bold uppercase text-neutral-100`}
        >
          {status}
        </div>
      </div>

      <div className="px-8 text-[1.2rem]">{description}</div>

      {status === "not started" ? (
        <p className=" text-center font-bold uppercase text-red-500"></p>
      ) : (
        <TaskProgress
          timeLeftTask={timeLeftTask}
          duration={duration}
          start_at={start_at}
        />
      )}

      <div className="mt-auto flex justify-center gap-7 px-[8.4rem] py-4">
        <button
          disabled={isDeleting}
          className="rounded-full p-2 hover:bg-red-200 [&_svg]:text-4xl [&_svg]:text-red-700"
          onClick={() => deleteTask(id)}
        >
          <HiOutlineTrash />
        </button>

        <button
          disabled={isUpdating}
          className="rounded-full p-2 hover:bg-blue-200 [&_svg]:text-4xl [&_svg]:text-blue-700"
          onClick={() => updateTask(id)}
        >
          {status === "not started" && <HiOutlinePlay />}

          <HiOutlineArrowPath />
        </button>

        <button
          disabled={isDeleting}
          className="rounded-full p-2 hover:bg-green-200 [&_svg]:text-4xl [&_svg]:text-green-700"
        >
          <HiOutlineCheck />
        </button>
      </div>
    </li>
  );
}

export default Task;
