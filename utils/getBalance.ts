import { Transaction } from "@/app/types";

export function getBalance(transactions: Transaction[]) {
  return transactions.reduce((sum, transaction) => {
    return sum + transaction.amount;
  }, 0);
}
