import React, { useEffect, useState } from "react";
import "./Transactions.css";
import data from "./Data";

import { MdEmojiFoodBeverage, MdDelete, MdEdit } from "react-icons/md";

const Transactions = () => {
  const [items, setExpensesList] = useState([]);

  /* const items = [
     {
      title: "Samosa",
      subtitle: "March 20, 2024",
      iconLeading: MdEmojiFoodBeverage,
    },
    {
      title: "Movie",
      subtitle: "March 20, 2024",
      iconLeading: MdEmojiFoodBeverage,
    },
    {
      title: "Auto",
      subtitle: "March 20, 2024",
      iconLeading: MdEmojiFoodBeverage,
    }, 
  ]; */
useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) {
      setExpensesList(JSON.parse(saved));
    }
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
                      <span style={{ fontWeight: "500" }}>{e.title}</span>
                      <span style={{ fontWeight: "200" }}>{e.subtitle}</span>
                    </div>
                  </div>

                  <div className="right-section">
                    <span className="price">₹120</span>
                    <MdDelete size={24} color={e.color} />
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
