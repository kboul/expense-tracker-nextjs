import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default async function Header() {
  return (
    <nav className="bg-black p-2 text-white">
      <div className="my-0 flex items-center justify-between py-0">
        <h2>Expense Tracker</h2>
        <>
          <SignedOut>
            <Button>
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </>
      </div>
    </nav>
  );
}
