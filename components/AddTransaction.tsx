"use client";

import { useRef } from "react";
import { addTransaction } from "@/app/actions";
import { toast } from "react-toastify";

export default function AddExpense() {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);
    if (error) return toast.error(error);

    toast.success(`Transaction added: ${data?.text} - ${data?.amount} euro`);
    formRef.current?.reset();
  };

  return (
    <>
      <h3>Add transcaction</h3>
      <form action={clientAction} ref={formRef}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
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
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <button className="purple-btn mt-4">Add expense</button>
      </form>
    </>
  );
}
