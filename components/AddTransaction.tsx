"use client";

import { useRef } from "react";
import { addTransaction } from "@/app/actions";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "./ui/button";

export default function AddTransaction() {
  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);
    if (error) return toast({ variant: "destructive", description: error });

    toast({
      variant: "success",
      description: `Transaction added: ${data?.text} ${data?.amount} euro.`
    });

    formRef.current?.reset();
  };

  return (
    <form action={clientAction} ref={formRef} className="text-left">
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" id="text" name="text" placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount (negative - expense, positive - income)
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter amount..."
        />
      </div>
      <Button className="mt-4 w-full">Add</Button>
    </form>
  );
}
