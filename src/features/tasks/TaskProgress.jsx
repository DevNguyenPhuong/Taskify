import { useEffect, useState } from "react";
import { timeLeft } from "../../utils/utils";

function TaskProgress({ created_at, duration }) {
  const timeLeftTask = timeLeft(created_at, duration);
  const time = timeLeftTask?.split(":");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="px-4 pt-4">
      <p className="text-lg font-semibold uppercase">{`${
        timeLeftTask ? timeLeftTask : "time out"
      }`}</p>
      <progress
        max={duration * 60}
        value={timeLeftTask ? time[0] * 3600 + time[1] * 60 + time[2] : 0}
        className="w-full shadow-lg  [&::-webkit-progress-bar]:bg-gray-100 [&::-webkit-progress-value]:bg-green-300 "
      />
    </div>
  );
}

export default TaskProgress;
