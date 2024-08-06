"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface TranscactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TranscactionData;
  error?: string;
}

export async function addTransaction(
  formData: FormData
): Promise<TransactionResult> {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  // check for input values
  if (!textValue || textValue === "" || !amountValue)
    return { error: "Text or amount is missing" };

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());

  // Get logged in user
  const { userId } = auth();
  if (!userId) return { error: "User not found" };

  try {
    const transactionData: TranscactionData = await db.transaction.create({
      data: {
        text,
        amount,
        userId
      }
    });

    revalidatePath("/");
    return { data: transactionData };
  } catch (error) {
    return { error: "Transaction not added" };
  }
}
