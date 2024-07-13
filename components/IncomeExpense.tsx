import React from "react";

export default function IncomeExpense() {
  return (
    <div className="mx-0 my-5 flex justify-evenly bg-white p-5 shadow-sm">
      <div className="text-center">
        <h4>Income</h4>
        <p className="money text-[#2ecc71]">€ 700</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money mx-0 text-[#c0392b]">€ 200</p>
      </div>
    </div>
  );
}
