import React, { useState, useEffect } from "react";
import "./CardSection.css";
import PieCHART from "./PieChart";
import Dialog from "./Dialoug";
import ExpenseDialog from "./ExpenseDialog";

const CardSection = () => {
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [showDialog1, setShowDialog1] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    // Get saved income
    const savedIncome = localStorage.getItem("income");
    if (savedIncome) {
      setBalance(Number(savedIncome));
    }

    // Get saved expenses
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      const expensesArray = JSON.parse(savedExpenses);
      setExpensesList(expensesArray);

      const totalExpense = expensesArray.reduce(
        (sum, expense) => sum + Number(expense.amount),
        0
      );
      setExpense(totalExpense);
    }
  }, []);

  return (
    <div className="CardSection">
      <div className="card-container">
        <div className="card-details">
          <h3>
            Wallet Balance:{" "}
            <span style={{ color: "green", fontSize: 25 }}>
              ₹{balance.toFixed(2)}
            </span>
          </h3>
          <button
            onClick={() => setShowDialog1(true)}
            className="buttonClass"
            type="button"
            style={{
              background: "linear-gradient(to right, #11cb65, #98fc25)",
            }}
          >
            + Add Income
          </button>
        </div>
      </div>

      {showDialog1 && (
        <Dialog
          key={"1"}
          showDialog={showDialog1}
          setShowDialog={setShowDialog1}
          onIncomeAdded={(amount) => {
      const newBalance = balance + Number(amount);
      localStorage.setItem("income", newBalance);
      setBalance(newBalance);
    }}
        />
      )}

      <div className="card-container">
        <div className="card-details">
          <h3>
            Expenses:{" "}
            <span style={{ color: "orange", fontSize: 25 }}>
              ₹{expense.toFixed(2)}
            </span>
          </h3>
          <button
            onClick={() => setShowDialog2(true)}
            className="buttonClass"
            type="button"
            style={{
              background:
                "linear-gradient(to right, rgb(240, 51, 98), rgb(243, 22, 22))",
            }}
          >
            + Add Expenses
          </button>
        </div>
      </div>

      {showDialog2 && (
        <ExpenseDialog
          key={"2"}
          showDialog={showDialog2}
          setShowDialog={setShowDialog2}
        />
      )}

      <div className="chart-card-container">
        <div className="chart-Area">
          <PieCHART />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
