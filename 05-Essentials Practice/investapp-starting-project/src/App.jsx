import { useState } from "react";

import Input from "./components/Input";
import Result from "./components/Result";

const DEFAULT_INPUT_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [inputData, setInputData] = useState(DEFAULT_INPUT_DATA);

  const inputIsValid = inputData.duration >= 1;

  function handleInvestDataChange(inputType, inputValue) {
    setInputData((prevInvestData) => {
      return { ...prevInvestData, [inputType]: +inputValue };
    });
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <Input
            labelName="Initial Investment"
            inputType="initialInvestment"
            value={inputData.initialInvestment}
            onInvestDataChange={handleInvestDataChange}
          />
          <Input
            labelName="Annual Investment"
            inputType="annualInvestment"
            value={inputData.annualInvestment}
            onInvestDataChange={handleInvestDataChange}
          />
        </div>
        <div className="input-group">
          <Input
            labelName="Expected Return (%)"
            inputType="expectedReturn"
            value={inputData.expectedReturn}
            onInvestDataChange={handleInvestDataChange}
          />
          <Input
            labelName="Duration (Years)"
            inputType="duration"
            value={inputData.duration}
            onInvestDataChange={handleInvestDataChange}
          />
        </div>
      </section>
      {inputIsValid ? (
        <Result inputData={inputData}></Result>
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
