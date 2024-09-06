"use client";

import React from "react";
import { Transaction } from "@prisma/client";
import { Trash } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { addCommas, getFormattedDate } from "@/utils";
import { deleteTransaction } from "@/app/actions";
import { useToast } from "./ui/use-toast";

type TransactionsTableProps = { transactions: Transaction[] | undefined };

export default function TransactionsTable({
  transactions
}: TransactionsTableProps) {
  if (!transactions) return null;

  const { toast } = useToast();

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

  return (
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
        {transactions.map((transaction) => {
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
  );
}
