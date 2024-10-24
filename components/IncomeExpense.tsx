"use client";

import { Transaction } from "@/app/types";
import { useSearchParam } from "@/hooks";
import { lastMonth } from "@/constants";
import {
  formatTransaction,
  getFilteredTransactions,
  getIncomeExpense
} from "@/utils";

export default function IncomeExpense({
  transactions
}: {
  transactions: Transaction[] | undefined;
}) {
  const selectedFilter = useSearchParam("filter") ?? lastMonth;

  const filteredTransactions = getFilteredTransactions(
    transactions ?? [],
    selectedFilter
  );

  const { income, expense } = getIncomeExpense(filteredTransactions ?? []);

  return (
    <div className="my-3 flex justify-around bg-white p-4 shadow-sm">
      <div className="text-center">
        <h4>Income</h4>
        <p className="money text-plusColor">€ {formatTransaction(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money text-center text-minusColor">
          € {formatTransaction(expense)}
        </p>
      </div>
    </div>
  );
}
