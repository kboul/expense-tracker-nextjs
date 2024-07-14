import React from "react";
import { getIncomeExpense } from "@/app/actions";

export default async function IncomeExpense() {
  const { expense, income } = await getIncomeExpense();
  return (
    <div className="mx-0 my-5 flex justify-evenly bg-white p-5 shadow-sm">
      <div className="text-center">
        <h4>Income</h4>
        <p className="money text-plusColor">€ {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money mx-0 text-minusColor">€ {expense}</p>
      </div>
    </div>
  );
}
