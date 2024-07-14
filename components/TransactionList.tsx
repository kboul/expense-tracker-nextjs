import React from "react";

import { getTransactions } from "@/app/actions";
import TransactionItem from "./TransactionItem";

export default async function TransactionList() {
  const { transactions, error } = await getTransactions();

  if (error)
    return <p className="mt-2 bg-red-500 p-[3px] text-white">{error}</p>;
  return (
    <>
      <h3>History</h3>
      <ul className="mb-[40px] list-none p-0">
        {transactions?.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
