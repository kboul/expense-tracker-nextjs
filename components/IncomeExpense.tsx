import { getIncomeExpense } from "@/app/actions";
import React from "react";

export default async function IncomeExpense() {
  const { expense, income } = await getIncomeExpense();
  return (
    <div className="mx-0 my-5 flex justify-evenly bg-white p-5 shadow-sm">
      <div className="text-center">
        <h4>Income</h4>
        <p className="money text-[#2ecc71]">€ {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money mx-0 text-[#c0392b]">€ {expense}</p>
      </div>
    </div>
  );
}
