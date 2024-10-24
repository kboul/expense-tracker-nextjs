import { currentMonth } from "@/constants";
import { filterArrayByMonth } from "./filterTransactionByMonth";
import { Transaction } from "@/app/types";

export function getFilteredTransactions(
  transactions: Transaction[],
  selectedMonth: string
) {
  return selectedMonth === currentMonth
    ? filterArrayByMonth(transactions ?? [])
    : transactions;
}
