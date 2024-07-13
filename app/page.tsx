import { currentUser } from "@clerk/nextjs/server";

import { AddTransaction, Balance, Guest } from "@/components";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) return <Guest />;
  return (
    <main>
      <h2 className="mb-2 text-center">Welcome, {user.firstName}</h2>
      <Balance />

      <AddTransaction />
    </main>
  );
}
