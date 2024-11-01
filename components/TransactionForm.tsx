"use client";

import { useRef } from "react";
import { addTransaction, deleteTransaction } from "@/app/actions";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "./ui/button";
import { Transaction } from "@/app/types";

type TransactionFormProps = { transaction?: Transaction };

export default function TransactionForm({ transaction }: TransactionFormProps) {
  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    if (transaction) {
      const confirmed = window.confirm(
        `Are you sure you want to delete the ${transaction?.text} transaction?`
      );
      if (!confirmed) return;

      const { message, error } = await deleteTransaction(transaction.id);

      toast({
        variant: error ? "destructive" : "success",
        description: error ?? message
      });
    } else {
      const { data, error } = await addTransaction(formData);
      if (error) return toast({ variant: "destructive", description: error });

      toast({
        variant: "success",
        description: `Transaction added: ${data?.text} ${data?.amount} euro.`
      });

      formRef.current?.reset();
    }
  };

  return (
    <form action={clientAction} ref={formRef} className="text-left">
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input
          defaultValue={transaction?.text ?? ""}
          type="text"
          id="text"
          name="text"
          placeholder="Enter text..."
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount (negative - expense, positive - income)
        </label>
        <input
          defaultValue={transaction?.amount || ""}
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter amount..."
          step="0.01"
        />
      </div>
      <Button className="mt-4 w-full">{transaction ? "Delete" : "Add"}</Button>
    </form>
  );
}
