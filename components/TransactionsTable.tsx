"use client";

import React from "react";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import AppSelect from "./ui/AppSelect";
import AppAlert from "./ui/AppAlert";
import AppDrawer from "./ui/AppDrawer";
import TransactionForm from "./TransactionForm";
import { addCommas, getFilteredTransactions, getFormattedDate } from "@/utils";
import { Transaction } from "@/app/types";
import { useSearchParam } from "@/hooks";
import { months, currentMonth } from "@/constants";

type TransactionsTableProps = { transactions: Transaction[] | undefined };

export default function TransactionsTable({
  transactions
}: TransactionsTableProps) {
  if (!transactions) return null;

  const router = useRouter();

  const selectedMonth = useSearchParam("month") ?? currentMonth;

  const filteredTransactions = getFilteredTransactions(
    transactions ?? [],
    selectedMonth
  );

  let content;
  if (filteredTransactions.length === 0)
    content = (
      <AppAlert
        message="You don't have any transactions yet."
        severity="info"
      />
    );
  else
    content = (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.map((transaction) => {
            const sign = transaction.amount < 0 ? "-" : "+";
            return (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.text}</TableCell>
                <TableCell
                  className={`${transaction.amount < 0 ? "text-minusColor" : "text-plusColor"} text-nowrap`}
                  style={{
                    width: 90
                  }}>{`${sign}${addCommas(Math.abs(transaction.amount))} €`}</TableCell>
                <TableCell>{getFormattedDate(transaction.createdAt)}</TableCell>
                <TableCell>
                  <AppDrawer
                    title="Delete Transaction"
                    Trigger={<Trash className="h-4 w-4 cursor-pointer" />}>
                    <TransactionForm transaction={transaction} />
                  </AppDrawer>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex justify-end">
        <AppSelect
          btnStyle={{ height: "30px" }}
          defaultValue={currentMonth}
          items={months}
          onValueChange={(value) => router.push(`?month=${value}`)}
          placeholder="Filters"
        />
      </div>

      {content}
    </div>
  );
}
