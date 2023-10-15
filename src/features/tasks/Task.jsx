import { HiCheck, HiOutlineTrash } from "react-icons/hi2";
import TaskProgress from "./TaskProgress";
import { useDeleteTask } from "./useDeleteTask";
import { timeLeft } from "../../utils/utils";

function Task({ task }) {
  const { task: taskName, priority, created_at, duration, id } = task;
  const { deleteTask, isDeleting } = useDeleteTask();
  const timeLeftTask = timeLeft(created_at, duration);

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
        <h1 className="text-center font-bold text-indigo-600">{taskName}</h1>
      </div>

      {timeLeftTask ? (
        <TaskProgress
          timeLeftTask={timeLeftTask}
          duration={duration}
          created_at={created_at}
        />
      ) : (
        <p className="text-center font-bold uppercase text-red-500">time out</p>
      )}

      <div className="mt-auto flex justify-center px-[8.4rem] py-4">
        <button
          disabled={isDeleting}
          className="rounded-full p-2 hover:bg-red-200 [&_svg]:text-4xl [&_svg]:text-red-700"
          onClick={() => deleteTask(id)}
        >
          <HiOutlineTrash />
        </button>
      </div>
    </li>
  );
}

export default Task;
