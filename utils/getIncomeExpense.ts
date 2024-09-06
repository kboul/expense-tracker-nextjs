import { Transaction } from "@/app/types";

export function getIncomeExpense(transactions: Transaction[]) {
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((sum, amount) => sum + amount, 0);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((sum, amount) => sum + amount, 0);

  return { income, expense: Math.abs(expense) };
}
