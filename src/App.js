import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalculation = (value) => {
    if (
      (ops.includes(value) && calculation === "") ||
      (ops.includes(value) && ops.includes(calculation.slice(-1)))
    ) {
      return;
    }
    setCalculation(calculation + value);

    if (!ops.includes(value)) {
      setResult(eval(calculation + value).toString());
    }
  };

  const calculate = () => setCalculation(eval(calculation).toString());
  const clearEntry = () => {
    if (calculation !== "") {
      const value = calculation.slice(0, -1);
      setCalculation(value);
    }
  };
  const clearAll = () => {
    setCalculation("");
    setResult("");
  };
  const renderDigits = () => {
    const digitButtons = [];
    for (let i = 1; i < 10; i++) {
      digitButtons.push(
        <button
          onClick={() => updateCalculation(i.toString())}
          key={i.toString()}
        >
          {i}
        </button>
      );
    }

    return digitButtons;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>{result ? `(${result})` : ""}</span>
          {calculation || 0}
        </div>

        <div className="keypad">
          <button className="operator" onClick={() => updateCalculation("+")}>
            +
          </button>
          <button className="operator" onClick={() => updateCalculation("-")}>
            -
          </button>
          <button className="operator" onClick={() => updateCalculation("/")}>
            /
          </button>
          <button className="operator" onClick={() => updateCalculation("*")}>
            *
          </button>
          <button className="operator" onClick={clearEntry}>
            CE
          </button>
          <button className="operator" onClick={clearAll}>
            C
          </button>
          {renderDigits()}
          <button onClick={() => updateCalculation("0")}>0</button>
          <button onClick={() => updateCalculation(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
