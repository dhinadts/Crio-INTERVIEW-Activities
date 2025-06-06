import React, { useState } from "react";
import "./CardSection.css";
import PieCHART from "./PieChart";
import Dialog from "./Dialoug";
import ExpenseDialog from "./ExpenseDialog";

const CardSection = () => {
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [isLoading, setLoader] = useState(true);
  const [x, setX] = useState("");
  const [showDialog1, setShowDialog1] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

  const addIncome = (amount) => {
    setBalance((prev) => prev + amount);
    setShowDialog1(false);
  };

  return (
    <div className="CardSection">
      <div className="card-container">
        <div className="card-details">
          <h3>
            Wallet balance:{" "}
            <span style={{ color: "green", fontSize: "25" }}>${balance.toFixed(2)}</span>
          </h3>
          <button
            onClick={() => setShowDialog1(true)}
            className="buttonClass"
            type="button"
            style={{
              background: "linear-gradient(to right, #11cb65, #98fc25)",
            }}
          >
            + Add Income"
          </button>
        </div>
      </div>
      {showDialog1 && (
        <Dialog
          key={"1"}
          showDialog={showDialog1}
          setShowDialog={setShowDialog1}
        />
      )}

      <div className="card-container">
        <div className="card-details">
          <h3>
            Expenses:{" "}
            <span style={{ color: "orange", fontSize: "25" }}>${expense.toFixed(2)}</span>
          </h3>
          <button
            onClick={() => setShowDialog2(true)}
            className="buttonClass"
            type="button"
            
            style={{
              background:
                "linear-gradient(to right,rgb(240, 51, 98),rgb(243, 22, 22))",
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

      <div className="chart-card-container" style={{ width: "50" }}>
        <div className="chart-Area">
          <PieCHART />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
