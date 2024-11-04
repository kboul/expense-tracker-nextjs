"use client";

import { currentMonth } from "@/constants";
import {
  formatTransaction,
  getBalance,
  getFilteredTransactions
} from "@/utils";
import { useSearchParam } from "@/hooks";
import { Transaction } from "@/app/types";

export default function Balance({
  transactions
}: {
  transactions: Transaction[] | undefined;
}) {
  const selectedMonth = useSearchParam("month") ?? currentMonth;

  const filteredTransactions = getFilteredTransactions(
    transactions ?? [],
    selectedMonth
  );
  const balance = getBalance(filteredTransactions ?? []);

  return (
    <div className="text-center">
      <h1>€ {formatTransaction(balance) ?? 0}</h1>
    </div>
  );
}
