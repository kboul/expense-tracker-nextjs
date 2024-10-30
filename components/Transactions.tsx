import React from "react";

import { getTransactions } from "@/app/actions";
import TransactionsTable from "./TransactionsTable";

export default async function TransactionList() {
  const { transactions, error } = await getTransactions();

  if (error) return <p className="bg-red-500 p-[3px] text-white">{error}</p>;

  if (transactions?.length === 0) {
    return (
      <p className="rounded-md bg-gray-200 p-2">
        You don't have any transactions yet.
      </p>
    );
  }

  return (
    <>
      <h3>History</h3>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
