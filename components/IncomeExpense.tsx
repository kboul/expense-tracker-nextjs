import { getIncomeExpense } from "@/app/actions";
import { formatTransaction } from "@/utils";

export default async function IncomeExpense() {
  const { expense, income } = await getIncomeExpense();
  return (
    <div className="my-3 flex justify-around bg-white p-4 shadow-sm">
      <div className="text-center">
        <h4>Income</h4>
        <p className="money text-plusColor">€ {formatTransaction(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money text-center text-minusColor">
          € {formatTransaction(expense)}
        </p>
      </div>
    </div>
  );
}
