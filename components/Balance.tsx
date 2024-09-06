"use client";

import { lastMonth } from "@/constants";
import {
  formatTransaction,
  getBalance,
  getFilteredTransactions
} from "@/utils";
import { Transaction } from "@prisma/client";
import { useSearchParam } from "@/hooks";

export default function Balance({
  transactions
}: {
  transactions: Transaction[] | undefined;
}) {
  const selectedFilter = useSearchParam("filter") ?? lastMonth;

  const filteredTransactions = getFilteredTransactions(
    transactions ?? [],
    selectedFilter
  );
  const balance = getBalance(filteredTransactions ?? []);

  return (
    <div className="text-center">
      <h1>€ {formatTransaction(balance) ?? 0}</h1>
    </div>
  );
}
