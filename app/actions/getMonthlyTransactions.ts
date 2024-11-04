"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getMonthlyTransactions(): Promise<{
  monthlyTotals?: { month: string; totalAmount: number }[];
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) return { error: "User not found" };

  try {
    const monthlyTotals = await db.transaction.findMany({
      where: { userId },
      select: {
        createdAt: true,
        amount: true
      }
    });

    // Group and sum amounts by month
    const totalsByMonth = monthlyTotals.reduce(
      (acc: Record<string, number>, item) => {
        const month = item.createdAt.toISOString().slice(0, 7); // Format to "YYYY-MM"

        if (!acc[month]) acc[month] = 0;

        acc[month] += item.amount; // Sum amounts for the month
        return acc;
      },
      {}
    );

    // Convert the grouped object into an array format
    const formattedTotals = Object.keys(totalsByMonth).map((month) => ({
      month,
      totalAmount: totalsByMonth[month]
    }));

    return { monthlyTotals: formattedTotals };
  } catch (error) {
    return { error: "There is an error retrieving the monthly transactions" };
  }
}
