import { useState } from "react";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [calculatedData, setCalculatedData] = useState(null);
  const [initialInvestment, setInitialInvestment] = useState(null);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    // do something with yearlyData ...
    setCalculatedData(yearlyData);
    setInitialInvestment(+userInput["currentSavings"]);
  };
  const handleReset = () => {
    setCalculatedData(null);
    setInitialInvestment(null);
  };

  return (
    <div>
      <Header />
      <UserInput onSubmit={calculateHandler} handleReset={handleReset} />
      {!calculatedData && (
        <p style={{ textAlign: "center" }}>No Investment calculated yet.</p>
      )}
      {calculatedData && (
        <ResultsTable
          yearlyData={calculatedData}
          initialInvestment={initialInvestment}
        />
      )}
    </div>
  );
}

export default App;
