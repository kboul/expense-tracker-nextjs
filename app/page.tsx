import { Plus } from "lucide-react";

import AppDrawer from "@/components/ui/AppDrawer";
import { Button } from "@/components/ui/button";
import Guest from "@/components/Guest";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";
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

      <TransactionList />

      <AppDrawer
        title="Add Transaction"
        Trigger={
          <div className="absolute bottom-10 right-10">
            <Button size="icon" className="rounded-full">
              <Plus />
            </Button>
          </div>
        }>
        <AddTransaction />
      </AppDrawer>
    </main>
  );
}
