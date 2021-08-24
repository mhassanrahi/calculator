import React, { useState } from "react";

import "./App.css";
import { Button } from "./components/Button"

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
    if (calculation) {
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
        <Button onClick={() => updateCalculation(i.toString())} key={i.toString()} value={i} />
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

          <Button className="operator" onClick={() => updateCalculation("+")} value="+" />
          <Button className="operator" onClick={() => updateCalculation("-")} value="-" />
          <Button className="operator" onClick={() => updateCalculation("/")} value="/" />
          <Button className="operator" onClick={() => updateCalculation("*")} value="*" />

          <Button className="operator" onClick={clearEntry} value="CE" />
          <Button className="operator" onClick={clearAll} value="C" />


          {renderDigits()}
          <Button onClick={() => updateCalculation("0")} value="0" />
          <Button onClick={() => updateCalculation(".")} value="." />

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
