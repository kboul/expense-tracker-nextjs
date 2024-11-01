import { Plus } from "lucide-react";

import AppDrawer from "@/components/ui/AppDrawer";
import Guest from "@/components/Guest";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import Transactions from "@/components/Transactions";
import TransactionForm from "@/components/TransactionForm";
import { currentUser } from "@clerk/nextjs/server";
import { getTransactions } from "./actions";

export default async function HomePage() {
  const user = await currentUser();
  const { transactions } = await getTransactions();

  if (!user) return <Guest />;
  return (
    <main className="flex flex-col">
      <h2 className="text-center">Welcome, {user.firstName}</h2>
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />

      <Transactions />

      <div className="max-[600px]:hidden">
        <AppDrawer
          title="Add Transaction"
          Trigger={
            <div className="absolute bottom-5 right-5">
              <div className="cirlce-btn">
                <Plus />
              </div>
            </div>
          }>
          <TransactionForm />
        </AppDrawer>
      </div>
    </main>
  );
}
