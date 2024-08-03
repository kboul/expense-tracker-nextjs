import React from "react";
import { SignInButton } from "@clerk/nextjs";

import { Button } from "./ui/button";

export default function Guest() {
  return (
    <div className="flex flex-col gap-3 text-center">
      <h1>Welcome</h1>
      <p>Please sign in to manage your expenses.</p>
      <Button className="m-auto w-fit">
        <SignInButton />
      </Button>
    </div>
  );
}
