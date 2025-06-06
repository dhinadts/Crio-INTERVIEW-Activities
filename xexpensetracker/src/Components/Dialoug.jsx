import React, { useState, useEffect } from "react";
import "./Dialog.css";

const Dialog = ({ showDialog = false, setShowDialog }) => {
  const [incomeAmount, setIncome] = useState(0);
  useEffect(() => {
     const savedIncome = localStorage.getItem("income");
    if (savedIncome) {
      setIncome(JSON.parse(savedIncome));
    }
  }, []);

 

  const handleAddBalance = (e) => {
  e.preventDefault();
    console.log("Adding income:", incomeAmount);

    localStorage.setItem("income", JSON.stringify(Number(incomeAmount)));
    setShowDialog(false);
    window.location.reload(); // optional: refresh to update UI
  };

  if (!showDialog) return null;

  return (
    <div className="dialog-backdrop" onClick={() => setShowDialog(false)}>
      <div
        className="dialog-box"
        onClick={(e) => e.stopPropagation()}
      >
        <form type='submit' onSubmit={handleAddBalance}>
                <label for="title" className="dialog-title">Add Balance</label>

          <div className="dialog-buttons">
            <input
              type="number"
              placeholder="Income Amount"
              value={incomeAmount}
              onChange={(e) => setIncome(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => {
                console.log(incomeAmount);
              }}
              className="dialog-btn"
            >
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
