const ResultsTable = (props) => {
  console.log(props.yearlyData);
  const data = props.yearlyData;
  return (
    /* Todo: Show below table conditionally (only once result data is available) */
    /* Show fallback text if no data is available */
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ydata) => {
          const total =
            ydata.savingsEndOfYear -
            props.initialInvestment -
            ydata.yearlyContribution * ydata.year;
          return (
            <tr key={ydata.year}>
              <td>{ydata.year}</td>
              <td>{ydata.savingsEndOfYear.toFixed(2)}</td>
              <td>{ydata.yearlyInterest.toFixed(2)}</td>
              <td>{total.toFixed(2)}</td>
              <td>
                {props.initialInvestment +
                  ydata.yearlyContribution * ydata.year}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
