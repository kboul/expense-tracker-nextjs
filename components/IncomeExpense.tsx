import { getIncomeExpense } from "@/app/actions";
import { formatTransaction } from "@/utils";

export default async function IncomeExpense() {
  const { expense, income } = await getIncomeExpense();
  return (
    <div className="mx-0 my-5 flex justify-evenly bg-white p-5 shadow-sm">
      <div className="text-center">
        <h4>Income</h4>
        <p className="money text-plusColor">€ {formatTransaction(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money mx-0 text-minusColor">
          € {formatTransaction(expense)}
        </p>
      </div>
    </div>
  );
}
