import { useState } from "react";

const UserInput = (props) => {
  const [formData, setFormData] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    duration: "",
  });
  const [dataAvailable, setDataAvailable] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (dataAvailable) {
      props.onSubmit(formData);
    }
  };
  const resetHandler = (e) => {
    e.preventDefault();
    setFormData({
      currentSavings: "",
      yearlyContribution: "",
      expectedReturn: "",
      duration: "",
    });
    props.handleReset();
    setDataAvailable(false);
  };
  const inputChangeHandler = (value, identifier) => {
    if (identifier === "current-savings") {
      setFormData({
        ...formData,
        currentSavings: Number(value),
      });
      setDataAvailable(true);
    }
    if (identifier === "yearly-contribution") {
      setFormData({
        ...formData,
        yearlyContribution: Number(value),
      });
      setDataAvailable(true);
    }
    if (identifier === "expected-return") {
      setFormData({
        ...formData,
        expectedReturn: Number(value),
      });
      setDataAvailable(true);
    }
    if (identifier === "duration") {
      setFormData({
        ...formData,
        duration: Number(value),
      });
      setDataAvailable(true);
    }
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) =>
              inputChangeHandler(e.target.value, "current-savings")
            }
            value={formData.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) =>
              inputChangeHandler(e.target.value, "yearly-contribution")
            }
            value={formData.yearlyContribution}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) =>
              inputChangeHandler(e.target.value, "expected-return")
            }
            value={formData.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => inputChangeHandler(e.target.value, "duration")}
            value={formData.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default UserInput;
