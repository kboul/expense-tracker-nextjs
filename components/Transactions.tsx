import React from "react";

import { getTransactions } from "@/app/actions";
import TransactionsTable from "./TransactionsTable";
import AppAlert from "./ui/AppAlert";

export default async function Transactions() {
  const { transactions, error } = await getTransactions();

  if (error) return <p className="bg-red-500 p-[3px] text-white">{error}</p>;

  if (transactions?.length === 0)
    return (
      <AppAlert
        message="You don't have any transactions yet."
        severity="info"
      />
    );

  return (
    <>
      <h3>History</h3>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
