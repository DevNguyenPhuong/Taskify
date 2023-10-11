import { format, parseISO } from "date-fns";

export function formatDate(date) {
  const newDate = parseISO(date);
  const formattedDate = format(newDate, "yyyy-MM-dd HH:mm:ss");

  return formattedDate;
}
