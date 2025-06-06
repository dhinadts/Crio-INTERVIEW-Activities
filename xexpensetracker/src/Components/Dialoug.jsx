import React, { useState, useEffect } from "react";
import "./Dialog.css";

const Dialog = ({ showDialog = false, setShowDialog, onIncomeAdded }) => {
  const [incomeAmount, setIncome] = useState(0);
  const [prev, getPrev] = useState(0);

  useEffect(() => {
    const savedIncome = localStorage.getItem("balance");
    if (savedIncome) {
      getPrev(JSON.parse(savedIncome));
    }
  }, []);

  const handleAddBalance = (e) => {
    e.preventDefault();
    const newIncome = Number(incomeAmount) + Number(prev);
    localStorage.setItem("balance", JSON.stringify(newIncome));
    // if (!incomeAmount) return;
    // onIncomeAdded(Number(incomeAmount));
    setShowDialog(false);
    // window.location.reload();
  };

  if (!showDialog) return null;

  return (
    <div className="dialog-backdrop" onClick={() => setShowDialog(false)}>
      <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleAddBalance}>
          <label htmlFor="title" className="dialog-title">
            Add Balance
          </label>

          <div className="dialog-buttons">
            <input
              type="number"
              placeholder="Income Amount"
              // value={incomeAmount}
              name="amount"
              onChange={(e) => setIncome(e.target.value)}
              required
            />
            <button type="submit" className="dialog-btn">
              Add Balance
            </button>
            <button
              type="button"
              className="dialog-btn"
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

export default Dialog;
