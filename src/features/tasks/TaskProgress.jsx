// import { useEffect, useState } from "react";
// import { timeLeft } from "../../utils/utils";

// function TaskProgress({
//   timeLeftTask,
//   duration,
//   start_at,
//   onTrigger,
//   trigger,
// }) {
//   timeLeftTask = timeLeft(start_at, duration);
//   const time = timeLeftTask?.split(":");
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setSeconds((seconds) => seconds + 1);
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   if (!timeLeftTask && trigger < 2) onTrigger((trigger) => trigger + 1);

//   if (timeLeftTask)
//     return (
//       <div className="px-4 pt-4">
//         <p className="text-lg font-semibold uppercase">{timeLeftTask}</p>
//         <progress
//           max={duration * 60}
//           value={
//             Number(time[0]) * 3600 + Number(time[1]) * 60 + Number(time[2])
//           }
//           className="w-full shadow-lg  [&::-webkit-progress-bar]:bg-gray-100 [&::-webkit-progress-value]:bg-green-300 "
//         />
//       </div>
//     );
// }

// export default TaskProgress;

import { useEffect, useState } from "react";
import { timeLeft } from "../../utils/utils";

function TaskProgress({
  timeLeftTask,
  duration,
  start_at,
  onTrigger,
  trigger,
}) {
  timeLeftTask = timeLeft(start_at, duration);
  const time = timeLeftTask?.split(":");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    if (!timeLeftTask && trigger < 2) onTrigger((trigger) => trigger + 1);

    return () => clearInterval(id);
  }, [timeLeftTask, trigger, onTrigger]);

  if (timeLeftTask)
    return (
      <div className="px-4 pt-4">
        <p className="text-lg font-semibold uppercase">{timeLeftTask}</p>
        <progress
          max={duration * 60}
          value={
            Number(time[0]) * 3600 + Number(time[1]) * 60 + Number(time[2])
          }
          className="w-full shadow-lg  [&::-webkit-progress-bar]:bg-gray-100 [&::-webkit-progress-value]:bg-green-300 "
        />
      </div>
    );
}

export default TaskProgress;
