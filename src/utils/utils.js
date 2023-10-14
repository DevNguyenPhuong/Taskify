import { differenceInSeconds, parseISO, add } from "date-fns";

export function timeLeft(startDate, duration) {
  const endDate = add(parseISO(startDate), { minutes: duration });

  // Don't know why it missed 20 second when i created new task so i add 20 second magically =))
  const diff = differenceInSeconds(endDate, new Date()) + 20;
  const hours = Math.floor(diff / 60 / 60);
  const minutes = Math.floor((diff / 60) % 60);
  const seconds = diff % 60;

  const formattedDiff = `${hours}:${minutes}:${seconds}`;
  if (hours < 0) return;
  return formattedDiff;
}
