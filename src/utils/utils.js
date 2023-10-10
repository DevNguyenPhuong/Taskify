import { differenceInSeconds, formatDuration } from "date-fns";

export function timeLeft(created_at, duration) {
  let givenTime = new Date(created_at);
  givenTime.setMinutes(givenTime.getMinutes() + duration);
  let currentTime = new Date();

  let diffInSeconds = differenceInSeconds(currentTime, givenTime);

  let durationx = {
    hours: Math.floor(diffInSeconds / 3600),
    minutes: Math.floor((diffInSeconds % 3600) / 60),
    seconds: diffInSeconds % 60,
  };

  return formatDuration(durationx);
}
