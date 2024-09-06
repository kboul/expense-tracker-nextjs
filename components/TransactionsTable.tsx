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
import { addCommas, getFilteredTransactions, getFormattedDate } from "@/utils";
import { deleteTransaction } from "@/app/actions";
import { useToast } from "./ui/use-toast";
import { Transaction } from "@/app/types";
import { useSearchParam } from "@/hooks";
import { items, lastMonth } from "@/constants";

type TransactionsTableProps = { transactions: Transaction[] | undefined };

export default function TransactionsTable({
  transactions
}: TransactionsTableProps) {
  if (!transactions) return null;

  const { toast } = useToast();
  const router = useRouter();

  const selectedFilter = useSearchParam("filter") ?? lastMonth;

  const onDeleteTransaction = async (transactionId: string) => {
    const selectedTransaction = transactions.find(
      ({ id }) => id === transactionId
    );
    const confirmed = window.confirm(
      `Are you sure you want to delete the ${selectedTransaction?.text} transaction?`
    );
    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    toast({
      variant: error ? "destructive" : "success",
      description: error ?? message
    });
  };

  const filteredTransactions = getFilteredTransactions(
    transactions ?? [],
    selectedFilter
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <AppSelect
          btnStyle={{ height: "30px" }}
          defaultValue={lastMonth}
          items={items}
          onValueChange={(value) => router.push(`?filter=${value}`)}
          placeholder="Filters"
        />
      </div>

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
                  <Trash
                    className="h-4 w-4 cursor-pointer"
                    onClick={() => onDeleteTransaction(transaction.id)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
