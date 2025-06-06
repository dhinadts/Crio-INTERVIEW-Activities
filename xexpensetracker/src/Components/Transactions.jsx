import React, { useEffect, useState } from "react";
import "./Transactions.css";
import data from "./Data";

import { MdEmojiFoodBeverage, MdDelete, MdEdit } from "react-icons/md";

const Transactions = () => {
  const [items, setExpensesList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) {
      setExpensesList(JSON.parse(saved));
    }
    // console.log(items);
  }, []);

  return (
    <div className="TransactionSection">
      <div className="card-wrapper">
        <h2 className="section-heading">Recent Transactions</h2>
        <div className="trans-card-container">
          {items.length > 0 ? (
            items.map((e) => (
              <div>
                <div className="list-tile" key={e.title}>
                  <div className="left-section">
                    <MdEmojiFoodBeverage size={24} color={e.color} />
                    <div className="text-column">
                      <span name="title" style={{ fontWeight: "500" }}>
                        {e.title}
                      </span>
                      <span name="category" style={{ fontWeight: "200" }}>
                        {e.category} {e.date}
                      </span>
                    </div>
                  </div>

                  <div className="right-section">
                    <span className="amount" name="amount">
                      ₹{e.amount}
                    </span>
                    <MdDelete
                      size={24}
                      color={e.color}
                      onClick={() => {
                        const updatedExpenses = items.filter(
                          (exp) => exp.title !== e.title
                        );
                        setExpensesList(updatedExpenses);
                        localStorage.setItem(
                          "expenses",
                          JSON.stringify(updatedExpenses)
                        );
                        window.location.reload();
                      }}
                    />
                    <MdEdit size={24} color={e.color} />
                  </div>
                </div>
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "grey",
                  }}
                ></div>
              </div>
            ))
          ) : (
            <div className="content">No transactions!</div>
          )}
        </div>
      </div>

      <div className="card-wrapper">
        <h2 className="section-heading">Top Expenses</h2>
        <div className="trans-card-container-second topExpenses">
          <div className="codeIndication">
            <p>{data[0].name}</p>
            <div style={{ backgroundColor: data[0].color }}></div>
          </div>
          <div className="codeIndication">
            <p>{data[1].name}</p>
            <div style={{ backgroundColor: data[1].color }}></div>
          </div>
          <div className="codeIndication">
            <p>{data[2].name}</p>
            <div style={{ backgroundColor: data[2].color }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
