import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  const user = await checkUser();
  return (
    <nav className="bg-black p-2 text-white">
      <div className="mx-auto my-0 flex max-w-[900px] items-center justify-between py-0">
        <h2>Expense Tracker</h2>
        <div>
          <SignedOut>
            <div className="purple-btn">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
