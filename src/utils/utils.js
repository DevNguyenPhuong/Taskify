import { differenceInMilliseconds, parseISO, add } from "date-fns";

export function timeLeft(startDate, duration) {
  const endDate = add(parseISO(startDate), { minutes: duration });
  const diff = differenceInMilliseconds(endDate, Date.now());

  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  const formattedDiff = `${hours}:${minutes}:${seconds}`;
  if (hours < 0) return;
  return formattedDiff;
}
