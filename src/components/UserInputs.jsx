export default function UserInputs ({handleValues, userInputs}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment:</label>
          <input type="number" name="initialInvestment" id="initialInvestment" value={userInputs.initialInvestment} onChange={(e) => handleValues('initialInvestment', e.target.value)}  required />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment:</label>
          <input type="number" name="annualInvestment" id="annualInvestment" value={userInputs.annualInvestment} onChange={(e) => handleValues('annualInvestment', e.target.value)} required />
        </p>
        <p>
          <label htmlFor="expectedReturn">Expected Return:</label>
          <input type="number" name="expectedReturn" id="expectedReturn" value={userInputs.expectedReturn} onChange={(e) => handleValues('expectedReturn', e.target.value)} required />
        </p>
        <p>
          <label htmlFor="duration">Duration:</label>
          <input type="number" name="duration" id="duration" value={userInputs.duration} onChange={(e) => handleValues('duration', e.target.value)} required/>
        </p>
      </div>
    </section>
  );
}