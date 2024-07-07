import { currentUser } from "@clerk/nextjs/server";

import { AddTransaction, Guest } from "@/components";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) return <Guest />;
  return (
    <main>
      <h1 className="text-center">Welcome, {user.firstName}</h1>

      <AddTransaction />
    </main>
  );
}
