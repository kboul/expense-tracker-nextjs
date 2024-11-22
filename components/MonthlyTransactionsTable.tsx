import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "./ui/table";
import AppAlert from "./ui/AppAlert";
import { getMonthlyTransactions } from "@/app/actions/getMonthlyTransactions";
import { formatTransaction, getMonthAndYear } from "@/utils";

export default async function MonthlyTransactionsTable() {
  const { monthlyTotals, error } = await getMonthlyTransactions();

  if (error) return <AppAlert message={error} severity="error" />;
  return (
    <div className="mt-2 flex w-full flex-col justify-center min-[600px]:w-1/3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Month</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {monthlyTotals?.map(({ month, totalAmount }) => (
            <TableRow key={month}>
              <TableCell className="text-left">
                {getMonthAndYear(month)}
              </TableCell>
              <TableCell className="text-left">
                {formatTransaction(totalAmount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
