import { Plus } from "lucide-react";

import AppDrawer from "@/components/ui/AppDrawer";
import Guest from "@/components/Guest";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import Transactions from "@/components/Transactions";
import AddTransaction from "@/components/AddTransaction";
import { currentUser } from "@clerk/nextjs/server";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) return <Guest />;
  return (
    <main>
      <h2 className="mb-2 text-center">Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />

      <Transactions />

      <AppDrawer
        title="Add Transaction"
        Trigger={
          <div className="absolute bottom-5 right-5">
            <div className="flex h-11 w-11 shrink-0 grow-0 items-center justify-center rounded-full bg-primary text-white">
              <Plus />
            </div>
          </div>
        }>
        <AddTransaction />
      </AppDrawer>
    </main>
  );
}
