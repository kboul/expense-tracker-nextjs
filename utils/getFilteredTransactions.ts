import { lastMonth } from "@/constants";
import { filterArrayByMonth } from "./filterTransactionByMonth";
import { Transaction } from "@/app/types";

export function getFilteredTransactions(
  transactions: Transaction[],
  selectedFilter: string
) {
  return selectedFilter === lastMonth
    ? filterArrayByMonth(transactions ?? [])
    : transactions;
}
