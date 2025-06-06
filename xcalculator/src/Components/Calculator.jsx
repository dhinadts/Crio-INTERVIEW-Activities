import React, { useState, useEffect } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (val) => {
    if (val === "C") {
      setInput("");
      setResult("");
    } 
    // else if(val === "=" ) {}
    else if (val === "=") {
      handleCalculation();
    } else {
      setInput((prev) => prev + val);
    }
  };

  const handleCalculation = () => {
    try {
      if (input.trim() === "=" || input.trim() === '') {
        setResult("Error");
      } else {
        const res = evaluate(input);
        setResult(res);
      }
    } catch (error) {
      // console.log("input", input);
      // console.log("result", result);
      setResult("Error");
    }
  };

  return (
    <>
      <div>
        {/* Heading */}
        <h1>React Calculator</h1>
        {/* Input box */}
        <input type="text" value={input}></input>
        <div>{result}</div>
        <div class="calculator-view">
          <div class="buttons">
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("/")}>/</button>

            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("*")}>*</button>

            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("-")}>-</button>

            <button onClick={() => handleClick("0")}>0</button>
            <button onClick={() => handleClick("C")}>C</button>
            <button onClick={() => handleClick("=")}>=</button>
            <button onClick={() => handleClick("+")}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
