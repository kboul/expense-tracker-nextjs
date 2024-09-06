"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { getIncomeExpense as getIncomeExpenseUtil } from "@/utils";

export async function getIncomeExpense(): Promise<{
  income?: number;
  expense?: number;
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) return { error: "User not found" };

  try {
    const transactions = await db.transaction.findMany({
      where: { userId }
    });

    const { income, expense } = getIncomeExpenseUtil(transactions);

    return { income, expense };
  } catch (error) {
    return { error: "Database error" };
  }
}
