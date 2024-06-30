import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <nav className="bg-black p-2 text-white">
      <div className="mx-auto my-0 flex max-w-[900px] items-center justify-between px-[2rem] py-0">
        <h2>Expense Tracker</h2>
        <div>
          <SignedOut>
            <div className="cursor-pointer rounded border-0 bg-[rebeccapurple] px-[2rem] py-[0.5rem] hover:opacity-[0.9]">
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
