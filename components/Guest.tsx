import React from "react";
import { SignInButton } from "@clerk/nextjs";

export default function Guest() {
  return (
    <div className="flex flex-col gap-3 text-center">
      <h1>Welcome</h1>
      <p>Please sign in to manage your expenses.</p>
      <div className="purple-btn m-auto w-fit">
        <SignInButton />
      </div>
    </div>
  );
}
