import React from "react";

import { Transaction } from "@/app/types";
import { addCommas } from "@/utils";

export default function TransactionItem({
  transaction
}: {
  transaction: Transaction;
}) {
  return (
    <li
      className={`relative mx-0 my-[10px] flex justify-between border-r-[5px] border-solid bg-white p-[10px] text-black shadow-sm ${transaction.amount < 0 ? "border-minusColor" : "border-plusColor"}`}>
      {transaction.text}
      <span>{addCommas(Math.abs(transaction.amount))}</span>
    </li>
  );
}
