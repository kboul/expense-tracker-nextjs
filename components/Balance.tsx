import { getUserBalance } from "@/app/actions";

import { addCommas } from "@/utils";

export default async function Balance() {
  const { balance } = await getUserBalance();
  return (
    <div className="text-center">
      <h4>Your Balance</h4>
      <h1>€ {addCommas(balance) ?? 0}</h1>
    </div>
  );
}
