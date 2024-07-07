"use server";

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

  const transactionData: TranscactionData = { text, amount };

  return { data: transactionData };
}
