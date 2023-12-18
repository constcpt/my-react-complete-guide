export default function UserInput({ inputData, onInvestDataChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={inputData.initialInvestment}
            onChange={(event) =>
              onInvestDataChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={inputData.annualInvestment}
            onChange={(event) =>
              onInvestDataChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            required
            value={inputData.expectedReturn}
            onChange={(event) =>
              onInvestDataChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration (Years)</label>
          <input
            type="number"
            required
            value={inputData.duration}
            onChange={(event) =>
              onInvestDataChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
