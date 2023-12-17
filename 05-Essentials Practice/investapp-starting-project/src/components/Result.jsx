import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ inputData }) {
  console.log(inputData);
  const investmentResults = calculateInvestmentResults(inputData);

  const tableRows = investmentResults.map((yearData) => {
    return (
      <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEndOfYear)}</td>
        <td>{formatter.format(yearData.interest)}</td>
        <td>{formatter.format(yearData.totalInterest)}</td>
        <td>{formatter.format(yearData.investedCapital)}</td>
      </tr>
    );
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
