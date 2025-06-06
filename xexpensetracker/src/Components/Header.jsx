import React, { useEffect } from "react";
import "./Heading.css";
import CardSection from "./CardSection";
import Transactions from './Transactions';

const Heading = ({ title = "Expense Tracker" }) => {
  // useEffect(()=>{
  // //   if(!Number(localStorage.getItem('balance'))){
  // //  localStorage.setItem("balance", 5000);}
  // // //  localStorage.setItem("expenses", JSON.stringify([]));


  // });
  return (
    <div>
    
    <div className="header">
     {title === "Expense Tracker" ? <h1
        style={{
          margin: 10, textAlign: "start"
        }}
      >
        {title}
      </h1> : <h2>Testing</h2>}
      <CardSection />
      <Transactions />
    </div></div>
  );
};

export default Heading;
