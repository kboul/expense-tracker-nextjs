"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Transaction } from "@prisma/client";
import { Trash } from "lucide-react";

import { addCommas, getFormattedDate } from "@/utils";
import { deleteTransaction } from "@/app/actions";
import { toast } from "react-toastify";

export default function TransactionsTable({
  transactions
}: {
  transactions: Transaction[] | undefined;
}) {
  if (!transactions) return null;

  const onDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) return toast.error(error);

    toast.success(message);
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
                className={`${transaction.amount < 0 ? "text-minusColor" : "text-plusColor"}`}>{`${sign}${addCommas(Math.abs(transaction.amount))}`}</TableCell>
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
