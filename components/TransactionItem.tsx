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

  return (
    <li
      className={`group relative mx-0 my-[10px] flex justify-between border-r-[5px] border-solid bg-white p-[10px] text-black shadow-sm ${transaction.amount < 0 ? "border-minusColor" : "border-plusColor"}`}>
      {transaction.text}
      <span>{`${sign}${addCommas(Math.abs(transaction.amount))}`}</span>
      <button
        className="absolute left-0 top-[50%] hidden translate-x-[-100%] translate-y-[-50%] transform rounded bg-red-500 px-1 py-0 text-sm leading-5 text-white transition-[0.3s] ease-in-out group-hover:block"
        onClick={() => handleDeleteTransaction(transaction.id)}>
        x
      </button>
    </li>
  );
}
