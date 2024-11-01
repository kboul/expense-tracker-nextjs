"use client";

import { Info } from "lucide-react";

export default function NoTransactionsAlert() {
  return (
    <p className="flex gap-1 rounded-md bg-[#e5f6fd] p-2 text-[#014361]">
      <Info />
      You don't have any transactions yet.
    </p>
  );
}
