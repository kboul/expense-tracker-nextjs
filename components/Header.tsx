import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Plus, List } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

import AppDialog from "./ui/AppDialog";
import AppDrawer from "./ui/AppDrawer";
import TransactionForm from "./TransactionForm";
import MonthlyTransactionsList from "./MonthlyTransactionsList";
import { Button } from "./ui/button";

export default async function Header() {
  const user = await currentUser();
  return (
    <nav className="bg-black p-2 text-white">
      <div className="my-0 flex items-center justify-between py-0">
        <h2>Expense Tracker</h2>
        <div className="flex gap-4">
          {user && (
            <>
              <div className="flex min-[600px]:hidden">
                <AppDrawer title="Add Transaction" Trigger={<Plus />}>
                  <TransactionForm />
                </AppDrawer>
              </div>
              <div className="flex items-center">
                <AppDialog
                  title="Total transaction amount per month"
                  Trigger={<List className="cursor-pointer" />}>
                  <MonthlyTransactionsList />
                </AppDialog>
              </div>
            </>
          )}

          <SignedOut>
            <Button>
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
