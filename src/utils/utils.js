import { differenceInSeconds, parseISO, add, format } from "date-fns";

export function timeLeft(startDate, duration) {
  const endDate = add(parseISO(startDate), { minutes: duration });

  // Don't know why it missed 20 second when i created new task so i added 20 second magically =))
  const diff = differenceInSeconds(endDate, new Date());
  const hours = Math.floor(diff / 60 / 60);
  const minutes = Math.floor((diff / 60) % 60);
  const seconds = diff % 60;

  const formattedDiff = `${hours}:${minutes}:${seconds}`;
  if (hours < 0) return;
  return formattedDiff;
}

export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return format(date, "dd/MM/yyyy HH:mm");
}
