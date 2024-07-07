"use client";

export default function AddExpense() {
  const clientAction = async (formData: FormData) => {
    console.log(formData.get("text"), formData.get("amount"));
  };

  return (
    <>
      <h3>Add transcaction</h3>
      <form action={clientAction}>
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
