import { useState } from "react";

import Result from "./components/Result";
import UserInput from "./components/UserInput";

const DEFAULT_INPUT_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [inputData, setInputData] = useState(DEFAULT_INPUT_DATA);

  const inputIsValid = Object.values(inputData).every((value) => value > 0); // Objext.values() returns an array of values from the object, and Array method .every() checks if every value in the array passes the test function, if so, returns true, otherwise false

  function handleInvestDataChange(inputType, inputValue) {
    setInputData((prevInvestData) => {
      return { ...prevInvestData, [inputType]: +inputValue }; // + converts string to number
    });
  }

  return (
    <>
      <UserInput
        inputData={inputData}
        onInvestDataChange={handleInvestDataChange}
      />
      {inputIsValid ? (
        <Result inputData={inputData} />
      ) : (
        <p className="center">Please enter a number greater than zero.</p>
      )}
    </>
  );
}

export default App;
