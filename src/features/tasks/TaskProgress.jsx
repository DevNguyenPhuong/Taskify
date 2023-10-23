import { useEffect, useState } from "react";
import { timeLeft } from "../../utils/utils";

function TaskProgress({ timeLeftTask, duration, start_at }) {
  timeLeftTask = timeLeft(start_at, duration);
  const time = timeLeftTask?.split(":");
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  if (!timeLeftTask)
    return (
      <p className=" text-center font-bold uppercase text-red-500">Time out</p>
    );

  return (
    <div className="px-4 pt-4">
      <p className="text-lg font-semibold uppercase">{timeLeftTask}</p>
      <progress
        max={duration * 60}
        value={Number(time[0]) * 3600 + Number(time[1]) * 60 + Number(time[2])}
        className="w-full shadow-lg  [&::-webkit-progress-bar]:bg-gray-100 [&::-webkit-progress-value]:bg-green-300 "
      />
    </div>
  );
}

export default TaskProgress;
