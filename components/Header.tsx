import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

import AppDrawer from "./ui/AppDrawer";
import AddTransaction from "./AddTransaction";
import { Button } from "./ui/button";

export default async function Header() {
  const user = await currentUser();
  console.log(user);
  return (
    <nav className="bg-black p-2 text-white">
      <div className="my-0 flex items-center justify-between py-0">
        <h2>Expense Tracker</h2>
        <div className="flex gap-4">
          {user && (
            <div className="flex min-[600px]:hidden">
              <AppDrawer title="Add Transaction" Trigger={<Plus />}>
                <AddTransaction />
              </AppDrawer>
            </div>
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
