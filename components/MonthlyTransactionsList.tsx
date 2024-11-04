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

export default async function MonthlyTransactionsList() {
  const { monthlyTotals, error } = await getMonthlyTransactions();

  if (error) return <AppAlert message={error} severity="error" />;
  return (
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
            <TableCell>{getMonthAndYear(month)}</TableCell>
            <TableCell>{formatTransaction(totalAmount)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
