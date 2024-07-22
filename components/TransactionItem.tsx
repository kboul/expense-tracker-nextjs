"use client";

import React from "react";
import { toast } from "react-toastify";

import { Transaction } from "@/app/types";

import { addCommas } from "@/utils";
import { deleteTransaction } from "@/app/actions";

type TransactionItemProps = { transaction: Transaction };

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) return toast.error(error);

    toast.success(message);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // use event.preventDefault() to prevent a click event if a touch event is fired before
    e.preventDefault();
    handleDeleteTransaction(transaction.id);
  };

  return (
    <li
      className={`group relative mx-0 my-[10px] flex justify-between border-r-[5px] border-solid bg-white p-[10px] text-black shadow-sm ${transaction.amount < 0 ? "border-minusColor" : "border-plusColor"} cursor-pointer`}
      // for desktop
      onClick={(e) => handleDeleteTransaction(transaction.id)}
      // for mobile
      onTouchEnd={handleTouchEnd}>
      {transaction.text}
      <span>{`${sign}${addCommas(Math.abs(transaction.amount))}`}</span>
    </li>
  );
}

//  !(e.detail % 2) &&
