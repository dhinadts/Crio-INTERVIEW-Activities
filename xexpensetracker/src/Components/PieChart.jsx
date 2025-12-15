// import React, { useState,  useEffect } from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import data from "./Data";

const CustomLegend = ({ payload }) => {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        display: "flex", // ⬅️ Row layout
        justifyContent: "center", // ⬅️ Centered at the bottom
        marginTop: 10,
        flexWrap: "wrap", // ⬅️ Wrap if needed for small screens
      }}
    >
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0 12px",
          }}
        >
          <div
            style={{
              width: 50,
              height: 14,
              backgroundColor: entry.color,
              marginRight: 6,
            }}
          />
          <span style={{ fontSize: 14, color: entry.color }}>
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  );
};
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function RectLegendPieChart() {
  // const [data, getData] = useState('');
 /*  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulated data; replace with your actual data
      const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      const expensesArray = JSON.parse(savedExpenses);
      setData(expensesArray);
    }
 }, []); */

  return (  
    <ResponsiveContainer width="100%" height={300}>
     <PieChart>
        <Pie
          data={data}
          cx={"50%"}
          cy={"50%"}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie> 
        <Legend layout="horizontal" content={<CustomLegend />} />
      </PieChart>
    </ResponsiveContainer> 
  );
}
