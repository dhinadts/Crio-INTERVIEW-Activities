import React, { useState, useEffect } from "react";
import "./ExpenseDialog.css";

const ExpenseDialog = ({ showDialog = false, setShowDialog }) => {
  const [title, setTitle] = useState("");
  const [amount, setamount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) {
      setExpensesList(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = { title, amount: parseFloat(amount), category, date };

    const updatedExpenses = [...expensesList, newExpense];
    setExpensesList(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    setShowDialog(false);
    window.location.reload();


  };

  if (!showDialog) return null;

  return (
    <div className="dialog-backdrop" onClick={() => setShowDialog(false)}>
      <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
        <h2 className="dialog-header">Add Expense</h2>
        <form className="dialog-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="title"
                name='title'
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                id="amount"
                name='price'
                placeholder="$0"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <select
                id="category"
                name="categaory"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="dialog-buttons">
            <button type="submit" className="dialog-btn submit-btn">
              Add Expense
            </button>
            <button
              type="button"
              className="dialog-btn cancel-btn"
              onClick={() => setShowDialog(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseDialog;
