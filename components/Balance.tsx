import { getUserBalance } from "@/app/actions";
import { formatTransaction } from "@/utils";

export default async function Balance() {
  const { balance } = await getUserBalance();
  return (
    <div className="text-center">
      <h1>€ {formatTransaction(balance) ?? 0}</h1>
    </div>
  );
}
