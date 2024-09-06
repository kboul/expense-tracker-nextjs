import { Transaction } from "@/app/types";

export function filterArrayByMonth(array: Transaction[]) {
  // Get the current date and time
  const now: Date = new Date();

  // Get the start of the current month (e.g., 2024-09-01 00:00:00)
  const startOfMonth: Date = new Date(now.getFullYear(), now.getMonth(), 1);

  const filteredArray = array.filter((obj: Transaction) => {
    const date = new Date(obj.createdAt);
    return date >= startOfMonth && date <= now;
  });

  const sortedArray: Transaction[] = filteredArray.sort(
    (a: Transaction, b: Transaction) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return sortedArray;
}
