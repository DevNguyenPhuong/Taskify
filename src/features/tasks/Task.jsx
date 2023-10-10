import { timeLeft } from "../../utils/utils";

function Task({ task }) {
  const { task: taskName, priority, created_at, duration } = task;
  return (
    <li className="h-[25rem] w-[26rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">
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
      <div className="p-8">
        <h1 className="font-bold">{taskName}</h1>
        <p>{priority}</p>
        <p>{timeLeft(created_at, duration)}</p>
        {/* <progress max={50} value={12} className="block" /> */}
      </div>

      <div className="flex justify-between px-8">
        <button>Delete</button>
        <button>Edit</button>
        <button>Done</button>
      </div>
    </li>
  );
}

export default Task;
